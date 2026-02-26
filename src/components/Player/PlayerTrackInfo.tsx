import { useMemo } from 'react'

import Link from 'next/link'

import styles from 'styles/components/PlayerTrackInfo.module.scss'
import type { Track } from 'types'

import { TrackPreview } from './TrackPreview'

type PlayerTrackInfoProps = {
  track: Track
}

export const PlayerTrackInfo = ({ track }: PlayerTrackInfoProps) => {
  const playerCover = {
    url: track.playerCover?.url || track.preview?.url,
    alt: track.playerCover?.alt || track.preview?.alt
  }

  const href = useMemo(() => {
    if ('season' in track) {
      return `/seasons/${track.seasonSlug}/${track.slug}`
    } else {
      return `/specials/${track.slug}`
    }
  }, [track])

  return (
    <div className={styles.panel}>
      <TrackPreview data={playerCover} />

      <div className={styles.info}>
        <Link href={href} className={styles.title}>
          {track.title}
        </Link>
        <div className={styles.author}>{track.author.name}</div>
      </div>
    </div>
  )
}
