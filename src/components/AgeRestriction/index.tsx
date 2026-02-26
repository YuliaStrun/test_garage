import { useTranslations } from 'next-intl'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'

import SimpleButton from 'components/buttons/SimpleButton'
import styles from 'styles/components/AgeRestriction.module.scss'

import { useAgeRestriction } from './AgeRestrictionContext'

const AgeRestriction = () => {
  const t = useTranslations('components.AgeRestriction')

  const { isOpen, confirm, reject } = useAgeRestriction()

  return (
    <ModalOverlay className={styles.overlay} isOpen={isOpen}>
      <Modal>
        <Dialog className={styles.popup}>
          <button className={styles.close} onClick={reject}>
            <i className="icon-menu-close" />
          </button>

          <div className={styles.content}>
            <div className={styles.text}>{t('text')}</div>

            <SimpleButton className={styles.confirm} onClick={confirm}>
              {t('button')}
            </SimpleButton>
          </div>
        </Dialog>
      </Modal>
    </ModalOverlay>
  )
}

export default AgeRestriction
