import type { Maybe } from 'graphql/jsutils/Maybe'

import { Content } from './Content'
import { ImageData } from './ImageData'

export type Season = {
  slug: Maybe<string>
  title: Maybe<string>
  numberTitle: Maybe<string>
  tracks: Maybe<number>
  duration: Maybe<string>
  description: Maybe<string>
  preview: Maybe<ImageData>
  cover: Maybe<ImageData>
}

export type SeasonDetails = Season & {
  content?: Content
}
