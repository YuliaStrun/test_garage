import type { Maybe } from 'graphql/jsutils/Maybe'

import type { ImageData } from './ImageData'

export type Partner = {
  name: Maybe<string>
  link: Maybe<string>
  logo: Maybe<ImageData & { width: number; height: number }>
}
