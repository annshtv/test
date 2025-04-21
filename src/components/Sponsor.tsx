import styles from './Sponsor.module.css';

function Sponsor() {
  return (
    <>
      <div className={styles.sponsors}>
        <h2>Our Sponsor</h2>
        <p>Our current official sponsor</p>
        <div className={styles.sponsorCarts}>
          <div className={styles.sponsorCart}>
            <div className="logo"></div>
            <img src="pictures/google.png" alt="" />
            <div className={styles.text}>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend estcon sctetur
              interdum eu in auctor. Gravida leo et.
            </div>
          </div>
          <div className={styles.sponsorCart}>
            <div className="logo"></div>
            <img src="pictures/spotify.png" alt="" />
            <div className={styles.text}>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend estcon sctetur
              interdum eu in auctor. Gravida leo et.
            </div>
          </div>
          <div className={styles.sponsorCart}>
            <div className="logo"></div>
            <img src="pictures/youtube.png" alt="" />
            <div className={styles.text}>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend estcon sctetur
              interdum eu in auctor. Gravida leo et.
            </div>
          </div>
        </div>
        <div className={styles.icons}>
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="none"/>
            <polyline points="23,13 16,20 23,27" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#D14A3C" strokeWidth="2" fill="none"/>
            <polyline points="17,13 24,20 17,27" fill="none" stroke="#D14A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
