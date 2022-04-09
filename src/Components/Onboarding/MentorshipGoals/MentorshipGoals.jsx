import React, { useState } from 'react'
import styles from "./mentorshipGoals.module.scss";
import {BiBrain, BiGroup} from "react-icons/bi";
import {RiBookOpenLine} from "react-icons/ri";
import { auth, db } from '../../../Firebase/firebaseConfig';
import { doc, setDoc, updateDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router';


// http://localhost:3000/onboarding/ixxsffZueyUr2vQx5VO5xNECiq32/mentorshipGoals

const mentorshipGoalsList = [{
  id: 0,
  name: 'I want to share my experience and skills with other people',
  selected: false
}, {
  id: 1,
  name: 'I want to grow my professional network by connecting with different people',
  selected: false
}, {
  id: 2,
  name: 'I want to learn new skills from experts',
  selected: false
}]

const mentorshipGoalIcons = [<BiBrain /> , <BiGroup />, <RiBookOpenLine />]

const mentorshipTypes = ['Formal', 'Casual'];

function MentorshipGoals() {
  const [mentorshipGoals, setGoals] = useState(mentorshipGoalsList)
  const [mentorshipType, setType] = useState();
  const navigate = useNavigate();

  const selectGoals = (index) => {
      let mentorshipGoalsCopy = [...mentorshipGoals];
      mentorshipGoalsCopy[index].selected = true;

      setGoals(mentorshipGoalsCopy);
  
  }

  const submitSection = async() => {
    const selectedGoals = mentorshipGoals.filter(goal => goal.selected)
    .map(goal => goal.id);
   
    try {
       let test = await updateDoc(doc(db,"userCollection", auth.currentUser.uid), {
        mentorshipGoals: selectedGoals,
        mentorshipType: mentorshipType
      });
      navigate(`/`,{replace: true});

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.mentorshipGoals}>
      <div className={styles.inner}>
        <header className={styles.mentorshipHeader}>
          <h4>Tell us your mentorship goals</h4>
          <p>Filling out this section helps us offer you more personalized content</p>
        </header>
        <div className={styles.subContent}>
          <h5 className={styles.subHeading}> Why are you looking for mentorship? </h5>
          <div className={styles.mentorshipGoalsContent}>
            {mentorshipGoals?.map((goal,index) => {
              return (
                <div onClick={() => selectGoals(index)} className={`${styles.mentorshipGoalItem} ${goal.selected ? styles.selected : ''}`}>
                  {mentorshipGoalIcons[index]}
                  {goal.name}
                </div>
              )
            })}
        </div>
        </div>
        <div className={styles.subContent}>
          <h5 className={styles.subHeading}>What type of mentoring relationship do you prefer?</h5>
          <div className={styles.mentorshipTypes}>
            {mentorshipTypes.map((type,index) => {
              return (
                <div onClick={() => setType(index)} className={`${styles.mentorshipType} ${index == mentorshipType ? styles.selected : ''}`}>
                  <div style={{backgroundImage: 'url(https://cdn.dribbble.com/users/1355613/screenshots/13618145/media/2d37a0661dc66e6c9b260246f1db2b23.png?compress=1&resize=400x300)'}}  className={`${styles.img} `} />
                  <p>{type}</p>
                </div> 
              )
            })}
          </div>
        </div>
      </div>
      <button onClick={submitSection}>Next</button>
    </div>
  )
}

export default MentorshipGoals
