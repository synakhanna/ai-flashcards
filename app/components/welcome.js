import React from 'react';
import styles from './components.module.css';

export default function Welcome() {
  return (
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeMessage}>Hello! Which subject do you need help in today?</h2>
      </section>
  );
}