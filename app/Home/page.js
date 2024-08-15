import React from 'react';
import styles from './home.module.css';
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
          <a href="/JavaScript" className={styles.navItem}>JavaScript</a>
          <a href="/Java" className={styles.navItem}>Java</a>
          <a href="/C" className={styles.navItem}>C</a>
          <a href="/CPlusPlus" className={styles.navItem}>C++</a>
          <a href="/SQL" className={styles.navItem}>SQL</a>
        </nav>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeMessage}>Hi, First Name. Which subject do you need help in today?</h2>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
