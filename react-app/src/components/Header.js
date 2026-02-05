import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header id="masthead" className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <a href="https://avasreview.com/" className={styles.logoLink}>
            <img 
              src={logo} 
              className={styles.logo} 
              alt="Ava's Review" 
              width="261" 
              height="234" 
            />
          </a>
        </div>
        <nav className={styles.navWrapper}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Home</span>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>About Us</a>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Advertorial</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
