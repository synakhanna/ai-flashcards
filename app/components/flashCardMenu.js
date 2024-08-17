import styles from "./components.module.css";

export default function FlashCardMenu({ onUpdateFlashcards, onError, setLoading }) {
  const handleLanguageClick = async (event, language) => {
    event.preventDefault();

    // Set loading to true when API call starts
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: language }), // Pass the language as the message
      });

      const data = await response.json();

      if (response.ok) {
        const cards = JSON.parse(data);
        onUpdateFlashcards(cards.flashcards || []);
      } else {
        onError(data.error || "An error occurred while generating flashcards.");
      }
    } catch (err) {
      onError(err.message || "An error occurred.");
    } finally {
      // Set loading to false after API call completes
      setLoading(false);
    }
  };

  return (
    <nav className={styles.nav}>
      {["HTML", "CSS", "Python", "JavaScript", "Java", "C", "C++", "SQL"].map(
        (language) => (
          <a
            key={language}
            href="#"
            className={styles.navItem}
            onClick={(event) => handleLanguageClick(event, language)}
          >
            {language}
          </a>
        )
      )}
    </nav>
  );
}
