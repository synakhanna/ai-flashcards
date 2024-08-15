import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from './Billing.module.css'; // Assuming the correct CSS file is used
import Link from 'next/link';
import LockIcon from '@mui/icons-material/Lock';
import Footer from '../components/footer';

function Billing() {
  return (
    <><div className={styles.pageContainer}>
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
            <p className={styles.text}>$6.99/Month</p>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required />
              <input
                type="text"
                placeholder="Card number"
                className={styles.input}
                required />
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className={styles.inputSmall}
                  required />
                <input
                  type="text"
                  placeholder="CVC"
                  className={styles.inputSmall}
                  required />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Country"
                  className={styles.inputSmall}
                  required />
                <input
                  type="text"
                  placeholder="ZIP"
                  className={styles.inputSmall}
                  required />
              </div>
              <button type="submit" className={styles.payButton}>
                Pay
              </button>
              <div className={styles.lockAndText}>
                <span role="img" aria-label="lock" style={{ marginRight: '10px' }}><LockIcon /></span>
                <p className={styles.text}>Payment secured by Stripe</p>
              </div>
            </form>
          </div>
        </div>
        <button type="button" className={styles.unsubscribeButton}>Stop My Subscription</button>
      </div>
    </div><Footer /></>
  )
}

export default Billing;
