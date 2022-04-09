import React, { useState } from 'react'
import styles from "../user.module.scss";
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase/firebaseConfig';
import MessageBar from '../../MessageBar/messageBar';
import {useNavigate} from "react-router-dom";

function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState(null);

  
  let navigate = useNavigate();

  const submitForm = async(e) => {
    e.preventDefault();
    try {
     let user = await createUserWithEmailAndPassword(auth,email,password);
      setMessage({text: 'Account created successfully', isError:false})
      navigate(`/onboarding/${user.user.uid}/createProfile`)
      // if(message !== null) navigate('/login', {replace: true})
    } catch (err) {
      console.log(err);
      setMessage({text: err.message, isError: true});
    }
  }
  const handleChange = (e, isEmail) => { 
    isEmail ? setEmail(e.target.value) : setPassword(e.target.value);
  }
  return (
    <div className={styles.modalWrapper}>
    <div className={styles.modal}>
      <div className={styles.modalImage} />
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.inner}>
            <div className={styles.subHeader}>
              <p>Sign Up <span className={styles.redirect}>| Already have an account? <Link to='/login'>Login</Link>  </span></p>
            </div>
            <header className={styles.header}>
              <h4>Nice to meet you</h4>
            </header>
          </div>
        </div>
        <form onSubmit={submitForm} className={styles.modalForm}>
          <label htmlFor="email">Email</label>
          <input name='email' value={email} onChange={(e) => handleChange(e,true)} />
          <label htmlFor="password">Password</label>
          <input type='password' name='password' value={password} onChange={(e) => handleChange(e,false)} />
          <div className={styles.formAction}>
            <button type='submit'>Next</button>
          </div>
        </form>
        <MessageBar message={message?.text} isError={message?.isError} />
      </div>
    </div>
  </div>
  )
}

export default SignUp;
