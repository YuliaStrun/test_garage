import { useMemo } from 'react'

import classnames from 'classnames'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { AGE_RESTRICTION_COOKIE_KEY, useAgeRestriction } from 'components/AgeRestriction/AgeRestrictionContext'
import styles from 'styles/components/PlayerTrackList.module.scss'
import type { Track } from 'types'
import stringWithZero from 'utils/stringWithZero'

import { usePlayer } from './PlayerContext'
import TrackCurrentTime from './TrackCurrentTime'
import { TrackPreview } from './TrackPreview'

type PlayerTrackListProps = {
  queue: Track[]
  seasonName: string | null
  seasonSlug: string | null | undefined
}

export const PlayerTrackList = ({ queue, seasonName, seasonSlug }: PlayerTrackListProps) => {
  const t = useTranslations('base')
  const hasTracks = queue.length > 0

  return hasTracks ? (
    <div className={styles.panel}>
      <div className={styles.title}>
        <Link href={`/seasons/${seasonSlug}`}>
          <span>{seasonName}</span>
        </Link>
      </div>

      <div className={styles.caption}>
        <span>#</span>
        <span>{t('episode')}</span>
        <span></span>
        <span>{t('authors')}</span>
        <span>{t('duration')}</span>
      </div>

      <div className={styles.playlist}>
        <ul>
          {queue.map((item, index) => (
            <Track {...item} index={index} key={String(item.slug)} />
          ))}
        </ul>
      </div>
    </div>
  ) : null
}

const Track = (track: Track & { index: number }) => {
  const { current, setCurrent } = usePlayer()
  const { isPlaying } = usePlayer()
  const { slug, index, preview, playerCover, title, author, duration, forAdults } = track
  const isPlayable = useMemo(() => slug === current, [slug, current])
  const ageRestriction = useAgeRestriction()

  const cover = {
    url: playerCover?.url || preview?.url,
    alt: playerCover?.alt || preview?.alt
  }

  const handlePlayClick = () => {
    const play = () => setCurrent(track, 'audio-player')

    if (!getCookie(AGE_RESTRICTION_COOKIE_KEY) && forAdults) {
      ageRestriction.open(play)
    } else {
      play()
    }
  }

  return (
    <li className={styles.item}>
      <button className={styles.track} onClick={handlePlayClick} aria-current={isPlayable}>
        <div className={classnames(styles.tracknumber, 'tablet-only')} aria-hidden>
          {isPlayable ? renderPlayableIcon() : stringWithZero(String(index + 1))}
        </div>

        <div className={styles.preview}>
          <div className={isPlayable ? 'tablet-only' : ''}>
            <TrackPreview data={cover} />
          </div>
          {isPlayable && renderPlayableIcon(true)}
        </div>

        <div className={styles.trackname}>{title}</div>
        <div className={styles.artist}>{author?.name}</div>
        <div className={styles.duration}>
          {isPlayable && <TrackCurrentTime />}
          {duration}
        </div>
      </button>
    </li>
  )

  function renderPlayableIcon(asPreview?: boolean) {
    return (
      <div className={classnames(styles.playable, { [styles.paused]: !isPlaying, 'mobile-only': asPreview })}>
        <i className="icon-pause-mini" />
      </div>
    )
  }
}
