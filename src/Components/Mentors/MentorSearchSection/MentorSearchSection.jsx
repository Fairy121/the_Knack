import React from 'react'
import styles from "./mentorSearchSection.module.scss";
import {AiOutlineUserSwitch} from "react-icons/ai";
import SearchSection from '../../SearchSection/SearchSection';

const mentorFilterOptions = [{
  name: 'Skills',
  values: ['Web Development', 'Leadership', 'Product Design']
}, {
  name: 'Gender',
  values: ['Female', 'Male']
}, {
  name: 'Mentorship Type',
  values: ['Formal', 'Casual']
}]

function MentorSearchSection() {
  return (
    <header className={styles.mentorsHeader}>
      <div className={styles.randomConnection}>
        <div className={styles.connectionBox}>
          <AiOutlineUserSwitch />
          <button className={styles.randomBtn}>Get randomly paired with a mentor</button>
        </div>
      </div>
      <SearchSection options={mentorFilterOptions} />
    </header>
  )
}

export default MentorSearchSection
