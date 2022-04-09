import React, { useState } from 'react'
import styles from "./header.module.scss";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from '@firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';
import { Link, NavLink } from 'react-router-dom';
import AboutPlatform from '../AboutPlatformModal/AboutPlatform';

function Header() {
  const [user,loading] = useAuthState(auth);
  const [aboutModal, setAboutModal] = useState(false);

  const signOutUser = async() => {
      try {   
          await signOut(auth);
      } catch (err) {
          console.log(err)
      }
  }

  return (
    <>
    <header  className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftContent}>
          <h4 className={styles.headerTitle}>The Knack</h4>
          <nav className={styles.nav}>
            <NavLink to='/'  className={({isActive}) => isActive && styles.selected}> <p>Mentors</p> </NavLink>
            <NavLink to='/events'  className={({isActive}) => isActive && styles.selected}> <p>Events</p> </NavLink>
            <NavLink to='/mixer'  className={({isActive}) => isActive && styles.selected}> <p>Mixer</p> </NavLink>
            
            <button onClick={() => setAboutModal(true)} className={styles.aboutPlatformBtn}>
             About The Knack
            </button>
            <button className={styles.reportBtn}>
              Report User
            </button>
          </nav>
        </div>
        <div className={styles.profileContent}>
          {user ? (
            <>
             <Link to='/account'>
                <div className={styles.avatar}></div>
                <div className={styles.textBox}>
                
                  <h6 className={styles.userEmail} >{user?.email}</h6>
                </div>
              </Link>
              <button onClick={signOutUser}>Log Out</button>
            </>      
          ) : (
            <Link to='/login'>
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
    {aboutModal ? <AboutPlatform onHide={() => setAboutModal(false)} /> : null}
    </>
  )
}

export default Header
