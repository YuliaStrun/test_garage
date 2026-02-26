import React, { ForwardedRef, forwardRef } from 'react'

import classnames from 'classnames'
import { Maybe } from 'graphql/jsutils/Maybe'
import { useTranslations } from 'next-intl'

import { useAgeRestriction } from 'components/AgeRestriction/AgeRestrictionContext'
import { usePlayer } from 'components/Player/PlayerContext'
import styles from 'styles/components/ButtonCard.module.scss'
import { EventCategory, Track } from 'types'

type PlayButtonProps = {
  variant?: 'normal' | 'big' | 'icon-only'
  duration?: Maybe<string>
  text?: string
  withoutText?: boolean
  playerCurrent: Maybe<string>
  playersQueue: Track[] | undefined
  forAdults: Maybe<boolean>
  eventCategory: EventCategory
  className?: string
}

const PlayButton = (
  {
    duration,
    text,
    withoutText,
    playerCurrent,
    playersQueue = [],
    variant = 'normal',
    forAdults,
    eventCategory,
    className
  }: PlayButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const t = useTranslations('base')
  const { isPlaying: playerPlaying, current, audioRef, setCurrent, setNextQueue } = usePlayer()
  const ageRestriction = useAgeRestriction()
  const isCurrent = current === playerCurrent
  const isPlaying = playerPlaying && isCurrent
  const isPaused = !playerPlaying && isCurrent
  const isTextShow = variant !== 'icon-only' && !withoutText
  const track = playersQueue.find((item) => item.slug === playerCurrent)

  const onClick = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const playerAction = () => {
      if (!isPlaying && !isPaused) {
        setCurrent(track, eventCategory)
        setNextQueue(playersQueue)
      } else if (isPlaying) {
        audioRef.current?.pause()
      } else if (isPaused) {
        audioRef.current?.play()
      }
    }

    if (!ageRestriction.isConfirmed && forAdults) {
      ageRestriction.open(playerAction)
    } else {
      playerAction()
    }
  }

  const [h, m] = duration?.split(':') || []
  const hours = Number(h) > 0 ? t('hoursCount', { count: Number(h) }) : ''
  const minutes = Number(m) > 0 ? t('minutesCount', { count: Number(m) }) : ''
  const ariaLabel = h || m ? `${t('listen')}, ${hours} ${minutes}` : undefined

  return (
    <button
      className={classnames(styles.button, styles[variant], className, {
        [styles.dot]: isPlaying,
        [styles.pause]: isPaused
      })}
      onClick={onClick}
      ref={ref}
      aria-label={ariaLabel}>
      <i className={`icon-${!isPaused && isCurrent ? 'pause' : 'play'}-mini`} aria-hidden />
      {isTextShow && (
        <span className={classnames(styles.text, { [styles.bold]: variant === 'big' })}>{text || t('listen')}</span>
      )}
      {duration && isTextShow && (
        <span className={styles.duration}>
          {duration.split(':').map((el, index) => (
            <React.Fragment key={String(index)}>
              {index > 0 && <span className={styles.colon}>:</span>}
              {el}
            </React.Fragment>
          ))}
        </span>
      )}
    </button>
  )
}

export default forwardRef(PlayButton)
