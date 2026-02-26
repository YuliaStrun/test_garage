import { Maybe } from 'graphql/jsutils/Maybe'

import { Episode } from 'schemas/__generated__/types'

import { getTime } from './getTime'
import { timeStringToNumber } from './timeStringToNumber'

export const getEpisodesDuration = (
  episodes: Maybe<{
    data: Array<{
      attributes?: Maybe<{ __typename?: 'Episode' } & Pick<Episode, 'audioDuration'>>
    }>
  }>
) => {
  return getTime(
    episodes?.data?.reduce(
      (acc, { attributes }) => (!attributes?.audioDuration ? acc : acc + timeStringToNumber(attributes.audioDuration)),
      0
    ) || 0
  )
}
