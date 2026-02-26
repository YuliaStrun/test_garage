import type * as Types from './types'

/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type SpecialReleasesQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>
}>

export type SpecialReleasesQuery = { __typename?: 'Query' } & {
  specialReleases?: Types.Maybe<
    { __typename?: 'SpecialReleaseEntityResponseCollection' } & {
      data: Array<
        { __typename?: 'SpecialReleaseEntity' } & Pick<Types.SpecialReleaseEntity, 'id'> & {
            attributes?: Types.Maybe<
              { __typename?: 'SpecialRelease' } & Pick<
                Types.SpecialRelease,
                'title' | 'subtitle' | 'slug' | 'audioDuration' | 'forAdults'
              > & {
                  image?: Types.Maybe<
                    { __typename?: 'UploadFileEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                            attributes?: Types.Maybe<
                              { __typename?: 'UploadFile' } & Pick<
                                Types.UploadFile,
                                'url' | 'alternativeText' | 'width' | 'height'
                              >
                            >
                          }
                      >
                    }
                  >
                  audioFile?: Types.Maybe<
                    { __typename?: 'UploadFileEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                            attributes?: Types.Maybe<{ __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url'>>
                          }
                      >
                    }
                  >
                  playerCover?: Types.Maybe<
                    { __typename?: 'UploadFileEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                            attributes?: Types.Maybe<
                              { __typename?: 'UploadFile' } & Pick<
                                Types.UploadFile,
                                'url' | 'alternativeText' | 'width' | 'height'
                              >
                            >
                          }
                      >
                    }
                  >
                  author?: Types.Maybe<
                    { __typename?: 'AuthorEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'AuthorEntity' } & Pick<Types.AuthorEntity, 'id'> & {
                            attributes?: Types.Maybe<
                              { __typename?: 'Author' } & Pick<Types.Author, 'name'> & {
                                  image?: Types.Maybe<
                                    { __typename?: 'UploadFileEntityResponse' } & {
                                      data?: Types.Maybe<
                                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                                            attributes?: Types.Maybe<
                                              { __typename?: 'UploadFile' } & Pick<
                                                Types.UploadFile,
                                                'url' | 'alternativeText' | 'width' | 'height'
                                              >
                                            >
                                          }
                                      >
                                    }
                                  >
                                }
                            >
                          }
                      >
                    }
                  >
                }
            >
          }
      >
    }
  >
}
