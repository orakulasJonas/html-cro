import React from 'react';
import styles from './Footer.module.css';
import siteLogo from '../assets/site-logo.png';

function Footer() {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brandingWrapper}>
          <div className={styles.logoWrapper}>
            <a href="https://avasreview.com/" className={styles.logoLink} rel="home">
              <img 
                width="90" 
                height="97" 
                src={siteLogo} 
                className={styles.footerLogo} 
                alt="Ava's Review" 
              />
            </a>
          </div>
        </div>
        <div className={styles.copyrightWrapper}>
          <p className={styles.copyrightText}>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
