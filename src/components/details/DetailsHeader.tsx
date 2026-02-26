import type { Maybe } from 'graphql/jsutils/Maybe'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/components/DetailsHeader.module.scss'
import type { ImageData } from 'types'
import setHTML from 'utils/setHTML'

type DetailsHeaderProps = {
  title: Maybe<string>
  author: {
    name: Maybe<string>
    preview: Maybe<ImageData>
  }
  href: string
  hrefText: string
}

const DetailsHeader = ({ title, href, hrefText, author }: DetailsHeaderProps) => (
  <>
    <Link className={styles.season} href={href} {...setHTML({ html: hrefText })} />

    <h1 className={styles.title}>{title}</h1>

    {author.name && (
      <div className={styles.author}>
        {author.preview?.url && (
          <div className={styles['author-preview']}>
            <Image className={styles.image} src={author.preview.url} alt={author.preview.alt || ''} fill aria-hidden />
          </div>
        )}
        <span className={styles['author-name']}>{author.name}</span>
      </div>
    )}
  </>
)

export default DetailsHeader
