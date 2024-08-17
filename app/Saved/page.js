'use client'
import { useEffect, useState } from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase config file
import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import Footer from '../components/footer';
import styles from './saved.module.css';

function SavedCardsPage() {
  const [flashcards, setFlashcards] = useState([]);
  const { user } = useClerk();

  useEffect(() => {
    const fetchFlashcards = async () => {
      if (!user) return;

      try {
        const userRef = doc(db, 'users', user.id);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFlashcards(userData.flashcards || []);
        }
      } catch (error) {
        console.error("Error fetching flashcards: ", error);
      }
    };

    fetchFlashcards();
  }, [user]);

  return (
    <>
      <div className={styles.pageContainer}>
        {/* Header Section */}
        <header className={styles.header}>
          <Link href="/Code">
            <div className={styles.logo}>
              <FlashOnIcon className={styles.logoImage} />
              <h1 className={styles.title}>CodeFlash</h1>
            </div>
          </Link>
          <Link href="/Code">
            <button className={styles.aboutButton}>Home</button>
          </Link>
        </header>

        {/* Content Section */}
        <div className={styles.contentWrapper}>
          <div className={styles.tableContainer}>
            <table>
              <caption>Saved Cards</caption>
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                {flashcards.length === 0 ? (
                  <tr>
                    <td colSpan="3">No saved flashcards.</td>
                  </tr>
                ) : (
                  flashcards.map((card, index) => (
                    <tr key={index}>
                      <td>{card.language}</td>
                      <td>{card.question}</td>
                      <td>{card.answer}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default SavedCardsPage;

