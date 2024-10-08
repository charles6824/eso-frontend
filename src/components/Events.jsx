import React from 'react'
import { events } from '../utils/Event'
import EventsCard from './EventsCard'

const Events = () => {
  return (
     <>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5  lg:gap-5 '>
            {events && events.map((event,index) =>
              <EventsCard key={index} />
            )}
        </div>
    </>
    
  )
}

export default Events
