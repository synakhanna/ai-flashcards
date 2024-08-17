// import React from 'react';
// import styles from './components.module.css';

// export default function FlashCardMenu() {
//   return (
//     <nav className={styles.nav}>
//       <a href="/Code" className={styles.navItem}>HTML</a>
//       <a href="/Code" className={styles.navItem}>CSS</a>
//       <a href="/Code" className={styles.navItem}>Python</a>
//       <a href="/Code" className={styles.navItem}>JavaScript</a>
//       <a href="/Code" className={styles.navItem}>Java</a>
//       <a href="/Code" className={styles.navItem}>C</a>
//       <a href="/Code" className={styles.navItem}>C++</a>
//       <a href="/Code" className={styles.navItem}>SQL</a>
//     </nav>

//   );
// }
import React from 'react';
import styles from './components.module.css';

export default function FlashCardMenu({ onUpdateFlashcards, onError }) {
  const handleLanguageClick = async (event, language) => {
    event.preventDefault(); // Prevent default behavior of anchor tag

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: language }), // Pass the language as the message
      });

      const data = await response.json();

      if (response.ok) {
        //console.log("The response received in client: ", data);
        const cards = JSON.parse(data);
        onUpdateFlashcards(cards.flashcards || []);
      } else {
        onError(data.error || 'An error occurred while generating flashcards.');
      }
    } catch (err) {
      onError(err.message || 'An error occurred.');
    }
  };

  return (
    <nav className={styles.nav}>
      {['HTML', 'CSS', 'Python', 'JavaScript', 'Java', 'C', 'C++', 'SQL'].map((language) => (
        <a
          key={language}
          href="#"
          className={styles.navItem}
          onClick={(event) => handleLanguageClick(event, language)}
        >
          {language}
        </a>
      ))}
    </nav>
  );
}
