import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from './Billing.module.css'; // Assuming the correct CSS file is used
import Link from 'next/link';

function Billing() {
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
            <button className={styles.homeButton}>Home</button>
          </Link>
        </header>
      <div className={styles.contentWrapper}>
        <h2 className={styles.subTitle}>Billing</h2>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Enter Your Payment Information</h3>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Card number"
                className={styles.input}
                required
              />
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className={styles.inputSmall}
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className={styles.inputSmall}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Country"
                  className={styles.inputSmall}
                  required
                />
                <input
                  type="text"
                  placeholder="ZIP"
                  className={styles.inputSmall}
                  required
                />
              </div>
              <button type="submit" className={styles.payButton}>
                Pay
              </button>
              <p className={styles.securedByStripe}>
                <span role="img" aria-label="lock">🔒</span> Payment secured by Stripe
              </p>
            </form>
          </div>
        </div>
      </div>
       {/* Footer Section */}
       <footer className={styles.footer}>
          <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
        </footer>
    </div>
  );
}

export default Billing;
