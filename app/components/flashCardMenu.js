import React from 'react';
import styles from './components.module.css';

export default function FlashCardMenu() {
  return (
    <nav className={styles.nav}>
      <a href="/Code" className={styles.navItem}>HTML</a>
      <a href="/Code" className={styles.navItem}>CSS</a>
      <a href="/Code" className={styles.navItem}>Python</a>
      <a href="/Code" className={styles.navItem}>JavaScript</a>
      <a href="/Code" className={styles.navItem}>Java</a>
      <a href="/Code" className={styles.navItem}>C</a>
      <a href="/Code" className={styles.navItem}>C++</a>
      <a href="/Code" className={styles.navItem}>SQL</a>
    </nav>

  );
}
