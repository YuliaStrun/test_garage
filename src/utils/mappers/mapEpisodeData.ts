import { EpisodeQuery } from 'schemas/__generated__/episode.generated'
import type { ContentEditor, ContentPartners, ContentTracklist, Episode, EpisodeDetails } from 'types'
import { ContentSlider } from 'types/Content'
import { BooleanFilter } from 'utils/booleanFilter'

export function mapEpisodeData(data?: EpisodeQuery): { episode: EpisodeDetails | null; episodes: Episode[] } {
  if (!data)
    return {
      episode: null,
      episodes: []
    }
  const res = {
    episode: {
      slug: data.episodeBySlugEntity?.data?.attributes?.slug || '',
      title: data.episodeBySlugEntity?.data?.attributes?.title || '',
      duration: data.episodeBySlugEntity?.data?.attributes?.audioDuration || '',
      forAdults: data.episodeBySlugEntity?.data?.attributes?.forAdults,
      season: data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.title,
      seasonSlug: data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.slug,
      seasonNumberTitle: data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.numberTitle,
      content: data.episodeBySlugEntity?.data?.attributes?.content
        ?.map((item) => {
          if (item?.__typename === 'ComponentContentEditor') {
            const content: ContentEditor = {
              type: 'editor',
              key: item.__typename + item.id,
              anchor: item.anchor || null,
              data: item.text || ''
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
        url: data.episodeBySlugEntity?.data?.attributes?.image?.data?.attributes?.url || '',
        alt: data.episodeBySlugEntity?.data?.attributes?.image?.data?.attributes?.alternativeText || ''
      },
      author: {
        name: data.episodeBySlugEntity?.data?.attributes?.author?.data?.attributes?.name || '',
        preview: {
          url: data.episodeBySlugEntity?.data?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url || '',
          alt:
            data.episodeBySlugEntity?.data?.attributes?.author?.data?.attributes?.image?.data?.attributes
              ?.alternativeText || ''
        }
      },
      audioFile: data.episodeBySlugEntity?.data?.attributes?.audioFile?.data?.attributes?.url,
      playerCover: {
        url: data.episodeBySlugEntity?.data?.attributes?.playerCover?.data?.attributes?.url,
        alt: data.episodeBySlugEntity?.data?.attributes?.playerCover?.data?.attributes?.alternativeText
      }
    },
    episodes:
      data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.episodes?.data.map((item) => ({
        slug: item.attributes?.slug || '',
        title: item.attributes?.title || '',
        duration: item.attributes?.audioDuration || '',
        forAdults: item.attributes?.forAdults,
        season: data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.title,
        seasonSlug: data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.slug,
        seasonNumberTitle: data.episodeBySlugEntity?.data?.attributes?.season?.data?.attributes?.numberTitle,
        preview: {
          url: item.attributes?.image?.data?.attributes?.url || '',
          alt: item.attributes?.image?.data?.attributes?.alternativeText || ''
        },
        author: {
          name: item.attributes?.author?.data?.attributes?.name || '',
          preview: {
            url: item.attributes?.author?.data?.attributes?.image?.data?.attributes?.url || '',
            alt: item.attributes?.author?.data?.attributes?.image?.data?.attributes?.alternativeText || ''
          }
        },
        audioFile: item.attributes?.audioFile?.data?.attributes?.url,
        playerCover: {
          url: item.attributes?.playerCover?.data?.attributes?.url,
          alt: item.attributes?.playerCover?.data?.attributes?.alternativeText
        }
      })) || []
  }
  if (!res.episodes.find((item) => item.slug === res.episode.slug)) {
    res.episodes.unshift(res.episode)
  }
  return res
}
