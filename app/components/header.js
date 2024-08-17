import React from 'react';
import { SignedIn, UserButton } from "@clerk/nextjs";
import Styles from './components.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Styles.header}>
      <Link href="/Code">
        <div className={Styles.logo}>
          <FlashOnIcon className={Styles.logoImage} />
          <h1 className={Styles.title}>CodeFlash</h1>
        </div>
      </Link>
      <div className={Styles.actions}>
        <Link href="/Saved">
          <button className={Styles.logoutButton}>Saved</button>
        </Link>
        <Link href="/Billing">
          <button className={Styles.logoutButton}>Billing</button>
        </Link>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
