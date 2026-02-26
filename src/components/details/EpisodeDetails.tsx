import { Maybe } from 'graphql/jsutils/Maybe'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsEpisode.module.scss'
import type { EpisodeDetails, Track } from 'types'
import stringWithZero from 'utils/stringWithZero'
import { DETAILS_PANEL_ID } from 'utils/useBlurDetails'
import { useCheckViewport } from 'utils/useCheckViewport'

import DetailsContent from './DetailsContent'
import DetailsControls, { DetailsControlsProps } from './DetailsControls'
import DetailsHeader from './DetailsHeader'
import DetailsPanel from './DetailsPanel'
import DetailsPartners from './DetailsPartners'
import DetailsSlider from './DetailsSlider'
import DetailsTracklist from './DetailsTracklist'
import ScrollbarVertical from './ScrollbarVertical'

type EpisodeDetailsProps = Pick<DetailsControlsProps, 'anchorMenu'> & {
  data: EpisodeDetails
  playerCurrent: Maybe<string>
  playersQueue: Track[] | undefined
  onMenuOpen: () => void
}

const EpisodeDetails = ({ data, onMenuOpen, anchorMenu, playerCurrent, playersQueue }: EpisodeDetailsProps) => {
  const { isCustomWidth: isDesktop } = useCheckViewport({ customWidth: 1024 })
  const t = useTranslations('base')

  const poster = {
    url: isDesktop ? data.preview?.url : data.playerCover?.url || data.preview?.url,
    alt: isDesktop ? data.preview?.alt : data.playerCover?.alt || data.preview?.alt
  }

  return (
    <div className={styles.container}>
      <div className={styles.content} id={DETAILS_PANEL_ID}>
        <div id="s-panel" className={styles.panel}>
          <DetailsPanel
            duration={data.duration}
            forAdults={data.forAdults}
            onMenuOpen={onMenuOpen}
            playerCurrent={playerCurrent}
            playersQueue={playersQueue}
          />
        </div>

        {poster.url && (
          <div className={styles.poster}>
            <Image className={styles.image} src={poster.url} alt={poster.alt || ''} fill aria-hidden />
          </div>
        )}

        <div className={styles.description}>
          <h2 className="sr-only">{t('about_episode')}</h2>

          {data.season && (
            <DetailsHeader
              title={data.title}
              href={`/seasons/${data.seasonSlug}`}
              hrefText={`${t('season')} ${stringWithZero(String(data.seasonNumberTitle))}. ${data.season}`}
              author={data.author}
            />
          )}

          <div className={styles.dummy} />
          <div className={styles.controls}>
            <div id="s-controls">
              <DetailsControls
                duration={data.duration}
                forAdults={data.forAdults}
                onMenuOpen={onMenuOpen}
                anchorMenu={anchorMenu}
                playerCurrent={playerCurrent}
                playersQueue={playersQueue}
                withDynamicOffset
              />
            </div>
          </div>
          <div className={styles['wrap-content']}>
            {data.content?.map((item) => {
              switch (item.type) {
                case 'editor':
                  return <DetailsContent key={item.key} anchor={item.anchor} html={item.data} />
                case 'slider':
                  return <DetailsSlider key={item.key} slides={item.slides} />
                case 'tracklist':
                  return <DetailsTracklist key={item.key} anchor={item.anchor} data={item.data} />
                case 'partners':
                  return <DetailsPartners key={item.key} anchor={item.anchor} data={item.data} title={item.title} />
                default:
                  return null
              }
            })}
            {/* <DetailsAuthors description={detailsContent.authors.text} image={episodes[0].author.preview} /> */}
          </div>
        </div>
      </div>

      <ScrollbarVertical className={styles.scrollbar} />
    </div>
  )
}

export default EpisodeDetails
