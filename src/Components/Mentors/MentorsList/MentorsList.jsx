import React, { useState, useEffect } from 'react'
import Profile from '../../Profile/Profile';
import MentorCard from '../MentorCard/MentorCard'
import styles from "./mentorsList.module.scss";


function MentorsList({arr}) { 
  const [selected,setSelected] = useState(null);
  const [open,setOpen] = useState(false);
  const [width,setWidth] = useState(window.innerWidth);

  const availableCardSpace = Math.floor(width/300);

  const openMentorProfile = (id) => {
    setSelected(id);
    setOpen(true);
  }

  return (
    <>
    <div className={styles.mentors}>
      {arr.map((card,index) => {
        return (
          <MentorCard onClick={() => openMentorProfile(index)} {...card} />
        )
      })}
    </div>
    {open && <Profile onClick={() => setOpen(false)} {...arr[selected]} /> }
    </>
  )
}

export default MentorsList;
