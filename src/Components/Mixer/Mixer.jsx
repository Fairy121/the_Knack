import React from 'react'
import styles from "./mixer.module.scss";
import {FaBell} from "react-icons/fa";
import {BsFillCameraVideoFill} from "react-icons/bs";
function Mixer() {
  return (
    <div className={styles.mixerSection}>
        <header>
          <div className={styles.textSection}>
            <h4 className={styles.sectionHeading}>The topic for this weeks mixer is <span className={styles.accentText}>Switching Careers</span></h4>
            <p> Mixers happen every week, and it's a great way to connect with our community of professionals in an informal and casual way</p>
            <div>
              <div className={styles.mixerButtonContainer}>
                  <BsFillCameraVideoFill />
                  <button className={styles.visitMixerButton}>
                  Join Mixer
                  </button>
              </div>
              <div className={styles.textBox}>
                <FaBell />
                <p className={styles.notificationText}>Get notifications for future events</p>
              </div>
            </div> 
          </div>
          <div className={styles.joinMixerSection}>
            <div className={styles.joinMixerImage} />
          </div>
        </header>
        <div className={styles.mixerDetails}>
          <div className={styles.topDetails}>
            <div style={{flex: 1}}>
              <h4 className={styles.subHeading}>Mixer Details</h4>
              <p className={styles.mixerDetailPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className={styles.guestsSection}>
              <h4 className={styles.subHeading}> Special Guests</h4>
              <div className={styles.textBoxCenter}>
                <div className={styles.guestProfile} />
                <p>Tim Turner</p>
              </div>
              <div className={styles.textBoxCenter}>
                <div className={styles.guestProfile} />
                <p>Jim Jones</p>
              </div>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Mixer

