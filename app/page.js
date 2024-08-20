"use client";

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';
import Footer from './components/footer';
import styles from "./page.module.css";
import Header from './components/header';  

import { useUser } from "@clerk/nextjs"; // Clerk hook to get the user

function Page() {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const targetPosition = document.querySelector('#learn-more').offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000;
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
        scrollCount += 1;
        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, (scrollHeight - scrollMargin));
      } 
      else clearInterval(scrollInterval); 
    }, 15);
  }

  return (
    <>
    <main className={styles.main}>
    {isSignedIn ? (
        // Render the custom Header component if the user is signed in
        <Header />
      ) : (
        // Default header with sign-in option if the user is not signed in
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <FlashOnIcon style={{ fontSize: 80 }} />
            </Link>
          </div>
          <div className={styles.signInContainer}>
            <SignedOut>
              <SignInButton mode="modal">
                <button className={styles.signInButton}>Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.subtitle}>{user && "Welcome!"}</p>
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
      <section className={`${styles.learnMore}, ${styles.scrollUp}`}>
        <a
          href="#"
          className={styles.learnMoreLink}
          onClick={(e) => {
            e.preventDefault();
            smoothScrollToTop(2000);
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
            <p>ONLY $6.99/Month</p>
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <Link href="/SignUp">
            <button className={styles.ctaButton}>Try our program for FREE for 1 week!</button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}  
    </main>
    <Footer />
    </>
  );
}

export default Page;
