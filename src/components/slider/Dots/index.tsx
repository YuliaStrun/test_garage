import { useCallback, useEffect, useState } from 'react'

// @ts-ignore
import classNames from 'classnames'

import styles from 'styles/components/Dots.module.scss'

const BUTTON_SIZE = 25
const WINDOW_SIZE = 5

function calcTranslateX(activeIndex: number, total: number) {
  if (total <= WINDOW_SIZE) return 0

  const half = Math.floor(WINDOW_SIZE / 2)
  const minOffset = -(total - WINDOW_SIZE) * BUTTON_SIZE

  if (activeIndex <= half) {
    return 0
  } else if (activeIndex >= total - half - 1) {
    return minOffset
  } else {
    return -(activeIndex - half) * BUTTON_SIZE
  }
}

type DotsProps = {
  total: number
  current: number
  goTo: (i: number) => void
}

export const Dots = ({ total, current, goTo }: DotsProps) => {
  const [translateX, setTranslateX] = useState(() => calcTranslateX(current, total))

  useEffect(() => {
    setTranslateX(calcTranslateX(current, total))
  }, [current, total])

  const handleDotClick = useCallback(
    (index: number) => {
      goTo(index)
      setTranslateX(calcTranslateX(index, total))
    },
    [goTo, total]
  )

  return (
    <div className={styles.dots}>
      <ul className={classNames(styles['dots-wrap'])} style={{ transform: `translateX(${translateX}px)` }}>
        {Array.from({ length: total }, (_, i) => (
          <li key={i}>
            <button
              className={classNames(styles.dot, { [styles.dot_active]: i === current })}
              onClick={() => handleDotClick(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dots
