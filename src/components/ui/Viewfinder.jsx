import styles from './Viewfinder.module.css';

/* Wraps an image with camera viewfinder corner marks. */
export default function Viewfinder({ children, className = '' }) {
  return (
    <div className={`${styles.frame} ${className}`}>
      {children}
      <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
    </div>
  );
}
