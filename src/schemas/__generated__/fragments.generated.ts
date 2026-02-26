import type * as Types from './types'

/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type ImageFragment = { __typename?: 'UploadFileEntityResponse' } & {
  data?: Types.Maybe<
    { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
        attributes?: Types.Maybe<
          { __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url' | 'alternativeText' | 'width' | 'height'>
        >
      }
  >
}
