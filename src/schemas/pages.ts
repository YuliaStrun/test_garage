import { gql } from '@apollo/client'

import { FRAGMENT_IMAGE } from './fragments'

const FRAGMENT_SEASON = gql`
  fragment Season on SeasonEntityResponse {
    data {
      id
      attributes {
        slug
        title
        numberTitle
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
              audioDuration
              slug
              image {
                ...Image
              }
            }
          }
        }
      }
    }
  }

  ${FRAGMENT_IMAGE}
`

const FRAGMENT_EPISODE = gql`
  fragment Episode on EpisodeEntityResponse {
    data {
      id
      attributes {
        number
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
        season {
          data {
            id
            attributes {
              slug
              title
              numberTitle
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
                    forAdults
                    slug
                    image {
                      data {
                        id
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                    author {
                      data {
                        id
                        attributes {
                          name
                          image {
                            data {
                              id
                              attributes {
                                url
                                alternativeText
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
        }
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

  ${FRAGMENT_IMAGE}
`

const FRAGMENT_SPECIAL_RELEASE = gql`
  fragment SpecialRelease on SpecialReleaseEntityResponse {
    data {
      id
      attributes {
        slug
        title
        subtitle
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

  ${FRAGMENT_IMAGE}
`

export const QUERY_MAIN_PAGE = gql`
  query mainPage($locale: I18NLocaleCode) {
    mainPage(locale: $locale) {
      data {
        id
        attributes {
          aboutText
          aboutLink
          aboutLinkName
          metaDescription
          metaImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          slider {
            ... on ComponentMainSliderItem {
              id
              season {
                ...Season
              }
              episode {
                ...Episode
              }
              special_release {
                ...SpecialRelease
              }
            }
          }
          episodes {
            ... on ComponentMainEpisodeItem {
              id
              episode {
                ...Episode
              }
              special_release {
                ...SpecialRelease
              }
            }
          }
        }
      }
    }
  }

  ${FRAGMENT_IMAGE}
  ${FRAGMENT_SEASON}
  ${FRAGMENT_EPISODE}
  ${FRAGMENT_SPECIAL_RELEASE}
`

export const QUERY_ABOUT_PAGE = gql`
  query aboutPage($locale: I18NLocaleCode) {
    aboutPage(locale: $locale) {
      data {
        id
        attributes {
          head
          text
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
        }
      }
    }
  }
`
