import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FlashCardMenu from '../components/flashCardMenu';
import FlashCardNav from '../components/flashCardNav';
import styles from './code.module.css';

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
