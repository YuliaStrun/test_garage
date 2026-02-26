import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsSeason.module.scss'
import type { SeasonDetails } from 'types'
import { DETAILS_PANEL_ID } from 'utils/useBlurDetails'

import DetailsContent from './DetailsContent'
import DetailsPartners from './DetailsPartners'
import DetailsSlider from './DetailsSlider'
import DetailsTracklist from './DetailsTracklist'
import ScrollbarVertical from './ScrollbarVertical'
import SeasonPoster from './SeasonPoster'

type SeasonDetailsProps = {
  data: SeasonDetails
}

const SeasonDetails = ({ data }: SeasonDetailsProps) => {
  const t = useTranslations('base')

  return (
    <div className={styles.container}>
      <div className={styles.content} id={DETAILS_PANEL_ID}>
        <div className={styles.poster}>
          <SeasonPoster data={data} />
        </div>

        <div className={styles.description}>
          <h2 className="sr-only">{t('about_season')}</h2>
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
        </div>
      </div>

      <ScrollbarVertical className={styles.scrollbar} />
    </div>
  )
}

export default SeasonDetails
