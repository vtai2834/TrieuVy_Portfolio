import { profile } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  const mailto = `mailto:${profile.email}`;

  return (
    <section id="contact" className={styles.contact}>
      <Reveal className={`container ${styles.inner}`}>
        <SectionHeader
          index="06"
          label="Connect me"
          title="Let's create"
          accent="something together"
          size="xl"
          align="center"
          layout="stacked"
        />

        <a href={mailto} className={styles.email}>
          {profile.email}
        </a>

        <div className={styles.actions}>
          <span className={styles.location}>
            <Icon name="pin" />
            {profile.location}
          </span>
          <Button href={profile.linkedin} variant="periwinkle" icon="linkedin" external>
            LinkedIn
          </Button>
          <Button href={mailto} icon="mail">
            Send an email
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
