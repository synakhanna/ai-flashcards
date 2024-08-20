import React from 'react';
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import styles from './components.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export default function landingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => window.location.href='/'}>
        <FlashOnIcon className={styles.logoImage} />
        <h1 className={styles.title}>CodeFlash</h1>
      </div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className={styles.logoutButton} >Sign In</button>
              </SignInButton>
            </SignedOut>
     
    </header>
  );
}
