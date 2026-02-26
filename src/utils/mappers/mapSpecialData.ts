import { SpecialReleaseQuery } from 'schemas/__generated__/special.generated'
import type { ContentEditor, ContentPartners, ContentTracklist, SpecialReleaseDetails } from 'types'
import { ContentSlider } from 'types/Content'
import { BooleanFilter } from 'utils/booleanFilter'

export function mapSpecialData(data?: SpecialReleaseQuery): SpecialReleaseDetails | null {
  if (!data) return null
  return {
    slug: data.specialReleaseBySlugEntity?.data?.attributes?.slug || '',
    title: data.specialReleaseBySlugEntity?.data?.attributes?.title || '',
    author: {
      name: data.specialReleaseBySlugEntity?.data?.attributes?.author?.data?.attributes?.name || '',
      preview: {
        url:
          data.specialReleaseBySlugEntity?.data?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url ||
          '',
        alt:
          data.specialReleaseBySlugEntity?.data?.attributes?.author?.data?.attributes?.image?.data?.attributes
            ?.alternativeText || ''
      }
    },
    content: data.specialReleaseBySlugEntity?.data?.attributes?.content
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
    duration: data.specialReleaseBySlugEntity?.data?.attributes?.audioDuration || '',
    preview: {
      url: data.specialReleaseBySlugEntity?.data?.attributes?.image?.data?.attributes?.url || '',
      alt: data.specialReleaseBySlugEntity?.data?.attributes?.image?.data?.attributes?.alternativeText || ''
    },
    forAdults: data.specialReleaseBySlugEntity?.data?.attributes?.forAdults,
    audioFile: data.specialReleaseBySlugEntity?.data?.attributes?.audioFile?.data?.attributes?.url,
    playerCover: {
      url: data.specialReleaseBySlugEntity?.data?.attributes?.playerCover?.data?.attributes?.url,
      alt: data.specialReleaseBySlugEntity?.data?.attributes?.playerCover?.data?.attributes?.alternativeText
    }
  }
}
