import type * as Types from './types'

/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type SeasonsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>
}>

export type SeasonsQuery = { __typename?: 'Query' } & {
  seasons?: Types.Maybe<
    { __typename?: 'SeasonEntityResponseCollection' } & {
      data: Array<
        { __typename?: 'SeasonEntity' } & Pick<Types.SeasonEntity, 'id'> & {
            attributes?: Types.Maybe<
              { __typename?: 'Season' } & Pick<Types.Season, 'slug' | 'title' | 'numberTitle' | 'metaDescription'> & {
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
                  cover?: Types.Maybe<
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
                  episodes?: Types.Maybe<
                    { __typename?: 'EpisodeRelationResponseCollection' } & {
                      data: Array<
                        { __typename?: 'EpisodeEntity' } & Pick<Types.EpisodeEntity, 'id'> & {
                            attributes?: Types.Maybe<
                              { __typename?: 'Episode' } & Pick<
                                Types.Episode,
                                'title' | 'audioDuration' | 'forAdults' | 'slug'
                              > & {
                                  audioFile?: Types.Maybe<
                                    { __typename?: 'UploadFileEntityResponse' } & {
                                      data?: Types.Maybe<
                                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                                            attributes?: Types.Maybe<
                                              { __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url'>
                                            >
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
                                  author?: Types.Maybe<
                                    { __typename?: 'AuthorEntityResponse' } & {
                                      data?: Types.Maybe<
                                        { __typename?: 'AuthorEntity' } & Pick<Types.AuthorEntity, 'id'> & {
                                            attributes?: Types.Maybe<
                                              { __typename?: 'Author' } & Pick<Types.Author, 'name'> & {
                                                  image?: Types.Maybe<
                                                    { __typename?: 'UploadFileEntityResponse' } & {
                                                      data?: Types.Maybe<
                                                        { __typename?: 'UploadFileEntity' } & Pick<
                                                          Types.UploadFileEntity,
                                                          'id'
                                                        > & {
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
            >
          }
      >
    }
  >
}
