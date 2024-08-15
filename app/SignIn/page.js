import FlashOnIcon from '@mui/icons-material/FlashOn';
import { FcGoogle } from 'react-icons/fc';
import styles from './signin.module.css';
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
          <Link href="/">
            <button className={styles.aboutButton}>About</button>
          </Link>
        </header>
      <div className={styles.contentWrapper}>
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
