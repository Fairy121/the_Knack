
import { updateProfile } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import React, { useRef, useState } from 'react'
import { auth, db } from '../../../Firebase/firebaseConfig';
import MessageBar from '../../MessageBar/messageBar';
import styles from "./createProfile.module.scss";
import {useNavigate, useParams} from "react-router-dom";

function CreateProfile() {
  const fileInput = useRef();
  const [username,setUsername] = useState('');
  const [bio,setBio] = useState('');
  const [profileImage,setImage] = useState('');
  const [message,setMessage] = useState(null);
  let navigate = useNavigate();
  let params = useParams();

  const submitForm = async(e) => {
    e.preventDefault();  
    
    try {
      updateProfile(auth.currentUser, {
        displayName: username
      })
      let t = await setDoc(doc(db,"userCollection", auth.currentUser.uid), {
        biography: bio
      });
      console.log(t);
      setMessage({text: 'Profile successfully created', isError:false})
      navigate(`/onboarding/${params.userId}/mentorshipGoals`,{replace: true});

    } catch(err) {
      setMessage({text:'Oops! Your profile could not be created', isError: true})
    }
  }

  const handleChange = (e,setValue) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.createProfileSection}>
      <header className={styles.createProfileHeader}>
        <h4 className={styles.title}>Create Profile</h4>
        <p>When creating your profile, others users will see it </p>
      </header>
      <form onSubmit={submitForm} className={styles.createProfileForm}>
        <img  />
        <label htmlFor="profileImage"> Profile Image</label>
        <input type='file' ref={fileInput} />
        <div className={styles.formContent}>
          <label htmlFor='username'>Username</label>
          <input type='text' value={username} name='username' onChange={(e) => handleChange(e,setUsername)} />
          <label htmlFor='bio'>Bio</label>
          <textarea type='text' name='bio' value={bio} onChange={(e) => handleChange(e,setBio)} />
          <button type='submit'>Next</button>
        </div>
      </form>
      <MessageBar message={message?.text} isError={message?.isError} />
    </div>
  )
}

export default CreateProfile
