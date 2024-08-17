"use client"

import {useEffect} from "react";

function Billing() {
  useEffect(() => {
    // Create a Stripe Checkout session on page load
    const createCheckoutSession = async () => {
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
          console.error("Stripe Checkout session URL not found");
        }
      } catch (error) {
        console.error("Error creating checkout session:", error);
      }
    };

    createCheckoutSession();
  }, []);

  return (
    <>
     <div>
      <h2>Redirecting to Stripe Checkout...</h2>
    </div>


    </>
  )
}

export default Billing;
