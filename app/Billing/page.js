"use client"

import { useState } from "react";
import Footer from "../components/footer";
import styles from "./billing.module.css"
import Link from 'next/link';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {db} from '../firebase';
import {doc, updateDoc } from 'firebase/firestore';
import { useClerk } from '@clerk/nextjs';


function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useClerk(); // Access the signed-in user
  
  const handleCheckout = async () => {
    if (!user) {
      console.error('User not signed in');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }), // Pass user ID to the API
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