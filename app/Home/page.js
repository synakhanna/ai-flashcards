import React from 'react';
import styles from './home.module.css';
import Footer from '../components/footer';
import FlashCardMenu from '../components/flashCardMenu';
import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.container}>
        <Header />
        
        <FlashCardMenu />

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeMessage}>Hi, First Name. Which subject do you need help in today?</h2>
      </section>

      <Footer />

    </div>
  );
}