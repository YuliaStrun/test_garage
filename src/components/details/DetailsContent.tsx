import { Maybe } from 'graphql/jsutils/Maybe'
import { useTranslations } from 'next-intl'

import styles from 'styles/components/DetailsContent.module.scss'
import setHTML from 'utils/setHTML'

type DetailsContentProps = {
  html: Maybe<string>
  anchor: string | null
}

const replaceYoutubeOembedWithIframe = (htmlString: string) => {
  const oembedRegex = /<oembed url="https:\/\/www\.youtube\.com\/watch\?v=([^"]+)"><\/oembed>/g

  return htmlString.replace(oembedRegex, (_, videoIdWithParams: string) => {
    const [videoId, ...params] = videoIdWithParams.split('&amp;')
    const start = params
      .find((param) => param.startsWith('t='))
      ?.split('=')[1]
      .replace(/((\d+)h)*((\d+)m)*((\d+)s)*/, (_, _h, h, _m, m, _s, s) => {
        return String(Number(h || 0) * 60 * 60 + Number(m || 0) * 60 + Number(s || 0))
      })
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?si=nVDVNaKN95do6sqa${start ? `&start=${start}` : ''}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  })
}

const DetailsContent = ({ html, anchor }: DetailsContentProps) => {
  const t = useTranslations('base')
  const labels: Record<string, string> = {
    'About the track': t('about_episode'),
    bio: t('bio')
  }

  return html ? (
    <section
      id={anchor || undefined}
      className={styles.content}
      aria-label={anchor ? labels[anchor] : undefined}
      {...setHTML({ html: replaceYoutubeOembedWithIframe(html) })}
    />
  ) : null
}

export default DetailsContent
