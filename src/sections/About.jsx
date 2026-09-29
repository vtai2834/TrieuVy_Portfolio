import { about, profile } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Viewfinder from '@/components/ui/Viewfinder';
import Reveal from '@/components/ui/Reveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <Reveal as="figure" className={styles.figure}>
          <Viewfinder className={styles.frame}>
            <img src={about.photo.src} alt={about.photo.alt} className={styles.photo} loading="lazy" />
          </Viewfinder>
          <figcaption className={styles.caption}>
            <span>Frame 01 — {profile.name}</span>
            <span>{profile.location}</span>
          </figcaption>
        </Reveal>

        <Reveal className={styles.content} delay={120}>
          <div className={styles.text}>
            <SectionHeader index="01" label="About me" title="About" accent="me" size="lg" />
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? styles.lead : styles.body}>
                {paragraph}
              </p>
            ))}
          </div>

          <dl className={styles.facts}>
            {about.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
