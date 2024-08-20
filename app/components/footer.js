import React from 'react';
import styles from './components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 CodeFlash. All Rights Reserved.<a href="https://www.linkedin.com/company/codefusionartificialintelligence/" target="_blank"><FontAwesomeIcon className={styles.linkedinLogo} icon={faLinkedin} /></a></p>
    </footer>
  );
}