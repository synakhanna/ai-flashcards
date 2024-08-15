import styles from './signup.module.css';

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.flash}>⚡</span> CodeFlash
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Your Account</h1>
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
            <img
              src="/google-logo.png"
              alt="Google logo"
              className={styles.googleLogo}
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
}
