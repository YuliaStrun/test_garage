import { useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import SeasonDetails from 'components/details/SeasonDetails'
import Episodes from 'components/Episodes'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import { SeasonQuery, SeasonQueryVariables } from 'schemas/__generated__/season.generated'
import { QUERY_SEASON } from 'schemas/season'
import { QUERY_SEASONS } from 'schemas/seasons'
import styles from 'styles/pages/Season.module.scss'
import addMenuQuery from 'utils/addMenuQuery'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import { mapSeasonData } from 'utils/mappers/mapSeasonData'
import stringWithZero from 'utils/stringWithZero'
import { EPISODES_PANEL_ID, useBlurDetails } from 'utils/useBlurDetails'

type DefaultProps = {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: QUERY_SEASONS,
    variables: { locale: 'ru' }
  })

  const slugs: string[] = data?.seasons?.data?.map((s: any) => s?.attributes?.slug).filter(Boolean) ?? []

  return {
    paths: slugs.map((seasonSlug) => ({ params: { seasonSlug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<DefaultProps> = async ({ params, locale }) => {
  const resolvedLocale = locale ?? 'ru'
  const slug = String(params?.seasonSlug)

  const apolloClient = initializeApollo()
  const [{ data }] = await Promise.all([
    apolloClient.query<SeasonQuery, SeasonQueryVariables>({
      query: QUERY_SEASON,
      variables: { slug, locale: resolvedLocale }
    }),
    addMenuQuery(apolloClient, String(resolvedLocale))
  ])

  if (!data?.seasonBySlugEntity?.data) {
    return {
      notFound: true
    }
  }

  return addApolloState(apolloClient, {
    props: {
      ...intlServerSideAction(resolvedLocale),
      slug
    }
  })
}

const Season: NextPage<DefaultProps> = ({ slug }) => {
  const t = useTranslations('base')
  const router = useRouter()
  const { data } = useQuery<SeasonQuery, SeasonQueryVariables>(QUERY_SEASON, {
    variables: { slug, locale: router.locale }
  })
  const mappedData = useMemo(() => mapSeasonData(data), [data])

  useBlurDetails()

  return (
    <Layout className={styles.main}>
      <Meta
        title={
          data?.seasonBySlugEntity?.data?.attributes?.metaTitle ||
          `${t('season')} ${stringWithZero(String(mappedData?.season.numberTitle))}. ${mappedData?.season?.title}` ||
          undefined
        }
        description={data?.seasonBySlugEntity?.data?.attributes?.metaDescription || undefined}
        image={data?.seasonBySlugEntity?.data?.attributes?.metaImage?.data?.attributes?.url || undefined}
      />
      <div className={styles.container}>
        <section className={styles.left} aria-label={t('about_season')}>
          <a id={ANCHOR_CONTENT} />
          {!!mappedData && <SeasonDetails data={mappedData.season} />}
        </section>

        <section id={EPISODES_PANEL_ID} className={styles.right} aria-label={t('episodes_list')}>
          {!!mappedData && <Episodes episodes={mappedData.episodes} season={mappedData.season} />}
        </section>
      </div>
    </Layout>
  )
}

export default Season
