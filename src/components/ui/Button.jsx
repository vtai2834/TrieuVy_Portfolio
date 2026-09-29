import Icon from './Icon';
import styles from './Button.module.css';

/*
 * A link styled as a button (every CTA on this site navigates somewhere).
 * variant: 'primary' | 'outline' | 'soft' | 'periwinkle'
 */
export default function Button({
  href,
  variant = 'primary',
  icon,
  iconPosition = 'start',
  external = false,
  className = '',
  children,
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  const iconEl = icon && <Icon name={icon} size={icon === 'play' ? 15 : 18} />;

  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...externalProps}
    >
      {iconPosition === 'start' && iconEl}
      {children}
      {iconPosition === 'end' && iconEl}
    </a>
  );
}
