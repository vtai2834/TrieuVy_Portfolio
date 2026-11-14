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

/* Small decorative graphics that fill the top of the secondary cards. */
/* The content workflow: done → in progress → up next. */
const PIPELINE = [
  { label: 'Idea', state: 'done' },
  { label: 'Script', state: 'done' },
  { label: 'Post', state: 'current' },
  { label: 'Analyze', state: 'next' },
];

const RULER = ['0', '10', '20', '30', '40'];
const HANDLES = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

/* A page being laid out in a design tool: ruler, margin guides, a selected headline. */
function Layout() {
  return (
    <div className={`${styles.graphic} ${styles.layout}`} aria-hidden="true">
      <div className={styles.ruler}>
        {RULER.map((mark) => (
          <span key={mark}>{mark}</span>
        ))}
      </div>
      <div className={styles.page}>
        <span className={styles.headline}>
          <span className={styles.headlineText} />
          {HANDLES.map((handle) => (
            <span key={handle} className={`${styles.handle} ${styles[handle]}`} />
          ))}
        </span>
        <span className={styles.media}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0L100 100M100 0L0 100" vectorEffect="non-scaling-stroke" />
          </svg>
        </span>
        <span className={styles.lines}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.cta} />
      </div>
    </div>
  );
}

function Pipeline() {
  return (
    <div className={`${styles.graphic} ${styles.pipeline}`} aria-hidden="true">
      <div className={styles.steps}>
        <span className={styles.rail} />
        {PIPELINE.map((step) => (
          <span key={step.label} className={`${styles.step} ${styles[step.state]}`}>
            {step.label}
            <span className={styles.dot} />
            <span className={styles.segment} />
          </span>
        ))}
        <span className={styles.stepHead} />
      </div>
    </div>
  );
}

const GRAPHICS = { layout: Layout, pipeline: Pipeline };

function SkillCard({ skill, index }) {
  const Graphic = GRAPHICS[skill.graphic];
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
      {Graphic && <Graphic />}

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
