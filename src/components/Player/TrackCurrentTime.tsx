import { useEffect, useState } from 'react'

import { getTime } from 'utils/getTime'

import { usePlayer } from './PlayerContext'

const TrackCurrentTime = () => {
  const { audioRef } = usePlayer()
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const audioElement = audioRef.current

    if (audioElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime * 1000)
      }

      audioElement.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [audioRef])

  return (
    <span className="desktop-only">
      {getTime(currentTime)}
      {'  /  '}
    </span>
  )
}

export default TrackCurrentTime
