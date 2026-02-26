import { ButtonHTMLAttributes } from 'react'

import classnames from 'classnames'

import styles from 'styles/components/PlayerButton.module.scss'

type PlayerButtonProps = {
  actionType: 'prev' | 'next' | 'play' | 'pause' | 'menu' | 'close' | 'collapse'
  active?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const PlayerButton = ({ actionType, active, ...attrs }: PlayerButtonProps) => {
  return (
    <button className={classnames(styles.button, { [styles.active]: active })} type="button" {...attrs}>
      <i className={classnames(`icon-${actionType}`, styles['button-icon'])} aria-hidden />
    </button>
  )
}
