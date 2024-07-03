import React from 'react'
import styles from "./Navigation.module.css"


const Navigation = () => {
  return (
    <nav className={` container ${styles.navigation} `}>
    <div>
      <img src="/images/Frame 2 1.png" alt="" />
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>
  )
}

export default Navigation
