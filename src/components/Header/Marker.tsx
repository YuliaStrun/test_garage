import { useEffect, useRef, useState } from 'react'

import styles from 'styles/components/HeaderMarker.module.scss'

const MARKER_CURSOR_DELTA_X = 5
const MARKER_INITIAL_POSITION_LEFT = -2

const Marker = () => {
  const [markerPosition, setMarkerPosition] = useState<number>(MARKER_INITIAL_POSITION_LEFT)
  const refWrapper = useRef<HTMLDivElement>(null)
  const refWrapperPosition = useRef<DOMRect>()

  const onMove = ({ clientX, clientY }: MouseEvent) => {
    if (!refWrapperPosition.current) return

    const { top, right, bottom, left } = refWrapperPosition.current
    const isInWrapper = clientX >= left && clientX <= right && clientY >= top && clientY <= bottom

    if (isInWrapper) {
      setMarkerPosition(clientX - (refWrapperPosition.current.left || 0) + MARKER_CURSOR_DELTA_X)
    }
  }

  const onResize = () => {
    if (!refWrapper.current) return

    refWrapperPosition.current = refWrapper.current.getBoundingClientRect()
  }

  useEffect(() => {
    onResize()

    addEventListener('resize', onResize)
    addEventListener('orientationchange', onResize)
    window.addEventListener('mousemove', onMove)

    return () => {
      removeEventListener('resize', onResize)
      removeEventListener('orientationchange', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={refWrapper}>
      <span className={styles.marker} style={{ left: `${markerPosition}px` }} />
    </div>
  )
}

export default Marker
