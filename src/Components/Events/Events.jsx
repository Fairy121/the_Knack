import React, { useEffect, useState } from 'react'
import SearchSection from '../SearchSection/SearchSection';
import EventCard from './EventCard/EventCard';
import styles from "./events.module.scss";
import EventsList from './EventsList';


const eventsList = [{
  name: 'Job Hunting',
  time: '7:00pm'
}, {
  name: 'Career Changing',
  time: '12:00pm'
}, {
  name: 'Developing Creativity',
  time: '10:00 pm'
}, {
  name: 'Become a Designer',
  time: '5:00 pm'
}, {
  name: 'Graphic Design 101',
  time: '8:00 pm'
}]

const eventFilterOptions = [{
  name: 'Topic',
  values: ['Web Development', 'Design', 'Business', 'Science']
}, {
  name: 'Experience Level', 
  values: ['Beginner-friendly', 'Intermediate', 'Advanced']
}]

function Events() {

  return (
    <div>
      <div className={styles.eventsHeader}>
        <SearchSection options={eventFilterOptions} />
      </div>
      <EventsList arr={eventsList} />
    </div>
  )
}

export default Events
