import React from 'react'
import { events } from '../utils/Event'
import EventsCard from './EventsCard'

const Events = () => {
  return (
     <div className='py-2'>
         <div className='container m-auto  '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[95px] px-[15px] lg:px-4 '>
            {events && events.map((event,index) =>
              <EventsCard key={index} />
            )}
        </div>
    </div>
    </div>
  )
}

export default Events
