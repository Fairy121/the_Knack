import React from 'react'
import styles from "./mentors.module.scss";
import MentorSearchSection from './MentorSearchSection/MentorSearchSection';
import MentorsList from './MentorsList/MentorsList';


const popularProfiles = [{
  name: 'Jane',
  age: '24',
  img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
},{
  name: 'Erica',
  age: '18',
  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
}, {
  name: 'Michelle',
  age: '24',
  img: 'https://i.pinimg.com/736x/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b--redhead-girl-beautiful-redhead.jpg'
}, {
  name: 'John',
  age: '45',
  img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZCUyMGxvb2tpbmclMjBndXl8ZW58MHx8MHx8&w=1000&q=80"
}, {
  name: 'Matthew',
  age: '32',
  img: 'https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg'
}]

 

function Mentors() {
  return (
    <div className={styles.mentors}>
      <MentorSearchSection />
      <MentorsList arr={popularProfiles} />
    </div>
  )
}

export default Mentors
