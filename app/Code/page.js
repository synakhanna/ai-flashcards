
"use client"
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FlashCardMenu from '../components/flashCardMenu';
import FlashCardNav from '../components/flashCardNav';
import styles from './code.module.css';
import Welcome from '../components/welcome';

export default function Home() {
  
  const [showWelcome, setShowWelcome] = useState(true);
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);

  const handleWelcomeDismiss = () => {
    setShowWelcome(false);
  };

  const handleFlashcardsUpdate = (newFlashcards) => {

    console.log("newFlashcards"+newFlashcards)
    setFlashcards(newFlashcards);
    setError(null);
    setShowWelcome(false);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setFlashcards([]);
  };

  return (
    <div className={styles.container}>
      <Header />

      <FlashCardMenu onUpdateFlashcards={handleFlashcardsUpdate} onError={handleError} />
      
     <div>
    {showWelcome ? (
      <Welcome onDismiss={handleWelcomeDismiss} />
    ) : (
      <FlashCardNav flashcards={flashcards} error={error} />
    )}
  </div>

      <Footer />
    </div>
  );
}
