import { profile } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          © {profile.year} {profile.name}
        </span>
        <span className={styles.signature} aria-hidden="true">
          {profile.name}
        </span>
        <span>
          {profile.role} · {profile.roleAccent}
        </span>
      </div>
    </footer>
  );
}
