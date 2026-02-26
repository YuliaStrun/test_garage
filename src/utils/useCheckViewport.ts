import { useCallback, useEffect, useState } from 'react'

type UseCheckViewportProps = {
  customWidth?: number
}

export const useCheckViewport = ({ customWidth = 768 }: UseCheckViewportProps) => {
  const [isCustomWidth, setCustom] = useState(false)

  const check = useCallback(() => {
    if (isCustomWidth && window.innerWidth < customWidth) {
      setCustom(false)
    } else if (!isCustomWidth && window.innerWidth >= customWidth) {
      setCustom(true)
    }
  }, [customWidth, isCustomWidth])

  useEffect(() => {
    check()
    window.addEventListener('resize', check)
    window.addEventListener('orientationchange', check)

    return () => {
      window.removeEventListener('resize', check)
      window.removeEventListener('orientationchange', check)
    }
  }, [check])

  return {
    isCustomWidth
  }
}
