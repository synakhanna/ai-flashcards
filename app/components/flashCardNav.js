// components/FlashCardNav.js
import React from 'react';
import styles from './code.module.css';

export default function FlashCardNav() {
  return (
    <main className={styles.main}>
      <div className={styles.flashcard}>
        <div className={styles.cardContent}>Flashcard</div>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton}>Flip</button>
        <button className={styles.controlButton}>Next</button>
        <button className={styles.controlButton}>Back</button>
        <button className={styles.controlButton}>Save</button>
      </div>
    </main>
  );
}
