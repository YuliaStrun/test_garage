import { SeasonsQuery } from 'schemas/__generated__/seasons.generated'
import { Track } from 'types'

type DataType = NonNullable<NonNullable<SeasonsQuery['seasons']>['data']>

export type SeasonsEpisodesMapper = { [key: string]: Track[] }

export const mapSeasonsEpisodesData = (data: DataType): SeasonsEpisodesMapper => {
  let items: SeasonsEpisodesMapper = {}
  data.forEach((season) => {
    if (season.attributes?.slug) {
      items[season.attributes?.slug] =
        season.attributes?.episodes?.data?.map((episode) => ({
          title: episode.attributes?.title,
          duration: episode.attributes?.audioDuration,
          slug: episode.attributes?.slug,
          forAdults: episode.attributes?.forAdults,
          seasonNumberTitle: season.attributes?.numberTitle,
          season: season.attributes?.title,
          seasonSlug: season.attributes?.slug,
          preview: {
            alt: episode.attributes?.image?.data?.attributes?.alternativeText,
            url: episode.attributes?.image?.data?.attributes?.url
          },
          author: {
            name: episode.attributes?.author?.data?.attributes?.name,
            preview: {
              url: episode.attributes?.author?.data?.attributes?.image?.data?.attributes?.url,
              alt: episode.attributes?.author?.data?.attributes?.image?.data?.attributes?.alternativeText
            }
          },
          audioFile: episode.attributes?.audioFile?.data?.attributes?.url,
          playerCover: {
            url: episode.attributes?.playerCover?.data?.attributes?.url,
            alt: episode.attributes?.playerCover?.data?.attributes?.alternativeText
          }
        })) || []
    }
  })
  return items
}
