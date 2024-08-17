// import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import FlashCardMenu from '../components/flashCardMenu';
// import FlashCardNav from '../components/flashCardNav';
// import styles from './code.module.css';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Header />
      
//       <FlashCardMenu />
      
//       <FlashCardNav />

//       <Footer />
//     </div>
//   );
// }
"use client"
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FlashCardMenu from '../components/flashCardMenu';
import FlashCardNav from '../components/flashCardNav';
import styles from './code.module.css';

export default function Home() {
  
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);

  const handleFlashcardsUpdate = (newFlashcards) => {

    console.log("newFlashcards"+newFlashcards)
    setFlashcards(newFlashcards);
    setError(null);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setFlashcards([]);
  };

  return (
    <div className={styles.container}>
      <Header />

      <FlashCardMenu onUpdateFlashcards={handleFlashcardsUpdate} onError={handleError} />
      
      <FlashCardNav flashcards={flashcards} error={error} />

      <Footer />
    </div>
  );
}
