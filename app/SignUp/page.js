import FlashOnIcon from '@mui/icons-material/FlashOn';
import { FcGoogle } from 'react-icons/fc';
import styles from './signup.module.css';

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <FlashOnIcon style={{ fontSize: 80, color: '#FFFFFF' }} />
          <h1 className={styles.logoText}>CodeFlash</h1>
        </div>
      </div>
      <h2 className={styles.subTitle}>Create Your Account</h2>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Sign Up</h2>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Sign Up
            </button>
            <button type="button" className={styles.googleButton}>
              <FcGoogle className={styles.googleIcon}size={20}/>Sign up With Google
            </button>
          </form>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
