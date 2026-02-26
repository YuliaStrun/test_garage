import { CSSProperties, useEffect, useRef } from 'react'

import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import SeasonPoster from 'components/details/SeasonPoster'
import styles from 'styles/components/Episodes.module.scss'
import type { Episode, Season } from 'types'

import EpisodesList from './EpisodesList'

const THUMB_HORIZONTAL_OFFSET = 14
const THUMB_VERTICAL_OFFSET = 87

const LIST_PADDING_BOTTOM = 50
const LIST_PADDING_TOP = {
  tablet: 139,
  desktop: 132
}
const LIST_TOP_OFFSET = {
  tablet: 139,
  desktop: 0
}

type EpisodesProps = {
  episodes: Episode[]
  season?: Season
  alwaysVertical?: boolean
  isModal?: boolean
}

const Episodes = ({ season, episodes, alwaysVertical, isModal }: EpisodesProps) => {
  const router = useRouter()
  const thumbRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const episodesWrapperRef = useRef<HTMLDivElement>(null)
  const activeEpisodeRef = useRef<HTMLLIElement>(null)
  const t = useTranslations('base')

  const count = episodes.length
  const styleVertical = { [styles.vertical]: alwaysVertical, [styles.modal]: isModal }

  const styleListWrapper: CSSProperties = {
    // @ts-ignore
    '--padding-top-tablet': `${LIST_PADDING_TOP.tablet}px`,
    '--padding-top-desktop': `${LIST_PADDING_TOP.desktop}px`,
    '--padding-bottom': `${LIST_PADDING_BOTTOM}px`
  }

  useEffect(() => {
    if (!episodesWrapperRef.current) return

    const content = contentRef.current
    const wrapper = episodesWrapperRef.current

    const onScroll = () => {
      if (!wrapper || !thumbRef.current) return

      const viewport = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
      const scrollPercent =
        wrapper.scrollWidth !== wrapper.clientWidth
          ? wrapper.scrollLeft / (wrapper.scrollWidth - wrapper.clientWidth)
          : 0
      const left =
        (wrapper.clientWidth - THUMB_HORIZONTAL_OFFSET * 2) * (scrollPercent > 1 ? 1 : scrollPercent) +
        THUMB_HORIZONTAL_OFFSET

      thumbRef.current.style.left = `${Math.round(left)}px`

      setTimeout(() => {
        if (!thumbRef.current || (viewport === 'mobile' && !alwaysVertical)) return

        const top = activeEpisodeRef.current
          ? activeEpisodeRef.current.getBoundingClientRect().top + 12
          : THUMB_VERTICAL_OFFSET + 4

        thumbRef.current.style.top = `${Math.round(top)}px`
      })
    }

    const onScrollWithTransition = () => {
      if (thumbRef.current) {
        thumbRef.current.style.transition = 'top 0.3s ease'
      }

      setTimeout(() => {
        if (thumbRef.current) {
          thumbRef.current.style.transition = ''
        }
      }, 300)

      onScroll()
    }

    const setListOffset = () => {
      if (!content || !wrapper) return

      if (window.innerWidth < 1024) {
        wrapper.style.top = '0'
        wrapper.style.marginTop = '0'

        return
      }

      const windowHeight = window.innerHeight
      const viewport = window.innerWidth < 1220 ? 'tablet' : 'desktop'
      const contentBottom = content.getBoundingClientRect().bottom
      const contentViewHeight = Math.min(windowHeight, contentBottom) - LIST_TOP_OFFSET[viewport]
      const wrapperHeight = wrapper.getBoundingClientRect().height

      const top = Math.max(
        (contentViewHeight - wrapperHeight) / 2 +
          LIST_TOP_OFFSET[viewport] -
          (LIST_PADDING_TOP[viewport] -
            (LIST_PADDING_TOP[viewport] + (windowHeight > wrapperHeight ? LIST_PADDING_BOTTOM : 0)) / 2),
        0
      )
      const marginTop = Math.min(top - LIST_TOP_OFFSET[viewport], 0)

      wrapper.style.top = `${top}px`
      wrapper.style.marginTop = `${marginTop}px`
    }

    const onScrollWithOffset = () => {
      onScroll()
      setListOffset()
    }

    onScrollWithOffset()
    wrapper.addEventListener('scroll', onScroll)
    router.events.on('routeChangeComplete', onScrollWithTransition)
    addEventListener('scroll', onScrollWithOffset)
    addEventListener('resize', onScrollWithOffset)
    addEventListener('orientationchange', onScrollWithOffset)

    return () => {
      wrapper.removeEventListener('scroll', onScroll)
      router.events.off('routeChangeComplete', onScrollWithTransition)
      removeEventListener('scroll', onScrollWithOffset)
      removeEventListener('resize', onScrollWithOffset)
      removeEventListener('orientationchange', onScrollWithOffset)
    }
  }, [alwaysVertical, router.events])

  return (
    <div className={classnames(styles.container, styleVertical)}>
      <div className={classnames(styles.scrollbar, styleVertical)}>
        <div className={styles.thumb} ref={thumbRef} />
      </div>

      <div className={classnames(styles.content, styleVertical)} ref={contentRef}>
        {season && (
          <div className={styles.poster}>
            <SeasonPoster data={season} />
          </div>
        )}

        <div className={styles.head}>
          <div className={styles.counter}>{`${count} ${t('episodes')}`}</div>
        </div>

        <div className={classnames(styles.wrapper, styleVertical)} style={styleListWrapper} ref={episodesWrapperRef}>
          <div className={styles.list}>
            <h2 className="sr-only">{t('episodes_list')}</h2>
            <EpisodesList
              {...{
                episodes,
                alwaysVertical,
                isModal,
                activeEpisodeRef
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes
