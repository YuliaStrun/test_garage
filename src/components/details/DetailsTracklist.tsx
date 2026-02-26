import { Maybe } from 'graphql/jsutils/Maybe'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsTracklist.module.scss'
import { DetailsTrack } from 'types/DetailsTrack'
import stringWithZero from 'utils/stringWithZero'

type DetailsTracklistProps = {
  data: Maybe<DetailsTrack>[]
  anchor: string | null
}

const DetailsTracklist = ({ data, anchor }: DetailsTracklistProps) => {
  const t = useTranslations('base')
  // если к треклисте не задано время, то будет автоматически проставляться номер трека (в админке можно оставлять поле пустым)
  const numberDigits = String(data.length).length

  return (
    <section className={styles.tracklist} id={anchor || undefined} aria-label={t('tracklist')}>
      <h3 className={styles.caption}>{t('tracklist')}</h3>

      <div className={styles.tracks}>
        <ul>
          {data
            .map((track, index) =>
              track?.title ? (
                <li key={String(index)} className={styles.track}>
                  <div className={styles.time}>{track.time || stringWithZero(String(index + 1), numberDigits)}</div>
                  <div className={styles.title}>
                    {track?.link ? (
                      <a href={track.link} target="_blank" className={styles.link} rel="nofollow noreferrer">
                        {track.title}
                      </a>
                    ) : (
                      track.title
                    )}
                  </div>
                </li>
              ) : null
            )
            .filter(Boolean)}
        </ul>
      </div>
    </section>
  )
}

export default DetailsTracklist
