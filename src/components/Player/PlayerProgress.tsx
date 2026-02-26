import { HTMLProps, useCallback, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import ReactSlider from 'react-slider'

import styles from 'styles/components/PlayerProgress.module.scss'
import { getTime } from 'utils/getTime'

import { usePlayer } from './PlayerContext'

type PlayerProgressProps = {
  duration?: string | null
}

export default function PlayerProgress({ duration }: PlayerProgressProps) {
  const [currentPercent, setCurrentPercent] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const { audioRef, isPlaying } = usePlayer()
  const timeout = useRef<any>()

  useEffect(() => {
    clearTimeout(timeout.current)
    setIsShow(true)
    timeout.current = setTimeout(() => setIsShow(false), 2000)
  }, [isPlaying])

  useEffect(() => {
    const audioElement = audioRef.current

    if (audioElement) {
      const handleTimeUpdate = () => {
        setCurrentPercent((audioElement.currentTime / audioElement.duration) * 100)
        setCurrentTime(audioElement.currentTime * 1000)
      }

      audioElement.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [audioRef])

  const handleChange = useCallback(
    (value: number) => {
      const audioElement = audioRef.current
      if (audioElement) {
        audioElement.currentTime = (audioElement.duration * value) / 100
      }
    },
    [audioRef]
  )

  const handleAfterChange = useCallback(() => setIsScrolling(false), [])

  const handleBeforeChange = useCallback(() => setIsScrolling(true), [])

  const renderThumb = useCallback(
    (props: HTMLProps<HTMLDivElement>, state: { value: number }) => (
      <div
        {...props}
        data-is-scrolling={isScrolling}
        data-value={getTime(state.value * (audioRef.current?.duration || 0) * 10)}
      />
    ),
    [isScrolling, audioRef]
  )

  return (
    <div className={styles.root}>
      <div className={styles.plug} />
      <ReactSlider
        className={classNames(styles.slider, { [styles.show]: isShow })}
        trackClassName="slider-track"
        defaultValue={0}
        value={currentPercent}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
        onBeforeChange={handleBeforeChange}
        step={0.1}
        renderThumb={renderThumb}
        pearling
        thumbClassName={styles.thumb}
      />
      <div className={styles.duration}>
        <span>{getTime(currentTime)}</span>
        <span>{duration}</span>
      </div>
    </div>
  )
}
