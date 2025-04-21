import styles from './Sponsor.module.css'

function Posts() {
  return (
   <>
   <h2 className={styles.postsH2}>Latest Posts</h2>
   <div className={styles.category}>
    <p>All</p>
    <p>Business</p>
    <p>News</p>
    <p>Tips & Trick</p>
    <p>Podcast</p>
    <p>Productivity</p>
   </div>
   <div className={styles.cards}>
          <div className={styles.card1}>
            <img src="pictures/cart1.png" alt="" />
            <div className="text">
              <p>PODCAST</p>
              <h3>Setup your own podcast</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
              <div className={styles.footTxt}>
                <p>business</p>
                <p>startup</p>
                <div>Sep 12, 2021</div>
              </div>
            
            </div>
          </div>
          <div className={styles.card2}>
            <img src="pictures/cart2.png" alt="" />
            <div className="text">
              <p>TIPS & TRICK</p>
              <h3>Doodle artwork 101</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
              <div className={styles.footTxt}>
                <p>art</p>
                <p>creative</p>
                <p>tips and trick</p>
                <div>Sep 12, 2021</div>
              </div>
              
            </div>
          </div>
          <div className={styles.card3}>
            <img src="pictures/cart3.png" alt="" />
            <div className="text">
              <p>NEWS</p>
              <h3>Mother Nature Taking Over</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
              <div className={styles.footTxt}>
                <p>news</p>
                <p>nature</p>
                <div>Sep 12, 2021</div>
              </div>
             
            </div>
          </div>
          <div className={styles.card2}>
            <img src="pictures/cart4.png" alt="" />
            <div className="text">
              <p>PRODUCTIVITY</p>
              <h3>How to Be Productive</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
              <div className={styles.footTxt}>
                <p>productivity</p>
                <p>mindset</p>
                <div>Sep 12, 2021</div>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Posts
