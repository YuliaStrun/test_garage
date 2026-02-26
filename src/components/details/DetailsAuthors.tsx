import Image from 'next/image'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsAuthors.module.scss'
import { ImageData } from 'types'

type DetailsAuthorsProps = {
  description: string
  image: ImageData
}

const DetailsAuthors = ({ description, image }: DetailsAuthorsProps) => {
  const t = useTranslations('base')

  return (
    <div className={styles.authors}>
      <h3 className={styles.caption}>{t('authors')}</h3>
      <div className={styles.text}>{description}</div>
      {image.url && (
        <div className={styles['authors-image']}>
          <Image
            className={styles.image}
            src={image.url}
            alt={image.alt || ''}
            sizes="(min-width: 1440px) 17vw, (min-width: 768) 32vw, 64vw"
            fill
            aria-hidden
          />
        </div>
      )}
    </div>
  )
}

export default DetailsAuthors
