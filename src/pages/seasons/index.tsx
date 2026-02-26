import { useEffect, useMemo, useRef } from 'react'

import { useQuery } from '@apollo/client'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import CardSeason from 'components/cards/CardSeason'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import { SeasonsQuery, SeasonsQueryVariables } from 'schemas/__generated__/seasons.generated'
import { QUERY_SEASONS } from 'schemas/seasons'
import styles from 'styles/pages/Seasons.module.scss'
import type { Season } from 'types'
import addMenuQuery from 'utils/addMenuQuery'
import analytics from 'utils/analytics'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import { mapSeasonsData } from 'utils/mappers/mapSeasonsData'
import { mapSeasonsEpisodesData } from 'utils/mappers/mapSeasonsEpisodesData'

const BLUR_VALUE_EM = 0.5
const BLUR_RANGE_PX = 100

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const apolloClient = initializeApollo()

  await Promise.all([
    apolloClient.query<SeasonsQuery, SeasonsQueryVariables>({
      query: QUERY_SEASONS,
      variables: { locale }
    }),
    addMenuQuery(apolloClient, String(locale))
  ])

  return addApolloState(apolloClient, {
    props: {
      ...intlServerSideAction(locale)
    }
  })
}

const SeasonsPage: NextPage = () => {
  const t = useTranslations('pages.seasons')
  const { locale } = useRouter()
  const { data } = useQuery<SeasonsQuery, SeasonsQueryVariables>(QUERY_SEASONS, { variables: { locale } })

  const seasons = useMemo(() => mapSeasonsData(data?.seasons?.data), [data])
  const seasonsEpisodes = useMemo(() => mapSeasonsEpisodesData(data?.seasons?.data || []), [data])

  const visibleSeasonsRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    visibleSeasonsRef.current = Array.from(document.querySelectorAll<HTMLLIElement>(`.${styles.season}`))

    blurItems()
    window.addEventListener('scroll', blurItems)

    return () => {
      window.removeEventListener('scroll', blurItems)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <Meta title={t('title')} />
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
        <a id={ANCHOR_CONTENT} />
        <ul>{seasons.map(renderCard)}</ul>
      </div>
    </Layout>
  )

  function renderCard(season: Season, index: number) {
    return (
      <li key={String(index)} className={styles.season}>
        <Link
          href={`/seasons/${season.slug}`}
          onClick={() => {
            analytics.sendEvent('seasons-page', 'goto-season', String(season.title))
          }}>
          <CardSeason data={season} episodes={season.slug ? seasonsEpisodes[season.slug] : []} />
        </Link>
      </li>
    )
  }

  function blurItems() {
    visibleSeasonsRef.current.forEach((node) => {
      const viewportHeight = window.innerHeight
      const { top, height } = node.getBoundingClientRect()
      const middle = top + height / 2
      const [min, max] = [middle - BLUR_RANGE_PX, middle + BLUR_RANGE_PX]
      const isBlurIn = min < 0 && middle > 0
      const isBlurOut = max > viewportHeight && middle < viewportHeight
      const blurInGrade = isBlurIn ? 1 - middle / BLUR_RANGE_PX : middle < 0 ? 1 : 0
      const blurOutGrade = isBlurOut ? 1 - (viewportHeight - middle) / BLUR_RANGE_PX : middle < viewportHeight ? 0 : 1

      if (isBlurIn || blurInGrade === 1) {
        node.style.filter = `blur(${blurInGrade * BLUR_VALUE_EM}em)`
      } else if (isBlurOut || blurOutGrade === 1) {
        node.style.filter = `blur(${blurOutGrade * BLUR_VALUE_EM}em)`
      } else {
        node.style.filter = 'blur(0)'
      }
    })
  }
}

export default SeasonsPage
