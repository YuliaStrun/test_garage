import { useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import Layout from 'components/Layout'
import ListSpecials from 'components/ListSpecials'
import Meta from 'components/Meta'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import { SpecialReleasesQuery, SpecialReleasesQueryVariables } from 'schemas/__generated__/specials.generated'
import { QUERY_SPECIALS } from 'schemas/specials'
import styles from 'styles/pages/Specials.module.scss'
import addMenuQuery from 'utils/addMenuQuery'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import { mapSpecialsData } from 'utils/mappers/mapSpecialsData'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const apolloClient = initializeApollo()

  await Promise.all([
    apolloClient.query({
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

const SpecialsPage: NextPage = () => {
  const t = useTranslations('pages.specials')
  const { locale } = useRouter()
  const { data } = useQuery<SpecialReleasesQuery, SpecialReleasesQueryVariables>(QUERY_SPECIALS, {
    variables: { locale }
  })
  const mappedData = useMemo(() => mapSpecialsData(data), [data])

  return (
    <Layout>
      <Meta title={t('title')} />
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
        <a id={ANCHOR_CONTENT} />
        <ListSpecials specials={mappedData} eventCategory="specials-page" isHoverable />
      </div>
    </Layout>
  )
}

export default SpecialsPage
