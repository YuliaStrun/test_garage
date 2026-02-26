import React, { useCallback, useContext, useEffect, useRef } from 'react'

import { useRouter } from 'next/router'

type HistoryContextType = {
  getPreviousUrl: () => string
}

export const HistoryContext = React.createContext<HistoryContextType | undefined>(undefined)

type HistoryProviderProps = {
  children: React.ReactNode
}

export const HistoryProvider = ({ children }: HistoryProviderProps) => {
  const router = useRouter()
  const previousUrl = useRef(router.asPath)

  const changeUrl = useCallback(() => {
    previousUrl.current = router.asPath
  }, [router.asPath])

  const value: HistoryContextType = {
    getPreviousUrl: () => previousUrl.current
  }

  useEffect(() => {
    router.events.on('routeChangeStart', changeUrl)

    return () => {
      router.events.off('routeChangeStart', changeUrl)
    }
  }, [changeUrl, router.events])

  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
}

export const useHistory = () => {
  const context = useContext(HistoryContext)

  if (context === undefined) {
    throw new Error('useHistory must be used within a HistoryProvider')
  }

  return context
}
