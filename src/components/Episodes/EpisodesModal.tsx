import { CSSProperties } from 'react'

import classnames from 'classnames'
import { Dialog, Modal } from 'react-aria-components'

import styles from 'styles/components/EpisodesModal.module.scss'
import { Episode } from 'types'

import Episodes from '.'
import { EpisodesModalContext } from './EpisodesModalContext'

type EpisodesModalProps = {
  episodes: Episode[]
  isMenuOpen: boolean
  mustAnimate: boolean
  animateDuration: number
  refCloseButton: React.RefObject<HTMLButtonElement>
  onClose: () => void
}

const EpisodesModal = ({
  episodes,
  isMenuOpen,
  mustAnimate,
  animateDuration,
  refCloseButton,
  onClose
}: EpisodesModalProps) => {
  const styleVariables: CSSProperties = {
    // @ts-ignore
    '--animate-duration': `${animateDuration}ms`
  }

  return (
    <Modal
      className={classnames(styles.modal, { [styles.open]: mustAnimate })}
      isOpen={isMenuOpen}
      style={styleVariables}>
      <EpisodesModalContext.Provider value={{ onClose }}>
        <Dialog className={styles.episodes}>
          <button className={styles.close} onClick={onClose} ref={refCloseButton}>
            <i className="icon-menu-close" />
          </button>

          <Episodes episodes={episodes} alwaysVertical isModal />
        </Dialog>
      </EpisodesModalContext.Provider>
    </Modal>
  )
}

export default EpisodesModal
