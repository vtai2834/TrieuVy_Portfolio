import { profile } from '@/data/portfolio';
import Button from '@/components/ui/Button';
import RecBadge from '@/components/ui/RecBadge';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.stripes} aria-hidden="true" />

      <p className={styles.word} aria-hidden="true">
        Portfolio
      </p>

      <div className={`container ${styles.grid}`}>
        <div className={styles.identity}>
          <p className={styles.meta}>Portfolio — {profile.year}</p>
          <p className={styles.signature}>{profile.name}</p>
          <h1 className={styles.role}>
            {profile.role}
            <span className={styles.roleAccent}>&amp; {profile.roleAccent}</span>
          </h1>
        </div>

        <div className={styles.portrait}>
          <img
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            className={styles.photo}
            width="400"
            height="560"
            fetchPriority="high"
          />
          <RecBadge className={styles.rec} />
          <div className={styles.note} aria-hidden="true">
            <span>hi, I&apos;m {profile.firstName}!</span>
            <svg width="80" height="64" viewBox="0 0 80 64" fill="none">
              <path d="M70 6C52 8 30 22 14 52" />
              <path d="M8 38l5 16 15-8" />
            </svg>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.meta}>Based in {profile.location}</p>
          <div className={styles.card}>
            <p>{profile.tagline}</p>
            <div className={styles.buttons}>
              <Button href="#work" icon="play">
                Watch my edits
              </Button>
              <Button href="#contact" variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
