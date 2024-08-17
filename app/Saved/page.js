import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from './saved.module.css';
import Link from 'next/link';
import Footer from '../components/footer';

function SignIn() {
  return (
    <><div className={styles.pageContainer}>
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
    </div><Footer /></>
  )
}

export default SignIn;
