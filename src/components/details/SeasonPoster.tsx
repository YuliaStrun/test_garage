import Image from 'next/image'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/SeasonPoster.module.scss'
import type { Season } from 'types'
import setHTML from 'utils/setHTML'
import stringWithZero from 'utils/stringWithZero'

type SeasonPosterProps = {
  data: Season
}

const SeasonPoster = ({ data }: SeasonPosterProps) => {
  const t = useTranslations('base')

  return data.title && data.preview?.url ? (
    <>
      <h1 className={styles.title}>
        {data.numberTitle && (
          <span className={styles.season}>
            {t('season')} {stringWithZero(String(data.numberTitle))}.
          </span>
        )}
        <span {...setHTML({ html: data.title })} />
      </h1>

      <Image className={styles.image} src={data.preview.url} alt={data.preview.alt || ''} fill aria-hidden />
    </>
  ) : null
}

export default SeasonPoster
