import useClock from '@/hooks/useClock';
import styles from './RecBadge.module.css';

// `undefined` locale/timeZone = the visitor's own browser settings.
const timeFormat = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});

const zoneFormat = new Intl.DateTimeFormat(undefined, { timeZoneName: 'shortOffset' });

const getZone = (date) =>
  zoneFormat.formatToParts(date).find((part) => part.type === 'timeZoneName')?.value ?? '';

/* Camera-style "● REC 21:56:03 GMT+7" overlay showing the visitor's local time. */
export default function RecBadge({ className = '' }) {
  const now = useClock();

  return (
    <span className={`${styles.badge} ${className}`} aria-hidden="true">
      <span className={styles.dot} />
      REC
      <time dateTime={now.toISOString()}>{timeFormat.format(now)}</time>
      <span className={styles.zone}>{getZone(now)}</span>
    </span>
  );
}
