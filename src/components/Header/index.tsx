import { useQuery } from '@apollo/client'
import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import { MenuQuery, MenuQueryVariables } from 'schemas/__generated__/menu.generated'
import { QUERY_MENU } from 'schemas/menu'
import styles from 'styles/components/Header.module.scss'
import { EventAction } from 'types'
import analytics from 'utils/analytics'
import { Locale, useIntlLanguage } from 'utils/intl'

import Marker from './Marker'

const logo = {
  white: require('assets/img/logo-white.svg').default.src,
  black: require('assets/img/logo-black.svg').default.src
}

type HeaderProps = {
  isMainPage?: boolean
  isMobileMenuOpen: boolean
  toggleMobileMenuOpen: () => void
  inMobileMenu?: boolean
}

const Header = ({ isMainPage, isMobileMenuOpen, toggleMobileMenuOpen, inMobileMenu }: HeaderProps) => {
  const t = useTranslations('components.Header')
  const { locale, pathname } = useRouter()
  const { data } = useQuery<MenuQuery, MenuQueryVariables>(QUERY_MENU, {
    variables: { locale }
  })
  const { lang, getPathForNextLocale } = useIntlLanguage()
  const nextLang = lang === Locale.EN ? Locale.RU : Locale.EN

  const events: EventAction[] = ['goto-seasons', 'goto-about', 'goto-specials']
  const labels = ['Сезоны', 'О проекте', 'Спецвыпуски']
  const sendEvent = (eventId: number) => () => {
    if (events[eventId]) {
      analytics.sendEvent('header-menu', events[eventId], labels[eventId])
    }
  }
  const logoImage = ['/seasons', '/specials', '/about'].includes(pathname) ? logo.black : logo.white

  const inMobileMenuProps = inMobileMenu ? { 'aria-hidden': true, tabIndex: -1 } : {}

  return (
    <header className={classnames(styles.header, { [styles.main]: isMainPage })}>
      <h2 className="sr-only">{t('title')}</h2>

      <nav className={styles.navigation}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Link className={styles['logo-link']} href="/" aria-label={t('goToMain')} {...inMobileMenuProps}>
              <div className={styles.image}>
                <Image src={logo.white} alt="" fill aria-hidden className="mobile-only" />
                <Image src={logoImage} alt="" fill aria-hidden className="tablet-only" />
              </div>
            </Link>
          </div>

          <div className={styles.dash} />

          <Link href="/" className={styles.radio} {...inMobileMenuProps}>
            {t('radio')}
          </Link>

          <div className={styles.dash} />

          <button
            className={styles.burger}
            onClick={toggleMobileMenuOpen}
            aria-label={isMobileMenuOpen ? t('menu.close') : t('menu.open')}>
            <i className={`icon-menu-${isMobileMenuOpen ? 'close' : 'burger'}`} aria-hidden />
          </button>
        </div>

        {renderBottomPanel()}
      </nav>
    </header>
  )

  function renderBottomPanel() {
    return (
      <div className={styles.bottom}>
        {data?.menu?.data?.attributes?.items?.map((item) => {
          if (!item) return null

          const isActive = pathname === String(item.link)

          return item.disabled ? (
            <button key={item.id} className={styles.item} disabled>
              {item.name}
            </button>
          ) : (
            <Link
              key={item.id}
              href={String(item.link)}
              className={classnames(styles.item, { [styles.active]: isActive })}
              onClick={sendEvent(Number(item.id) - 1)}>
              {item.name}
            </Link>
          )
        })}

        <a href={getPathForNextLocale} className={styles.lang} aria-label={t('locale')}>
          {nextLang}
        </a>

        <Marker />
      </div>
    )
  }
}

export default Header
