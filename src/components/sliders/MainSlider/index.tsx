import { CSSProperties, useRef, useState } from 'react'

// @ts-ignore
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import type { Splide as SplideType } from '@splidejs/splide'
import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import CardSlider from 'components/cards/CardSliderMain'
import styles from 'styles/components/MainSlider.module.scss'
import type { EventAction, Slide } from 'types'
import analytics from 'utils/analytics'
import { SeasonsEpisodesMapper } from 'utils/mappers/mapSeasonsEpisodesData'
import stringWithZero from 'utils/stringWithZero'
import { useCheckViewport } from 'utils/useCheckViewport'
import { useWindowHeight } from 'utils/useWindowHeight'

import '@splidejs/react-splide/css'

const INITIAL_SLIDE = 0
const SLIDE_BLUR_DURATION = 600 // длительность анимации "скрытия" слайда
const SLIDE_FOCUS_DURATION = 500 // длительность анимации "появления" слайда
const SLIDE_TRANSITION_BLUR = 20 // сила размытия слайда при переходе

const sliderOptions: Options = {
  start: INITIAL_SLIDE,
  rewind: true,
  type: 'fade',
  autoplay: true,
  cover: true,
  arrows: false,
  drag: false,
  pauseOnHover: false,
  resetProgress: false,
  pagination: false,
  classes: { pagination: styles.pagination }
}

type MainSliderProps = {
  slides: Slide[]
  seasonsEpisodes: SeasonsEpisodesMapper
}

const MainSlider = ({ slides, seasonsEpisodes }: MainSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE)
  const refSlider = useRef<SplideType>()
  const t = useTranslations('base')
  const { isCustomWidth: isDesktop } = useCheckViewport({ customWidth: 1024 })
  const { height } = useWindowHeight()
  const count = slides.length

  const sliderVariables: CSSProperties = {
    // @ts-ignore
    '--duration-blur': `${SLIDE_BLUR_DURATION}ms`,
    '--duration-focus': `${SLIDE_FOCUS_DURATION}ms`,
    '--blur': `${SLIDE_TRANSITION_BLUR}px`
  }

  const progressVariables: CSSProperties = {
    // @ts-ignore
    '--items': count
  }

  return !!slides.length ? (
    <section className={styles.slider} style={{ height }} aria-label={t('slider')}>
      <h2 className="sr-only">{t('slider')}</h2>
      <Splide
        className={styles.splide}
        style={sliderVariables}
        options={sliderOptions}
        hasTrack={false}
        onMounted={onMount}
        onActive={onActive}>
        <SplideTrack>
          {slides.map((slide, index) => {
            let href
            let event: EventAction
            switch (slide.type) {
              case 'season':
                href = `/seasons/${slide.slug}`
                event = 'main-slider-goto-season'
                break
              case 'episode':
                href = `/seasons/${slide.seasonSlug}/${slide.slug}`
                event = 'main-slider-goto-episode'
                break
              case 'special':
                href = `/specials/${slide.slug}`
                event = 'main-slider-goto-special'
                break
              default:
                href = '/'
                break
            }

            const preview = {
              url: isDesktop ? slide.preview?.url : slide.playerCover?.url || slide.preview?.url,
              alt: isDesktop ? slide.preview?.alt : slide.playerCover?.alt || slide.preview?.alt
            }
            const seasonSlug = slide.type === 'episode' ? slide.seasonSlug : slide.slug
            const playerQueue =
              slide.type === 'special' ? seasonsEpisodes.specials : seasonSlug ? seasonsEpisodes[seasonSlug] : []
            const seasonNumber = !!slide.seasonNumberTitle
              ? `${t('season')} ${stringWithZero(String(slide.seasonNumberTitle))}. `
              : ''
            const seasonTitle =
              slide.type === 'special' ? slide?.subtitle || t('special') : slide.season || slide.title || ''
            const track = !!slide.track ? `${t('episode')} ${stringWithZero(String(slide.track))}` : ''
            const episodesCount = slide.episodes?.length && t('episodeCount', { count: slide.episodes?.length })

            return preview.url ? (
              <SplideSlide key={String(index)}>
                <Link
                  className={styles.slide}
                  href={href}
                  onClick={() => {
                    analytics.sendEvent('main-slider', event, String(slide.title))
                  }}
                  tabIndex={-1}
                  aria-label={`${seasonNumber}${seasonTitle}, ${episodesCount || track}, ${!!track ? slide.title || '' : ''}`}>
                  <Image className={styles.image} src={preview.url} alt={preview.alt || ''} fill aria-hidden />
                </Link>

                <div className={styles['card-layer']}>
                  <div className={styles['card-wrapper']}>
                    <div className={styles.card}>
                      <CardSlider
                        data={slide}
                        seasonTitle={seasonTitle}
                        seasonNumber={seasonNumber}
                        track={track}
                        linkAbout={href}
                        playerQueue={playerQueue}
                      />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ) : null
          })}
        </SplideTrack>

        <div className={classnames('splide__progress', styles.progress)} style={progressVariables}>
          <div
            className={classnames('splide__progress__bar', styles.progressbar)}
            style={{ gridColumnStart: currentSlide + 1 }}
          />
        </div>

        <ul className={styles.pagination} role="tablist">
          {slides.map((_, index) => (
            <li key={String(index)} role="presentation">
              <button
                className={classnames({ [styles.active]: currentSlide === index })}
                type="button"
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`${t('goto_slide')} ${index + 1}`}
                onClick={onPaginationClick(index)}
                onMouseLeave={onPaginationLeave(index)}
                onMouseMove={onPaginationOver(index)}
              />
            </li>
          ))}
        </ul>
      </Splide>
    </section>
  ) : null

  function onMount(splide: SplideType) {
    refSlider.current = splide
  }

  function onActive(splide: SplideType) {
    addPrevClassOnLastSlide()
    setCurrentSlide(splide.index)
  }

  function addPrevClassOnLastSlide() {
    setTimeout(() => {
      if (!refSlider.current) return

      const { list, slides } = refSlider.current.Components.Elements
      const hasPrevSlide = list.querySelector('.splide__slide.is-prev') !== null
      const isFirstActive = slides[0]?.classList.contains('is-active')
      const lastSlide = slides[slides.length - 1]

      if (isFirstActive && !hasPrevSlide && slides.length > 1) {
        lastSlide?.classList.add('is-prev')
      } else if (lastSlide?.classList.contains('is-prev')) {
        lastSlide.classList.remove('is-prev')
      }
    })
  }

  function onPaginationClick(index: number) {
    return () => {
      if (refSlider.current && index !== refSlider.current.index) {
        refSlider.current.go(index)
        addPrevClassOnLastSlide()
        setCurrentSlide(index)
      }
    }
  }

  function onPaginationOver(index: number) {
    return () => {
      if (refSlider.current && index === refSlider.current.index) {
        refSlider.current.Components.Autoplay.pause()
      }
    }
  }

  function onPaginationLeave(index: number) {
    return () => {
      if (refSlider.current && index === refSlider.current.index) {
        refSlider.current.Components.Autoplay.play()
      }
    }
  }
}

export default MainSlider
