"use client"

import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";



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
   <div style={styles.page}>
      <Header />
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Buy Now</h1>
          <p style={styles.subtitle}>Get a subscription to use CodeFlash!</p>
        </div>
        <button 
          style={styles.button} 
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

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '40px', // Adds space between the subtitle and the button
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px', // Adds space between the title and subtitle
  },
  subtitle: {
    fontSize: '18px',
    color: 'white',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};