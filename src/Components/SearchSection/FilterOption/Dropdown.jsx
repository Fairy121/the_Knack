import React from 'react'
import styles from "../searchSection.module.scss";
import { useDetectClickOutside } from 'react-detect-click-outside';

function Dropdown({options,closeDropdown}) {
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <>
        <div ref={ref} className={styles.filterDropdown}>
          {options.map((option,index) => {
            return (
              <div className={styles.dropdownItem}>
                  <p>{option}</p>
              </div>
            )
          })}
        </div>
    </>
  )
}

export default Dropdown
