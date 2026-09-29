import styles from './SectionHeader.module.css';

/*
 * "01 — About me" label + big display title + italic serif accent word.
 * size:   'md' | 'lg' | 'xl'
 * align:  'start' | 'center'
 * layout: 'inline' (accent beside the title) | 'stacked' (accent below)
 * accentSize: 'match' (same height as title) | 'small' (for longer phrases)
 */
export default function SectionHeader({
  index,
  label,
  title,
  accent,
  size = 'md',
  align = 'start',
  layout = 'inline',
  accentSize = 'match',
  as: Heading = 'h2',
  aside,
}) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      <div className={styles.main}>
        {label && (
          <p className={styles.label}>
            {index && `${index} — `}
            {label}
          </p>
        )}
        <Heading className={`${styles.title} ${styles[size]} ${styles[layout]}`}>
          <span className={styles.display}>{title}</span>
          {accent && (
            <span className={`${styles.accent} ${accentSize === 'small' ? styles.accentSmall : ''}`}>
              {accent}
            </span>
          )}
        </Heading>
      </div>
      {aside && <div className={styles.aside}>{aside}</div>}
    </header>
  );
}
