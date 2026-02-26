import { gql } from '@apollo/client'

import { FRAGMENT_IMAGE } from './fragments'

export const QUERY_SPECIAL = gql`
  query specialRelease($slug: String, $locale: I18NLocaleCode) {
    specialReleaseBySlugEntity(slug: $slug, locale: $locale) {
      data {
        id
        attributes {
          title
          subtitle
          slug
          content {
            ... on ComponentContentTracklist {
              __typename
              id
              anchor
              item(pagination: { pageSize: 99 }) {
                id
                time
                title
                link
              }
            }
            ... on ComponentContentPartners {
              __typename
              id
              anchor
              title
              items {
                data {
                  id
                  attributes {
                    name
                    link
                    image {
                      ...Image
                    }
                  }
                }
              }
            }
            ... on ComponentContentEditor {
              __typename
              id
              text
              anchor
            }
            ... on ComponentContentSlider {
              __typename
              id
              slides(pagination: { limit: -1 }) {
                __typename
                id
                image {
                  ...Image
                }
                caption
                fill
              }
            }
          }
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
          metaTitle
          metaDescription
          metaImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          anchorMenu {
            id
            name
            anchor
          }
        }
      }
    }
  }

  ${FRAGMENT_IMAGE}
`
