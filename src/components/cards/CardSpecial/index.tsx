import React, { useMemo } from 'react'

import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import PlayButton from 'components/buttons/PlayButton'
import styles from 'styles/components/CardSpecial.module.scss'
import type { Episode, EventAction, EventCategory, SpecialRelease, Track } from 'types'
import analytics from 'utils/analytics'
import setHTML from 'utils/setHTML'
import stringWithZero from 'utils/stringWithZero'

type CardSpecialProps = {
  data: Episode | SpecialRelease
  fullWidth?: boolean
  seasonEpisodes?: Track[]
  eventCategory: EventCategory
}

const CardSpecial = ({ data, fullWidth, seasonEpisodes, eventCategory }: CardSpecialProps) => {
  const t = useTranslations('base')

  const href = useMemo(() => {
    if ('season' in data) {
      return `/seasons/${data.seasonSlug}/${data.slug}`
    } else {
      return `/specials/${data.slug}`
    }
  }, [data])

  const seasonTitle = useMemo(() => {
    if ('season' in data) {
      return `${t('season')} ${stringWithZero(String(data.seasonNumberTitle))}. ${data.season}`
    } else {
      return data?.subtitle || t('special')
    }
  }, [data, t])

  const event = useMemo<EventAction>(() => {
    return 'season' in data ? 'goto-episode' : 'goto-special'
  }, [data])

  return fullWidth ? renderContent() : <div className={styles.wrapper}>{renderContent()}</div>

  function renderContent() {
    return (
      <Link
        className={styles.link}
        href={href}
        onClick={() => {
          analytics.sendEvent(eventCategory, event, String(data.title))
        }}>
        <div className={classnames(styles.card, { [styles.short]: !fullWidth })}>
          {data.title && <h2 className={styles.title}>{data.title}</h2>}

          <div className={styles.season} {...setHTML({ html: seasonTitle })} />

          {!!data.author.name && (
            <div className={styles.author}>
              {!!data.author.preview?.url && (
                <Image
                  className={styles['author-image']}
                  src={data.author.preview.url}
                  alt={data.author.preview.alt || ''}
                  width={20}
                  height={20}
                  sizes="20px"
                />
              )}
              <span>{data.author.name}</span>
            </div>
          )}

          <div className={styles.controls}>
            <PlayButton
              duration={data.duration}
              playerCurrent={data.slug}
              playersQueue={seasonEpisodes || [data]}
              forAdults={data.forAdults}
              eventCategory="card-special"
            />

            {data.forAdults && <div className={styles.restriction}>18+</div>}
          </div>

          {data.preview?.url && (
            <div className={styles['image-wrapper']} aria-hidden>
              <Image
                className={styles.image}
                src={data.preview.url}
                alt={data.preview.alt || ''}
                sizes="(min-width: 1440px) 25vw, (min-width: 768px) 33vw, 50vw"
                fill
              />
            </div>
          )}
        </div>
      </Link>
    )
  }
}

export default CardSpecial
