// components/Header.js
import React from 'react';
import Styles from './components.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Styles.header}>
      <Link href="/Home">
        <div className={Styles.logo}>
          <FlashOnIcon className={Styles.logoImage} />
          <h1 className={Styles.title}>CodeFlash</h1>
        </div>
      </Link>
      <div className={Styles.actions}>
        <Link href="/Saved">
          <button className={Styles.logoutButton}>Saved</button>
        </Link>
        <Link href="/MyAccount">
          <button className={Styles.logoutButton}>My Account</button>
        </Link>
        <Link href="/Billing">
          <button className={Styles.logoutButton}>Billing</button>
        </Link>
        <Link href="/SignIn">
          <button className={Styles.logoutButton}>Logout</button>
        </Link>
      </div>
    </header>
  );
}
