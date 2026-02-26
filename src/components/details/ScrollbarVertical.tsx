import { useEffect, useRef } from 'react'

import classnames from 'classnames'

import styles from 'styles/components/ScrollbarVertical.module.scss'

const THUMB_TOP_OFFSET = 87
const THUMB_BOTTOM_OFFSET = 4

type ScrollbarVerticalProps = {
  className?: string
}

const ScrollbarVertical = ({ className }: ScrollbarVerticalProps) => {
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!scrollbarRef.current) return

      const thumbHeight = thumbRef.current?.getBoundingClientRect().height || 0
      const scrollbarHeight = scrollbarRef.current?.getBoundingClientRect().height - thumbHeight - THUMB_BOTTOM_OFFSET

      const scrollPercent = window.scrollY / (document.body.scrollHeight - document.body.clientHeight)
      const top = THUMB_TOP_OFFSET + (scrollbarHeight - THUMB_TOP_OFFSET) * (scrollPercent > 1 ? 1 : scrollPercent)

      if (thumbRef.current) {
        thumbRef.current.style.top = `${Math.round(top)}px`
      }
    }

    onScroll()
    addEventListener('scroll', onScroll)
    addEventListener('resize', onScroll)
    addEventListener('orientationchange', onScroll)

    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      removeEventListener('orientationchange', onScroll)
    }
  }, [])

  return (
    <div className={classnames(styles.scrollbar, className)} ref={scrollbarRef}>
      <div className={styles.thumb} ref={thumbRef} style={{ top: `${THUMB_TOP_OFFSET}px` }} />
    </div>
  )
}

export default ScrollbarVertical
