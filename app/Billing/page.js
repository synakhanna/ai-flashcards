import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from './Billing.module.css'; // Assuming the correct CSS file is used

function Billing() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <FlashOnIcon style={{ fontSize: 80, color: '#FFFFFF' }} />
            <h1 className={styles.logoText}>CodeFlash</h1>
          </div>
        </div>
        <h2 className={styles.subTitle}>Billing Information</h2>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Payment Information</h3>
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
      <footer className={styles.footer}>
        <p>&copy; 2024 CodeFlash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Billing;
