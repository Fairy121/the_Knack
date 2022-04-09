import React, { useRef, useState } from 'react'
import styles from "../searchSection.module.scss";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import Dropdown from './Dropdown';
function FilterOption({name,options,tab}) {
  const [openDropdown,setDropdown] = useState(false);
  return (
    <div className={styles.filterOption}>
      <div className={styles.flexBox}>
        <p className={styles.filterName}>{name}</p>
        {openDropdown ? <FiChevronUp onClick={() => setDropdown(false)} /> : 
        <FiChevronDown onClick={() => setDropdown(true)} /> }
        {openDropdown ? <Dropdown options={options} closeDropdown={() => setDropdown(false)} /> : null}
      </div>

    </div>
  )
}

export default FilterOption
