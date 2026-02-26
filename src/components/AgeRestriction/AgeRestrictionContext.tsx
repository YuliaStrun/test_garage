import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'

import { getCookie, setCookie } from 'cookies-next'

export const AGE_RESTRICTION_COOKIE_KEY = 'AGE_RESTRICTION'

type AgeRestrictionContextType = {
  isOpen: boolean
  isConfirmed: boolean
  confirm: () => void
  reject: () => void
  open: (onConfirm?: () => void, onReject?: () => void) => void
  close: () => void
}

const AgeRestrictionContext = React.createContext<AgeRestrictionContextType | undefined>(undefined)

type AgeRestrictionProviderProps = {
  children: React.ReactNode
}

export const AgeRestrictionProvider = ({ children }: AgeRestrictionProviderProps) => {
  const [isOpen, setOpen] = useState(false)
  const onConfirm = useRef(() => {})
  const onReject = useRef(() => {})

  const open = useCallback((onConfirmCallback = () => {}, onRejectCallback = () => {}) => {
    onConfirm.current = onConfirmCallback
    onReject.current = onRejectCallback
    setOpen(true)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  const confirm = useCallback(() => {
    onConfirm.current()
    setCookie(AGE_RESTRICTION_COOKIE_KEY, true)
    close()
  }, [close])

  const reject = useCallback(() => {
    onReject.current()
    close()
  }, [close])

  const value = useMemo<AgeRestrictionContextType>(
    () => ({
      isOpen,
      isConfirmed: Boolean(getCookie(AGE_RESTRICTION_COOKIE_KEY)),
      confirm,
      reject,
      open,
      close
    }),
    [close, confirm, open, reject, isOpen]
  )

  return <AgeRestrictionContext.Provider value={value}>{children}</AgeRestrictionContext.Provider>
}

export const useAgeRestriction = () => {
  const context = useContext(AgeRestrictionContext)

  if (context === undefined) {
    throw new Error('useAgeRestriction must be used within a AgeRestrictionProvider')
  }

  return context
}
