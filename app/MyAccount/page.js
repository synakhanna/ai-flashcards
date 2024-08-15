import FlashOnIcon from '@mui/icons-material/FlashOn';
import { FcGoogle } from 'react-icons/fc';
import styles from './myaccount.module.css';
import Link from 'next/link';

function SignIn() {
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.header}>
          <Link href="/">
            <div className={styles.logo}>
              <FlashOnIcon className={styles.logoImage} />
              <h1 className={styles.title}>CodeFlash</h1>
            </div>
          </Link>
          <Link href="/Home">
            <button className={styles.aboutButton}>Home</button>
          </Link>
        </header>
      <div className={styles.contentWrapper}>
        <h2 className={styles.subTitle}>My Account</h2>
          <div className={styles.infoContainer}>
              <p className={styles.infoText}>First Name:</p>
              <p className={styles.infoText}>Last Name:</p>
              <p className={styles.infoText}>Email:</p>
              <p className={styles.infoText}>Date Joined:</p>
              <p className={styles.infoText}>Subscription Status:</p>
          </div>       
          <button type="button" className={styles.deleteButton}>Delete My Account</button>
      </div>
       {/* Footer Section */}
       <footer className={styles.footer}>
          <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
        </footer>
    </div>
  );
}

export default SignIn;
