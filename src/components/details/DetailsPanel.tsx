import type { Maybe } from 'graphql/jsutils/Maybe'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import PlayButton from 'components/buttons/PlayButton'
import { useHistory } from 'components/History'
import styles from 'styles/components/DetailsPanel.module.scss'
import { Track } from 'types'

type DetailsPanelProps = {
  duration: Maybe<string>
  forAdults?: Maybe<boolean>
  playerCurrent: Maybe<string>
  playersQueue: Track[] | undefined
  onMenuOpen?: () => void
}

const DetailsPanel = ({ duration, forAdults, playerCurrent, playersQueue, onMenuOpen }: DetailsPanelProps) => {
  const router = useRouter()
  const t = useTranslations('base')
  const { getPreviousUrl } = useHistory()

  const onClose = () => {
    const previousUrl = getPreviousUrl()
    const seasonPath = `/seasons/${router.query['seasonSlug']}`
    const isSameRoute = previousUrl === router.asPath
    const isEpisodePrevious = previousUrl.startsWith(`${seasonPath}/`)
    const isSeasonPrevious = previousUrl === seasonPath

    if (isSameRoute || isEpisodePrevious || isSeasonPrevious) {
      router.replace(seasonPath, undefined, { shallow: false })
    } else {
      router.back()
    }
  }

  return (
    <div className={styles.panel}>
      <button className={styles.close} onClick={onClose} aria-label={t('back')}>
        <i className="icon-menu-close" />
      </button>

      <div className={styles.actions}>
        {forAdults && <div className={styles.restriction}>18+</div>}

        <PlayButton
          className={styles.play}
          variant="big"
          duration={duration}
          playerCurrent={playerCurrent}
          playersQueue={playersQueue}
          forAdults={forAdults}
          eventCategory="material-details"
        />

        {onMenuOpen && (
          <button className={styles.menu} onClick={onMenuOpen}>
            <i className="icon-menu" />
          </button>
        )}
      </div>
    </div>
  )
}

export default DetailsPanel
