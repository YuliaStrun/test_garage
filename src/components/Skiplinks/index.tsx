import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/Skiplinks.module.scss'

export const ANCHOR_CONTENT = 'content'

const Skiplinks = () => {
  const t = useTranslations('components.Skiplinks')

  return (
    <div className={styles.skiplinks}>
      <Link
        className={styles.skiplink}
        href={`#${ANCHOR_CONTENT}`}
        onClick={() => {
          const link = document.activeElement as HTMLLinkElement
          if (link.blur) link.blur()
        }}>
        {t('content')}
      </Link>
    </div>
  )
}

export default Skiplinks
