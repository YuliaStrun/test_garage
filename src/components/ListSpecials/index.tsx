import classnames from 'classnames'

import CardSpecial from 'components/cards/CardSpecial'
import styles from 'styles/components/ListSpecials.module.scss'
import type { Episode, EventCategory, SpecialRelease } from 'types'
import { SeasonsEpisodesMapper } from 'utils/mappers/mapSeasonsEpisodesData'

type ListSpecialsProps = {
  specials: (Episode | SpecialRelease)[]
  isHoverable?: boolean
  seasonsEpisodes?: SeasonsEpisodesMapper
  eventCategory: EventCategory
}

const ListSpecials = ({ specials, isHoverable, seasonsEpisodes, eventCategory }: ListSpecialsProps) => {
  return <ul>{specials.map(renderCard)}</ul>

  function renderCard(item: Episode | SpecialRelease, index: number) {
    return (
      <li key={String(index)} className={classnames(styles.special, { [styles.hoverable]: isHoverable })}>
        <CardSpecial
          data={item}
          fullWidth={isHoverable}
          seasonEpisodes={
            'seasonSlug' in item && item.seasonSlug && seasonsEpisodes ? seasonsEpisodes[item.seasonSlug] : undefined
          }
          eventCategory={eventCategory}
        />
      </li>
    )
  }
}

export default ListSpecials
