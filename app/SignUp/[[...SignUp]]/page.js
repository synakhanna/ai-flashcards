'use client'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from '../signup.module.css';
import Link from 'next/link';
import Footer from '../../components/footer';
import { SignUp, useAuth } from '@clerk/nextjs';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';



function SignIn() {

  return (
    <><div className={styles.pageContainer}>
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <FlashOnIcon className={styles.logoImage} />
          <h1 className={styles.title}>CodeFlash</h1>
        </div>
      </Link>
      <Link href="/">
        <button className={styles.aboutButton}>About</button>
      </Link>
    </header>
    <div className={styles.contentWrapper}>
      <h2 className={styles.subTitle}>Create Your Account</h2>
      <div className={styles.formWrapper}>
        <SignUp afterSignUpUrl="/Code" />
      </div>
    </div>
  </div>
  <Footer />
  </>

  );
}

export default SignIn;
