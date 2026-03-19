import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import shareEn from 'assets/img/share_en.jpg'
import shareRu from 'assets/img/share_ru.jpg'

type LinkTags = React.LinkHTMLAttributes<HTMLLinkElement>[]
type MetaTags = React.MetaHTMLAttributes<HTMLMetaElement>[]
type ScriptTags = React.ScriptHTMLAttributes<HTMLScriptElement>[]

const metaTags: MetaTags = [
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'msapplication-TileColor', content: '#000000' },
  { name: 'theme-color', content: '#000000' }
]

export const GlobalMeta = React.memo(function Meta() {
  const { locale, basePath } = useRouter()
  const t = useTranslations('meta')
  const defaultImage = (locale === 'ru' ? shareRu : shareEn).src
  const withBasePath = (path: string) => `${basePath || ''}${path}`
  const globalLinkTags: LinkTags = [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: withBasePath('/favicon/safari-pinned-tab.svg')
    },
    {
      rel: 'manifest',
      href: withBasePath('/favicon/site.webmanifest'),
      type: 'application/manifest+json'
    },
    {
      rel: 'mask-icon',
      href: withBasePath('/favicon/safari-pinned-tab.svg'),
      color: '#000000'
    }
  ]
  return (
    <Head>
      <title>{t('defaultTitle')}</title>
      <meta property="og:site_name" content={t('defaultTitle')} />
      <meta name="twitter:title" content={t('defaultTitle')} />

      <meta name="description" content={t('defaultDescription')} />
      <meta property="og:description" content={t('defaultDescription')} />
      <meta name="twitter:description" content={t('defaultDescription')} />

      <meta name="image_src" content={defaultImage} />
      <meta property="og:image" content={defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={defaultImage} />

      {metaTags.map((meta, index) => (
        <React.Fragment key={String(index)}>
          <meta {...meta} />
        </React.Fragment>
      ))}
      {globalLinkTags.map((link, index) => (
        <React.Fragment key={String(index)}>
          <link {...link} />
        </React.Fragment>
      ))}
    </Head>
  )
})

interface MetaProps {
  title?: string
  description?: string
  image?: string
  css?: string[]
  js?: string[]
}

function Meta({ title, description, image, css, js }: MetaProps) {
  const t = useTranslations('meta')

  let linkTags: LinkTags = []
  let metaTags: MetaTags = []
  let scriptTags: ScriptTags = []

  if (title) {
    metaTags = metaTags.concat([
      { property: 'og:title', content: title },
      { name: 'twitter:title', content: title }
    ])
  }

  if (description) {
    metaTags = metaTags.concat([
      { name: 'description', content: description },
      { property: 'og:description', content: description },
      { name: 'twitter:description', content: description }
    ])
  }

  if (image) {
    metaTags = metaTags.concat([
      { name: 'image_src', content: image },
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image }
    ])
  }

  if (css && css.length > 0) {
    linkTags = linkTags.concat(css.map((href) => ({ rel: 'stylesheet', href })))
  }

  if (js && js.length > 0) {
    scriptTags = scriptTags.concat(js.map((src) => ({ src })))
  }

  return (
    <Head>
      <title>{title ? `${title} | ${t('defaultTitle')}` : t('defaultTitle')}</title>
      {metaTags.map((meta, index) => (
        <React.Fragment key={String(index)}>
          <meta {...meta} />
        </React.Fragment>
      ))}
      {linkTags.map((link, index) => (
        <React.Fragment key={String(index)}>
          <link {...link} />
        </React.Fragment>
      ))}
      {scriptTags.map((script, index) => (
        <React.Fragment key={String(index)}>
          <script {...script} />
        </React.Fragment>
      ))}
    </Head>
  )
}

export default Meta
