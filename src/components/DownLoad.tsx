import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import styles from "./DownLoad.module.css";
function DownLoad() {
  return (
    <div className={styles.download}>
      <div className={styles.photo1}>
        <img src="pictures/phone1.png" alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.first}>
          <p className={styles.beta}>BETA</p>
          <h2>Available now <br></br> Pod of Cast App</h2>
          <p>We just launched our podcast app!</p>
        </div>
        <div className={styles.second}>
          <ButtonSubscribe>
            DOWNLOAD NOW
          </ButtonSubscribe>

          <p>Content also available on:</p>
          <div className="icons">
            <img src="pictures/platforma.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.photo2}>
        <img src="pictures/phone2.png" alt="" />
      </div>
    </div>
  );
}

export default DownLoad;
