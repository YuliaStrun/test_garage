import { gql } from '@apollo/client'

import { FRAGMENT_IMAGE } from './fragments'

export const QUERY_SEASONS = gql`
  query seasons($locale: I18NLocaleCode) {
    seasons(
      locale: $locale
      sort: "numberTitle:desc"
      filters: { or: [{ isHidden: { ne: true } }, { isHidden: { null: true } }] }
    ) {
      data {
        id
        attributes {
          slug
          title
          numberTitle
          metaDescription
          image {
            ...Image
          }
          cover {
            ...Image
          }
          episodes(filters: { or: [{ isHidden: { ne: true } }, { isHidden: { null: true } }] }) {
            data {
              id
              attributes {
                title
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
                slug
                image {
                  ...Image
                }
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
      }
    }
  }

  ${FRAGMENT_IMAGE}
`
