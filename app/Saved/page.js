import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from './saved.module.css';
import Link from 'next/link';

function SignIn() {
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.header}>
          <Link href="/Home">
            <div className={styles.logo}>
              <FlashOnIcon className={styles.logoImage} />
              <h1 className={styles.title}>CodeFlash</h1>
            </div>
          </Link>
          <Link href="/Home">
            <button className={styles.aboutButton}>Home</button>
          </Link>
        </header>

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
              <tr>
                <td>Example</td>
                <td>Example</td>
                <td>Example</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>Example</td>
                <td>Example</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       {/* Footer Section */}
       <footer className={styles.footer}>
          <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
        </footer>
    </div>
  );
}

export default SignIn;
