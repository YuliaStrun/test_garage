/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  EpisodeContentDynamicZoneInput: { input: any; output: any }
  I18NLocaleCode: { input: any; output: any }
  JSON: { input: any; output: any }
  MainPageEpisodesDynamicZoneInput: { input: any; output: any }
  MainPageSliderDynamicZoneInput: { input: any; output: any }
  SeasonContentDynamicZoneInput: { input: any; output: any }
  SpecialReleaseContentDynamicZoneInput: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type AboutPage = {
  __typename?: 'AboutPage'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  head?: Maybe<Scalars['String']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<AboutPageRelationResponseCollection>
  metaDescription?: Maybe<Scalars['String']['output']>
  metaImage?: Maybe<UploadFileEntityResponse>
  metaTitle?: Maybe<Scalars['String']['output']>
  text?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity'
  attributes?: Maybe<AboutPage>
  id?: Maybe<Scalars['ID']['output']>
}

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse'
  data?: Maybe<AboutPageEntity>
}

export type AboutPageInput = {
  head?: InputMaybe<Scalars['String']['input']>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaImage?: InputMaybe<Scalars['ID']['input']>
  metaTitle?: InputMaybe<Scalars['String']['input']>
  text?: InputMaybe<Scalars['String']['input']>
}

export type AboutPageRelationResponseCollection = {
  __typename?: 'AboutPageRelationResponseCollection'
  data: Array<AboutPageEntity>
}

export type Author = {
  __typename?: 'Author'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  episodes?: Maybe<EpisodeRelationResponseCollection>
  image?: Maybe<UploadFileEntityResponse>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<AuthorRelationResponseCollection>
  name?: Maybe<Scalars['String']['output']>
  special_releases?: Maybe<SpecialReleaseRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type AuthorEpisodesArgs = {
  filters?: InputMaybe<EpisodeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type AuthorLocalizationsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type AuthorSpecial_ReleasesArgs = {
  filters?: InputMaybe<SpecialReleaseFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type AuthorEntity = {
  __typename?: 'AuthorEntity'
  attributes?: Maybe<Author>
  id?: Maybe<Scalars['ID']['output']>
}

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse'
  data?: Maybe<AuthorEntity>
}

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection'
  data: Array<AuthorEntity>
  meta: ResponseCollectionMeta
}

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  episodes?: InputMaybe<EpisodeFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<AuthorFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<AuthorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  special_releases?: InputMaybe<SpecialReleaseFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type AuthorInput = {
  episodes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  image?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  special_releases?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type AuthorRelationResponseCollection = {
  __typename?: 'AuthorRelationResponseCollection'
  data: Array<AuthorEntity>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  nei?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export type ComponentContentAnchorMenuItem = {
  __typename?: 'ComponentContentAnchorMenuItem'
  anchor?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type ComponentContentAnchorMenuItemFiltersInput = {
  anchor?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentContentAnchorMenuItemFiltersInput>>>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentContentAnchorMenuItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentContentAnchorMenuItemFiltersInput>>>
}

export type ComponentContentAnchorMenuItemInput = {
  anchor?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type ComponentContentEditor = {
  __typename?: 'ComponentContentEditor'
  anchor?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  text?: Maybe<Scalars['String']['output']>
}

export type ComponentContentImage = {
  __typename?: 'ComponentContentImage'
  caption?: Maybe<Scalars['String']['output']>
  fill?: Maybe<Enum_Componentcontentimage_Fill>
  id: Scalars['ID']['output']
  image?: Maybe<UploadFileEntityResponse>
}

export type ComponentContentImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentImageFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  fill?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentContentImageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentContentImageFiltersInput>>>
}

export type ComponentContentPartners = {
  __typename?: 'ComponentContentPartners'
  anchor?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  items?: Maybe<PartnerRelationResponseCollection>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentContentPartnersItemsArgs = {
  filters?: InputMaybe<PartnerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentContentSlider = {
  __typename?: 'ComponentContentSlider'
  id: Scalars['ID']['output']
  slides?: Maybe<Array<Maybe<ComponentContentImage>>>
}

export type ComponentContentSliderSlidesArgs = {
  filters?: InputMaybe<ComponentContentImageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentContentTracklist = {
  __typename?: 'ComponentContentTracklist'
  anchor?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  item?: Maybe<Array<Maybe<ComponentContentTracklistItem>>>
}

export type ComponentContentTracklistItemArgs = {
  filters?: InputMaybe<ComponentContentTracklistItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentContentTracklistItem = {
  __typename?: 'ComponentContentTracklistItem'
  id: Scalars['ID']['output']
  link?: Maybe<Scalars['String']['output']>
  time?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentContentTracklistItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentTracklistItemFiltersInput>>>
  link?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentContentTracklistItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentContentTracklistItemFiltersInput>>>
  time?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentMainEpisodeItem = {
  __typename?: 'ComponentMainEpisodeItem'
  episode?: Maybe<EpisodeEntityResponse>
  id: Scalars['ID']['output']
  special_release?: Maybe<SpecialReleaseEntityResponse>
}

export type ComponentMainSliderItem = {
  __typename?: 'ComponentMainSliderItem'
  episode?: Maybe<EpisodeEntityResponse>
  id: Scalars['ID']['output']
  season?: Maybe<SeasonEntityResponse>
  special_release?: Maybe<SpecialReleaseEntityResponse>
}

export type ComponentMenuMenu = {
  __typename?: 'ComponentMenuMenu'
  disabled?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  link?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ComponentMenuMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuFiltersInput>>>
  disabled?: InputMaybe<BooleanFilterInput>
  link?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentMenuMenuFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuFiltersInput>>>
}

export type ComponentMenuMenuInput = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  nei?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export enum Enum_Componentcontentimage_Fill {
  Height = 'height',
  Width = 'width'
}

export type Episode = {
  __typename?: 'Episode'
  anchorMenu?: Maybe<Array<Maybe<ComponentContentAnchorMenuItem>>>
  audioDuration?: Maybe<Scalars['String']['output']>
  audioFile?: Maybe<UploadFileEntityResponse>
  author?: Maybe<AuthorEntityResponse>
  content?: Maybe<Array<Maybe<EpisodeContentDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  forAdults?: Maybe<Scalars['Boolean']['output']>
  image?: Maybe<UploadFileEntityResponse>
  isHidden?: Maybe<Scalars['Boolean']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<EpisodeRelationResponseCollection>
  metaDescription?: Maybe<Scalars['String']['output']>
  metaImage?: Maybe<UploadFileEntityResponse>
  metaTitle?: Maybe<Scalars['String']['output']>
  number?: Maybe<Scalars['Int']['output']>
  playerCover?: Maybe<UploadFileEntityResponse>
  season?: Maybe<SeasonEntityResponse>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type EpisodeAnchorMenuArgs = {
  filters?: InputMaybe<ComponentContentAnchorMenuItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type EpisodeLocalizationsArgs = {
  filters?: InputMaybe<EpisodeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type EpisodeContentDynamicZone =
  | ComponentContentEditor
  | ComponentContentPartners
  | ComponentContentSlider
  | ComponentContentTracklist
  | Error

export type EpisodeEntity = {
  __typename?: 'EpisodeEntity'
  attributes?: Maybe<Episode>
  id?: Maybe<Scalars['ID']['output']>
}

export type EpisodeEntityResponse = {
  __typename?: 'EpisodeEntityResponse'
  data?: Maybe<EpisodeEntity>
}

export type EpisodeEntityResponseCollection = {
  __typename?: 'EpisodeEntityResponseCollection'
  data: Array<EpisodeEntity>
  meta: ResponseCollectionMeta
}

export type EpisodeFiltersInput = {
  anchorMenu?: InputMaybe<ComponentContentAnchorMenuItemFiltersInput>
  and?: InputMaybe<Array<InputMaybe<EpisodeFiltersInput>>>
  audioDuration?: InputMaybe<StringFilterInput>
  author?: InputMaybe<AuthorFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  forAdults?: InputMaybe<BooleanFilterInput>
  id?: InputMaybe<IdFilterInput>
  isHidden?: InputMaybe<BooleanFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<EpisodeFiltersInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaTitle?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EpisodeFiltersInput>
  number?: InputMaybe<IntFilterInput>
  or?: InputMaybe<Array<InputMaybe<EpisodeFiltersInput>>>
  season?: InputMaybe<SeasonFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type EpisodeInput = {
  anchorMenu?: InputMaybe<Array<InputMaybe<ComponentContentAnchorMenuItemInput>>>
  audioDuration?: InputMaybe<Scalars['String']['input']>
  audioFile?: InputMaybe<Scalars['ID']['input']>
  author?: InputMaybe<Scalars['ID']['input']>
  content?: InputMaybe<Array<Scalars['EpisodeContentDynamicZoneInput']['input']>>
  forAdults?: InputMaybe<Scalars['Boolean']['input']>
  image?: InputMaybe<Scalars['ID']['input']>
  isHidden?: InputMaybe<Scalars['Boolean']['input']>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaImage?: InputMaybe<Scalars['ID']['input']>
  metaTitle?: InputMaybe<Scalars['String']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  playerCover?: InputMaybe<Scalars['ID']['input']>
  season?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type EpisodeRelationResponseCollection = {
  __typename?: 'EpisodeRelationResponseCollection'
  data: Array<EpisodeEntity>
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  nei?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type GenericMorph =
  | AboutPage
  | Author
  | ComponentContentAnchorMenuItem
  | ComponentContentEditor
  | ComponentContentImage
  | ComponentContentPartners
  | ComponentContentSlider
  | ComponentContentTracklist
  | ComponentContentTracklistItem
  | ComponentMainEpisodeItem
  | ComponentMainSliderItem
  | ComponentMenuMenu
  | Episode
  | I18NLocale
  | MainPage
  | Menu
  | Partner
  | Season
  | SpecialRelease
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']['output']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  nei?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  nei?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  nei?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export type MainPage = {
  __typename?: 'MainPage'
  aboutLink?: Maybe<Scalars['String']['output']>
  aboutLinkName?: Maybe<Scalars['String']['output']>
  aboutText?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  episodes?: Maybe<Array<Maybe<MainPageEpisodesDynamicZone>>>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<MainPageRelationResponseCollection>
  metaDescription?: Maybe<Scalars['String']['output']>
  metaImage?: Maybe<UploadFileEntityResponse>
  slider?: Maybe<Array<Maybe<MainPageSliderDynamicZone>>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MainPageEntity = {
  __typename?: 'MainPageEntity'
  attributes?: Maybe<MainPage>
  id?: Maybe<Scalars['ID']['output']>
}

export type MainPageEntityResponse = {
  __typename?: 'MainPageEntityResponse'
  data?: Maybe<MainPageEntity>
}

export type MainPageEpisodesDynamicZone = ComponentMainEpisodeItem | Error

export type MainPageInput = {
  aboutLink?: InputMaybe<Scalars['String']['input']>
  aboutLinkName?: InputMaybe<Scalars['String']['input']>
  aboutText?: InputMaybe<Scalars['String']['input']>
  episodes?: InputMaybe<Array<Scalars['MainPageEpisodesDynamicZoneInput']['input']>>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaImage?: InputMaybe<Scalars['ID']['input']>
  slider?: InputMaybe<Array<Scalars['MainPageSliderDynamicZoneInput']['input']>>
}

export type MainPageRelationResponseCollection = {
  __typename?: 'MainPageRelationResponseCollection'
  data: Array<MainPageEntity>
}

export type MainPageSliderDynamicZone = ComponentMainSliderItem | Error

export type Menu = {
  __typename?: 'Menu'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  items?: Maybe<Array<Maybe<ComponentMenuMenu>>>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<MenuRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MenuItemsArgs = {
  filters?: InputMaybe<ComponentMenuMenuFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MenuEntity = {
  __typename?: 'MenuEntity'
  attributes?: Maybe<Menu>
  id?: Maybe<Scalars['ID']['output']>
}

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse'
  data?: Maybe<MenuEntity>
}

export type MenuInput = {
  items?: InputMaybe<Array<InputMaybe<ComponentMenuMenuInput>>>
}

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection'
  data: Array<MenuEntity>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createAboutPageLocalization?: Maybe<AboutPageEntityResponse>
  createAuthorLocalization?: Maybe<AuthorEntityResponse>
  createEpisodeLocalization?: Maybe<EpisodeEntityResponse>
  createMainPageLocalization?: Maybe<MainPageEntityResponse>
  createMenuLocalization?: Maybe<MenuEntityResponse>
  createPartnerLocalization?: Maybe<PartnerEntityResponse>
  createSeasonLocalization?: Maybe<SeasonEntityResponse>
  createSpecialReleaseLocalization?: Maybe<SpecialReleaseEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateFileInfo: UploadFileEntityResponse
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationCreateAboutPageLocalizationArgs = {
  data?: InputMaybe<AboutPageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateAuthorLocalizationArgs = {
  data?: InputMaybe<AuthorInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateEpisodeLocalizationArgs = {
  data?: InputMaybe<EpisodeInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateMainPageLocalizationArgs = {
  data?: InputMaybe<MainPageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreatePartnerLocalizationArgs = {
  data?: InputMaybe<PartnerInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateSeasonLocalizationArgs = {
  data?: InputMaybe<SeasonInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateSpecialReleaseLocalizationArgs = {
  data?: InputMaybe<SpecialReleaseInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  files: Array<InputMaybe<Scalars['Upload']['input']>>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  file: Scalars['Upload']['input']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export type Partner = {
  __typename?: 'Partner'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  image?: Maybe<UploadFileEntityResponse>
  link?: Maybe<Scalars['String']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<PartnerRelationResponseCollection>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PartnerLocalizationsArgs = {
  filters?: InputMaybe<PartnerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PartnerEntity = {
  __typename?: 'PartnerEntity'
  attributes?: Maybe<Partner>
  id?: Maybe<Scalars['ID']['output']>
}

export type PartnerEntityResponse = {
  __typename?: 'PartnerEntityResponse'
  data?: Maybe<PartnerEntity>
}

export type PartnerEntityResponseCollection = {
  __typename?: 'PartnerEntityResponseCollection'
  data: Array<PartnerEntity>
  meta: ResponseCollectionMeta
}

export type PartnerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  link?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<PartnerFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PartnerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PartnerInput = {
  image?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type PartnerRelationResponseCollection = {
  __typename?: 'PartnerRelationResponseCollection'
  data: Array<PartnerEntity>
}

export type Query = {
  __typename?: 'Query'
  aboutPage?: Maybe<AboutPageEntityResponse>
  author?: Maybe<AuthorEntityResponse>
  authors?: Maybe<AuthorEntityResponseCollection>
  episode?: Maybe<EpisodeEntityResponse>
  episodeBySlug?: Maybe<Episode>
  episodeBySlugEntity?: Maybe<EpisodeEntityResponse>
  episodes?: Maybe<EpisodeEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  mainPage?: Maybe<MainPageEntityResponse>
  me?: Maybe<UsersPermissionsMe>
  menu?: Maybe<MenuEntityResponse>
  partner?: Maybe<PartnerEntityResponse>
  partners?: Maybe<PartnerEntityResponseCollection>
  season?: Maybe<SeasonEntityResponse>
  seasonBySlug?: Maybe<Season>
  seasonBySlugEntity?: Maybe<SeasonEntityResponse>
  seasons?: Maybe<SeasonEntityResponseCollection>
  specialRelease?: Maybe<SpecialReleaseEntityResponse>
  specialReleaseBySlug?: Maybe<SpecialRelease>
  specialReleaseBySlugEntity?: Maybe<SpecialReleaseEntityResponse>
  specialReleases?: Maybe<SpecialReleaseEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryEpisodeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryEpisodeBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QueryEpisodeBySlugEntityArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QueryEpisodesArgs = {
  filters?: InputMaybe<EpisodeFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMainPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryPartnerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryPartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySeasonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QuerySeasonBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QuerySeasonBySlugEntityArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QuerySeasonsArgs = {
  filters?: InputMaybe<SeasonFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySpecialReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QuerySpecialReleaseBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QuerySpecialReleaseBySlugEntityArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QuerySpecialReleasesArgs = {
  filters?: InputMaybe<SpecialReleaseFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type Season = {
  __typename?: 'Season'
  content?: Maybe<Array<Maybe<SeasonContentDynamicZone>>>
  cover?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  episodes?: Maybe<EpisodeRelationResponseCollection>
  image?: Maybe<UploadFileEntityResponse>
  isHidden?: Maybe<Scalars['Boolean']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<SeasonRelationResponseCollection>
  metaDescription?: Maybe<Scalars['String']['output']>
  metaImage?: Maybe<UploadFileEntityResponse>
  metaTitle?: Maybe<Scalars['String']['output']>
  numberTitle?: Maybe<Scalars['String']['output']>
  previewLead?: Maybe<Scalars['String']['output']>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type SeasonEpisodesArgs = {
  filters?: InputMaybe<EpisodeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SeasonLocalizationsArgs = {
  filters?: InputMaybe<SeasonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SeasonContentDynamicZone =
  | ComponentContentEditor
  | ComponentContentPartners
  | ComponentContentSlider
  | ComponentContentTracklist
  | Error

export type SeasonEntity = {
  __typename?: 'SeasonEntity'
  attributes?: Maybe<Season>
  id?: Maybe<Scalars['ID']['output']>
}

export type SeasonEntityResponse = {
  __typename?: 'SeasonEntityResponse'
  data?: Maybe<SeasonEntity>
}

export type SeasonEntityResponseCollection = {
  __typename?: 'SeasonEntityResponseCollection'
  data: Array<SeasonEntity>
  meta: ResponseCollectionMeta
}

export type SeasonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SeasonFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  episodes?: InputMaybe<EpisodeFiltersInput>
  id?: InputMaybe<IdFilterInput>
  isHidden?: InputMaybe<BooleanFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<SeasonFiltersInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaTitle?: InputMaybe<StringFilterInput>
  not?: InputMaybe<SeasonFiltersInput>
  numberTitle?: InputMaybe<StringFilterInput>
  or?: InputMaybe<Array<InputMaybe<SeasonFiltersInput>>>
  previewLead?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type SeasonInput = {
  content?: InputMaybe<Array<Scalars['SeasonContentDynamicZoneInput']['input']>>
  cover?: InputMaybe<Scalars['ID']['input']>
  episodes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  image?: InputMaybe<Scalars['ID']['input']>
  isHidden?: InputMaybe<Scalars['Boolean']['input']>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaImage?: InputMaybe<Scalars['ID']['input']>
  metaTitle?: InputMaybe<Scalars['String']['input']>
  numberTitle?: InputMaybe<Scalars['String']['input']>
  previewLead?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type SeasonRelationResponseCollection = {
  __typename?: 'SeasonRelationResponseCollection'
  data: Array<SeasonEntity>
}

export type SpecialRelease = {
  __typename?: 'SpecialRelease'
  anchorMenu?: Maybe<Array<Maybe<ComponentContentAnchorMenuItem>>>
  audioDuration?: Maybe<Scalars['String']['output']>
  audioFile?: Maybe<UploadFileEntityResponse>
  author?: Maybe<AuthorEntityResponse>
  content?: Maybe<Array<Maybe<SpecialReleaseContentDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  forAdults?: Maybe<Scalars['Boolean']['output']>
  image?: Maybe<UploadFileEntityResponse>
  isHidden?: Maybe<Scalars['Boolean']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<SpecialReleaseRelationResponseCollection>
  metaDescription?: Maybe<Scalars['String']['output']>
  metaImage?: Maybe<UploadFileEntityResponse>
  metaTitle?: Maybe<Scalars['String']['output']>
  playerCover?: Maybe<UploadFileEntityResponse>
  slug?: Maybe<Scalars['String']['output']>
  subtitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type SpecialReleaseAnchorMenuArgs = {
  filters?: InputMaybe<ComponentContentAnchorMenuItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SpecialReleaseLocalizationsArgs = {
  filters?: InputMaybe<SpecialReleaseFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SpecialReleaseContentDynamicZone =
  | ComponentContentEditor
  | ComponentContentPartners
  | ComponentContentSlider
  | ComponentContentTracklist
  | Error

export type SpecialReleaseEntity = {
  __typename?: 'SpecialReleaseEntity'
  attributes?: Maybe<SpecialRelease>
  id?: Maybe<Scalars['ID']['output']>
}

export type SpecialReleaseEntityResponse = {
  __typename?: 'SpecialReleaseEntityResponse'
  data?: Maybe<SpecialReleaseEntity>
}

export type SpecialReleaseEntityResponseCollection = {
  __typename?: 'SpecialReleaseEntityResponseCollection'
  data: Array<SpecialReleaseEntity>
  meta: ResponseCollectionMeta
}

export type SpecialReleaseFiltersInput = {
  anchorMenu?: InputMaybe<ComponentContentAnchorMenuItemFiltersInput>
  and?: InputMaybe<Array<InputMaybe<SpecialReleaseFiltersInput>>>
  audioDuration?: InputMaybe<StringFilterInput>
  author?: InputMaybe<AuthorFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  forAdults?: InputMaybe<BooleanFilterInput>
  id?: InputMaybe<IdFilterInput>
  isHidden?: InputMaybe<BooleanFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<SpecialReleaseFiltersInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaTitle?: InputMaybe<StringFilterInput>
  not?: InputMaybe<SpecialReleaseFiltersInput>
  or?: InputMaybe<Array<InputMaybe<SpecialReleaseFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type SpecialReleaseInput = {
  anchorMenu?: InputMaybe<Array<InputMaybe<ComponentContentAnchorMenuItemInput>>>
  audioDuration?: InputMaybe<Scalars['String']['input']>
  audioFile?: InputMaybe<Scalars['ID']['input']>
  author?: InputMaybe<Scalars['ID']['input']>
  content?: InputMaybe<Array<Scalars['SpecialReleaseContentDynamicZoneInput']['input']>>
  forAdults?: InputMaybe<Scalars['Boolean']['input']>
  image?: InputMaybe<Scalars['ID']['input']>
  isHidden?: InputMaybe<Scalars['Boolean']['input']>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaImage?: InputMaybe<Scalars['ID']['input']>
  metaTitle?: InputMaybe<Scalars['String']['input']>
  playerCover?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type SpecialReleaseRelationResponseCollection = {
  __typename?: 'SpecialReleaseRelationResponseCollection'
  data: Array<SpecialReleaseEntity>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  nei?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']['output']>
  caption?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  ext?: Maybe<Scalars['String']['output']>
  formats?: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height?: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl?: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata?: Maybe<Scalars['JSON']['output']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']['output']
  pathId: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}
