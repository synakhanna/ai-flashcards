"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from "./components.module.css";
import { db } from "../firebase"; // Adjust the import path according to your project structure
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useUser } from "@clerk/nextjs"; // Clerk hook to get the user
import Modal from './Modal'; 

export default function FlashCardNav({ flashcards, error }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const router = useRouter(); // Use Next.js router for redirection
  const { isLoaded, user } = useUser(); // Get the current signed-in user from Clerk

  useEffect(() => {
    const checkUserStatus = async () => {
      if (!isLoaded) {
        console.log("The user data is still loading");
        return;
      }

      if (!user) {
        console.log("User not signed in");
        return;
      }

      const userId = user.id;
      const userRef = doc(db, 'users', userId);
      
      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const signUpDate = userData.signUpDate.toDate(); 
          const currentDate = new Date();
          const daysSinceSignUp = Math.floor((currentDate - signUpDate) / (1000 * 60 * 60 * 24)); 

          if (daysSinceSignUp > 7) {
            console.log("User signed up more than 7 days ago. Redirecting to billing page.");
            setModalMessage("Trail period expired!");
            setIsModalOpen(true);
            router.push('/Billing'); // Redirect to the billing page
            return;
          }

          console.log("User signed up within the last 7 days. Proceed as normal.");

        } else {
          // If the user document does not exist, save the user's info
          await setDoc(userRef, {
            signUpDate: new Date(),
            flashcards: [] // Initialize the flashcards array
          });
          console.log("User information saved to Firestore");
        }
      } catch (error) {
        console.error("Error checking user status: ", error.message);
      }
    };

    checkUserStatus();
  }, [isLoaded, user, router]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      setModalMessage("Card limit reached. Click the desired language to generate more cards.");
      setIsModalOpen(true);
    }
  };

  const handleBack = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const saveFlashcard = async () => {
    try {
      if (!isLoaded) {
        console.log("User data is still loading");
        return;
      }

      if (!user) {
        console.log("User not signed in");
        return;
      }

      const userId = user.id;
      const currentCard = flashcards[currentCardIndex];
      const flashcardData = {
        question: currentCard.front,
        answer: currentCard.back,
        language: currentCard.language,
        createdAt: new Date(),
      };

      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        // If the document exists, update it
        await updateDoc(userRef, {
          flashcards: arrayUnion(flashcardData),
        });
        setModalMessage('Flashcard saved successfully!');
        console.log("Flashcard added to existing user");
      } else {
        // If the document does not exist, create it
        await setDoc(userRef, {
          flashcards: [flashcardData] // Create a new flashcards array
        });
        setModalMessage('Flashcard saved successfully!');
        console.log("Flashcard saved successfully");
      }
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error saving flashcard: ", error.message);
      setModalMessage('Error saving flashcard. Please try again.');
      setIsModalOpen(true);
    }
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const currentCard = flashcards[currentCardIndex];

  return (
    <main className={styles.main}>
      <div className={styles.flashcard} onClick={handleFlip}>
        <div className={`${styles.flashcardInner} ${isFlipped ? styles.isFlipped : ''}`}>
          <div className={styles.flashcardFront}>
            {flashcards.length === 0
              ? "Hello! Select a language to generate flashcards."
              : "Question: " + currentCard.front}
          </div>
          <div className={styles.flashcardBack}>
            {flashcards.length === 0
              ? "No flashcards available."
              : "Answer: " + currentCard.back}
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handleFlip}>
          Flip
        </button>
        <button
          className={styles.controlButton}
          onClick={handleNext}
          disabled={flashcards.length === 0}
        >
          Next
        </button>
        <button
          className={styles.controlButton}
          onClick={handleBack}
          disabled={currentCardIndex === 0}
        >
          Back
        </button>
        <button className={styles.controlButton} onClick={saveFlashcard}>
          Save
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={(handleModalClose)} // Pass the handler here
        message={modalMessage}
      />
    </main>
  );
}