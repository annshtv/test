import { useState } from 'react';
import styles from './Sponsor.module.css';

function Posts() {
  const categories = ['All', 'Business', 'News', 'Tips & Trick', 'Podcast', 'Productivity'];
  const [activeCategory, setActiveCategory] = useState('All');

  const posts = [
    {
      img: 'pictures/cart1.png',
      label: 'PODCAST',
      title: 'Setup your own podcast',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['business', 'startup'],
      category: 'Podcast',
      date: 'Sep 12, 2021',
    },
    {
      img: 'pictures/cart2.png',
      label: 'TIPS & TRICK',
      title: 'Doodle artwork 101',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['art', 'creative', 'tips and trick'],
      category: 'Tips & Trick',
      date: 'Sep 12, 2021',
    },
    {
      img: 'pictures/cart3.png',
      label: 'NEWS',
      title: 'Mother Nature Taking Over',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['news', 'nature'],
      category: 'News',
      date: 'Sep 12, 2021',
    },
    {
      img: 'pictures/cart4.png',
      label: 'PRODUCTIVITY',
      title: 'How to Be Productive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      tags: ['productivity', 'mindset'],
      category: 'Productivity',
      date: 'Sep 12, 2021',
    },
  ];

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <>
      <h2 className={styles.postsH2}>Latest Posts</h2>

      <div className={styles.category}>
        {categories.map((category, index) => (
          <p
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {category}
          </p>
        ))}
      </div>

      <div className={styles.cards}>
        {filteredPosts.map((post, idx) => (
          <div key={idx} className={styles[`card${(idx % 3) + 1}`]}>
            <img src={post.img} alt="" />
            <div className={styles.text}>
              <p>{post.label}</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className={styles.footTxt}>
                {post.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
                <div>{post.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
