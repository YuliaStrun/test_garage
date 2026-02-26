import type { Maybe } from 'graphql/jsutils/Maybe'

import type { MainPageQuery } from 'schemas/__generated__/pages.generated'
import type { Episode, SpecialRelease } from 'types'
import { BooleanFilter } from 'utils/booleanFilter'

type DataType = Maybe<
  NonNullable<NonNullable<NonNullable<MainPageQuery['mainPage']>['data']>['attributes']>['episodes']
>

export const mapEpisodesData = (data: DataType): (Episode | SpecialRelease)[] => {
  return !data
    ? []
    : data
        .map((episodesData) => {
          if (episodesData?.__typename !== 'ComponentMainEpisodeItem') return

          const episode = episodesData.episode?.data?.attributes || episodesData.special_release?.data?.attributes

          if (!episode) return

          const season = 'season' in episode ? episode.season?.data?.attributes : undefined
          const image = episode.image?.data?.attributes
          const author = episode.author?.data?.attributes
          const authorImage = author?.image?.data?.attributes || undefined

          const basicData = {
            slug: episode.slug,
            title: episode.title,
            duration: episode.audioDuration,
            preview: {
              url: image?.url,
              alt: image?.alternativeText
            },
            author: {
              name: author?.name,
              preview: {
                url: authorImage?.url,
                alt: authorImage?.alternativeText
              }
            },
            forAdults: episode.forAdults,
            audioFile: episode.audioFile?.data?.attributes?.url,
            playerCover: {
              url: episode.playerCover?.data?.attributes?.url,
              alt: episode.playerCover?.data?.attributes?.alternativeText
            }
          }

          if (episode.__typename === 'Episode') {
            const episodeData: Episode = {
              ...basicData,
              season: season?.title,
              seasonNumberTitle: season?.numberTitle,
              seasonSlug: season?.slug
            }
            return episodeData
          } else {
            const specialReleaseData: SpecialRelease = basicData
            return specialReleaseData
          }
        })
        .filter(BooleanFilter)
}
