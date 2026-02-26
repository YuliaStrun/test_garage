import { EventAction, EventCategory } from 'types'

const analytics = {
  sendEvent: (eventCategory: EventCategory, eventAction: EventAction, eventLabel: string) => {
    // @ts-ignore
    if (typeof gtag === 'function') {
      // @ts-ignore
      gtag('event', eventAction, { event_category: eventCategory, event_label: eventLabel })
    }
    // @ts-ignore
    if (typeof ym === 'function') {
      // @ts-ignore
      ym(97106749, 'reachGoal', eventAction, { category: eventCategory, label: eventLabel })
    }
    console.log('Tracking:', eventAction, { category: eventCategory, label: eventLabel })
  }
}

export default analytics
