
"use client";
import React, { useState } from "react";
import styles from "./components.module.css";

export default function FlashCardNav({ flashcards, error }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

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
            ? "Answer: "+currentCard.back
            : "Question: "+currentCard.front
          }
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
        <button className={styles.controlButton}>Save</button>
      </div>
    </main>
  );
}