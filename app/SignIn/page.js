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
                Log In
              </button>
              <button type="button" className={styles.googleButton}>
                <FcGoogle className={styles.googleIcon} size={20} />
                Sign in with Google
              </button>
              <p className={styles.signUpText}>
              <a href="/SignUp">Don’t have an account? Sign up!</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default SignIn;
