import React from 'react';
import styles from './code.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import FlashCardMenu from '../components/FlashCardMenu';
import FlashCardNav from '../components/FlashCardNav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <FlashCardMenu />
      
      <FlashCardNav />

      <Footer />
    </div>
  );
}
