"use client"

import { useState, useEffect } from "react";
import Footer from "../components/footer";
import styles from "./Billing.module.css"
import Header from "../components/header";
import { useClerk } from '@clerk/nextjs';


function Billing() {
  const [loading, setLoading] = useState(false);
  const [billingDetails, setBillingDetails] = useState(null);
  const { user } = useClerk(); // Access the signed-in user

  // Check if the user already has billing information
  useEffect(() => {
    const fetchBillingDetails = async () => {
      if (!user) return;

      try {
        const response = await fetch(`/api/checkout_session?userId=${user.id}`, {
          method: 'GET',
        });

        const data = await response.json();
        
        console.log("Billing Data:", data);

        if (data.billingDetails) {
          setBillingDetails(data.billingDetails); // Set the billing details
        }
      } catch (error) {
        console.error('Error fetching billing details:', error);
      }
    };

    fetchBillingDetails();
  }, [user]);

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
  const handleCancelSubscription = async () => {
    if (!user) {
      console.error('User not signed in');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/cancel_subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }), // Pass user ID to the API
      });

      const result = await response.json();

      if (result.success) {
        // Reset the billing details
        setBillingDetails(null);
        window.location.reload();
        console.log('Subscription cancelled:', result.message);
      } else {
        console.error('Failed to cancel subscription:', result.error.message);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error cancelling subscription:', error);
      setLoading(false);
    }
  };


  return (
   <>
      <div className={styles.pageContainer}>
      <Header></Header>
        <div className={styles.contentWrapper}>
          <h1>Billing</h1>
          
          {billingDetails ? (
  <div className={styles.billingContainer}>
    <table className={styles.billingTable}>
      <caption>Billing Information</caption>
      <tbody>
        <tr>
          <th>Email</th>
          <td>{billingDetails.email}</td>
        </tr>
        <tr>
          <th>Customer ID</th>
          <td>{billingDetails.customerId}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{billingDetails.status}</td>
        </tr>
        <tr>
          <th>Subscription Start</th>
          <td>{new Date(billingDetails.subscriptionStart * 1000).toLocaleDateString()}</td>
        </tr>
        <tr>
          <th>Next Billing</th>
          <td>{new Date(billingDetails.subscriptionEnd * 1000).toLocaleDateString()}</td>
        </tr>
      </tbody>
    </table>
    <button
      className={styles.button}
      onClick={handleCancelSubscription}
      disabled={loading}
    >
      {loading ? 'Cancelling...' : 'Cancel Subscription'}
    </button>
  </div>
) : (
  <button
    className={styles.button}
    onClick={handleCheckout}
    disabled={loading}
  >
    <p>Get a subscription to use CodeFlash! Only $1.99 a month.</p>
    {loading ? 'Redirecting...' : 'Start Subscription'}
  </button>
)}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Billing;