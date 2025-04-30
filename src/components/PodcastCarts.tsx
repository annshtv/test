import { useState } from 'react';
import styles from './PodcastEpisodes.module.css';

function PodcastCarts() {
  const categories = ["All", "Business", "News", "Tips & Trick", "Podcast", "Productivity", "Health", "Tech", "Social Issues"];
  const [activeCategory, setActiveCategory] = useState("All");

  const episodes = [
    {
      img: 'coverr1.png',
      alt: 'Pandemic Becoming Endemic',
      ep: 'Eps. 6',
      title: 'Pandemic Becoming Endemic',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      tags: ['covid-19', 'health'],
      categories: ['Health', 'News']
    },
    {
      img: 'coverr2.png',
      alt: 'Tesla Autopilot Controversy',
      ep: 'Eps. 5',
      title: 'Tesla Autopilot Controversy',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      tags: ['automation', 'tech'],
      categories: ['Tech', 'News']
    },
    {
      img: 'coverr3.png',
      alt: "Women's Rights? Is it alright?",
      ep: 'Eps. 4',
      title: "Women's Rights? Is it alright?",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      tags: ["women's rights"],
      categories: ['Social Issues', 'News']
    },
    {
      img: 'coverr4.png',
      alt: 'How to Deal with Self-Confidence',
      ep: 'Eps. 3',
      title: 'How to Deal with Self-Confidence',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      tags: ['self-esteem', 'health'],
      categories: ['Health', 'Tips & Trick']
    },
    {
      img: 'coverr5.png',
      alt: 'Type of Social Classes of People',
      ep: 'Eps. 2',
      title: 'Type of Social Classes of People',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['social class', 'wealth'],
      categories: ['Social Issues', 'Business']
    },
    {
      img: 'coverr6.png',
      alt: 'Are you a Perplexed Mind Person?',
      ep: 'Eps. 1',
      title: 'Are you a Perplexed Mind Person?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
      tags: ['mind behaviour', 'health'],
      categories: ['Health', 'Productivity']
    },
  ];

  const filteredEpisodes = activeCategory === "All" 
    ? episodes 
    : episodes.filter(ep => ep.categories.includes(activeCategory));

  return (
    <>
      <div className="flex justify-around items-center h-[72px] border-b border-black w-[80%] mx-auto">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className={styles.grid}>
        {filteredEpisodes.map((ep, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.content}>
              <img
                src={`pictures/${ep.img}`}
                alt={ep.alt}
                className={styles.image}
              />
              <div className="info">
                <div className={styles.episodeNumber}>{ep.ep}</div>
                <h3 className={styles.episodeTitle}>{ep.title}</h3>
                <p className={styles.description}>{ep.desc}</p>
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.tags}>
                {ep.tags.map((tag, i) => (
                  <span className={styles.tag} key={i}>{tag}</span>
                ))}
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
        ))}
      </div>
    </>
  );
}

export default PodcastCarts;