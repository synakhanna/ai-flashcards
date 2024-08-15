import React from 'react';
import styles from './home.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>
        <FlashOnIcon className={styles.logoImage} />
        <h1 className={styles.title}>CodeFlash</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navItem}>HTML</a>
          <a href="#" className={styles.navItem}>CSS</a>
          <a href="#" className={styles.navItem}>Python</a>
          <a href="#" className={styles.navItem}>JavaScript</a>
          <a href="#" className={styles.navItem}>Java</a>
          <a href="#" className={styles.navItem}>C</a>
          <a href="#" className={styles.navItem}>C++</a>
          <a href="#" className={styles.navItem}>SQL</a>
        </nav>
        <div className={styles.actions}>
          <SettingsIcon style={{ fontSize: 40 }} />
          <Link href="/SignIn">
            <button className={styles.logoutButton}>Logout</button>
          </Link>
        </div>
      </header>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeMessage}>Hi, Name. Which subject do you need help in today?</h2>
      </section>
    </div>
  );
}
