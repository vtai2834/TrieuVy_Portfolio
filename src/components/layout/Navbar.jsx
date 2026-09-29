import { useState } from 'react';
import { navLinks, profile } from '@/data/portfolio';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={close}>
          {profile.name}
        </a>

        <nav
          id="site-menu"
          className={`${styles.menu} ${open ? styles.menuOpen : ''}`}
          aria-label="Main"
        >
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="#contact" icon="arrowRight" iconPosition="end" className={styles.cta}>
            Let&apos;s talk
          </Button>
          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
