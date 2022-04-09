import React from 'react'
import FilterOption from './FilterOption/FilterOption'
import styles from "./searchSection.module.scss"

function SearchSection({options}) {
  return (
  <div className={styles.searchSection}>
    <input type='text' placeholder="Ex. Designer" />
    <div className={styles.filterOptions}>
      {options && options.map((option,index) => {
        return (
          <FilterOption name={option.name} options={option.values} />
        )
      })}
    </div>
  </div>
  )
}


export default SearchSection
