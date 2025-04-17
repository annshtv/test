// SponsorSection.jsx
import ButtonSubscribe from '../UI/Buttons/ButtonSubscribe';
import styles from './SponsorSection.module.css';

const SponsorSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Become our sponsor</h2>
        <p className={styles.subtitle}>Get exclusive episodes, merch and more</p>
      </div>
      
      <div className={styles.pricingContainer}>
        <div className={styles.tierContainer}>
          <div className={styles.tier}>
            <h3 className={styles.tierName}>Member</h3>
            <p className={styles.tierDescription}>
              Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.
            </p>
            
            <div className={styles.subscribeRow}>
              <ButtonSubscribe>SUBSCRIBE</ButtonSubscribe>
              <div className={styles.priceContainer}>
                <span className={styles.price}>$9.99</span>
                <span className={styles.period}>/month</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.tierContainer} ${styles.popularTier}`}>
          <div className={styles.tier}>
            <div className={styles.tierNameContainer}>
              <h3 className={styles.tierName}>Family</h3>
              <span className={styles.popularBadge}>MOST POPULAR</span>
            </div>
            <p className={styles.tierDescription}>
              Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.
            </p>
            
            <div className={styles.subscribeRow}>
            <ButtonSubscribe>SUBSCRIBE</ButtonSubscribe>
              <div className={styles.priceContainer}>
                <span className={styles.price}>$14.99</span>
                <span className={styles.period}>/month</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tierContainer}>
          <div className={styles.tier}>
            <h3 className={styles.tierName}>Official</h3>
            <p className={styles.tierDescription}>
              Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.
            </p>
            
            <div className={styles.subscribeRow}>
            <ButtonSubscribe>SUBSCRIBE</ButtonSubscribe>
              <div className={styles.priceContainer}>
                <span className={styles.price}>$29.99</span>
                <span className={styles.period}>/month</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefits}>
            <h4 className={styles.benefitsTitle}>What's included:</h4>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitsItem}>• Exclusive Content</li>
              <li className={styles.benefitsItem}>• 5% Discount on Merch</li>
              <li className={styles.benefitsItem}>• Join the Community</li>
              <li className={styles.benefitsItem}>• Livestreaming Access</li>
            </ul>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsR}>
            <h4 className={styles.benefitsTitle}>What's included:</h4>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitsItem}>• Everything in Tier 1</li>
              <li className={styles.benefitsItem}>• Free tickets to Events</li>
              <li className={styles.benefitsItem}>• Limited Edition Merch</li>
              <li className={styles.benefitsItem}>• Promote your Product</li>
              <li className={styles.benefitsItem}>• Request Topic</li>
            </ul>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefits}>
            <h4 className={styles.benefitsTitle}>What's included:</h4>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitsItem}>• Everything in Tier 2</li>
              <li className={styles.benefitsItem}>• Exclusive Badge on Livestreaming</li>
              <li className={styles.benefitsItem}>• Become an Official Sponsor</li>
              <li className={styles.benefitsItem}>• Early Access to All Episodes</li>
              <li className={styles.benefitsItem}>• Free Stickers and Merch</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SponsorSection;
