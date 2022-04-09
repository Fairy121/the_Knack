import React from 'react'
import EventCard from './EventCard/EventCard';
import styles from "./events.module.scss";

function EventsList({arr}) {
  return (
    <div className={styles.events}>
       {arr.map((card,index) => {
        return (
          <EventCard  name={card.name} time={card.time} />
        )
      })}
    </div>
  )
}

export default EventsList
