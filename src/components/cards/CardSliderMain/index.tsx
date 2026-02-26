import { CSSProperties, useMemo } from 'react'

import classnames from 'classnames'
import type { Maybe } from 'graphql/jsutils/Maybe'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import PlayButton from 'components/buttons/PlayButton'
import styles from 'styles/components/CardSlider.module.scss'
import type { EventAction, ImageData, Slide, Track } from 'types'
import analytics from 'utils/analytics'
import setHTML from 'utils/setHTML'

type CardSliderProps = {
  data: Slide
  seasonTitle: string
  seasonNumber: string
  track: string
  linkAbout: string
  playerQueue: Track[] | undefined
}

const CardSlider = ({ data, seasonTitle, seasonNumber, track, linkAbout, playerQueue }: CardSliderProps) => {
  const t = useTranslations('base')

  const currentSlug = data.type === 'season' ? playerQueue?.[0].slug : data.slug
  const hasForAdults = playerQueue?.reduce((acc, { forAdults }) => acc || Boolean(forAdults), false)

  const aboutText = useMemo(() => {
    switch (data.type) {
      case 'season':
        return t('about_season')
      case 'special':
        return t('about_special')
      default:
        return t('about_episode')
    }
  }, [data.type, t])

  const event = useMemo<EventAction>(() => {
    switch (data.type) {
      case 'season':
        return 'main-slider-goto-season'
      case 'special':
        return 'main-slider-goto-special'
      default:
        return 'main-slider-goto-episode'
    }
  }, [data.type])

  return data.title ? (
    <article className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.season} aria-hidden>
          {seasonNumber}
          <span
            className={classnames({ [styles['desktop-only']]: data.type === 'season' })}
            {...setHTML({ html: seasonTitle })}
          />
        </div>
        <div className={styles.track} aria-hidden>
          {!!track ? `// ${track}` : ''}
        </div>

        <div className={styles['title-wrapper']} aria-hidden>
          <h3 className={styles.title}>{data.title}</h3>
        </div>

        <div className={styles['author-wrapper']} aria-hidden>
          {data.type === 'season' ? renderSeasonPreviews() : renderAuthorPreview()}
        </div>

        <div className={styles['controls-wrapper']}>
          <div className={styles.controls}>
            <Link
              className={styles.about}
              href={linkAbout}
              onClick={() => {
                analytics.sendEvent('main-slider', event, String(data.title))
              }}
              aria-label={aboutText}>
              {aboutText}
            </Link>
            <PlayButton
              className={styles.play}
              duration={data.duration}
              playerCurrent={currentSlug}
              playersQueue={playerQueue}
              forAdults={hasForAdults}
              eventCategory="main-slider"
            />
          </div>
        </div>
      </div>
    </article>
  ) : null

  function renderSeasonPreviews() {
    const episodesCount = data.episodes?.length
    const episodesProperties: CSSProperties = {
      // @ts-ignore
      '--count': data.episodes?.length,
      //@ts-ignore
      '--speed': 150 // скорость смены иконок сезонов (мс)
    }

    return episodesCount ? (
      <div className={styles.author}>
        <div className={styles['preview-wrapper']}>
          <div className={styles.episodes} style={episodesProperties}>
            {data.episodes?.map(
              (episode, index) =>
                episode?.preview?.url && (
                  <div key={String(index)} className={styles.image}>
                    {renderPreview(episode.preview)}
                  </div>
                )
            )}
          </div>
        </div>
        <span>{t('episodeCount', { count: episodesCount })}</span>
      </div>
    ) : null
  }

  function renderAuthorPreview() {
    return (
      <div className={styles.author}>
        <div className={styles['preview-wrapper']}>{renderPreview(data.author.preview)}</div>
        <span>{data.author.name}</span>
      </div>
    )
  }

  function renderPreview(preview: Maybe<ImageData>) {
    return preview?.url ? (
      <Image className={styles.image} src={preview.url} alt={preview.alt || ''} width={20} height={20} sizes="20px" />
    ) : null
  }
}

export default CardSlider
