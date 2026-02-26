import React from 'react'

import classnames from 'classnames'

import styles from 'styles/components/ButtonSimple.module.scss'

type Props = {
  component?: 'button' | 'a'
  variant?: 'normal' | 'big'
}

type SimpleButtonProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & Props)
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & Props)

const SimpleButton = ({
  component = 'button',
  variant = 'normal',
  children,
  className,
  ...props
}: SimpleButtonProps) => {
  return React.createElement(
    component,
    {
      ...props,
      className: classnames(styles.button, styles[variant], className)
    },
    children
  )
}

export default SimpleButton
