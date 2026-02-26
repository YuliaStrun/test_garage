import { useMemo } from 'react'

import { useRouter } from 'next/router'
import { AbstractIntlMessages, useLocale } from 'next-intl'

export enum Locale {
  RU = 'ru',
  EN = 'en'
}

type InitIntlProps = {
  messages?: AbstractIntlMessages
}

export const useInitIntl = (props: InitIntlProps) => {
  const router = useRouter()
  return {
    locale: router.locale || Locale.RU,
    timeZone: 'Europe/Moscow',
    messages: props.messages
  }
}

export const useIntlLanguage = () => {
  const router = useRouter()
  const locale = useLocale()

  // const handleLanguageChange = useCallback(() => {
  //   router.push(router.pathname, router.asPath, { locale: locale === Locale.EN ? Locale.RU : Locale.EN })
  // }, [locale, router])

  const getPathForNextLocale = useMemo(() => {
    return router.locale === router.defaultLocale ? `/en${router.asPath}` : router.asPath
  }, [router.locale, router.defaultLocale, router.asPath])

  return { lang: locale, getPathForNextLocale }
}

export const intlServerSideAction = (locale?: string) => {
  switch (locale) {
    case Locale.RU:
      return { messages: require('intl/ru.json') }
    default:
      return { messages: require('intl/en.json') }
  }
}
