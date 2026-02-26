import type { Maybe } from 'graphql/jsutils/Maybe'

import { Content } from './Content'
import { ImageData } from './ImageData'

export type Episode = {
  slug: Maybe<string>
  title: Maybe<string>
  season: Maybe<string>
  seasonNumberTitle: Maybe<string>
  seasonSlug: Maybe<string>
  author: {
    name: Maybe<string>
    preview: Maybe<ImageData>
  }
  duration: Maybe<string>
  preview: Maybe<ImageData>
  forAdults: Maybe<boolean>
  audioFile: Maybe<string>
  playerCover: Maybe<ImageData>
}

export type EpisodeDetails = Episode & {
  content?: Content
}
