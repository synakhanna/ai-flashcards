"use client";
import { useState } from "react";
import FlashCardMenu from "../components/flashCardMenu";
import FlashCardNav from "../components/flashCardNav";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "./code.module.css";

export default function Home() {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleFlashcardsUpdate = (newFlashcards) => {
    setFlashcards(newFlashcards);
    setError(null);
    setLoading(false); // Stop loading when flashcards are updated
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setFlashcards([]);
    setLoading(false); // Stop loading if an error occurs
  };

  return (
    <div className={styles.container}>
      <Header />

      <FlashCardMenu
        onUpdateFlashcards={handleFlashcardsUpdate}
        onError={handleError}
        setLoading={setLoading} // Pass setLoading to FlashCardMenu
      />

      {/* Show the loading spinner while loading is true */}
      {loading && <div className={styles.loading}></div>}

      {/* Show the flashcards only when loading is false */}
      {!loading && <FlashCardNav flashcards={flashcards} error={error} />}

      <Footer />
    </div>
  );
}
