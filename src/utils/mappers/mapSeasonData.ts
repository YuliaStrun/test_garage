import { SeasonQuery } from 'schemas/__generated__/season.generated'
import type { ContentEditor, ContentPartners, ContentTracklist, Episode, SeasonDetails } from 'types'
import { ContentSlider } from 'types/Content'
import { BooleanFilter } from 'utils/booleanFilter'
import { getEpisodesDuration } from 'utils/getEpisodesDuration'

export function mapSeasonData(data?: SeasonQuery): { season: SeasonDetails; episodes: Episode[] } | null {
  if (!data) return null

  const result: { season: SeasonDetails; episodes: Episode[] } = {
    season: {
      slug: data.seasonBySlugEntity?.data?.attributes?.slug,
      title: data.seasonBySlugEntity?.data?.attributes?.title,
      numberTitle: data.seasonBySlugEntity?.data?.attributes?.numberTitle,
      tracks: data.seasonBySlugEntity?.data?.attributes?.episodes?.data?.length,
      description: data.seasonBySlugEntity?.data?.attributes?.previewLead,
      duration: getEpisodesDuration(data.seasonBySlugEntity?.data?.attributes?.episodes),
      content: data.seasonBySlugEntity?.data?.attributes?.content
        ?.map((item) => {
          if (item?.__typename === 'ComponentContentEditor') {
            const content: ContentEditor = {
              type: 'editor',
              key: item.__typename + item.id,
              anchor: item.anchor || null,
              data: item.text
            }
            return content
          }
          if (item?.__typename === 'ComponentContentSlider') {
            const content: ContentSlider = {
              type: 'slider',
              key: item.__typename + item.id,
              slides:
                item.slides?.filter(BooleanFilter)?.map((slide) => ({
                  key: slide.__typename + slide?.id,
                  url: slide.image?.data?.attributes?.url || '',
                  alt: slide.image?.data?.attributes?.alternativeText || '',
                  caption: slide.caption || '',
                  fill: slide.fill || null
                })) || []
            }
            return content
          }
          if (item?.__typename === 'ComponentContentTracklist') {
            const content: ContentTracklist = {
              type: 'tracklist',
              key: item.__typename + item.id,
              anchor: item.anchor || null,
              data:
                item.item?.map((el) => ({
                  time: el?.time,
                  title: el?.title,
                  link: el?.link
                })) || []
            }
            return content
          }
          if (item?.__typename === 'ComponentContentPartners') {
            const content: ContentPartners = {
              type: 'partners',
              key: item.__typename + item.id,
              anchor: item.anchor || null,
              title: item.title || null,
              data:
                item?.items?.data?.map((el) => ({
                  name: el.attributes?.name,
                  link: el.attributes?.link,
                  logo: {
                    url: el.attributes?.image?.data?.attributes?.url,
                    alt: el.attributes?.image?.data?.attributes?.alternativeText,
                    width: el.attributes?.image?.data?.attributes?.width || 0,
                    height: el.attributes?.image?.data?.attributes?.height || 0
                  }
                })) || []
            }
            return content
          }
        })
        .filter(BooleanFilter),
      preview: {
        url: data.seasonBySlugEntity?.data?.attributes?.image?.data?.attributes?.url,
        alt: data.seasonBySlugEntity?.data?.attributes?.image?.data?.attributes?.alternativeText
      },
      cover: {
        url: data.seasonBySlugEntity?.data?.attributes?.cover?.data?.attributes?.url,
        alt: data.seasonBySlugEntity?.data?.attributes?.cover?.data?.attributes?.alternativeText
      }
    },
    episodes:
      data.seasonBySlugEntity?.data?.attributes?.episodes?.data?.map((item) => ({
        slug: item.attributes?.slug,
        title: item.attributes?.title,
        duration: item.attributes?.audioDuration,
        forAdults: item.attributes?.forAdults,
        season: data.seasonBySlugEntity?.data?.attributes?.title,
        seasonSlug: data.seasonBySlugEntity?.data?.attributes?.slug,
        seasonNumberTitle: data.seasonBySlugEntity?.data?.attributes?.numberTitle,
        preview: {
          url: item.attributes?.image?.data?.attributes?.url,
          alt: item.attributes?.image?.data?.attributes?.alternativeText
        },
        author: {
          name: item.attributes?.author?.data?.attributes?.name,
          preview: {
            url: item.attributes?.author?.data?.attributes?.image?.data?.attributes?.url,
            alt: item.attributes?.author?.data?.attributes?.image?.data?.attributes?.alternativeText
          }
        },
        audioFile: item.attributes?.audioFile?.data?.attributes?.url,
        playerCover: {
          url: item.attributes?.playerCover?.data?.attributes?.url,
          alt: item.attributes?.playerCover?.data?.attributes?.alternativeText
        }
      })) || []
  }

  return result
}
