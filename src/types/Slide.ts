import type { Maybe } from 'graphql/jsutils/Maybe'

import { ImageData } from './ImageData'

export type Slide = {
  type: 'season' | 'episode' | 'special'
  slug: Maybe<string>
  season: Maybe<string>
  seasonSlug: Maybe<string>
  seasonNumberTitle: Maybe<string>
  track: Maybe<number>
  title: Maybe<string>
  subtitle?: Maybe<string>
  duration: Maybe<string>
  preview: Maybe<ImageData>
  playerCover: Maybe<ImageData>
  author: {
    name: Maybe<string>
    preview: Maybe<ImageData>
  }
  episodes: Maybe<
    Maybe<{
      preview: Maybe<ImageData>
    }>[]
  >
}
