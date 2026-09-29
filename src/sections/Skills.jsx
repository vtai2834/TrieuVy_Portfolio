import { skills } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import styles from './Skills.module.css';

/* Decorative editing timeline shown on the featured card. */
const TIMELINE = {
  ticks: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  tracks: [
    { offset: 0, clips: [22, 12, 30, 18], tone: 'solid' },
    { offset: 9, clips: [34, 26], tone: 'soft' },
    { offset: 0, clips: [88], tone: 'ghost' },
  ],
};

function Timeline() {
  return (
    <div className={styles.timeline} aria-hidden="true">
      <div className={styles.ticks}>
        {TIMELINE.ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
      {TIMELINE.tracks.map((track, i) => (
        <div
          key={i}
          className={`${styles.lane} ${styles[track.tone]}`}
          style={{ paddingLeft: `${track.offset}%` }}
        >
          {track.clips.map((width, j) => (
            <span key={j} className={styles.clip} style={{ width: `${width}%` }} />
          ))}
        </div>
      ))}
      <span className={styles.playhead} />
    </div>
  );
}

function SkillCard({ skill, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Reveal
      as="article"
      delay={index * 100}
      className={`${styles.card} ${skill.featured ? styles.featured : ''}`}
    >
      <div className={styles.cardTop}>
        <span className={styles.label}>
          {number} / {skill.track}
        </span>
        {skill.featured && <span className={styles.badge}>Strongest skill</span>}
      </div>

      {skill.featured && <Timeline />}

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{skill.title}</h3>
        <p className={styles.description}>{skill.description}</p>
        {skill.tags && (
          <ul className={styles.tags}>
            {skill.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeader
          index="02"
          label="Personal skills"
          title="What I do"
          accent="best"
          aside={
            <p className={styles.aside}>
              Video comes first — backed by the design and content know-how to make every edit
              work for marketing.
            </p>
          }
        />
        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
