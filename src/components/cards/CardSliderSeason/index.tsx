import React from 'react'

import { Maybe } from 'graphql/jsutils/Maybe'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import PlayButton from 'components/buttons/PlayButton'
import styles from 'styles/components/CardSliderSeason.module.scss'
import type { Season, Track } from 'types'
import analytics from 'utils/analytics'
import setHTML from 'utils/setHTML'
import stringWithZero from 'utils/stringWithZero'

type CardSeasonSliderProps = {
  data: Season
  playerCurrent: Maybe<string>
  playersQueue: Track[] | undefined
}

const CardSliderSeason = ({ data, playerCurrent, playersQueue }: CardSeasonSliderProps) => {
  const t = useTranslations('base')
  const hasForAdults = playersQueue?.reduce((acc, { forAdults }) => acc || Boolean(forAdults), false)
  const preview = {
    url: data.cover?.url || data.preview?.url,
    alt: data.cover?.alt || data.preview?.alt
  }

  return data.title ? (
    <Link
      className={styles.card}
      href={`/seasons/${data.slug}`}
      onClick={() => {
        analytics.sendEvent('season-slider', 'goto-season', String(data.title))
      }}>
      {preview.url && (
        <div className={styles['image-wrapper']}>
          <Image
            className={styles.image}
            src={preview.url}
            alt={preview.alt || ''}
            sizes="(min-width: 1220px) 33vw, (min-width: 768px) 50vw, (min-width: 500px) 66vw, 83vw"
            fill
            aria-hidden
          />
        </div>
      )}
      <h3
        className={styles.title}
        {...setHTML({ text: `${t('season')} ${stringWithZero(String(data.numberTitle))}. ${data.title}` })}
      />
      <div className={styles.tracks}>{t('episodeCount', { count: data.tracks })}</div>
      <PlayButton
        className={styles.listen}
        duration={data.duration}
        playerCurrent={playerCurrent}
        playersQueue={playersQueue}
        forAdults={hasForAdults}
        eventCategory="season-slider"
      />
    </Link>
  ) : null
}

export default CardSliderSeason
