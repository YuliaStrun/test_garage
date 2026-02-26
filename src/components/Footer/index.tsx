import classnames from 'classnames'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/Footer.module.scss'

const Footer = () => {
  const t = useTranslations('components.Footer')

  return (
    <footer className={styles.footer}>
      <h2 className="sr-only">{t('sr_title')}</h2>
      <div className={styles.ruler} />

      <a
        className={classnames(styles.logo, styles.link)}
        href="https://garagemca.org/"
        target="_blank"
        aria-label={t('open_site')}>
        <i className="icon-logo-garage" />
      </a>

      <div className={styles.text}>© {t('garage')}</div>

      <Link className={styles.link} href="mailto:hi@garagemca.radio">
        hi@garagemca.radio
      </Link>
    </footer>
  )
}

export default Footer
