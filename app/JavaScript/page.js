import React from 'react';
import styles from './code.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
   {/* Header Section */}
      <header className={styles.header}>
          <Link href="/Home">
            <div className={styles.logo}>
              <FlashOnIcon className={styles.logoImage} />
              <h1 className={styles.title}>CodeFlash</h1>
            </div>
          </Link>
        <div className={styles.actions}>
          <Link href="/Saved">
            <button className={styles.logoutButton}>Saved</button>
          </Link>
          <Link href="/MyAccount">
            <button className={styles.logoutButton}>My Account</button>
          </Link>
          <Link href="/Billing">
            <button className={styles.logoutButton}>Billing</button>
          </Link>
          <Link href="/SignIn">
            <button className={styles.logoutButton}>Logout</button>
          </Link>
        </div>
        </header>
        <nav className={styles.nav}>
          <a href="/HTML" className={styles.navItem}>HTML</a>
          <a href="/CSS" className={styles.navItem}>CSS</a>
          <a href="/Python" className={styles.navItem}>Python</a>
          <a href="/JavaScript" className={`${styles.navItem} ${styles.selectedItem}`}>JavaScript</a>
          <a href="/Java" className={styles.navItem}>Java</a>
          <a href="/C" className={styles.navItem}>C</a>
          <a href="/CPlusPlus" className={styles.navItem}>C++</a>
          <a href="/SQL" className={styles.navItem}>SQL</a>
        </nav>

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
      
      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
