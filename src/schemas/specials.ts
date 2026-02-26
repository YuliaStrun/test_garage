import { gql } from '@apollo/client'

import { FRAGMENT_IMAGE } from './fragments'

export const QUERY_SPECIALS = gql`
  query specialReleases($locale: I18NLocaleCode) {
    specialReleases(
      locale: $locale
      sort: "createdAt:desc"
      filters: { or: [{ isHidden: { ne: true } }, { isHidden: { null: true } }] }
    ) {
      data {
        id
        attributes {
          title
          subtitle
          slug
          image {
            ...Image
          }
          audioDuration
          audioFile {
            data {
              id
              attributes {
                url
              }
            }
          }
          playerCover {
            ...Image
          }
          forAdults
          author {
            data {
              id
              attributes {
                name
                image {
                  ...Image
                }
              }
            }
          }
        }
      }
    }
  }

  ${FRAGMENT_IMAGE}
`
