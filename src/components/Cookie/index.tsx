import { useEffect, useId, useState } from 'react'

import classNames from 'classnames'
import { getCookie, setCookie } from 'cookies-next'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/Cookie.module.scss'

const COOKIE_KEY = 'COOKIE'

const Cookie = () => {
  const id = useId()
  const t = useTranslations('components.Cookie')
  const [isHide, setIsHide] = useState(true)

  useEffect(() => {
    if (!getCookie(COOKIE_KEY)) {
      setIsHide(false)
    }
  }, [])

  if (isHide) {
    return null
  }

  return (
    <section
      className={classNames('cookie-banner', styles.cookie)}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      aria-labelledby={`cookie_heading_${id}`}>
      <h2 className={styles.text} id={`cookie_heading_${id}`}>
        {t('text')}
      </h2>
      <button onClick={handleCookie} className={classNames('accept-cookies', styles.button)}>
        {t('button')}
      </button>
    </section>
  )

  function handleCookie() {
    setCookie(COOKIE_KEY, true)
    setIsHide(true)
  }
}

export default Cookie
