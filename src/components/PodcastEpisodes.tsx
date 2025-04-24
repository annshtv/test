import ButtonSubscribe from '../UI/Buttons/ButtonSubscribe';
import PodcastCarts from './PodcastCarts';
import styles from './PodcastEpisodes.module.css';

const PodcastEpisodes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Episodes</h2>
          <p className={styles.subtitle}>Available on your favorite platform</p>
        </div>
          <PodcastCarts/>
        <div className={styles.buttonContainer}>
          <ButtonSubscribe children={'BROWSE ALL EPISODES'} styles={undefined}></ButtonSubscribe>
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisodes;
