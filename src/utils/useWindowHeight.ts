import { useEffect, useState } from 'react'

export const useWindowHeight = () => {
  const [height, setHeight] = useState('100vh')
  const changeHeight = () => setHeight(`${window.innerHeight}px`)

  useEffect(() => {
    changeHeight()
    window.addEventListener('resize', changeHeight)
    window.addEventListener('orientationchange', changeHeight)

    return () => {
      window.removeEventListener('resize', changeHeight)
      window.removeEventListener('orientationchange', changeHeight)
    }
  }, [])

  return {
    height
  }
}
