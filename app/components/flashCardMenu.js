import React from 'react';
import styles from './code.module.css';

export default function FlashcardMenu() {
  return (
    <nav className={styles.nav}>
      <a href="/HTML" className={styles.navItem}>HTML</a>
      <a href="/CSS" className={styles.navItem}>CSS</a>
      <a href="/Python" className={styles.navItem}>Python</a>
      <a href="/JavaScript" className={styles.navItem}>JavaScript</a>
      <a href="/Java" className={`${styles.navItem} ${styles.selectedItem}`}>Java</a>
      <a href="/C" className={styles.navItem}>C</a>
      <a href="/CPlusPlus" className={styles.navItem}>C++</a>
      <a href="/SQL" className={styles.navItem}>SQL</a>
    </nav>
  );
}
