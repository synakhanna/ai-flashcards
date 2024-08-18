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
  const [loading, setLoading] = useState(false);

  const handleFlashcardsUpdate = (newFlashcards) => {
    setFlashcards(newFlashcards);
    setError(null);
    setLoading(false);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setFlashcards([]);
    setLoading(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />

        <FlashCardMenu
          onUpdateFlashcards={handleFlashcardsUpdate}
          onError={handleError}
          setLoading={setLoading}
        />

        {loading && (
          <div className={styles["loading-wrapper"]}>
            <div className={styles.loading}></div>
          </div>
        )}

        {!loading && <FlashCardNav flashcards={flashcards} error={error} />}
      </div>

      <Footer />
    </>
  );
}
