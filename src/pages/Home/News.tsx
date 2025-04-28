import ButtonSubscribe from "../../UI/Buttons/ButtonSubscribe";
import styles from "./News.module.css";
function News() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>
        <h2>Article and News</h2>
        <p>News, tips, tricks and more</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img src="pictures/cart1.png" alt="" />
            <div className={styles.text}>
              <p>PODCAST</p>
              <h3>Setup your own podcast</h3>
              <p id={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
              <div className={styles.footTxt}>
                <p>business</p>
                <p>startup</p>
                <p id={styles.date}>Sep 14, 2021</p>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <img src="pictures/cart2.png" alt="" />
            <div className={styles.text}>
              <p>TIPS & TRICK</p>
              <h3 style={{ color: "#000" }}>Doodle artwork 101</h3>
              <p id={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
              <div className={styles.footTxt}>
                <p>art</p>
                <p>creative</p>
                <p>tips and trick</p>
                <p id={styles.date}>Sep 12, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <ButtonSubscribe
          children={"BROWSE ALL"}
          styles={styles.button}
        ></ButtonSubscribe>
      </div>
    </>
  );
}

export default News;
