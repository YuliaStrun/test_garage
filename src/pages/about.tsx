import React from 'react'

import { useQuery } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useTranslations } from 'next-intl'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import { AboutPageQuery, AboutPageQueryVariables } from 'schemas/__generated__/pages.generated'
import { QUERY_ABOUT_PAGE } from 'schemas/pages'
import styles from 'styles/pages/About.module.scss'
import addMenuQuery from 'utils/addMenuQuery'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import setHTML from 'utils/setHTML'
import { useWindowHeight } from 'utils/useWindowHeight'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const resolvedLocale = locale ?? 'ru'
  const apolloClient = initializeApollo()

  await Promise.all([
    apolloClient.query<AboutPageQuery, AboutPageQueryVariables>({
      query: QUERY_ABOUT_PAGE,
      variables: { locale: resolvedLocale }
    }),
    addMenuQuery(apolloClient, String(resolvedLocale))
  ])

  return addApolloState(apolloClient, {
    props: {
      ...intlServerSideAction(resolvedLocale)
    }
  })
}

const About: NextPage = () => {
  const t = useTranslations('pages.about')
  const { locale, basePath } = useRouter()
  const { data } = useQuery<AboutPageQuery, AboutPageQueryVariables>(QUERY_ABOUT_PAGE, { variables: { locale } })
  const withBasePath = (path: string) => `${basePath || ''}${path}`

  const { height } = useWindowHeight()
  const style: React.CSSProperties = {
    // @ts-ignore
    ['--visual-viewport-height']: height
  }

  const BACKGROUND_FPS = 15
  const BACKGROUND_FPS_UNFOCUSSED = 8

  function handleLogoPatchReady() {
    // @ts-ignore
    CABLES.patch = new CABLES.Patch({
      // @ts-ignore
      patch: CABLES.exportedPatch,
      prefixAssetPath: withBasePath('/logo/'),
      assetPath: 'assets/',
      jsPath: 'js/',
      glCanvasId: 'glcanvas-logo',
      clearCanvasColor: true,
      fpsLimit: 30,
      canvas: { alpha: true, premultipliedAlpha: true },
      onPatchLoaded: (patch: {
        getOpsByObjName: (name: string) => { getPort: (name: string) => { set: (v: number) => void } }[]
      }) => {
        const mainLoopOps = patch.getOpsByObjName('Ops.Gl.MainLoop_v2')
        if (mainLoopOps?.length > 0) {
          const fpsPort = mainLoopOps[0].getPort('FPS Limit')
          if (fpsPort) fpsPort.set(30)
        }
      }
    })

    document.getElementById('glcanvas-logo')?.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault()
      },
      false
    )
  }

  function handleBackgroundPatchReady() {
    let mainLoopOpBg: unknown = null
    let isVisible = true
    let isInViewport = true

    function updateBackgroundRenderState() {
      if (!mainLoopOpBg) return
      const activePort = (mainLoopOpBg as { getPort: (name: string) => { set: (v: boolean) => void } }).getPort(
        'Active'
      )
      if (activePort) activePort.set(isVisible && isInViewport)
    }

    // @ts-ignore
    CABLES1.patch = new CABLES1.Patch({
      // @ts-ignore
      patch: CABLES1.exportedPatch,
      prefixAssetPath: withBasePath('/background/'),
      assetPath: 'assets/',
      jsPath: 'js/',
      glCanvasId: 'glcanvas-background',
      fpsLimit: BACKGROUND_FPS,
      onPatchLoaded: (patch: { getOpsByObjName: (name: string) => unknown[] }) => {
        const ops = patch.getOpsByObjName('Ops.Gl.MainLoop_v2')
        if (ops.length > 0) {
          mainLoopOpBg = ops[0]
          const fpsPort = (mainLoopOpBg as { getPort: (name: string) => { set: (v: number) => void } }).getPort(
            'FPS Limit'
          )
          if (fpsPort) fpsPort.set(BACKGROUND_FPS)
          const reducePort = (mainLoopOpBg as { getPort: (name: string) => { set: (v: boolean) => void } }).getPort(
            'Reduce FPS unfocussed'
          )
          if (reducePort) reducePort.set(true)
        }
      },
      onFinishedLoading: (patch: { getOpsByObjName: (name: string) => unknown[] }) => {
        if (mainLoopOpBg) {
          const fpsPort = (mainLoopOpBg as { getPort: (name: string) => { set: (v: number) => void } }).getPort(
            'FPS Limit'
          )
          if (fpsPort) fpsPort.set(BACKGROUND_FPS)
        }
        const canvas = document.getElementById('glcanvas-background')
        if (canvas && typeof IntersectionObserver !== 'undefined') {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              isInViewport = entry.isIntersecting
              updateBackgroundRenderState()
            })
          })
          observer.observe(canvas)
        }
        document.addEventListener('visibilitychange', () => {
          isVisible = !document.hidden
          updateBackgroundRenderState()
        })
        window.addEventListener('blur', () => {
          if (!mainLoopOpBg) return
          const fpsPort = (mainLoopOpBg as { getPort: (name: string) => { set: (v: number) => void } }).getPort(
            'FPS Limit'
          )
          if (fpsPort) fpsPort.set(BACKGROUND_FPS_UNFOCUSSED)
        })
        window.addEventListener('focus', () => {
          if (!mainLoopOpBg) return
          const fpsPort = (mainLoopOpBg as { getPort: (name: string) => { set: (v: number) => void } }).getPort(
            'FPS Limit'
          )
          if (fpsPort) fpsPort.set(BACKGROUND_FPS)
        })
      }
    })

    document.getElementById('glcanvas-background')?.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault()
      },
      false
    )
  }

  return (
    <Layout className={styles.main} style={style}>
      <Meta
        title={data?.aboutPage?.data?.attributes?.metaTitle || undefined}
        description={data?.aboutPage?.data?.attributes?.metaDescription || undefined}
        image={data?.aboutPage?.data?.attributes?.metaImage?.data?.attributes?.url || undefined}
      />
      <div className={styles.content}>
        <div className={styles.background} aria-hidden>
          <div className={styles.background__wrap}>
            <canvas id="glcanvas-background" className={styles.background__canvas} />
          </div>
        </div>

        <h1 className={styles.title}>{t('nameProject')}</h1>

        <div className={styles.ornament} aria-hidden>
          <div className={styles.ruler}>
            <div className={styles.marker} />
          </div>
          <canvas id="glcanvas-logo" className={styles.logo} />
          <div className={styles.ruler}>
            <div className={styles.marker} />
          </div>
        </div>

        <a id={ANCHOR_CONTENT} />
        <div className={styles.about} {...setHTML({ html: data?.aboutPage?.data?.attributes?.head || '' })} />
        <div className={styles.description} {...setHTML({ html: data?.aboutPage?.data?.attributes?.text || '' })} />
      </div>
      <Script src={withBasePath('/logo/js/patch.js')} onReady={handleLogoPatchReady} />
      <Script src={withBasePath('/background/js/patch.js')} onReady={handleBackgroundPatchReady} />
    </Layout>
  )
}

export default About
