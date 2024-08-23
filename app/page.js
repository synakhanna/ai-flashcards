"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Footer from './components/footer';
import styles from "./page.module.css";
import LandingHeader from './components/landingHeader';  
import Header from './components/header';
import { useClerk } from '@clerk/nextjs';
import React from 'react';

function Page() {
  const { user } = useClerk(); // Access the signed-in user
  const { isSignedIn } = useUser();

  // Custom slow scroll function
  const slowScroll = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const targetPosition = document.querySelector('#learn-more').offsetTop;
    slowScroll(targetPosition, 2000); // 3000ms (3 seconds) for a slower scroll
  };

  const smoothScrollToTop = (e) => {
    e.preventDefault();
    slowScroll(0, 2000); // Scroll to the top slowly
  };

  return (
    <main className={styles.main}>
      <SignedIn> 
        <Header />
        <section className={styles.welcomeSection}>
          <h2 className={styles.welcomeMessage}>Welcome back to your CodeFlash dashboard!</h2>
        </section>
        <Footer />
      </SignedIn>

      <SignedOut>
        <LandingHeader />
        <section className={styles.hero}>
          <h1 className={styles.title}>CodeFlash</h1>
          <p className={styles.subtitle}>The AI generated flashcards you need to learn coding.</p>
          <Link href="/SignUp">
            <button className={styles.ctaButton}>Start your FREE trial!</button>
          </Link>
        </section>

        <section className={styles.learnMore}>
          <a href="#learn-more" className={styles.learnMoreLink} onClick={handleLearnMoreClick}>
            <span>Learn More</span><br />
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </section>

        <section className={styles.scrollUp}>
          <a href="#" className={styles.learnMoreLink} onClick={smoothScrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </section>

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
        <Footer />
      </SignedOut>
    </main>
  );
}

export default Page;
