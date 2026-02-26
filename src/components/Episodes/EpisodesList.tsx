import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import CardEpisode from 'components/cards/CardEpisode'
import styles from 'styles/components/EpisodesList.module.scss'
import type { Episode } from 'types'

type EpisodesListProps = {
  episodes: Episode[]
  alwaysVertical?: boolean
  isModal?: boolean
  activeEpisodeRef?: React.RefObject<HTMLLIElement>
}

const EpisodesList = ({ episodes, alwaysVertical, isModal, activeEpisodeRef }: EpisodesListProps) => {
  const { query } = useRouter()
  const t = useTranslations('base')

  const styleVertical = { [styles.vertical]: alwaysVertical }

  return (
    <div className={styles.container}>
      <div className={classnames(styles.captions, styleVertical)} aria-hidden>
        <div className={styles.caption}>#</div>
        <div className={styles.caption}>{t('episode')}</div>
        <div className={styles.caption}>{t('authors')}</div>
      </div>

      <ul className={classnames(styles.episodes, styleVertical)}>
        {episodes.map((episode, index) => {
          const isActive = episode.slug === query.episodeSlug

          return (
            <li key={String(index)} className={styles.episode} ref={isActive ? activeEpisodeRef : undefined}>
              <CardEpisode
                data={episode}
                index={index}
                isActive={isActive}
                fullWidth={alwaysVertical}
                isModal={isModal}
                playerQueue={episodes}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EpisodesList
