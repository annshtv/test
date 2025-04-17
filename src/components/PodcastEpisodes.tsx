import ButtonSubscribe from '../UI/Buttons/ButtonSubscribe';
import styles from './PodcastEpisodes.module.css';

const PodcastEpisodes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Episodes</h2>
          <p className={styles.subtitle}>Available on your favorite platform</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/320/180" 
                alt="Pandemic Becoming Endemic"
                className={styles.image}
              />
              <div className={styles.controls}>
                <button className={styles.controlButton}>+</button>
                <button className={styles.controlButton}>◯</button>
                <button className={styles.controlButton}>⋮</button>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.episodeNumber}>Eps. 6</div>
              <h3 className={styles.episodeTitle}>Pandemic Becoming Endemic</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tag}>covid-19</span>
                  <span className={styles.tag}>health</span>
                </div>
                
                <div className={styles.hosts}>
                  <span className={styles.hostsLabel}>Hosted by:</span>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{marginLeft: 0}}></div>
                    <div className={styles.avatar}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/320/180" 
                alt="Tesla Autopilot Controversy"
                className={styles.image}
              />
              <div className={styles.controls}>
                <button className={styles.controlButton}>+</button>
                <button className={styles.controlButton}>◯</button>
                <button className={styles.controlButton}>⋮</button>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.episodeNumber}>Eps. 5</div>
              <h3 className={styles.episodeTitle}>Tesla Autopilot Controversy</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tag}>automation</span>
                  <span className={styles.tag}>tech</span>
                </div>
                
                <div className={styles.hosts}>
                  <span className={styles.hostsLabel}>Hosted by:</span>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{marginLeft: 0}}></div>
                    <div className={styles.avatar}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/320/180" 
                alt="Women's Rights? Is it alright?"
                className={styles.image}
              />
              <div className={styles.controls}>
                <button className={styles.controlButton}>+</button>
                <button className={styles.controlButton}>◯</button>
                <button className={styles.controlButton}>⋮</button>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.episodeNumber}>Eps. 4</div>
              <h3 className={styles.episodeTitle}>Women's Rights? Is it alright?</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tag}>women's rights</span>
                </div>
                
                <div className={styles.hosts}>
                  <span className={styles.hostsLabel}>Hosted by:</span>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{marginLeft: 0}}></div>
                    <div className={styles.avatar}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/320/180" 
                alt="How to Deal with Self-Confidence"
                className={styles.image}
              />
              <div className={styles.controls}>
                <button className={styles.controlButton}>+</button>
                <button className={styles.controlButton}>◯</button>
                <button className={styles.controlButton}>⋮</button>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.episodeNumber}>Eps. 3</div>
              <h3 className={styles.episodeTitle}>How to Deal with Self-Confidence</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tag}>self-esteem</span>
                  <span className={styles.tag}>health</span>
                </div>
                
                <div className={styles.hosts}>
                  <span className={styles.hostsLabel}>Hosted by:</span>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{marginLeft: 0}}></div>
                    <div className={styles.avatar}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/320/180" 
                alt="Type of Social Classes of People"
                className={styles.image}
              />
              <div className={styles.controls}>
                <button className={styles.controlButton}>+</button>
                <button className={styles.controlButton}>◯</button>
                <button className={styles.controlButton}>⋮</button>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.episodeNumber}>Eps. 2</div>
              <h3 className={styles.episodeTitle}>Type of Social Classes of People</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tag}>social class</span>
                  <span className={styles.tag}>wealth</span>
                </div>
                
                <div className={styles.hosts}>
                  <span className={styles.hostsLabel}>Hosted by:</span>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{marginLeft: 0}}></div>
                    <div className={styles.avatar}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src="/api/placeholder/320/180" 
                alt="Are you a Perplexed Mind Person?"
                className={styles.image}
              />
              <div className={styles.controls}>
                <button className={styles.controlButton}>+</button>
                <button className={styles.controlButton}>◯</button>
                <button className={styles.controlButton}>⋮</button>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.episodeNumber}>Eps. 1</div>
              <h3 className={styles.episodeTitle}>Are you a Perplexed Mind Person?</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              
              <div className={styles.footer}>
                <div className={styles.tags}>
                  <span className={styles.tag}>mind behaviour</span>
                  <span className={styles.tag}>health</span>
                </div>
                
                <div className={styles.hosts}>
                  <span className={styles.hostsLabel}>Hosted by:</span>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{marginLeft: 0}}></div>
                    <div className={styles.avatar}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <ButtonSubscribe>BROWSE ALL EPISODES</ButtonSubscribe>
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisodes;