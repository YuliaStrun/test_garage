import { useQuery } from '@apollo/client'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { Dialog, Modal } from 'react-aria-components'

import { MenuQuery, MenuQueryVariables } from 'schemas/__generated__/menu.generated'
import { QUERY_MENU } from 'schemas/menu'
import styles from 'styles/components/MobileMenu.module.scss'
import { EventAction } from 'types'
import analytics from 'utils/analytics'
import { Locale, useIntlLanguage } from 'utils/intl'

import Header from '../Header'

type MobileMenuProps = {
  isOpen: boolean
  setOpen: (_isOpen: boolean) => void
  isMainPage?: boolean
}

const MobileMenu = ({ isOpen, setOpen, isMainPage }: MobileMenuProps) => {
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
      analytics.sendEvent('mobile-menu', events[eventId], labels[eventId])
    }
  }

  const handleButtonCloseClick = () => setOpen(false)

  return (
    <Modal className={styles.menu} isOpen={isOpen} onOpenChange={setOpen}>
      <Dialog className={styles.dialog}>
        <Header
          isMobileMenuOpen={isOpen}
          toggleMobileMenuOpen={handleButtonCloseClick}
          isMainPage={isMainPage}
          inMobileMenu
        />
        <div className={styles.content}>
          <nav className={styles.navigation}>
            {data?.menu?.data?.attributes?.items?.map((item) => {
              if (!item) return null
              const isActive = pathname.indexOf(String(item.link)) !== -1
              return item.disabled ? (
                <button key={item.id} className={styles.item} disabled>
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={String(item.link)}
                  className={classNames(styles.item, { [styles.active]: isActive })}
                  onClick={sendEvent(Number(item.id) - 1)}>
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <a href={getPathForNextLocale} className={styles.lang} aria-label={t('locale')}>
            {nextLang}
          </a>
        </div>
      </Dialog>
    </Modal>
  )
}

export default MobileMenu
