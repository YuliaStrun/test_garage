import { useMemo } from 'react'

import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import merge from 'deepmerge'
import type { AppProps } from 'next/app'

import isEqual from 'lodash/isEqual'

import config from '../../config'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: `${config.apiUrl}/graphql`,
    credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers
    }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([authLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Season: {
          keyFields: ['slug']
        },
        Episode: {
          keyFields: ['slug']
        },
        SpecialRelease: {
          keyFields: ['slug']
        },
        UploadFile: {
          keyFields: ['url']
        }
      }
    })
  })
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
  const newApolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = newApolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)))
      ]
    })

    // Restore the cache with the merged data
    newApolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return newApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = newApolloClient

  return newApolloClient
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']) {
  const newPageProps = pageProps
  if (pageProps?.props) {
    newPageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return newPageProps
}

export function useApollo(pageProps: AppProps['pageProps']) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])

  return store
}
