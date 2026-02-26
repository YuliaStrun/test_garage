import React, { useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useTranslations } from 'next-intl'

import { AGE_RESTRICTION_COOKIE_KEY, useAgeRestriction } from 'components/AgeRestriction/AgeRestrictionContext'
import styles from 'styles/components/Player.module.scss'
import analytics from 'utils/analytics'
import stringWithZero from 'utils/stringWithZero'

import { PlayerButton } from './PlayerButton'
import { usePlayer } from './PlayerContext'
import PlayerProgress from './PlayerProgress'
import { PlayerTrackInfo } from './PlayerTrackInfo'
import { PlayerTrackList } from './PlayerTrackList'

const SHOW_HIDE_DURATION_MS = 800

const Player = () => {
  const sectionRef = useRef<HTMLTableSectionElement>(null)
  const playlistRef = useRef<HTMLDivElement>()
  const baseT = useTranslations('base')
  const t = useTranslations('components.Player')
  const { queue, current, audioRef, clear, setCurrent, setPlaying, isPlaying, eventListened30Seconds } = usePlayer()
  const ageRestriction = useAgeRestriction()

  const [showPlaylist, setShowPlaylist] = useState(false)

  const currentTrack = queue.find((item) => item.slug === current)

  const disableNext = !queue[queue.findIndex((item) => item.slug === current) + 1]
  const disablePrev = !queue[queue.findIndex((item) => item.slug === current) - 1]

  const handleMenuClick = () => {
    playlistRef.current?.classList.add(styles.hide)
    setTimeout(
      () => {
        setShowPlaylist((prev) => !prev)
      },
      showPlaylist ? SHOW_HIDE_DURATION_MS : 0
    )
    analytics.sendEvent(
      'audio-player',
      showPlaylist ? 'playerlist-close' : 'playerlist-open',
      String(currentTrack?.title)
    )
  }

  const handleCloseClick = () => {
    sectionRef.current?.classList.add(styles.hide)
    playlistRef.current?.classList.add(styles.hide)
    setTimeout(() => {
      setShowPlaylist(false)
    }, SHOW_HIDE_DURATION_MS)
    setTimeout(() => {
      clear()
    }, SHOW_HIDE_DURATION_MS)
    analytics.sendEvent('audio-player', 'player-closed', String(currentTrack?.title))
  }

  const seasonName =
    currentTrack && 'season' in currentTrack
      ? `${baseT('season')} ${stringWithZero(String(currentTrack.seasonNumberTitle))}. ${currentTrack.season}`
      : null

  const handleNextClick = () => {
    const nextTrack = queue.findIndex((item) => item.slug === current) + 1
    const play = () => setCurrent(queue[nextTrack] || queue[0], 'audio-player')

    if (!getCookie(AGE_RESTRICTION_COOKIE_KEY) && queue[nextTrack]?.forAdults) {
      ageRestriction.open(play)
    } else {
      play()
    }
  }

  const handlePrevClick = () => {
    const prevTrack = queue.findIndex((item) => item.slug === current) - 1
    const play = () => setCurrent(queue[prevTrack] || queue[0], 'audio-player')

    if (!getCookie(AGE_RESTRICTION_COOKIE_KEY) && queue[prevTrack]?.forAdults) {
      ageRestriction.open(play)
    } else {
      play()
    }
  }

  const handlePlayClick = () => {
    const play = () => {
      audioRef.current?.play()
    }

    if (audioRef.current?.paused) {
      if (!getCookie(AGE_RESTRICTION_COOKIE_KEY) && currentTrack?.forAdults) {
        ageRestriction.open(play)
      } else {
        play()
      }
    } else {
      audioRef.current?.pause()
    }
  }

  const handleAudioEnded = () => {
    handleNextClick()

    analytics.sendEvent('audio-player', 'audio-player-listened', String(currentTrack?.title))
  }

  const handlePlay = () => {
    setPlaying(true)

    if ('mediaSession' in navigator && currentTrack) {
      const url = currentTrack.playerCover?.url! || currentTrack.preview?.url!

      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack?.title!,
        artist: currentTrack?.author.name!,
        album: seasonName || baseT('specials'),
        artwork: [{ src: url, sizes: '512x512', type: 'image/png' }]
      })
      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current?.play()
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current?.pause()
      })
      navigator.mediaSession.setActionHandler('seekbackward', (event) => {
        const skipTime = event.seekOffset || 10
        if (audioRef.current) {
          audioRef.current.currentTime = Math.max(audioRef.current.currentTime - skipTime, 0)
        }
      })
      navigator.mediaSession.setActionHandler('seekforward', (event) => {
        const skipTime = event.seekOffset || 10
        if (audioRef.current) {
          audioRef.current.currentTime = Math.min(audioRef.current.currentTime + skipTime, audioRef.current.duration)
        }
      })
      navigator.mediaSession.setActionHandler('seekto', (event) => {
        if (audioRef.current) {
          if (event.fastSeek && 'fastSeek' in audioRef.current) {
            audioRef.current.fastSeek(Number(event.seekTime))
          } else if ('currentTime' in audioRef.current) {
            audioRef.current.currentTime = Number(event.seekTime)
          }
        }
      })
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        handlePrevClick()
      })
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        handleNextClick()
      })
    }
  }

  const handlePause = () => {
    setPlaying(false)
  }

  const handleTimeUpdate = eventListened30Seconds

  const setPlaylistOffset = (playlistNode: HTMLDivElement | null | undefined) => {
    if (playlistNode) {
      const { height } = playlistNode.getBoundingClientRect()
      playlistNode.style.setProperty('--hide-offset', `-${height}px`)
      playlistRef.current = playlistNode
    }
  }

  useEffect(() => {
    if (currentTrack) {
      audioRef.current?.play()
    }
  }, [audioRef, currentTrack, setPlaying])

  if (!currentTrack) return null

  return (
    <section
      className={styles.panel}
      ref={sectionRef}
      // @ts-ignore
      style={{ '--duration': `${SHOW_HIDE_DURATION_MS}ms` }}
      aria-label={t('header')}>
      <h2 className="sr-only">{t('header')}</h2>

      {showPlaylist && queue && queue.length > 1 && (
        <div className={styles.playlist} ref={setPlaylistOffset}>
          <PlayerTrackList
            queue={queue}
            seasonName={seasonName}
            seasonSlug={'seasonSlug' in currentTrack ? currentTrack.seasonSlug : null}
          />
        </div>
      )}

      <audio
        src={currentTrack.audioFile || undefined}
        onEnded={handleAudioEnded}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        ref={audioRef}
      />

      <div className={classNames(styles.bar, { [styles.hidden]: showPlaylist })}>
        <div className={styles['controls-wrapper']}>
          <ul className={styles.controls} aria-label={t('controls')}>
            <li>
              <PlayerButton actionType="prev" disabled={disablePrev} aria-label={t('prev')} onClick={handlePrevClick} />
            </li>
            <li>
              <PlayerButton
                actionType={isPlaying ? 'pause' : 'play'}
                aria-label={isPlaying ? t('pause') : t('play')}
                onClick={handlePlayClick}
              />
            </li>
            <li>
              <PlayerButton actionType="next" disabled={disableNext} aria-label={t('next')} onClick={handleNextClick} />
            </li>
            <li>
              <PlayerButton
                actionType={showPlaylist ? 'collapse' : 'menu'}
                aria-label={showPlaylist ? t('menuClose') : t('menu')}
                active={showPlaylist}
                onClick={handleMenuClick}
                disabled={queue && queue.length < 2}
              />
            </li>
          </ul>
        </div>

        <div className={styles.info}>
          <PlayerTrackInfo track={currentTrack} />
        </div>

        <div className={styles.close}>
          <PlayerButton actionType="close" aria-label={t('close')} onClick={handleCloseClick} />
        </div>
        <PlayerProgress duration={currentTrack.duration} />
      </div>
    </section>
  )
}

export default Player
