import { SignIn } from '@clerk/nextjs';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';
import Footer from '../../components/footer';
import styles from '../signin.module.css';


function LogInPage() {
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
        <h2 className={styles.subTitle}>Sign Into Your Account</h2>
        <div className={styles.formWrapper}>
          <SignIn afterSignInUrl="/" />
        </div>
      </div>
    </div><Footer /></>

  );
}

export default LogInPage;
