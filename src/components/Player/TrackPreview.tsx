import classnames from 'classnames'
import { Maybe } from 'graphql/jsutils/Maybe'
import Image from 'next/image'

import styles from 'styles/components/Player.module.scss'
import type { ImageData } from 'types'

type TrackPreviewProps = {
  data: Maybe<ImageData>
}

export const TrackPreview = ({ data }: TrackPreviewProps) => {
  return data?.url ? (
    <div className={classnames(styles['image-wrapper'])}>
      <Image className={styles.image} quality={76} src={data.url} alt={data.alt || ''} sizes="42px" fill aria-hidden />
    </div>
  ) : null
}
