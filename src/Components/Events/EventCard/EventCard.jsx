import React from 'react'
import styles from "./eventCard.module.scss";
function EventCard({name,type,time}) {
  return (
    <div className={styles.card}>
    <div className={styles.cardImage} />
    <div className={styles.cardContent}>
      <div className={styles.contentHeader}>
        <h4>{name}</h4>
        <div className={styles.textBox}>
          <p>Online</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EventCard
