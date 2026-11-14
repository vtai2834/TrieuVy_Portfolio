import { marqueeItems } from '@/data/portfolio';
import styles from './Marquee.module.css';

const SECONDS_PER_ITEM = 15;
/* How many times the list repeats inside one loop — each loop must be wider than the widest screen. */
const REPEAT = 3;

const toTimecode = (seconds) => {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  return `${mm}:${ss}`;
};

/* A timeline-style scrolling strip. The loop is rendered twice so it scrolls seamlessly. */
export default function Marquee() {
  const loop = Array.from({ length: REPEAT }, () => marqueeItems).flat();
  const items = [...loop, ...loop];

  return (
    <div className={styles.marquee}>
      <div className={styles.ruler} aria-hidden="true" />
      <p className="visually-hidden">{marqueeItems.join(', ')}</p>
      <div className={styles.track} aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.timecode}>{toTimecode(i * SECONDS_PER_ITEM)}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
