import { videos } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import styles from './VideoWork.module.css';

const FORMAT_LABEL = { vertical: '9:16', horizontal: '16:9' };

function VideoCard({ video, delay }) {
  return (
    <Reveal delay={delay} className={`${styles.cell} ${styles[video.orientation]}`}>
      <a href={video.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <img src={video.thumbnail} alt={video.alt} className={styles.thumb} loading="lazy" />
        <span className={styles.play} aria-hidden="true">
          <Icon name="play" size={26} />
        </span>
        <span className={styles.caption}>
          <span className={styles.title}>{video.title}</span>
          <span className={styles.format}>{FORMAT_LABEL[video.orientation]}</span>
        </span>
        <span className="visually-hidden">(opens YouTube in a new tab)</span>
      </a>
    </Reveal>
  );
}

export default function VideoWork() {
  return (
    <section id="work" className={styles.work}>
      <div className="container">
        <SectionHeader
          index="03"
          label="Selected video work"
          title="Watch"
          accent="my edits"
          aside={
            <p className={styles.hint}>
              Tap a video to play it on YouTube
              <Icon name="arrowUpRight" />
            </p>
          }
        />
        <div className={styles.grid}>
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
