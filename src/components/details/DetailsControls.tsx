import React, { useCallback, useEffect, useRef, useState } from 'react'

import classnames from 'classnames'
import type { Maybe } from 'graphql/jsutils/Maybe'
import { useRouter } from 'next/router'

import PlayButton from 'components/buttons/PlayButton'
import { ComponentContentAnchorMenuItem } from 'schemas/__generated__/types'
import styles from 'styles/components/DetailsControls.module.scss'
import { Track } from 'types'
import { BooleanFilter } from 'utils/booleanFilter'

const PLAY_BUTTON_OFFSET = 130
const ANCHOR_TOP_OFFSET = 165

type Anchor = {
  id: string
  active: boolean
  node: HTMLElement
}

export type DetailsControlsProps = {
  duration: Maybe<string>
  forAdults: Maybe<boolean>
  withDynamicOffset?: boolean
  onMenuOpen?: () => void
  anchorMenu?: Maybe<Array<Maybe<ComponentContentAnchorMenuItem>>>
  playerCurrent: Maybe<string>
  playersQueue: Track[] | undefined
}

const DetailsControls = ({
  duration,
  forAdults,
  withDynamicOffset,
  onMenuOpen = () => {},
  anchorMenu,
  playerCurrent,
  playersQueue
}: DetailsControlsProps) => {
  const router = useRouter()
  const [hasOffset, setOffset] = useState(false)
  const [anchors, setAnchors] = useState<Anchor[]>([])
  const [activeAnchor, setActiveAnchor] = useState<string>()
  const refPlayButton = useRef<HTMLButtonElement>(null)

  const setPlayButtonOffset = useCallback(() => {
    if (!refPlayButton.current) return

    const scrollOffset = refPlayButton.current.getBoundingClientRect().top

    if (hasOffset && scrollOffset > PLAY_BUTTON_OFFSET) {
      setOffset(false)
    } else if (!hasOffset && scrollOffset <= PLAY_BUTTON_OFFSET) {
      setOffset(true)
    }
  }, [hasOffset])

  const updateActiveAnchor = useCallback(() => {
    anchors.forEach((anchor) => {
      anchor.active = anchor.node.getBoundingClientRect().y < Math.max(ANCHOR_TOP_OFFSET, window.innerHeight * 0.8)
    })

    const active = anchors.findLast(({ active }) => active)

    setActiveAnchor(active?.id)
  }, [anchors])

  const onScroll = useCallback(() => {
    setPlayButtonOffset()
    updateActiveAnchor()
  }, [setPlayButtonOffset, updateActiveAnchor])

  const init = useCallback(() => {
    onScroll()
  }, [onScroll])

  useEffect(() => {
    if (!withDynamicOffset) return

    init()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('orientationchange', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('orientationchange', onScroll)
    }
  }, [init, onScroll, withDynamicOffset])

  useEffect(() => {
    const initAnchors = () => {
      setAnchors(
        anchorMenu
          ?.map((item) => {
            if (item?.anchor) {
              const node = document.getElementById(item.anchor)

              if (node) {
                return {
                  id: node.id,
                  active: node.getBoundingClientRect().y < Math.max(ANCHOR_TOP_OFFSET, window.innerHeight * 0.8),
                  node
                }
              }
            }
          })
          .filter(BooleanFilter) || []
      )
    }

    initAnchors()
    router.events.on('routeChangeComplete', initAnchors)

    return () => {
      router.events.off('routeChangeComplete', initAnchors)
    }
  }, [anchorMenu, router.events])

  return (
    <div className={classnames(styles.controls, { [styles['with-offset']]: hasOffset })}>
      <div className={styles.buttons}>
        {anchorMenu?.map((item) => {
          return item?.name ? (
            <a
              className={classnames(styles.button, { [styles.active]: activeAnchor === item.anchor })}
              key={item.id}
              href={`#${item.anchor}`}
              onClick={getHandleScroll(item.anchor)}>
              {item.name}
            </a>
          ) : null
        })}
      </div>

      <div className={styles.actions}>
        <PlayButton
          className={styles.play}
          variant="big"
          duration={duration}
          ref={refPlayButton}
          playerCurrent={playerCurrent}
          playersQueue={playersQueue}
          forAdults={forAdults}
          eventCategory="material-details"
        />

        <button className={styles.menu} onClick={onMenuOpen}>
          <i className="icon-menu" />
        </button>
      </div>
    </div>
  )

  function getHandleScroll(id: Maybe<string>) {
    return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!id) return

      event.preventDefault()

      const header = document.getElementsByTagName('header')[0]
      const controls = document.getElementById('s-controls')
      const panel = document.getElementById('s-panel')
      const target = document.getElementById(id)

      if (!target) return

      const targetScrollY = target.getBoundingClientRect().top
      const headerHeight = header?.getBoundingClientRect()?.height || 0
      const otherHeight = controls?.getBoundingClientRect().height || panel?.getBoundingClientRect().height || 0

      window.scroll({
        top: targetScrollY + window.scrollY - headerHeight - otherHeight,
        behavior: 'smooth'
      })
    }
  }
}

export default DetailsControls
