import type * as Types from './types'

/** THIS FILE IS AUTO-GENERATED **/
/** DO NOT EDIT **/
/* eslint-disable */

export type MenuQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>
}>

export type MenuQuery = { __typename?: 'Query' } & {
  menu?: Types.Maybe<
    { __typename?: 'MenuEntityResponse' } & {
      data?: Types.Maybe<
        { __typename?: 'MenuEntity' } & Pick<Types.MenuEntity, 'id'> & {
            attributes?: Types.Maybe<
              { __typename?: 'Menu' } & {
                items?: Types.Maybe<
                  Array<
                    Types.Maybe<
                      { __typename?: 'ComponentMenuMenu' } & Pick<
                        Types.ComponentMenuMenu,
                        'id' | 'name' | 'link' | 'disabled'
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
