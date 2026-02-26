import type { Maybe } from 'graphql/jsutils/Maybe'

import type { Partner } from './Partner'

export type Content = (ContentEditor | ContentSlider | ContentTracklist | ContentPartners)[]

export type ContentEditor = {
  type: 'editor'
  key: string
  data: Maybe<string>
  anchor: string | null
}

export type ContentSlide = {
  key: string
  url: string
  alt: string
  caption: string
  fill: null | 'width' | 'height'
}

export type ContentSlider = {
  type: 'slider'
  key: string
  slides: ContentSlide[]
}

export type ContentTracklist = {
  type: 'tracklist'
  key: string
  anchor: string | null
  data: Maybe<{
    time: Maybe<string>
    title: Maybe<string>
    link: Maybe<string>
  }>[]
}

export type ContentPartners = {
  type: 'partners'
  key: string
  anchor: string | null
  title: string | null
  data: Partner[]
}
