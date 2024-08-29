import React from 'react'
import { events } from '../utils/Event'
import EventsCard from './EventsCard'

const Events = () => {
  return (
     <div className='py-2 '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20 '>
            {events && events.map((event,index) =>
              <EventsCard key={index} />
            )}
        </div>
    </div>
    
  )
}

export default Events
