import { CSSProperties, useMemo, useRef, useState } from 'react'

import { useQuery } from '@apollo/client'
import classnames from 'classnames'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import EpisodeDetails from 'components/details/EpisodeDetails'
import Episodes from 'components/Episodes'
import EpisodesModal from 'components/Episodes/EpisodesModal'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { ANCHOR_CONTENT } from 'components/Skiplinks'
import { EpisodeQuery, EpisodeQueryVariables } from 'schemas/__generated__/episode.generated'
import { QUERY_EPISODE } from 'schemas/episode'
import styles from 'styles/pages/Episode.module.scss'
import addMenuQuery from 'utils/addMenuQuery'
import { addApolloState, initializeApollo } from 'utils/apolloClient'
import { intlServerSideAction } from 'utils/intl'
import { mapEpisodeData } from 'utils/mappers/mapEpisodeData'
import stringWithZero from 'utils/stringWithZero'
import { useBlurDetails } from 'utils/useBlurDetails'
import { useCheckViewport } from 'utils/useCheckViewport'

const EPISODES_MODAL_ANIMATE_DURATION_MS = 800

type DefaultProps = {
  slug: string
}

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const seasonSlug = String(params?.seasonSlug)
  const slug = String(params?.episodeSlug)

  const apolloClient = initializeApollo()
  const [{ data }] = await Promise.all([
    apolloClient.query<EpisodeQuery, EpisodeQueryVariables>({
      query: QUERY_EPISODE,
      variables: { slug, locale }
    }),
    addMenuQuery(apolloClient, String(locale))
  ])

  if (
    !data.episodeBySlugEntity?.data ||
    data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.slug !== seasonSlug
  ) {
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

const Episode: NextPage<DefaultProps> = ({ slug }) => {
  const { locale } = useRouter()
  const t = useTranslations('base')
  const { data } = useQuery<EpisodeQuery, EpisodeQueryVariables>(QUERY_EPISODE, {
    variables: { slug, locale }
  })
  const { episode, episodes } = useMemo(() => mapEpisodeData(data), [data])

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [mustAnimate, setAnimate] = useState(false)
  const refClose = useRef<HTMLButtonElement>(null)

  useBlurDetails()

  const { isCustomWidth } = useCheckViewport({ customWidth: 1024 })

  const onClose = () => {
    setAnimate(false)
    setTimeout(() => setMenuOpen(false), EPISODES_MODAL_ANIMATE_DURATION_MS)
  }

  const onOpen = () => {
    setMenuOpen(true)
    setTimeout(() => {
      setAnimate(true)
      refClose.current?.focus()
    })
  }

  const styleLeftPanel: CSSProperties = {
    // @ts-ignore
    '--animate-duration': `${EPISODES_MODAL_ANIMATE_DURATION_MS}ms`
  }

  return (
    <Layout className={styles.main}>
      <Meta
        title={
          data?.episodeBySlugEntity?.data?.attributes?.metaTitle ||
          `${episode?.title} | ${t('season')} ${stringWithZero(String(episode?.seasonNumberTitle))}. ${episode?.season}` ||
          undefined
        }
        description={data?.episodeBySlugEntity?.data?.attributes?.metaDescription || undefined}
        image={data?.episodeBySlugEntity?.data?.attributes?.metaImage?.data?.attributes?.url || undefined}
      />
      <div className={styles.container}>
        <div className={classnames(styles.left, { [styles.closed]: mustAnimate })} style={styleLeftPanel}>
          <a id={ANCHOR_CONTENT} />

          {!!episode && (
            <EpisodeDetails
              data={episode}
              anchorMenu={data?.episodeBySlugEntity?.data?.attributes?.anchorMenu}
              onMenuOpen={onOpen}
              playerCurrent={episode?.slug}
              playersQueue={episodes}
            />
          )}
        </div>

        <section className={styles.right} aria-label={t('episodes_list')}>
          <Episodes episodes={episodes} alwaysVertical />
        </section>
      </div>

      {!isCustomWidth && (
        <EpisodesModal
          episodes={episodes}
          isMenuOpen={isMenuOpen}
          mustAnimate={mustAnimate}
          animateDuration={EPISODES_MODAL_ANIMATE_DURATION_MS}
          refCloseButton={refClose}
          onClose={onClose}
        />
      )}
    </Layout>
  )
}

export default Episode
