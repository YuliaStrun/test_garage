import type * as Types from './types'

/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type SpecialReleaseQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>
}>

export type SpecialReleaseQuery = { __typename?: 'Query' } & {
  specialReleaseBySlugEntity?: Types.Maybe<
    { __typename?: 'SpecialReleaseEntityResponse' } & {
      data?: Types.Maybe<
        { __typename?: 'SpecialReleaseEntity' } & Pick<Types.SpecialReleaseEntity, 'id'> & {
            attributes?: Types.Maybe<
              { __typename?: 'SpecialRelease' } & Pick<
                Types.SpecialRelease,
                'title' | 'subtitle' | 'slug' | 'audioDuration' | 'forAdults' | 'metaTitle' | 'metaDescription'
              > & {
                  content?: Types.Maybe<
                    Array<
                      Types.Maybe<
                        | ({ __typename: 'ComponentContentEditor' } & Pick<
                            Types.ComponentContentEditor,
                            'id' | 'text' | 'anchor'
                          >)
                        | ({ __typename: 'ComponentContentPartners' } & Pick<
                            Types.ComponentContentPartners,
                            'id' | 'anchor' | 'title'
                          > & {
                              items?: Types.Maybe<
                                { __typename?: 'PartnerRelationResponseCollection' } & {
                                  data: Array<
                                    { __typename?: 'PartnerEntity' } & Pick<Types.PartnerEntity, 'id'> & {
                                        attributes?: Types.Maybe<
                                          { __typename?: 'Partner' } & Pick<Types.Partner, 'name' | 'link'> & {
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
                            })
                        | ({ __typename: 'ComponentContentSlider' } & Pick<Types.ComponentContentSlider, 'id'> & {
                              slides?: Types.Maybe<
                                Array<
                                  Types.Maybe<
                                    { __typename: 'ComponentContentImage' } & Pick<
                                      Types.ComponentContentImage,
                                      'id' | 'caption' | 'fill'
                                    > & {
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
                                >
                              >
                            })
                        | ({ __typename: 'ComponentContentTracklist' } & Pick<
                            Types.ComponentContentTracklist,
                            'id' | 'anchor'
                          > & {
                              item?: Types.Maybe<
                                Array<
                                  Types.Maybe<
                                    { __typename?: 'ComponentContentTracklistItem' } & Pick<
                                      Types.ComponentContentTracklistItem,
                                      'id' | 'time' | 'title' | 'link'
                                    >
                                  >
                                >
                              >
                            })
                        | { __typename?: 'Error' }
                      >
                    >
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
                  metaImage?: Types.Maybe<
                    { __typename?: 'UploadFileEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                            attributes?: Types.Maybe<{ __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url'>>
                          }
                      >
                    }
                  >
                  anchorMenu?: Types.Maybe<
                    Array<
                      Types.Maybe<
                        { __typename?: 'ComponentContentAnchorMenuItem' } & Pick<
                          Types.ComponentContentAnchorMenuItem,
                          'id' | 'name' | 'anchor'
                        >
                      >
                    >
                  >
                }
            >
          }
      >
    }
  >
}
