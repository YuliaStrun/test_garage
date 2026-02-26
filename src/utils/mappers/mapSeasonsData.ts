import type { Maybe } from 'graphql/jsutils/Maybe'

import type { SeasonsQuery } from 'schemas/__generated__/seasons.generated'
import type { Season } from 'types'
import { BooleanFilter } from 'utils/booleanFilter'
import { getEpisodesDuration } from 'utils/getEpisodesDuration'

type DataType = Maybe<NonNullable<NonNullable<SeasonsQuery['seasons']>['data']>>

export const mapSeasonsData = (data: DataType): Season[] => {
  return !data
    ? []
    : data
        .map((seasonData) => {
          if (seasonData.__typename !== 'SeasonEntity') return

          const season = seasonData.attributes

          if (!season) return

          const image = season.image?.data?.attributes
          const cover = season.cover?.data?.attributes

          const result: Season = {
            slug: season.slug,
            title: season.title,
            numberTitle: season.numberTitle,
            tracks: season.episodes?.data.length,
            duration: getEpisodesDuration(season.episodes),
            description: season.metaDescription,
            preview: {
              url: image?.url,
              alt: image?.alternativeText
            },
            cover: {
              url: cover?.url,
              alt: cover?.alternativeText
            }
          }

          return result
        })
        .filter(BooleanFilter)
}
