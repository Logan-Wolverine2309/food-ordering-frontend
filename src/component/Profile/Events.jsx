import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className='mt-5 px-5  flex flex-wrap flex-ro  gap-5'>
      
       {[1].map((item)=><EventCard/>)}
    </div>
    
  )
}

export default Events