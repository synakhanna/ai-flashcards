import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src="/cs-logo.png" alt="CodeSmart Logo" width={60} height={60} />
        </div>
        <h1 className={styles.title}>CodeSmart</h1>
        <p className={styles.subtitle}>
          The AI generated flashcards you need to learn coding.
        </p>
      </div>

      <div className={styles.right}>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />
          <button className={styles.button} type="submit">
            Log In
          </button>
          <a href="#" className={styles.link}>
            Don’t have an account? Sign up!
          </a>
          <div className={styles.or}>Or</div>
          <button className={styles.button} type="button">
            Sign in with Google
          </button>
          <div className={styles.or}>Or</div>
          <button className={styles.button} type="button">
            Continue as a Guest
          </button>
        </form>
      </div>
    </main>
  );
}
