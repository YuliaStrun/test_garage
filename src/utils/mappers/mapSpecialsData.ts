import { SpecialReleasesQuery } from 'schemas/__generated__/specials.generated'
import type { SpecialRelease } from 'types'

export function mapSpecialsData(data?: SpecialReleasesQuery): SpecialRelease[] {
  if (!data) return []
  return (
    data.specialReleases?.data?.map((item) => ({
      title: item.attributes?.title,
      subtitle: item.attributes?.subtitle,
      slug: item.attributes?.slug,
      author: {
        name: item.attributes?.author?.data?.attributes?.name || '',
        preview: {
          url: item.attributes?.author?.data?.attributes?.image?.data?.attributes?.url || '',
          alt: item.attributes?.author?.data?.attributes?.image?.data?.attributes?.alternativeText || ''
        }
      },
      duration: item.attributes?.audioDuration || '',
      preview: {
        url: item.attributes?.image?.data?.attributes?.url || '',
        alt: item.attributes?.image?.data?.attributes?.alternativeText || ''
      },
      forAdults: item.attributes?.forAdults,
      audioFile: item.attributes?.audioFile?.data?.attributes?.url,
      playerCover: {
        url: item.attributes?.playerCover?.data?.attributes?.url,
        alt: item.attributes?.playerCover?.data?.attributes?.alternativeText
      }
    })) || []
  )
}
