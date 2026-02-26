import { useCallback, useRef, useState } from 'react'

// @ts-ignore
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Splide as Slider } from '@splidejs/splide'
import classNames from 'classnames'
import Image from 'next/image'

import Dots from 'components/slider/Dots'
import styles from 'styles/components/DetailsSlider.module.scss'
import { ContentSlide } from 'types/Content'
import setHTML from 'utils/setHTML'

import '@splidejs/react-splide/css'

const INITIAL_SLIDE = 0

const sliderOptions: Options = {
  start: INITIAL_SLIDE,
  type: 'loop',
  perPage: 1,
  pagination: false,
  arrows: false,
  useScroll: true,
  speed: 800
}

type DetailsSliderProps = {
  slides?: ContentSlide[]
}

const DetailsSlider = ({ slides = [] }: DetailsSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const refSlider = useRef<Slider>()
  const caption = slides[slideIndex].caption

  const handleOnScroll = useCallback((slider: Slider) => setSlideIndex(slider.index), [])
  const handlePrev = useCallback(() => refSlider.current?.go('<'), [])
  const handleNext = useCallback(() => refSlider.current?.go('>'), [])

  if (!slides.length) return null
  return (
    <div className={styles.slider}>
      <Splide
        ref={refSlider}
        hasTrack={false}
        className={styles.splide}
        options={sliderOptions}
        onScroll={handleOnScroll}>
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={String(index)}>
              <div className={styles.card}>
                <div className={styles['image-wrapper']}>
                  <Image
                    className={classNames(styles.image, slide.fill && styles[`image_full-${slide.fill}`])}
                    src={slide.url}
                    alt={slide.alt}
                    fill
                    aria-hidden
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <button onClick={handlePrev} className={classNames(styles.button, styles.button_left)}>
          <div className={classNames(styles.arrow, styles.arrow_left)} />
        </button>
        <button onClick={handleNext} className={classNames(styles.button, styles.button_right)}>
          <div className={classNames(styles.arrow, styles.arrow_right)} />
        </button>
        <Dots total={slides.length} current={slideIndex} goTo={(i) => refSlider.current?.go(i)} />
      </Splide>
      {Boolean(caption) && <div className={styles.caption} {...setHTML({ html: caption })} />}
    </div>
  )
}

export default DetailsSlider
