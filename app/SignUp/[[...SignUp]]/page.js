import FlashOnIcon from '@mui/icons-material/FlashOn';
import { FcGoogle } from 'react-icons/fc';
import styles from '../signup.module.css';
import Link from 'next/link';
import Footer from '../../components/footer';
import { SignUp } from '@clerk/nextjs';


function SignIn() {
  return (
    <><div className={styles.pageContainer}>
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
        <h2 className={styles.subTitle}>Create Your Account</h2>
        <div className={styles.formWrapper}>
          <SignUp />
          {/* <div className={styles.formContainer}>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
                required />
              <input
                type="text"
                placeholder="Last Name"
                className={styles.input}
                required />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.input}
                required />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                required />
              <button type="submit" className={styles.submitButton}>
                Log In
              </button>
              <button type="button" className={styles.googleButton}>
                <FcGoogle className={styles.googleIcon} size={20} />
                Sign in with Google
              </button>
              <p>
              Already have an account? <a href="/SignIn" className={styles.signUpText}>Sign in!</a>
              </p>
            </form>
          </div> */}
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
}

export default SignIn;
