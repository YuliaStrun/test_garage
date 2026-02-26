import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { MenuQuery, MenuQueryVariables } from 'schemas/__generated__/menu.generated'
import { QUERY_MENU } from 'schemas/menu'

const addMenuQuery = (apolloClient: ApolloClient<NormalizedCacheObject>, locale: string) => {
  return apolloClient.query<MenuQuery, MenuQueryVariables>({
    query: QUERY_MENU,
    variables: { locale }
  })
}

export default addMenuQuery
