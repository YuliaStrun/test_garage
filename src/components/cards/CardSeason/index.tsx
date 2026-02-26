import React from 'react'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import PlayButton from 'components/buttons/PlayButton'
import SimpleButton from 'components/buttons/SimpleButton'
import styles from 'styles/components/CardSeason.module.scss'
import type { Season, Track } from 'types'
import setHTML from 'utils/setHTML'
import stringWithZero from 'utils/stringWithZero'

type CardSeasonProps = {
  data: Season
  episodes: Track[]
}

const CardSeason = ({ data, episodes }: CardSeasonProps) => {
  const t = useTranslations('base')

  const title = `${t('season')} ${stringWithZero(String(data.numberTitle))}. ${data.title}`
  const hasForAdults = episodes.reduce((acc, { forAdults }) => acc || Boolean(forAdults), false)

  return (
    <section className={styles.card} aria-label={title}>
      <h2 className={styles.title} {...setHTML({ html: title })} />

      <span className={styles.tracks}>{t('episodeCount', { count: data.tracks })}</span>

      <div className={styles.controls}>
        <div className={styles.about}>
          <SimpleButton>{t('about_season')}</SimpleButton>
        </div>
        <PlayButton
          duration={data.duration}
          playerCurrent={episodes[0].slug}
          playersQueue={episodes}
          forAdults={hasForAdults}
          eventCategory="card-season"
        />
      </div>

      {data.preview?.url && (
        <div className={styles['image-wrapper']} aria-hidden>
          <Image
            className={styles.image}
            src={data.preview.url}
            alt={data.preview.alt || ''}
            sizes="(min-width: 1440px) 350px, (min-width: 1220px) 25vw, (min-width: 768px) 33vw, 50vw"
            fill
            aria-hidden
          />
        </div>
      )}

      <div className={styles.description}>{data.description}</div>
    </section>
  )
}

export default CardSeason
