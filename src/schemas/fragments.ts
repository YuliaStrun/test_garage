import { gql } from '@apollo/client'

export const FRAGMENT_IMAGE = gql`
  fragment Image on UploadFileEntityResponse {
    data {
      id
      attributes {
        url
        alternativeText
        width
        height
      }
    }
  }
`
