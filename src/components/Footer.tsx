import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footLinks}>
        <div className="first">
          <div className="logo">
            <img src="pictures/logo.png" alt=""/>
            <p>©2021.</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="pictures/socials.png" alt=""/>
        </div>
        <div className={styles.pages}>
          <div className={styles.fp}>
            <p>About</p>
            <p>Testimonials</p>
            <p>Features</p>
          </div>
          <div className={styles.fp}>
            <p>Episodes</p>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
        </div>
        <div className={styles.second}>
          <p>Listen to episodes on your fav platform:</p>
          <img src="pictures/sources.png" alt=""/>
          <div className="apps">
          <p>App available on:</p>
          <img src="pictures/apps.png" alt=""/>
        </div>
        </div>
      </div>
      <div className={styles.footInfo}>
        <p>©2022. All Rights Reserved. Pod of Cast</p>
        <div className={styles.links}>
        <p>Terms</p>
        <p>Privacy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
