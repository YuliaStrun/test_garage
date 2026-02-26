import React, { useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import Layout from 'components/Layout'
import ListSpecials from 'components/ListSpecials'
import Meta from 'components/Meta'
import Section from 'components/Section'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import MainSlider from 'components/sliders/MainSlider'
import SeasonsSlider from 'components/sliders/SeasonsSlider'
import { MainPageQuery, MainPageQueryVariables } from 'schemas/__generated__/pages.generated'
import { SeasonsQuery, SeasonsQueryVariables } from 'schemas/__generated__/seasons.generated'
import { SpecialReleasesQuery, SpecialReleasesQueryVariables } from 'schemas/__generated__/specials.generated'
import { QUERY_MAIN_PAGE } from 'schemas/pages'
import { QUERY_SEASONS } from 'schemas/seasons'
import { QUERY_SPECIALS } from 'schemas/specials'
import styles from 'styles/pages/Main.module.scss'
import addMenuQuery from 'utils/addMenuQuery'
import analytics from 'utils/analytics'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import { mapEpisodesData } from 'utils/mappers/mapEpisodesData'
import { mapSeasonsData } from 'utils/mappers/mapSeasonsData'
import { mapSeasonsEpisodesData } from 'utils/mappers/mapSeasonsEpisodesData'
import { mapSliderData } from 'utils/mappers/mapSliderData'
import { mapSpecialsData } from 'utils/mappers/mapSpecialsData'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const apolloClient = initializeApollo()

  await Promise.all([
    apolloClient.query<MainPageQuery, MainPageQueryVariables>({
      query: QUERY_MAIN_PAGE,
      variables: { locale }
    }),
    apolloClient.query<SeasonsQuery, SeasonsQueryVariables>({
      query: QUERY_SEASONS,
      variables: { locale }
    }),
    apolloClient.query<SpecialReleasesQuery, SpecialReleasesQueryVariables>({
      query: QUERY_SPECIALS,
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

export default function Home() {
  const t = useTranslations('pages.main')
  const { locale } = useRouter()
  const pageData = useQuery<MainPageQuery, MainPageQueryVariables>(QUERY_MAIN_PAGE, { variables: { locale } }).data
    ?.mainPage?.data?.attributes
  const slides = useMemo(() => mapSliderData(pageData?.slider), [pageData])
  const episodes = useMemo(() => mapEpisodesData(pageData?.episodes), [pageData])

  const seasonsData = useQuery<SeasonsQuery, SeasonsQueryVariables>(QUERY_SEASONS, { variables: { locale } }).data
  const seasons = useMemo(() => mapSeasonsData(seasonsData?.seasons?.data), [seasonsData])

  const { data: dataSpecials } = useQuery<SpecialReleasesQuery, SpecialReleasesQueryVariables>(QUERY_SPECIALS, {
    variables: { locale }
  })

  // это необходимо для того, чтобы в каждом сезоне/эпизоде были все эпизоды сезона для очереди плеера
  const seasonsEpisodes = useMemo(() => mapSeasonsEpisodesData(seasonsData?.seasons?.data || []), [seasonsData])
  // необходимый список спецвыпусков для очереди плеера
  const mappedSpecialsData = useMemo(() => mapSpecialsData(dataSpecials), [dataSpecials])

  return (
    <>
      <Meta
        description={pageData?.metaDescription || undefined}
        image={pageData?.metaImage?.data?.attributes?.url || undefined}
      />
      <h1 className="sr-only">{t('sr_title')}</h1>
      <Layout className={styles.main} isMainPage>
        <MainSlider slides={slides} seasonsEpisodes={{ ...seasonsEpisodes, specials: mappedSpecialsData }} />

        <a id={ANCHOR_CONTENT} />
        {pageData?.aboutText && (
          <Section ariaLabel={pageData.aboutLinkName || t('sr_about')}>
            <h2 className="sr-only">{pageData.aboutLinkName || t('sr_about')}</h2>
            <p className={styles.description}>{pageData?.aboutText}</p>
            {pageData?.aboutLink && (
              <Link
                href={pageData?.aboutLink}
                className={styles.about}
                onClick={() => {
                  analytics.sendEvent('main-page', 'goto-about', 'О проекте')
                }}>
                {pageData?.aboutLinkName}
              </Link>
            )}
          </Section>
        )}

        <Section ariaLabel={t('seasons')} withoutGrid>
          <h2 className={styles.caption}>
            <Link
              href="/seasons"
              className={styles['caption-link']}
              onClick={() => {
                analytics.sendEvent('main-page', 'goto-seasons', 'Сезоны')
              }}>
              <span>{t('seasons')}</span>
            </Link>
          </h2>
          <SeasonsSlider seasons={seasons} seasonsEpisodes={seasonsEpisodes} />
        </Section>

        <Section ariaLabel={t('episodes')} withoutGrid fullWidth>
          <h2 className={styles.caption}>
            <div className={styles['caption-link']}>{t('episodes')}</div>
          </h2>
          <ListSpecials specials={episodes} seasonsEpisodes={seasonsEpisodes} eventCategory="main-page" />
        </Section>
      </Layout>
    </>
  )
}
