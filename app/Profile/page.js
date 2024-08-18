'use client'
import React, { useEffect, useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Make sure your firebase instance is correctly imported
import styles from "./ProfilePage.module.css"; // Assuming you have some CSS styles
import Stripe from "stripe";

function ProfilePage() {
  const [stripeDetails, setStripeDetails] = useState(null);
  const [error, setError] = useState("");
  const { user } = useClerk();

  useEffect(() => {
    const fetchStripeDetails = async () => {
      if (!user) return;

      try {
        // Fetch the user document from Firebase
        const userRef = doc(db, "users", user.id);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const stripeCustomerId = userData.stripeCustomerId;

          // Fetch Stripe customer details using the customer ID
          if (stripeCustomerId) {
            const response = await fetch(`/api/stripe_profile/${stripeCustomerId}`);
            const data = await response.json();

            if (response.ok) {
              setStripeDetails(data);
            } else {
              setError(data.error.message);
            }
          } else {
            setError("No Stripe customer ID found for this user.");
          }
        } else {
          setError("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching Stripe details: ", error);
        setError("Failed to load Stripe details.");
      }
    };

    fetchStripeDetails();
  }, [user]);

  return (
    <div className={styles.profileContainer}>
      <h1>Profile Page</h1>
      {error && <p className={styles.error}>{error}</p>}
      {stripeDetails ? (
        <div className={styles.stripeDetails}>
          <h2>Stripe Account Details</h2>
          <p><strong>Email:</strong> {stripeDetails.email}</p>
          <p><strong>Name:</strong> {stripeDetails.name}</p>
          <p><strong>Subscription Status:</strong> {stripeDetails.subscriptionStatus}</p>
          {/* Add any other details you want to show */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProfilePage;