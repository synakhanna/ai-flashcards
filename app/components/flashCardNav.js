"use client";
import React, { useState } from "react";
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

  const { user } = useUser(); // Get the current signed-in user from Clerk

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
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
            console.log("Flashcard saved succesfully");
        }
        setIsModalOpen(true);
    } catch (error) {
      console.error("Error saving flashcard: ", error.message);
      console.error("Error details: ", error);
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
      <div className={styles.flashcard}>
        <div className={styles.cardContent}>
          {flashcards.length === 0
            ? "Hello! Select a language to generate flashcards."
            : isFlipped
            ? "Answer: " + currentCard.back
            : "Question: " + currentCard.front}
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handleFlip}>
          Flip
        </button>
        <button
          className={styles.controlButton}
          onClick={handleNext}
          disabled={currentCardIndex >= flashcards.length - 1}
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
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
    </main>
  );
}
