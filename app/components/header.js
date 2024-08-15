// components/Header.js
import React from 'react';
import styles from './code.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';

export default function Header() {
  return (
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
  );
}
