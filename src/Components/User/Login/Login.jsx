import React, { useState } from 'react'
import styles from "../user.module.scss";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase/firebaseConfig';
import MessageBar from '../../MessageBar/messageBar';
import {useNavigate} from "react-router-dom";

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  let navigate = useNavigate();

  const submitForm = async(e) => {
    e.preventDefault();
    try {
      let user = await signInWithEmailAndPassword(auth,email,password);
      if(user) setMessage('You are now logged in')
      navigate('/', {replace: true})
    } catch (err) {
      setMessage(err.message);
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
                <p>Login <span className={styles.redirect}>| Don't have an account? <Link to='/signup'>Sign Up</Link>  </span></p>
              </div>
              <header className={styles.header}>
                <h4>Welcome back</h4>
              </header>
            </div>
          </div>
          <form onSubmit={submitForm} className={styles.modalForm}>
            <label htmlFor="email">Email</label>
            <input name='email' value={email} onChange={(e) => handleChange(e,true)} />
            <label htmlFor="password">Password</label>
            <input type='password' name='password' value={password} onChange={(e) => handleChange(e,false)} />
              <button type='submit'>Login</button>
          </form>
          <MessageBar message={message} />
        </div>
      </div>
    </div>
  )
}

export default Login
