import { useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import ScrollbarVertical from 'components/details/ScrollbarVertical'
import SpecialDetails from 'components/details/SpecialDetails'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import { SpecialReleaseQuery, SpecialReleaseQueryVariables } from 'schemas/__generated__/special.generated'
import { SpecialReleasesQuery, SpecialReleasesQueryVariables } from 'schemas/__generated__/specials.generated'
import { QUERY_SPECIAL } from 'schemas/special'
import { QUERY_SPECIALS } from 'schemas/specials'
import styles from 'styles/pages/Special.module.scss'
import addMenuQuery from 'utils/addMenuQuery'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import { mapSpecialData } from 'utils/mappers/mapSpecialData'
import { mapSpecialsData } from 'utils/mappers/mapSpecialsData'
import { useCheckViewport } from 'utils/useCheckViewport'

type DefaultProps = {
  slug: string
}

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const slug = String(params?.slug)

  const apolloClient = initializeApollo()
  const [{ data }] = await Promise.all([
    apolloClient.query<SpecialReleaseQuery, SpecialReleaseQueryVariables>({
      query: QUERY_SPECIAL,
      variables: { slug, locale }
    }),
    apolloClient.query<SpecialReleasesQuery, SpecialReleasesQueryVariables>({
      query: QUERY_SPECIALS,
      variables: { locale }
    }),
    addMenuQuery(apolloClient, String(locale))
  ])

  if (!data.specialReleaseBySlugEntity?.data) {
    return {
      notFound: true
    }
  }

  return addApolloState(apolloClient, {
    props: {
      ...intlServerSideAction(locale),
      slug
    }
  })
}

const Special: NextPage<DefaultProps> = ({ slug }) => {
  const { locale } = useRouter()
  const { isCustomWidth: isDesktop } = useCheckViewport({ customWidth: 1024 })
  const t = useTranslations('base')

  const { data } = useQuery<SpecialReleaseQuery, SpecialReleaseQueryVariables>(QUERY_SPECIAL, {
    variables: { slug, locale }
  })
  const { data: dataSpecials } = useQuery<SpecialReleasesQuery, SpecialReleasesQueryVariables>(QUERY_SPECIALS, {
    variables: { locale }
  })

  const mappedData = useMemo(() => mapSpecialData(data), [data])
  const mappedSpecialsData = useMemo(() => {
    const result = mapSpecialsData(dataSpecials).filter(({ slug }) => mappedData?.slug === slug)
    if (result.length) return result
    return mappedData ? [mappedData] : []
  }, [dataSpecials, mappedData])
  const cover = {
    url: isDesktop ? mappedData?.preview?.url : mappedData?.playerCover?.url || mappedData?.preview?.url,
    alt: isDesktop ? mappedData?.preview?.alt : mappedData?.playerCover?.alt || mappedData?.preview?.alt
  }

  return (
    <Layout>
      <Meta
        title={
          data?.specialReleaseBySlugEntity?.data?.attributes?.metaTitle ||
          `${mappedData?.title} | ${t('specials')}` ||
          undefined
        }
        description={data?.specialReleaseBySlugEntity?.data?.attributes?.metaDescription || undefined}
        image={data?.specialReleaseBySlugEntity?.data?.attributes?.metaImage?.data?.attributes?.url || undefined}
      />
      <div className={styles.container}>
        <div>
          <div className={styles['image-wrapper']}>
            {cover.url && (
              <Image
                className={styles.image}
                src={cover.url}
                alt={cover.alt || ''}
                sizes="(min-width: 1024px) 50vw, 100vw"
                fill
                aria-hidden
              />
            )}
          </div>
        </div>

        <ScrollbarVertical className={styles.scrollbar} />

        <div>
          <a id={ANCHOR_CONTENT} />
          {!!mappedData && (
            <SpecialDetails
              data={mappedData}
              anchorMenu={data?.specialReleaseBySlugEntity?.data?.attributes?.anchorMenu}
              playerCurrent={mappedData.slug}
              playersQueue={mappedSpecialsData}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Special
