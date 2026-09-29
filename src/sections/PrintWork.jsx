import { printWork } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import styles from './PrintWork.module.css';

export default function PrintWork() {
  return (
    <section id="visual" className={styles.print}>
      <div className="container">
        <SectionHeader index="05" label="Visual design" title="Print & docs" accent="that sell" />
        <div className={styles.grid}>
          {printWork.map((item, i) => (
            <Reveal as="figure" key={item.id} delay={i * 100} className={styles.card}>
              <div className={styles.images}>
                {item.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={styles.image}
                    loading="lazy"
                  />
                ))}
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.meta}>{item.meta}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
