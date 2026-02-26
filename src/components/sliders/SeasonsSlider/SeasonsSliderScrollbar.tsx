import { CSSProperties, useEffect, useRef, useState } from 'react'

import { Slider, SliderThumb, SliderTrack } from 'react-aria-components'

import styles from 'styles/components/SeasonsSliderScrollbar.module.scss'

type SeasonsSliderScrollbarProps = {
  progress: number
  count: number
  changeProgress: (p: number) => void
}

const SeasonsSliderScrollbar = ({ progress, count, changeProgress }: SeasonsSliderScrollbarProps) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderWidth, setSliderWidth] = useState(0)

  useEffect(() => {
    if (!sliderRef.current) return

    const update = () => setSliderWidth(sliderRef.current!.offsetWidth)

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const thumbWidth = sliderWidth / count

  const scrollbarProperties: CSSProperties = {
    '--width': `${thumbWidth}px`,
    '--progress': progress
  } as CSSProperties

  return (
    <Slider
      ref={sliderRef}
      className={styles.scrollbar}
      minValue={0}
      maxValue={1}
      step={0.001}
      value={progress}
      onChange={changeProgress}
      style={scrollbarProperties}>
      <SliderTrack className={styles.track}>
        <SliderThumb className={styles.thumb} />
      </SliderTrack>
    </Slider>
  )
}

export default SeasonsSliderScrollbar
