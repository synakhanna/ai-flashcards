"use client";  // This makes the component a Client Component

import styles from "./page.module.css";
import Link from 'next/link';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Page() {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const targetPosition = document.querySelector('#learn-more').offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Increased duration for slower scroll (2 seconds)
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentScroll = easeInOutQuad(progress, startPosition, distance, duration);
      window.scrollTo(0, currentScroll);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };

  // Easing function for smooth scroll
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  const smoothScrollToTop = (scrollDuration) => {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (scrollDuration / 15);
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
  
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        scrollCount = scrollCount + 1;  
        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, (scrollHeight - scrollMargin));
      } 
      else clearInterval(scrollInterval); 
    }, 15);
  }

  return (
    <main className={styles.main}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
        <FlashOnIcon style={{ fontSize: 80 }} />
        </div>
        <div className={styles.signInContainer}>
          <Link href="/SignIn" className={styles.signInButton}>
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>CodeFlash</h1>
          <p className={styles.subtitle}>The AI generated flashcards you need to learn coding.</p>
          <Link href="/SignUp">
          <button className={styles.ctaButton}>Start your FREE trial!</button>
          </Link>
        </div>
      </section>

      {/* Learn More Section */}
      <section className={styles.learnMore}>
        <Link href="#learn-more" className={styles.learnMoreLink}>
          <span onClick={handleLearnMoreClick}>Learn More</span><br />
          <FontAwesomeIcon onClick={handleLearnMoreClick} icon={faChevronDown} />
        </Link>
      </section>

       {/* Scroll Up */}
       <section className={styles.learnMore}>
          <a
            href="#"
            className={styles.learnMoreLink}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToTop(2000); // 1000ms = 1s
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </section>

      {/* Features Section */}
      <section id="learn-more" className={styles.features}>
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <h3>How it Works</h3>
            <p>CodeFlash utilizes the power of Artificial Intelligence to generate flashcards with questions and answers for various coding and programming languages.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Why CodeFlash</h3>
            <p>CodeFlash helps users to gain coding and programming skills. This helps users prep for exams and interviews.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Languages</h3>
            <p>HTML, CSS, Python, JavaScript, Java, C, C++, SQL</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Pricing</h3>
            <p>ONLY $10/Month</p>
          </div>
        </div>
        <div className={styles.ctaContainer}>
        <Link href="/SignUp">
          <button className={styles.ctaButton}>Try our program for FREE for 1 week!</button>
        </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default Page;
