import 'styles/base/preflight.scss'
import 'styles/base/fonts.scss'
import 'styles/base/globals.scss'
import 'styles/base/icon-codes.css'

import 'focus-visible'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import { NextIntlClientProvider } from 'next-intl'
import NProgress from 'nprogress'

import AgeRestriction from 'components/AgeRestriction'
import { AgeRestrictionProvider } from 'components/AgeRestriction/AgeRestrictionContext'
import Cookie from 'components/Cookie'
import { HistoryProvider } from 'components/History'
import { GlobalMeta } from 'components/Meta'
import Player from 'components/Player'
import { PlayerContextWrapper } from 'components/Player/PlayerContext'
import { useApollo } from 'utils/apolloClient'
import { useInitIntl } from 'utils/intl'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const apolloClient = useApollo(pageProps)
  const intlProps = useInitIntl(pageProps)

  // Определяем, является ли это специальной страницей
  const isSystemPage = ['/404', '/500', '/_error'].includes(router.pathname)

  // Упрощённый рендер для специальных страниц (чтобы избавится от MISSING_MESSAGE и не делать кастомные страницы)
  if (isSystemPage) {
    return <Component {...pageProps} />
  }

  return (
    <NextIntlClientProvider {...intlProps}>
      <GlobalMeta />
      <Cookie />
      <AgeRestrictionProvider>
        <ApolloProvider client={apolloClient}>
          <HistoryProvider>
            <PlayerContextWrapper>
              <Component {...pageProps} />
              <Player />
            </PlayerContextWrapper>
          </HistoryProvider>
        </ApolloProvider>
        <AgeRestriction />
      </AgeRestrictionProvider>
    </NextIntlClientProvider>
  )
}

export default App
