import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import styles from "./MembershipBenefits.module.css";

function MembershipBenefits() {
  return (
    <section className={styles.membershipContainer}>
      <div className={styles.decorTop}>
      </div>

      <div className={styles.membershipContent}>
        <h2 className={styles.membershipTitle}>Membership benefits</h2>
        <p className={styles.membershipSubtitle}>
          Become our sponsor and get all benefits
        </p>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
            <img src="pictures/Group.svg" alt="" />
            </div>
            <h3 className={styles.benefitTitle}>Topic by Request</h3>
            <p className={styles.benefitDescription}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
            <img src="pictures/Shiningstars.svg" alt="" />
            </div>
            <h3 className={styles.benefitTitle}>Exclusive Content</h3>
            <p className={styles.benefitDescription}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
            <img src="pictures/Face1.svg" alt="" />
            </div>
            <h3 className={styles.benefitTitle}>Join the Community</h3>
            <p className={styles.benefitDescription}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
            <img src="pictures/Face5.svg" alt="" />
            </div>
            <h3 className={styles.benefitTitle}>Livestreaming Access</h3>
            <p className={styles.benefitDescription}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
            <img src="pictures/Fire.svg" alt="" />
            </div>
            <h3 className={styles.benefitTitle}>Exclusive Episodes & Merch</h3>
            <p className={styles.benefitDescription}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
            <img src="pictures/Star.svg" alt="" />
            </div>
            <h3 className={styles.benefitTitle}>And much more!</h3>
            <p className={styles.benefitDescription}>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>

        <ButtonSubscribe>SEE PRICING</ButtonSubscribe>
      </div>

      <div className={styles.decorBottom}>
        <svg
          className={styles.decorCurve}
          width="40"
          height="80"
          viewBox="0 0 40 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2C2 40 38 40 38 78"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}

export default MembershipBenefits;
