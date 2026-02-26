import { useEffect, useRef } from 'react'

import Router from 'next/router'

import { useCheckViewport } from './useCheckViewport'

export const DETAILS_PANEL_ID = 's-details-panel'
export const EPISODES_PANEL_ID = 's-episodes-panel'

export const useBlurDetails = () => {
  const { isCustomWidth: isTablet } = useCheckViewport({ customWidth: 768 })
  const nextRouteRef = useRef('')
  const isRoutedRef = useRef(true)

  /*
    Чтобы полностью произошел блюр предыдущей страницы, нужно приостановить роутинг, сделать блюр и продолжить роутинг.
    Для этого используем хак с выкидыванием эксепшена при роутинге и остановкой потока выполнения.
    Вместе с тем, при экспешене вызываем событие роутера routeChangeError, в обработчике которого блюрим страницу
    и потом только переходим по следующему роуту
    Побочный эффект - появление в консоли сообщения об ошибке
   */
  useEffect(() => {
    const preventRouting = (nextRoute: string) => {
      const currentLocale = Router.locale
      const nextLocale = nextRoute.startsWith('/en/') ? 'en' : 'ru'
      const isLocaleChanges = currentLocale !== nextLocale
      const mustPrevent = !isLocaleChanges && nextRoute.startsWith('/seasons/')

      if (!mustPrevent || !isRoutedRef.current) return

      isRoutedRef.current = false
      nextRouteRef.current = nextRoute
      Router.events.emit('routeChangeError')
      throw 'Prevent immediately routing. Please ignore this error'
    }

    const blurDetailsPanel = () => {
      const nextRoute = nextRouteRef.current
      const detailsPanel = document.getElementById(DETAILS_PANEL_ID)
      const episodesPanel = document.getElementById(EPISODES_PANEL_ID)
      const controlsPanel = document.getElementById('s-panel')
      const mustBluring = nextRoute.includes(String(Router.query['seasonSlug']))

      if (!mustBluring || !detailsPanel) return

      detailsPanel.style.transition = 'filter 0.6s ease-in'
      detailsPanel.style.filter = 'blur(20px)'

      if (!isTablet && episodesPanel) {
        episodesPanel.style.transition = 'filter 0.6s ease-in'
        episodesPanel.style.filter = 'blur(20px)'
      }

      if (controlsPanel) {
        controlsPanel.style.right = '20px'
      }

      setTimeout(() => {
        const parts = Router.pathname.split('/')
        const nextPathname = Router.pathname.endsWith('[seasonSlug]')
          ? `${Router.pathname}/[episodeSlug]`
          : parts.length === nextRouteRef.current.split('/').length
            ? Router.pathname
            : parts.splice(0, parts.length - 1).join('/')

        Router.push(nextPathname, nextRouteRef.current)
      }, 600)
    }

    const focusDetailsPanel = () => {
      const detailsPanel = document.getElementById(DETAILS_PANEL_ID)
      const episodesPanel = document.getElementById(EPISODES_PANEL_ID)
      const controlsPanel = document.getElementById('s-panel')

      isRoutedRef.current = true

      if (!detailsPanel) return

      detailsPanel.style.filter = 'blur(20px)'

      if (!isTablet && episodesPanel) {
        episodesPanel.style.filter = 'blur(20px)'
      }

      if (controlsPanel) {
        controlsPanel.style.right = '20px'
      }

      setTimeout(() => {
        detailsPanel.style.transition = 'filter 0.5s ease'
        detailsPanel.style.filter = 'blur(0px)'

        if (!isTablet && episodesPanel) {
          episodesPanel.style.transition = 'filter 0.5s ease'
          episodesPanel.style.filter = 'blur(0px)'
        }

        setTimeout(() => {
          detailsPanel.style.transition = ''
          detailsPanel.style.filter = ''

          if (episodesPanel) {
            episodesPanel.style.transition = ''
            episodesPanel.style.filter = ''
          }

          if (controlsPanel) {
            controlsPanel.style.right = 'calc(50% + 33px)'
          }
        }, 500)
      })
    }

    Router.events.on('routeChangeStart', preventRouting)
    Router.events.on('routeChangeError', blurDetailsPanel)
    Router.events.on('routeChangeComplete', focusDetailsPanel)

    return () => {
      Router.events.off('routeChangeStart', preventRouting)
      Router.events.off('routeChangeError', blurDetailsPanel)
      Router.events.off('routeChangeComplete', focusDetailsPanel)
    }
  }, [isTablet])
}
