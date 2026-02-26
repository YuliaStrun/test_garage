import { Maybe } from 'graphql/jsutils/Maybe'

import { Content } from './Content'
import { ImageData } from './ImageData'

export type SpecialRelease = {
  title: Maybe<string>
  subtitle?: Maybe<string>
  slug: Maybe<string>
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

export type SpecialReleaseDetails = SpecialRelease & {
  content?: Content
}
