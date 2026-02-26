import type * as Types from './types'

/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type SeasonFragment = { __typename?: 'SeasonEntityResponse' } & {
  data?: Types.Maybe<
    { __typename?: 'SeasonEntity' } & Pick<Types.SeasonEntity, 'id'> & {
        attributes?: Types.Maybe<
          { __typename?: 'Season' } & Pick<Types.Season, 'slug' | 'title' | 'numberTitle'> & {
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
                          { __typename?: 'Episode' } & Pick<Types.Episode, 'audioDuration' | 'slug'> & {
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

export type EpisodeFragment = { __typename?: 'EpisodeEntityResponse' } & {
  data?: Types.Maybe<
    { __typename?: 'EpisodeEntity' } & Pick<Types.EpisodeEntity, 'id'> & {
        attributes?: Types.Maybe<
          { __typename?: 'Episode' } & Pick<
            Types.Episode,
            'number' | 'slug' | 'title' | 'audioDuration' | 'forAdults'
          > & {
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
              season?: Types.Maybe<
                { __typename?: 'SeasonEntityResponse' } & {
                  data?: Types.Maybe<
                    { __typename?: 'SeasonEntity' } & Pick<Types.SeasonEntity, 'id'> & {
                        attributes?: Types.Maybe<
                          { __typename?: 'Season' } & Pick<Types.Season, 'slug' | 'title' | 'numberTitle'> & {
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
                                                    { __typename?: 'UploadFileEntity' } & Pick<
                                                      Types.UploadFileEntity,
                                                      'id'
                                                    > & {
                                                        attributes?: Types.Maybe<
                                                          { __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url'>
                                                        >
                                                      }
                                                  >
                                                }
                                              >
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
                                                            'url' | 'alternativeText'
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
                                                                            'url' | 'alternativeText'
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

export type SpecialReleaseFragment = { __typename?: 'SpecialReleaseEntityResponse' } & {
  data?: Types.Maybe<
    { __typename?: 'SpecialReleaseEntity' } & Pick<Types.SpecialReleaseEntity, 'id'> & {
        attributes?: Types.Maybe<
          { __typename?: 'SpecialRelease' } & Pick<
            Types.SpecialRelease,
            'slug' | 'title' | 'subtitle' | 'audioDuration' | 'forAdults'
          > & {
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

export type MainPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>
}>

export type MainPageQuery = { __typename?: 'Query' } & {
  mainPage?: Types.Maybe<
    { __typename?: 'MainPageEntityResponse' } & {
      data?: Types.Maybe<
        { __typename?: 'MainPageEntity' } & Pick<Types.MainPageEntity, 'id'> & {
            attributes?: Types.Maybe<
              { __typename?: 'MainPage' } & Pick<
                Types.MainPage,
                'aboutText' | 'aboutLink' | 'aboutLinkName' | 'metaDescription'
              > & {
                  metaImage?: Types.Maybe<
                    { __typename?: 'UploadFileEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                            attributes?: Types.Maybe<{ __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url'>>
                          }
                      >
                    }
                  >
                  slider?: Types.Maybe<
                    Array<
                      Types.Maybe<
                        | ({ __typename?: 'ComponentMainSliderItem' } & Pick<Types.ComponentMainSliderItem, 'id'> & {
                              season?: Types.Maybe<
                                { __typename?: 'SeasonEntityResponse' } & {
                                  data?: Types.Maybe<
                                    { __typename?: 'SeasonEntity' } & Pick<Types.SeasonEntity, 'id'> & {
                                        attributes?: Types.Maybe<
                                          { __typename?: 'Season' } & Pick<
                                            Types.Season,
                                            'slug' | 'title' | 'numberTitle'
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
                                              cover?: Types.Maybe<
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
                                              episodes?: Types.Maybe<
                                                { __typename?: 'EpisodeRelationResponseCollection' } & {
                                                  data: Array<
                                                    { __typename?: 'EpisodeEntity' } & Pick<
                                                      Types.EpisodeEntity,
                                                      'id'
                                                    > & {
                                                        attributes?: Types.Maybe<
                                                          { __typename?: 'Episode' } & Pick<
                                                            Types.Episode,
                                                            'audioDuration' | 'slug'
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
                                                                            | 'url'
                                                                            | 'alternativeText'
                                                                            | 'width'
                                                                            | 'height'
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
                              episode?: Types.Maybe<
                                { __typename?: 'EpisodeEntityResponse' } & {
                                  data?: Types.Maybe<
                                    { __typename?: 'EpisodeEntity' } & Pick<Types.EpisodeEntity, 'id'> & {
                                        attributes?: Types.Maybe<
                                          { __typename?: 'Episode' } & Pick<
                                            Types.Episode,
                                            'number' | 'slug' | 'title' | 'audioDuration' | 'forAdults'
                                          > & {
                                              audioFile?: Types.Maybe<
                                                { __typename?: 'UploadFileEntityResponse' } & {
                                                  data?: Types.Maybe<
                                                    { __typename?: 'UploadFileEntity' } & Pick<
                                                      Types.UploadFileEntity,
                                                      'id'
                                                    > & {
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
                                              season?: Types.Maybe<
                                                { __typename?: 'SeasonEntityResponse' } & {
                                                  data?: Types.Maybe<
                                                    { __typename?: 'SeasonEntity' } & Pick<Types.SeasonEntity, 'id'> & {
                                                        attributes?: Types.Maybe<
                                                          { __typename?: 'Season' } & Pick<
                                                            Types.Season,
                                                            'slug' | 'title' | 'numberTitle'
                                                          > & {
                                                              episodes?: Types.Maybe<
                                                                { __typename?: 'EpisodeRelationResponseCollection' } & {
                                                                  data: Array<
                                                                    { __typename?: 'EpisodeEntity' } & Pick<
                                                                      Types.EpisodeEntity,
                                                                      'id'
                                                                    > & {
                                                                        attributes?: Types.Maybe<
                                                                          { __typename?: 'Episode' } & Pick<
                                                                            Types.Episode,
                                                                            | 'title'
                                                                            | 'audioDuration'
                                                                            | 'forAdults'
                                                                            | 'slug'
                                                                          > & {
                                                                              audioFile?: Types.Maybe<
                                                                                {
                                                                                  __typename?: 'UploadFileEntityResponse'
                                                                                } & {
                                                                                  data?: Types.Maybe<
                                                                                    {
                                                                                      __typename?: 'UploadFileEntity'
                                                                                    } & Pick<
                                                                                      Types.UploadFileEntity,
                                                                                      'id'
                                                                                    > & {
                                                                                        attributes?: Types.Maybe<
                                                                                          {
                                                                                            __typename?: 'UploadFile'
                                                                                          } & Pick<
                                                                                            Types.UploadFile,
                                                                                            'url'
                                                                                          >
                                                                                        >
                                                                                      }
                                                                                  >
                                                                                }
                                                                              >
                                                                              image?: Types.Maybe<
                                                                                {
                                                                                  __typename?: 'UploadFileEntityResponse'
                                                                                } & {
                                                                                  data?: Types.Maybe<
                                                                                    {
                                                                                      __typename?: 'UploadFileEntity'
                                                                                    } & Pick<
                                                                                      Types.UploadFileEntity,
                                                                                      'id'
                                                                                    > & {
                                                                                        attributes?: Types.Maybe<
                                                                                          {
                                                                                            __typename?: 'UploadFile'
                                                                                          } & Pick<
                                                                                            Types.UploadFile,
                                                                                            'url' | 'alternativeText'
                                                                                          >
                                                                                        >
                                                                                      }
                                                                                  >
                                                                                }
                                                                              >
                                                                              author?: Types.Maybe<
                                                                                {
                                                                                  __typename?: 'AuthorEntityResponse'
                                                                                } & {
                                                                                  data?: Types.Maybe<
                                                                                    {
                                                                                      __typename?: 'AuthorEntity'
                                                                                    } & Pick<
                                                                                      Types.AuthorEntity,
                                                                                      'id'
                                                                                    > & {
                                                                                        attributes?: Types.Maybe<
                                                                                          {
                                                                                            __typename?: 'Author'
                                                                                          } & Pick<
                                                                                            Types.Author,
                                                                                            'name'
                                                                                          > & {
                                                                                              image?: Types.Maybe<
                                                                                                {
                                                                                                  __typename?: 'UploadFileEntityResponse'
                                                                                                } & {
                                                                                                  data?: Types.Maybe<
                                                                                                    {
                                                                                                      __typename?: 'UploadFileEntity'
                                                                                                    } & Pick<
                                                                                                      Types.UploadFileEntity,
                                                                                                      'id'
                                                                                                    > & {
                                                                                                        attributes?: Types.Maybe<
                                                                                                          {
                                                                                                            __typename?: 'UploadFile'
                                                                                                          } & Pick<
                                                                                                            Types.UploadFile,
                                                                                                            | 'url'
                                                                                                            | 'alternativeText'
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
                                                                            | 'url'
                                                                            | 'alternativeText'
                                                                            | 'width'
                                                                            | 'height'
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
                              special_release?: Types.Maybe<
                                { __typename?: 'SpecialReleaseEntityResponse' } & {
                                  data?: Types.Maybe<
                                    { __typename?: 'SpecialReleaseEntity' } & Pick<Types.SpecialReleaseEntity, 'id'> & {
                                        attributes?: Types.Maybe<
                                          { __typename?: 'SpecialRelease' } & Pick<
                                            Types.SpecialRelease,
                                            'slug' | 'title' | 'subtitle' | 'audioDuration' | 'forAdults'
                                          > & {
                                              audioFile?: Types.Maybe<
                                                { __typename?: 'UploadFileEntityResponse' } & {
                                                  data?: Types.Maybe<
                                                    { __typename?: 'UploadFileEntity' } & Pick<
                                                      Types.UploadFileEntity,
                                                      'id'
                                                    > & {
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
                                                                            | 'url'
                                                                            | 'alternativeText'
                                                                            | 'width'
                                                                            | 'height'
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
                            })
                        | { __typename?: 'Error' }
                      >
                    >
                  >
                  episodes?: Types.Maybe<
                    Array<
                      Types.Maybe<
                        | ({ __typename?: 'ComponentMainEpisodeItem' } & Pick<Types.ComponentMainEpisodeItem, 'id'> & {
                              episode?: Types.Maybe<
                                { __typename?: 'EpisodeEntityResponse' } & {
                                  data?: Types.Maybe<
                                    { __typename?: 'EpisodeEntity' } & Pick<Types.EpisodeEntity, 'id'> & {
                                        attributes?: Types.Maybe<
                                          { __typename?: 'Episode' } & Pick<
                                            Types.Episode,
                                            'number' | 'slug' | 'title' | 'audioDuration' | 'forAdults'
                                          > & {
                                              audioFile?: Types.Maybe<
                                                { __typename?: 'UploadFileEntityResponse' } & {
                                                  data?: Types.Maybe<
                                                    { __typename?: 'UploadFileEntity' } & Pick<
                                                      Types.UploadFileEntity,
                                                      'id'
                                                    > & {
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
                                              season?: Types.Maybe<
                                                { __typename?: 'SeasonEntityResponse' } & {
                                                  data?: Types.Maybe<
                                                    { __typename?: 'SeasonEntity' } & Pick<Types.SeasonEntity, 'id'> & {
                                                        attributes?: Types.Maybe<
                                                          { __typename?: 'Season' } & Pick<
                                                            Types.Season,
                                                            'slug' | 'title' | 'numberTitle'
                                                          > & {
                                                              episodes?: Types.Maybe<
                                                                { __typename?: 'EpisodeRelationResponseCollection' } & {
                                                                  data: Array<
                                                                    { __typename?: 'EpisodeEntity' } & Pick<
                                                                      Types.EpisodeEntity,
                                                                      'id'
                                                                    > & {
                                                                        attributes?: Types.Maybe<
                                                                          { __typename?: 'Episode' } & Pick<
                                                                            Types.Episode,
                                                                            | 'title'
                                                                            | 'audioDuration'
                                                                            | 'forAdults'
                                                                            | 'slug'
                                                                          > & {
                                                                              audioFile?: Types.Maybe<
                                                                                {
                                                                                  __typename?: 'UploadFileEntityResponse'
                                                                                } & {
                                                                                  data?: Types.Maybe<
                                                                                    {
                                                                                      __typename?: 'UploadFileEntity'
                                                                                    } & Pick<
                                                                                      Types.UploadFileEntity,
                                                                                      'id'
                                                                                    > & {
                                                                                        attributes?: Types.Maybe<
                                                                                          {
                                                                                            __typename?: 'UploadFile'
                                                                                          } & Pick<
                                                                                            Types.UploadFile,
                                                                                            'url'
                                                                                          >
                                                                                        >
                                                                                      }
                                                                                  >
                                                                                }
                                                                              >
                                                                              image?: Types.Maybe<
                                                                                {
                                                                                  __typename?: 'UploadFileEntityResponse'
                                                                                } & {
                                                                                  data?: Types.Maybe<
                                                                                    {
                                                                                      __typename?: 'UploadFileEntity'
                                                                                    } & Pick<
                                                                                      Types.UploadFileEntity,
                                                                                      'id'
                                                                                    > & {
                                                                                        attributes?: Types.Maybe<
                                                                                          {
                                                                                            __typename?: 'UploadFile'
                                                                                          } & Pick<
                                                                                            Types.UploadFile,
                                                                                            'url' | 'alternativeText'
                                                                                          >
                                                                                        >
                                                                                      }
                                                                                  >
                                                                                }
                                                                              >
                                                                              author?: Types.Maybe<
                                                                                {
                                                                                  __typename?: 'AuthorEntityResponse'
                                                                                } & {
                                                                                  data?: Types.Maybe<
                                                                                    {
                                                                                      __typename?: 'AuthorEntity'
                                                                                    } & Pick<
                                                                                      Types.AuthorEntity,
                                                                                      'id'
                                                                                    > & {
                                                                                        attributes?: Types.Maybe<
                                                                                          {
                                                                                            __typename?: 'Author'
                                                                                          } & Pick<
                                                                                            Types.Author,
                                                                                            'name'
                                                                                          > & {
                                                                                              image?: Types.Maybe<
                                                                                                {
                                                                                                  __typename?: 'UploadFileEntityResponse'
                                                                                                } & {
                                                                                                  data?: Types.Maybe<
                                                                                                    {
                                                                                                      __typename?: 'UploadFileEntity'
                                                                                                    } & Pick<
                                                                                                      Types.UploadFileEntity,
                                                                                                      'id'
                                                                                                    > & {
                                                                                                        attributes?: Types.Maybe<
                                                                                                          {
                                                                                                            __typename?: 'UploadFile'
                                                                                                          } & Pick<
                                                                                                            Types.UploadFile,
                                                                                                            | 'url'
                                                                                                            | 'alternativeText'
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
                                                                            | 'url'
                                                                            | 'alternativeText'
                                                                            | 'width'
                                                                            | 'height'
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
                              special_release?: Types.Maybe<
                                { __typename?: 'SpecialReleaseEntityResponse' } & {
                                  data?: Types.Maybe<
                                    { __typename?: 'SpecialReleaseEntity' } & Pick<Types.SpecialReleaseEntity, 'id'> & {
                                        attributes?: Types.Maybe<
                                          { __typename?: 'SpecialRelease' } & Pick<
                                            Types.SpecialRelease,
                                            'slug' | 'title' | 'subtitle' | 'audioDuration' | 'forAdults'
                                          > & {
                                              audioFile?: Types.Maybe<
                                                { __typename?: 'UploadFileEntityResponse' } & {
                                                  data?: Types.Maybe<
                                                    { __typename?: 'UploadFileEntity' } & Pick<
                                                      Types.UploadFileEntity,
                                                      'id'
                                                    > & {
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
                                                                            | 'url'
                                                                            | 'alternativeText'
                                                                            | 'width'
                                                                            | 'height'
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
                            })
                        | { __typename?: 'Error' }
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

export type AboutPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>
}>

export type AboutPageQuery = { __typename?: 'Query' } & {
  aboutPage?: Types.Maybe<
    { __typename?: 'AboutPageEntityResponse' } & {
      data?: Types.Maybe<
        { __typename?: 'AboutPageEntity' } & Pick<Types.AboutPageEntity, 'id'> & {
            attributes?: Types.Maybe<
              { __typename?: 'AboutPage' } & Pick<
                Types.AboutPage,
                'head' | 'text' | 'metaTitle' | 'metaDescription'
              > & {
                  metaImage?: Types.Maybe<
                    { __typename?: 'UploadFileEntityResponse' } & {
                      data?: Types.Maybe<
                        { __typename?: 'UploadFileEntity' } & Pick<Types.UploadFileEntity, 'id'> & {
                            attributes?: Types.Maybe<{ __typename?: 'UploadFile' } & Pick<Types.UploadFile, 'url'>>
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
