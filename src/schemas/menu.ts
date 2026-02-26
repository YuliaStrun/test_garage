import { gql } from '@apollo/client'

export const QUERY_MENU = gql`
  query menu($locale: I18NLocaleCode) {
    menu(locale: $locale) {
      data {
        id
        attributes {
          items {
            id
            name
            link
            disabled
          }
        }
      }
    }
  }
`
