import { Maybe } from 'graphql/jsutils/Maybe'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsSpecial.module.scss'
import type { SpecialReleaseDetails, Track } from 'types'

import DetailsContent from './DetailsContent'
import DetailsControls, { DetailsControlsProps } from './DetailsControls'
import DetailsHeader from './DetailsHeader'
import DetailsPanel from './DetailsPanel'
import DetailsPartners from './DetailsPartners'
import DetailsSlider from './DetailsSlider'
import DetailsTracklist from './DetailsTracklist'

type SpecialDetailsProps = Pick<DetailsControlsProps, 'anchorMenu'> & {
  data: SpecialReleaseDetails
  playerCurrent: Maybe<string>
  playersQueue: Track[] | undefined
}

const SpecialDetails = ({ data, anchorMenu, playerCurrent, playersQueue }: SpecialDetailsProps) => {
  const t = useTranslations('base')

  return (
    <div className={styles.container}>
      <div id="s-panel" className={styles.panel}>
        <DetailsPanel
          duration={data.duration}
          forAdults={data.forAdults}
          playerCurrent={playerCurrent}
          playersQueue={playersQueue}
        />
      </div>

      <div className={styles.description}>
        <DetailsHeader title={data.title} href="/specials" hrefText={t('specials')} author={data.author} />

        <div className={styles.dummy} />
        <div className={styles.controls}>
          <div id="s-controls">
            <DetailsControls
              duration={data.duration}
              forAdults={data.forAdults}
              anchorMenu={anchorMenu}
              playerCurrent={playerCurrent}
              playersQueue={playersQueue}
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
          {/* <DetailsAuthors description={detailsContent.authors.text} image={data.author.preview} /> */}
        </div>
      </div>
    </div>
  )
}

export default SpecialDetails
