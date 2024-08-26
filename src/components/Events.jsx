import React from 'react'
import { events } from '../utils/Event'
import EventsCard from './EventsCard'

const Events = () => {
  return (
     <div className=''>

   
         <div className='container m-auto md:px-5 md:p-10  px-[20px]  '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7 lg:gap-[60px]  '>
            {events && events.map((event,index) =>
              <EventsCard key={index} />
            )}

        </div>

      
    </div>
    </div>
  )
}

export default Events
