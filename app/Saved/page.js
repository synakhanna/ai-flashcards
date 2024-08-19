'use client'
import { useEffect, useState } from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase config file
import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import Footer from '../components/footer';
import styles from './saved.module.css';

function SavedCardsPage() {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
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

  const handleSelectCard = (index) => {
    const selectedIndex = selectedCards.indexOf(index);
    if (selectedIndex > -1) {
      setSelectedCards(selectedCards.filter((i) => i !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedCards([]);
      setIsSelectAll(false);
    } else {
      setSelectedCards(flashcards.map((_, index) => index));
      setIsSelectAll(true);
    }
  };

  const handleDeleteSelected = async () => {
    const remainingCards = flashcards.filter((_, index) => !selectedCards.includes(index));

    try {
      const userRef = doc(db, 'users', user.id);
      await updateDoc(userRef, { flashcards: remainingCards });
      setFlashcards(remainingCards);
      setSelectedCards([]);
      setIsSelectAll(false);
    } catch (error) {
      console.error("Error deleting flashcards: ", error);
    }
  };

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
            <button className={styles.homeButton}>Home</button>
          </Link>
        </header>

        {/* Content Section */}
        <div className={styles.contentWrapper}>
          <div className={styles.tableContainer}>
          
            <table>
              <caption>Saved Cards</caption>
              <thead>
               <tr>
               <button
              className={styles.deleteButton}
              onClick={handleDeleteSelected}
              disabled={selectedCards.length === 0}
            >
              Delete Selected
            </button>
               </tr>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={isSelectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Language</th>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                {flashcards.length === 0 ? (
                  <tr>
                    <td colSpan="4">No saved flashcards.</td>
                  </tr>
                ) : (
                  flashcards.map((card, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedCards.includes(index)}
                          onChange={() => handleSelectCard(index)}
                        />
                      </td>
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
