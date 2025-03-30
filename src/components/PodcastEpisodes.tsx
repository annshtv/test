import ButtonSubscribe from '../UI/Buttons/ButtonSubscribe';
import  styles from './PodcastEpisodes.module.css';
const PodcastEpisodeCard = ({ episode }) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {/* Placeholder for your images */}
          <img 
            src="/api/placeholder/320/180" 
            alt={episode.title}
            className={styles.image}
          />
          <div className={styles.controls}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.episodeNumber}>{episode.episodeNumber}</div>
          <h3 className={styles.episodeTitle}>{episode.title}</h3>
          <p className={styles.description}>{episode.description}</p>
          
          <div className={styles.footer}>
            <div className={styles.tags}>
              {episode.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
            
            <div className={styles.hosts}>
              <span className={styles.hostsLabel}>Hosted by:</span>
              <div className={styles.avatars}>
                {episode.hosts.map((host, index) => (
                  <div 
                    key={index} 
                    className={styles.avatar}
                    style={{marginLeft: index === 0 ? 0 : '-8px'}}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const PodcastEpisodes = () => {
    const episodes = [
      {
        id: 6,
        episodeNumber: 'Eps. 6',
        title: 'Pandemic Becoming Endemic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['covid-19', 'health'],
        hosts: ['host1', 'host2']
      },
      {
        id: 5,
        episodeNumber: 'Eps. 5',
        title: 'Tesla Autopilot Controversy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['automation', 'tech'],
        hosts: ['host1', 'host2']
      },
      {
        id: 4,
        episodeNumber: 'Eps. 4',
        title: 'Women\'s Rights? Is it alright?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['women\'s rights'],
        hosts: ['host1', 'host2']
      },
      {
        id: 3,
        episodeNumber: 'Eps. 3',
        title: 'How to Deal with Self-Confidence',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['self-esteem', 'health'],
        hosts: ['host1', 'host2']
      },
      {
        id: 2,
        episodeNumber: 'Eps. 2',
        title: 'Type of Social Classes of People',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['social class', 'wealth'],
        hosts: ['host1', 'host2']
      },
      {
        id: 1,
        episodeNumber: 'Eps. 1',
        title: 'Are you a Perplexed mind Person?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['mind behaviour', 'health'],
        hosts: ['host1', 'host2']
      }
    ];
  
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.title}>Recent Episodes</h2>
            <p className={styles.subtitle}>Available on your favorite platform</p>
          </div>
          
          <div className={styles.grid}>
            {episodes.map((episode) => (
              <PodcastEpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
          
          <div className={styles.buttonContainer}>
            <ButtonSubscribe>BROWSE ALL EPISODES</ButtonSubscribe>
          </div>
        </div>
      </div>
    );
  };
  
  export default PodcastEpisodes;;