import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsPartners.module.scss'
import type { Partner } from 'types'

type DetailsPartnersProps = {
  data: Partner[]
  withSmallCaption?: boolean
  anchor: string | null
  title: string | null
}

const DetailsPartners = ({ data, withSmallCaption, anchor, title }: DetailsPartnersProps) => {
  const t = useTranslations('components.DetailsPartners')

  return (
    <section
      className={withSmallCaption ? styles['partners-small'] : styles.partners}
      id={anchor || undefined}
      aria-label={t('partners')}>
      <h3 className={withSmallCaption ? styles['caption-small'] : styles.caption}>{title || t('title')}</h3>

      <ul className={styles.table}>
        {data.map(({ name, link, logo }, index) => {
          // @ts-ignore
          const style: CSSProperties = { ['--i']: index }

          return logo?.url ? (
            <li key={String(index)} className={styles.partner} style={style} aria-label={name || undefined}>
              {link ? (
                <Link className={styles.link} href={link}>
                  <PartnerImage {...logo} />
                </Link>
              ) : (
                <PartnerImage {...logo} />
              )}
            </li>
          ) : null
        })}
      </ul>
    </section>
  )
}

const PartnerImage = (logo: Partner['logo']) =>
  logo?.url ? (
    <Image
      src={logo.url}
      width={logo.width}
      height={logo.height}
      alt={logo.alt || ''}
      sizes="(min-width: 1024px) 25vw, 50vw"
      aria-hidden
    />
  ) : null

export default DetailsPartners
