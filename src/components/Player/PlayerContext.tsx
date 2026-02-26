import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'

import isEqual from 'lodash/isEqual'

import { EventCategory, Track } from 'types'
import analytics from 'utils/analytics'

type PlayerContextType = {
  queue: Track[]
  current: string | null
  audioRef: React.RefObject<HTMLAudioElement>
  setCurrent: (currentTrack: Track | undefined, eventCategory: EventCategory) => void
  setNextQueue: (nextQueue: Track[]) => void
  clear: () => void
  isPlaying: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  eventListened30Seconds: () => void
}

export const PlayerContext = React.createContext<PlayerContextType | undefined>(undefined)

type PlayerContextWrapperProps = {
  children: React.ReactNode
}

export function PlayerContextWrapper({ children }: PlayerContextWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const listened30SecondsRef = useRef<Boolean>(false)
  const [queue, setQueue] = useState<Track[]>([])
  const [currentTrack, setCurrentTrack] = useState<Track | undefined>()
  const [isPlaying, setPlaying] = useState<boolean>(false)

  const setNextQueue = useCallback(
    (nextQueue: typeof queue) => {
      if (!isEqual(queue, nextQueue)) {
        setQueue(nextQueue)
      }
    },
    [queue]
  )

  const clear = () => {
    setQueue([])
    setCurrentTrack(undefined)
  }

  const eventListened30Seconds = useCallback(() => {
    if (Number(audioRef.current?.currentTime) >= 30 && !listened30SecondsRef.current) {
      analytics.sendEvent('audio-player', 'audio-player-30-seconds-listened', String(currentTrack?.title))
      listened30SecondsRef.current = true
    }
  }, [currentTrack?.title])

  const value = useMemo(
    () => ({
      queue,
      current: currentTrack?.slug || null,
      audioRef,
      setCurrent: (currentTrack: Track | undefined, eventCategory: EventCategory) => {
        setCurrentTrack(currentTrack)
        analytics.sendEvent(eventCategory, 'audio-player-play-event', String(currentTrack?.title))
        listened30SecondsRef.current = false
      },
      setNextQueue,
      clear,
      setPlaying,
      isPlaying,
      eventListened30Seconds
    }),
    [queue, currentTrack?.slug, setNextQueue, isPlaying, eventListened30Seconds]
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerContextWrapper')
  }
  return context
}
