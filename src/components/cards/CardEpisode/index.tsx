import React from 'react'

import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import PlayButton from 'components/buttons/PlayButton'
import { useEpisodeModal } from 'components/Episodes/EpisodesModalContext'
import styles from 'styles/components/CardEpisode.module.scss'
import type { Episode, Track } from 'types'

type CardEpisodeProps = {
  index: number
  data: Episode
  playerQueue: Track[]
  isActive: boolean
  fullWidth?: boolean
  isModal?: boolean
}

const CardEpisode = ({ index, data, playerQueue, isActive, fullWidth, isModal }: CardEpisodeProps) => {
  const t = useTranslations('base')
  const { onClose } = useEpisodeModal()

  const styleVertical = { [styles.full]: fullWidth, [styles.modal]: isModal }
  const playerCover = {
    url: data.playerCover?.url || data.preview?.url,
    alt: data.playerCover?.alt || data.preview?.alt
  }
  const ariaTitle = data.title ? `, ${data.title}` : ''
  const ariaAuthor = data.author.name ? `, ${t('author')} ${data.author.name}` : ''
  const ariaDuration = data.duration ? `, ${data.duration}` : ''
  const ariaLabel = `${t('episode')} ${index + 1}${ariaTitle}${ariaAuthor}${ariaDuration}`

  return (
    <Link href={`/seasons/${data.seasonSlug}/${data.slug}`} passHref legacyBehavior>
      <a
        className={classnames(styles.container, styleVertical, { [styles.active]: isActive })}
        onClick={onClose}
        aria-label={ariaLabel}>
        <div className={styles.number}>{index + 1}</div>

        <div className={styles.left}>
          {playerCover?.url && (
            <div className={styles.preview}>
              <Image
                className={styles.image}
                src={playerCover.url}
                alt={playerCover.alt || ''}
                sizes="42px"
                fill
                aria-hidden
              />
            </div>
          )}
          {data.title && (
            <div className={styles.info}>
              <div className={styles.title}>{data.title}</div>
              {!!data.duration && <div className={styles.duration}>{data.duration}</div>}
            </div>
          )}
        </div>

        <div className={styles.right}>
          {data.author.name && (
            <div className={styles.author}>
              {data.author.preview?.url && (
                <div className={styles['author-preview']}>
                  <Image
                    className={styles.image}
                    src={data.author.preview.url}
                    alt={data.author.preview.alt || ''}
                    sizes="20px"
                    fill
                    aria-hidden
                  />
                </div>
              )}
              <div className={styles['author-name']}>{data.author.name}</div>
            </div>
          )}
          {data.forAdults && <div className={styles.restriction}>18+</div>}
        </div>

        <PlayButton
          className={styles.play}
          playerCurrent={data.slug}
          playersQueue={playerQueue}
          forAdults={data.forAdults}
          duration={data.duration}
          variant="icon-only"
          eventCategory="card-episode"
        />
      </a>
    </Link>
  )
}

export default CardEpisode
