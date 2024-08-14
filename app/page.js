import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>CodeSmart</h1>
          <p className={styles.subtitle}>
            The AI generated flashcards you need to learn coding.
          </p>
        </div>

        <div className={styles.right}>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} type="text" id="username" name="username" />
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" />
            <button className={styles.button} type="submit">Log In</button>
            <a href="#" className={styles.link}>Don't have an account? Sign up!</a>
            <div className={styles.or}>Or</div>
            <button className={styles.googleButton}>Sign in with Google</button>
            <div className={styles.or}>Or</div>
            <button className={styles.guestButton}>Continue as a Guest</button>
          </form>
        </div>
      </div>
    </main>
  );
}
