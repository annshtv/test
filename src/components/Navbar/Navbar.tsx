import React from 'react'
import ButtonSubscribe from '../../UI/Buttons/ButtonSubscribe'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import styles from './Navbar.module.css';
function Navbar() {
  return (
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <img src="pictures/logo.png" alt="logo" />
          </div>
          <div className="menus">
            <span>Episodes</span>
            <span>About</span>
            <span className={styles.more}>More
            <ExpandCircleDownIcon/>
            </span>
          </div>
          <div className="buttons">
            <button className="b1">RECENT EPISODES</button>
            <ButtonSubscribe>subscribe</ButtonSubscribe>
          </div>
        </div>
  )
}

export default Navbar
