import { gql } from '@apollo/client'

import { FRAGMENT_IMAGE } from './fragments'

export const QUERY_SEASON = gql`
  query season($slug: String, $locale: I18NLocaleCode) {
    seasonBySlugEntity(slug: $slug, locale: $locale) {
      data {
        id
        attributes {
          slug
          title
          numberTitle
          previewLead
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
          episodes(filters: { or: [{ isHidden: { ne: true } }, { isHidden: { null: true } }] }) {
            data {
              id
              attributes {
                slug
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
          image {
            ...Image
          }
          cover {
            ...Image
          }
          metaTitle
          metaDescription
          metaImage {
            ...Image
          }
        }
      }
    }
  }

  ${FRAGMENT_IMAGE}
`
