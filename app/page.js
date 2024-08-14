//Landing Page

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Code Flash</h1>
          <p>Strengthen your coding skills, one flashcard at a time.</p>
        </div>
      </section>
      <section id="features" className={styles.features}>
        <div className="container">
          <h2>Features</h2>
          <div className={styles.featureCards}>
            <div className={styles.card}>
              <h3>Interactive Flashcards</h3>
              <p>Easily memorize coding concepts with our interactive flashcards.</p>
            </div>
            <div className={styles.card}>
              <h3>Multi-language Support</h3>
              <p>Prepare for interviews in Java, JavaScript, Python, and more.</p>
            </div>
            <div className={styles.card}>
              <h3>Customizable Decks</h3>
              <p>Tailor your learning experience by creating custom flashcard decks.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <h2>Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3>Free</h3>
              <p>$0 / month</p>
              <p>Basic flashcard features</p>
              <button>Get Started</button>
            </div>
            <div className={styles.pricingCard}>
              <h3>Pro</h3>
              <p>$10 / month</p>
              <p>All basic features plus advanced analytics</p>
              <button>Get Started</button>
            </div>
            <div className={styles.pricingCard}>
              <h3>Enterprise</h3>
              <p>Custom Pricing</p>
              <p>Tailored solutions for teams</p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
