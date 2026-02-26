import classnames from 'classnames'

import styles from 'styles/components/Section.module.scss'

type SectionProps = {
  withoutGrid?: boolean
  withoutPaddings?: boolean
  fullWidth?: boolean
  ariaLabel?: string
  children?: React.ReactNode
}

const Section = ({ withoutGrid, withoutPaddings, fullWidth, ariaLabel, children }: SectionProps) => (
  <section
    className={classnames(styles.section, {
      [styles.grid]: !withoutGrid,
      [styles.paddings]: !withoutPaddings,
      [styles.full]: fullWidth
    })}
    aria-label={ariaLabel}>
    {children}
  </section>
)

export default Section
