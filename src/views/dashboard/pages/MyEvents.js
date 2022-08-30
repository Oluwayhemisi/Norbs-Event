import React from 'react'
import "./MyEvents.css"

const MyEvents = () => {
  return (
    <div className='my-events-container'>
      <div className='my-events-header'>
          <div className='my-events-header-filter'>
              <div>
                  <p>Filter By Date:</p>
                  <input type="date" id='filter-date' />
              </div>
              <div>
                <p>Search Events</p>
                <input type="search" id='filter-search'/>
              </div>
          </div>
          
        <button>Create Event</button>
      </div>
    </div>
  )
}

export default MyEvents
