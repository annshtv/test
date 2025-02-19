import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSubscribe from '../../UI/Buttons/ButtonSubscribe';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import styles from './Navbar.module.css';
import CustomizedMenus from '../../UI/Buttons/CustomizedMenus';

function Navbar() {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <img src="pictures/logo.png" alt="logo" />
      </div>
      <div className="menus">
        <Link to="/episodes" className={styles.navLink}><span>Episodes</span></Link>
        <Link to="/about" className={styles.navLink}><span>About</span></Link>
        <span className={styles.more}>More
          {/* <ExpandCircleDownIcon /> */}
          <CustomizedMenus/>
        </span>
      </div>
      <div className="buttons">
        <button className="b1">RECENT EPISODES</button>
        <ButtonSubscribe>subscribe</ButtonSubscribe>
      </div>
    </div>
  );
}

export default Navbar;
