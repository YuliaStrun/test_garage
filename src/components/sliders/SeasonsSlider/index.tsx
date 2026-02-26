import { useRef, useState } from 'react'

import CardSlider from 'components/cards/CardSliderSeason'
import styles from 'styles/components/SeasonsSlider.module.scss'
import type { Season } from 'types'
import { SeasonsEpisodesMapper } from 'utils/mappers/mapSeasonsEpisodesData'

import SeasonsSliderScrollbar from './SeasonsSliderScrollbar'

type SeasonsSliderProps = {
  seasons: Season[]
  seasonsEpisodes: SeasonsEpisodesMapper
}

const SeasonsSlider = ({ seasons, seasonsEpisodes }: SeasonsSliderProps) => {
  const ticking = useRef(false)
  const [progress, setProgress] = useState(0)
  const refContainer = useRef<HTMLDivElement>(null)

  const changeProgress = (p: number) => {
    const container = refContainer.current
    if (!container) return

    const maxScroll = container.scrollWidth - container.clientWidth
    container.scrollLeft = maxScroll * p
  }

  const onScroll = () => {
    if (ticking.current) return
    ticking.current = true

    const handle = requestAnimationFrame(() => {
      const container = refContainer.current
      if (!container) {
        ticking.current = false
        return
      }

      const maxScroll = container.scrollWidth - container.clientWidth
      const p = maxScroll > 0 ? container.scrollLeft / maxScroll : 0
      setProgress(p)
      ticking.current = false
    })

    return () => cancelAnimationFrame(handle)
  }

  return seasons.length ? (
    <div className={styles.wrapper}>
      <div className={styles['slider-container']} ref={refContainer} onScroll={onScroll}>
        {seasons.map((season, index) => (
          <div key={index} className={styles.slide}>
            <CardSlider
              data={season}
              playerCurrent={season.slug ? seasonsEpisodes[season.slug][0].slug : undefined}
              playersQueue={season.slug ? seasonsEpisodes[season.slug] : undefined}
            />
          </div>
        ))}
      </div>

      <div className={styles.scrollbar}>
        <SeasonsSliderScrollbar progress={progress} count={seasons.length} changeProgress={changeProgress} />
      </div>
    </div>
  ) : null
}

export default SeasonsSlider
