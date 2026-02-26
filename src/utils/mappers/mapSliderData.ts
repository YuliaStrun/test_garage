import { Maybe } from 'graphql/jsutils/Maybe'

import type { MainPageQuery } from 'schemas/__generated__/pages.generated'
import type { Slide } from 'types'
import { BooleanFilter } from 'utils/booleanFilter'
import { getEpisodesDuration } from 'utils/getEpisodesDuration'

type DataType = Maybe<NonNullable<NonNullable<NonNullable<MainPageQuery['mainPage']>['data']>['attributes']>['slider']>

export const mapSliderData = (data: DataType): Slide[] => {
  return !data
    ? []
    : data
        .map((slideData) => {
          if (slideData?.__typename !== 'ComponentMainSliderItem') return

          const slideEntity = slideData.episode?.data || slideData.season?.data || slideData.special_release?.data
          const slide = slideEntity?.attributes

          if (!slideEntity?.__typename || !slide) return

          const types: Record<
            | NonNullable<NonNullable<NonNullable<(typeof slideData)['episode']>['data']>['__typename']>
            | NonNullable<NonNullable<NonNullable<(typeof slideData)['season']>['data']>['__typename']>
            | NonNullable<NonNullable<NonNullable<(typeof slideData)['special_release']>['data']>['__typename']>,
            Slide['type']
          > = {
            SeasonEntity: 'season',
            EpisodeEntity: 'episode',
            SpecialReleaseEntity: 'special'
          }

          const season = 'season' in slide ? slide.season?.data?.attributes : undefined
          const image = slide.image?.data?.attributes
          const playerCover =
            'playerCover' in slide
              ? slide.playerCover?.data?.attributes
              : 'cover' in slide
                ? slide.cover?.data?.attributes
                : undefined
          const author = 'author' in slide ? slide.author?.data?.attributes : undefined
          const authorImage = author?.image?.data?.attributes || undefined
          const seasonNumberTitle = 'numberTitle' in slide ? slide.numberTitle : season?.numberTitle
          const subtitle = 'subtitle' in slide ? slide.subtitle : null

          const episodes =
            'episodes' in slide
              ? slide.episodes?.data
                  .map(
                    ({ attributes }) =>
                      attributes?.image?.data?.attributes && {
                        preview: {
                          url: attributes.image.data?.attributes.url,
                          alt: attributes.image.data.attributes.alternativeText
                        }
                      }
                  )
                  .filter(Boolean)
              : undefined

          const duration =
            'audioDuration' in slide
              ? slide.audioDuration
              : 'episodes' in slide
                ? getEpisodesDuration(slide.episodes)
                : undefined

          const result: Slide = {
            type: types[slideEntity.__typename],
            slug: slide.slug,
            subtitle,
            season: season?.title,
            seasonSlug: season?.slug,
            seasonNumberTitle,
            track: 'number' in slide ? slide.number : undefined,
            title: slide?.title,
            duration,
            preview: {
              url: image?.url,
              alt: image?.alternativeText
            },
            playerCover: {
              url: playerCover?.url,
              alt: playerCover?.alternativeText
            },
            author: {
              name: author?.name,
              preview: {
                url: authorImage?.url,
                alt: authorImage?.alternativeText
              }
            },
            episodes
          }

          return result
        })
        .filter(BooleanFilter)
}
