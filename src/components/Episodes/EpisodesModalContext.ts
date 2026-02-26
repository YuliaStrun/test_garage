import React, { useContext } from 'react'

type EpisodesModalContextType = {
  onClose: () => void
}

export const EpisodesModalContext = React.createContext<EpisodesModalContextType>({ onClose: () => {} })

export const useEpisodeModal = () => {
  const context = useContext(EpisodesModalContext)

  return context
}
