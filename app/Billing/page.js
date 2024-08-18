"use client"

import { useState } from "react";
import Footer from "../components/footer";
import styles from "./billing.module.css"
import Link from 'next/link';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Billing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const session = await response.json();

      if (session.url) {
        // Redirect the user to the Stripe Checkout page
        window.location.href = session.url;
      } else {
        console.error('Stripe Checkout session URL not found');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      setLoading(false);
    }
  };

  return (
    <> 
      <div className={styles.pageContainer}>
        {/* Header Section */}
        <header className={styles.header}>
          <Link href="/Code">
            <div className={styles.logo}>
              <FlashOnIcon className={styles.logoImage} />
              <h1 className={styles.title}>CodeFlash</h1>
            </div>
          </Link>
          <Link href="/Code">
            <button className={styles.homeButton}>Home</button>
          </Link>
        </header>
        <div className={styles.contentWrapper}>
          <h1>Billing</h1>
          <p>Get a subscription to use CodeFlash! Only $6.99 a month.</p>
        <button 
          className={styles.button} 
          onClick={handleCheckout} 
          disabled={loading}
        >
          {loading ? 'Redirecting...' : 'Start Subscription'}
        </button>
      </div>
      <Footer />
      </div>
    </> 
  );
}

export default Billing;