// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Code Flash</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
}
