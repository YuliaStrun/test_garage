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

  type BackgroundProfile = 'high' | 'medium' | 'low'
  type PortSetter = { set: (v: number | boolean | string) => void }
  type PatchOp = { getPort: (name: string) => PortSetter | undefined }
  type CablePatch = { getOpsByObjName: (name: string) => PatchOp[]; dispose?: () => void }

  const backgroundPatchRef = React.useRef<CablePatch | null>(null)
  const logoPatchRef = React.useRef<CablePatch | null>(null)
  const mainLoopOpBgRef = React.useRef<PatchOp | null>(null)
  const blurOpBgRef = React.useRef<PatchOp | null>(null)
  const noiseOpBgRef = React.useRef<PatchOp | null>(null)
  const backgroundCleanupFnsRef = React.useRef<Array<() => void>>([])
  const logoCleanupFnsRef = React.useRef<Array<() => void>>([])
  const observerRef = React.useRef<IntersectionObserver | null>(null)
  const benchmarkRafRef = React.useRef<number | null>(null)
  const isVisibleRef = React.useRef(true)
  const isInViewportRef = React.useRef(true)
  const backgroundProfileRef = React.useRef<BackgroundProfile>('high')

  const BACKGROUND_BENCHMARK_MS = 1000
  const BACKGROUND_FPS_UNFOCUSSED = 8

  function addBackgroundCleanup(fn: () => void) {
    backgroundCleanupFnsRef.current.push(fn)
  }

  function addLogoCleanup(fn: () => void) {
    logoCleanupFnsRef.current.push(fn)
  }

  function setOpPort(op: PatchOp | null, names: string[], value: number | boolean | string) {
    if (!op) return
    for (const name of names) {
      const port = op.getPort(name)
      if (!port) continue
      port.set(value)
      return
    }
  }

  function updateBackgroundRenderState() {
    setOpPort(mainLoopOpBgRef.current, ['Active'], isVisibleRef.current && isInViewportRef.current)
  }

  function getBenchmarkProfile(avgFps: number): BackgroundProfile {
    if (avgFps >= 50) return 'high'
    if (avgFps >= 26) return 'medium'
    return 'low'
  }

  function applyBackgroundProfile(profile: BackgroundProfile) {
    backgroundProfileRef.current = profile

    if (profile === 'high') {
      setOpPort(mainLoopOpBgRef.current, ['FPS Limit'], 0)
      setOpPort(mainLoopOpBgRef.current, ['Max Pixel Density (DPR)'], 2)
      setOpPort(blurOpBgRef.current, ['amount', 'Amount'], 10)
      setOpPort(noiseOpBgRef.current, ['Amount', 'amount'], 0.106)
      if (process.env.NODE_ENV !== 'production') {
        console.info('[about-bg] profile applied', {
          profile,
          fpsLimit: 0,
          dprCap: 2,
          blurAmount: 10,
          noiseAmount: 0.106
        })
      }
      return
    }

    if (profile === 'medium') {
      setOpPort(mainLoopOpBgRef.current, ['FPS Limit'], 30)
      setOpPort(mainLoopOpBgRef.current, ['Max Pixel Density (DPR)'], 1.5)
      setOpPort(blurOpBgRef.current, ['amount', 'Amount'], 8)
      setOpPort(noiseOpBgRef.current, ['Amount', 'amount'], 0.08)
      if (process.env.NODE_ENV !== 'production') {
        console.info('[about-bg] profile applied', {
          profile,
          fpsLimit: 30,
          dprCap: 1.5,
          blurAmount: 8,
          noiseAmount: 0.08
        })
      }
      return
    }

    setOpPort(mainLoopOpBgRef.current, ['FPS Limit'], 24)
    setOpPort(mainLoopOpBgRef.current, ['Max Pixel Density (DPR)'], 1.2)
    setOpPort(blurOpBgRef.current, ['amount', 'Amount'], 6)
    setOpPort(noiseOpBgRef.current, ['Amount', 'amount'], 0.06)
    if (process.env.NODE_ENV !== 'production') {
      console.info('[about-bg] profile applied', {
        profile,
        fpsLimit: 24,
        dprCap: 1.2,
        blurAmount: 6,
        noiseAmount: 0.06
      })
    }
  }

  function runBackgroundCleanup() {
    for (const cleanup of backgroundCleanupFnsRef.current.splice(0)) cleanup()
    observerRef.current?.disconnect()
    observerRef.current = null
    if (benchmarkRafRef.current) {
      cancelAnimationFrame(benchmarkRafRef.current)
      benchmarkRafRef.current = null
    }
    backgroundPatchRef.current?.dispose?.()
    backgroundPatchRef.current = null
    mainLoopOpBgRef.current = null
    blurOpBgRef.current = null
    noiseOpBgRef.current = null
    isVisibleRef.current = true
    isInViewportRef.current = true
  }

  React.useEffect(() => {
    return () => {
      runBackgroundCleanup()
      for (const cleanup of logoCleanupFnsRef.current.splice(0)) cleanup()
      logoPatchRef.current?.dispose?.()
      logoPatchRef.current = null
    }
  }, [])

  function runAdaptiveBenchmark() {
    const startedAt = performance.now()
    let frames = 0

    const tick = (timestamp: number) => {
      frames += 1
      const elapsed = timestamp - startedAt
      if (elapsed < BACKGROUND_BENCHMARK_MS) {
        benchmarkRafRef.current = requestAnimationFrame(tick)
        return
      }

      benchmarkRafRef.current = null
      const avgFps = (frames * 1000) / elapsed
      const finalProfile = getBenchmarkProfile(avgFps)
      if (process.env.NODE_ENV !== 'production') {
        console.info('[about-bg] benchmark result', {
          avgFps: Number(avgFps.toFixed(2)),
          elapsedMs: Math.round(elapsed),
          frames,
          finalProfile,
          deviceMemory: (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? null,
          hardwareConcurrency: navigator.hardwareConcurrency ?? null
        })
      }
      applyBackgroundProfile(finalProfile)
    }

    benchmarkRafRef.current = requestAnimationFrame(tick)
  }

  function handleLogoPatchReady() {
    // @ts-ignore
    const patch = new CABLES.Patch({
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
    logoPatchRef.current = patch as CablePatch
    // @ts-ignore
    CABLES.patch = patch

    const logoCanvas = document.getElementById('glcanvas-logo')
    const logoTouchMove = (e: Event) => {
      if (e instanceof TouchEvent) {
        e.preventDefault()
      }
    }
    logoCanvas?.addEventListener('touchmove', logoTouchMove, { passive: false })
    addLogoCleanup(() => logoCanvas?.removeEventListener('touchmove', logoTouchMove))
  }

  function handleBackgroundPatchReady() {
    runBackgroundCleanup()

    // @ts-ignore
    const patch = new CABLES1.Patch({
      // @ts-ignore
      patch: CABLES1.exportedPatch,
      prefixAssetPath: withBasePath('/background/'),
      assetPath: 'assets/',
      jsPath: 'js/',
      glCanvasId: 'glcanvas-background',
      fpsLimit: 0,
      onPatchLoaded: (patch: { getOpsByObjName: (name: string) => unknown[] }) => {
        const mainLoopOps = patch.getOpsByObjName('Ops.Gl.MainLoop_v2') as PatchOp[]
        mainLoopOpBgRef.current = mainLoopOps.length > 0 ? mainLoopOps[0] : null
        const blurOps = patch.getOpsByObjName('Ops.Gl.ImageCompose.Blur') as PatchOp[]
        blurOpBgRef.current = blurOps.length > 0 ? blurOps[0] : null
        const noiseOps = patch.getOpsByObjName('Ops.Gl.ImageCompose.Noise.Noise') as PatchOp[]
        noiseOpBgRef.current = noiseOps.length > 0 ? noiseOps[0] : null
        setOpPort(mainLoopOpBgRef.current, ['Reduce FPS unfocussed'], true)
        applyBackgroundProfile('high')
      },
      onFinishedLoading: () => {
        const canvas = document.getElementById('glcanvas-background')
        if (canvas && typeof IntersectionObserver !== 'undefined') {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              isInViewportRef.current = entry.isIntersecting
              updateBackgroundRenderState()
            })
          })
          observer.observe(canvas)
          observerRef.current = observer
          addBackgroundCleanup(() => observer.disconnect())
        }

        const visibilityHandler = () => {
          isVisibleRef.current = !document.hidden
          updateBackgroundRenderState()
        }
        document.addEventListener('visibilitychange', visibilityHandler)
        addBackgroundCleanup(() => document.removeEventListener('visibilitychange', visibilityHandler))

        const blurHandler = () => {
          setOpPort(mainLoopOpBgRef.current, ['FPS Limit'], BACKGROUND_FPS_UNFOCUSSED)
        }
        window.addEventListener('blur', blurHandler)
        addBackgroundCleanup(() => window.removeEventListener('blur', blurHandler))

        const focusHandler = () => {
          updateBackgroundRenderState()
          applyBackgroundProfile(backgroundProfileRef.current)
        }
        window.addEventListener('focus', focusHandler)
        addBackgroundCleanup(() => window.removeEventListener('focus', focusHandler))
        runAdaptiveBenchmark()
      }
    })
    backgroundPatchRef.current = patch as CablePatch
    // @ts-ignore
    CABLES1.patch = patch

    const backgroundCanvas = document.getElementById('glcanvas-background')
    const backgroundTouchMove = (e: Event) => {
      if (e instanceof TouchEvent) {
        e.preventDefault()
      }
    }
    backgroundCanvas?.addEventListener('touchmove', backgroundTouchMove, { passive: false })
    addBackgroundCleanup(() => backgroundCanvas?.removeEventListener('touchmove', backgroundTouchMove))
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
