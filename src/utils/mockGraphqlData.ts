export const mockGraphqlResponses: Record<string, unknown> = {
  mainPage: {
    mainPage: {
      data: {
        id: '1',
        attributes: {
          aboutText: null,
          aboutLink: null,
          aboutLinkName: null,
          metaDescription: null,
          metaImage: { data: null },
          slider: [],
          episodes: []
        }
      }
    }
  },
  aboutPage: {
    aboutPage: {
      data: {
        id: '1',
        attributes: {
          head: '',
          text: '',
          metaTitle: null,
          metaDescription: null,
          metaImage: { data: null }
        }
      }
    }
  },
  menu: {
    menu: {
      data: {
        id: '1',
        attributes: {
          items: [
            { id: '1', name: 'Сезоны', link: '/seasons', disabled: false },
            { id: '2', name: 'О проекте', link: '/about', disabled: false },
            { id: '3', name: 'Спецвыпуски', link: '/specials', disabled: false }
          ]
        }
      }
    }
  },
  seasons: {
    seasons: {
      data: []
    }
  },
  specialReleases: {
    specialReleases: {
      data: []
    }
  },
  season: {
    seasonBySlugEntity: null
  },
  episode: {
    episodeBySlugEntity: null
  },
  specialRelease: {
    specialReleaseBySlugEntity: null
  }
}

export function getMockResponse(operationName: string): unknown {
  const data = mockGraphqlResponses[operationName]
  return data != null ? { data } : null
}
