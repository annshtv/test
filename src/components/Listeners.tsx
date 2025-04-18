import styles from "./Listeners.module.css";

function Listeners() {
  return (
    <>
      <div className={styles.container}>
        <h2>What our listeners say</h2>
        <p>Their experience throughout every platform</p>
        <img src="pictures/img.png" alt="" />
        <div className={styles.history}>
        <h2>About and History</h2>
        <div className={styles.info}>
          <div className="info1">
            Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper <br/>
            eget nulla facilisi etiam dignissim. Id diam vel quam elementum<br/>
            pulvinar. <br/><br/>Elementum eu facilisis sed odio morbi quis commodo. <br/>Sed
            odio morbi quis commodo odio <br/> aenean sed adipiscing odio diam. uno
            fablotoson louw uit.
          </div>
          <div className="info2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam<br/>
            pellentesque at bibendum euismod tellus duis cursus dignissim odio.<br/>
            Sit vulputate et integer in. Sit vel, senectus iaculis morbi. Amet<br/>
            interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante
            enim eget.<br/><br/><br/> Viverra at porttitor accumsan. Orci non here
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Listeners;
