import { caseStudy } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import styles from './CaseStudy.module.css';

export default function CaseStudy() {
  const { stat, photos, problem, solution } = caseStudy;

  return (
    <section id="project" className={styles.caseStudy}>
      <div className="container">
        <SectionHeader
          index="04"
          label="Project portfolio"
          title={caseStudy.title}
          accent={caseStudy.subtitle}
          accentSize="small"
          size="lg"
        />

        <div className={styles.showcase}>
          <Reveal className={styles.stat}>
            <span className={styles.statLabel}>Result</span>
            <div className={styles.statBody}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statText}>{stat.label}</span>
              <span className={styles.statNote}>{stat.note}</span>
            </div>
          </Reveal>
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i + 1) * 100} className={styles.photoWrap}>
              <img src={photo.src} alt={photo.alt} className={styles.photo} loading="lazy" />
            </Reveal>
          ))}
        </div>

        <div className={styles.details}>
          <Reveal as="article" className={`${styles.panel} ${styles.problem}`}>
            <h3 className={styles.panelTitle}>The problem</h3>
            <ul className={styles.list}>
              {problem.map((item) => (
                <li key={item}>
                  <span className={styles.dot} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" delay={100} className={`${styles.panel} ${styles.solution}`}>
            <h3 className={styles.panelTitle}>What I did</h3>
            <ul className={styles.list}>
              {solution.map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} strokeWidth={2.4} className={styles.check} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
