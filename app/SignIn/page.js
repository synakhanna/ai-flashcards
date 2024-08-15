import FlashOnIcon from '@mui/icons-material/FlashOn';
import { FcGoogle } from 'react-icons/fc';
import styles from './signin.module.css';

function SignIn() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <FlashOnIcon style={{ fontSize: 80, color: '#FFFFFF' }} />
            <h1 className={styles.logoText}>CodeFlash</h1>
          </div>
        </div>
        <h2 className={styles.subTitle}>Sign Into Your Account</h2>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Username"
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
                Log In
              </button>
              <p className={styles.signUpText}>
                Don’t have an account? <a href="#">Sign up!</a>
              </p>
              <button type="button" className={styles.googleButton}>
                <FcGoogle className={styles.googleIcon} size={20} />
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default SignIn;
