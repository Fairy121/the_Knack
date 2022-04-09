import React from 'react'
import styles from "./styles.module.scss";
function AccountSidebar() {
  return (
    <div className={styles.accountSidebar}>

        <header className={styles.accountHeader}>
          <div className={`${styles.inner} ${styles.flex} `}>
            <div className={styles.profile}></div>
            <p>Sarah K</p>
          </div>
        </header>
        <nav>
          <div>
            <div className={`${styles.navItem} ${styles.selected}`}>
              <div className={styles.inner}>
                <p>Profile</p>
              </div>
            </div>
            <div className={styles.navItem}>
            <div className={styles.inner}>
                <p>Messages</p>
              </div>
            </div>
            <div className={styles.navItem}>
            <div className={styles.inner}>
                <p>Notifications</p>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default AccountSidebar
