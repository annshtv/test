import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import MembershipBenefits from "../../components/MembershipBenefits";
import PodcastEpisodes from "../../components/PodcastEpisodes";
import SponsorSection from "../../components/SponsorSection";
import News from "./News";
import DownLoad from "../../components/DownLoad";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Header />

      <motion.h1
        className={styles.h1}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Talk. Listen. Get inspired<br />
        by every minute of it.
      </motion.h1>

      <motion.div
        className={styles.lorems}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className={styles.lorem}>
          <img src="pictures/Illustration.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Curabitur ac ultrices odio.
          </p>
        </div>
        <div className={styles.lorem}>
          <img src="pictures/ideas.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Curabitur ac ultrices odio.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.quote}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          One of the best daily podcasts that<br />
          covers every topic on Spotify.
        </p>
        <div className={styles.info}>
          <img src="pictures/avatar.png" alt="" />
          <p>John Smith,</p>
          <img src="pictures/Vector.png" alt="" />
          <p className={styles.second}>Social Community Manager</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.feedBack}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>What our listeners say</h2>
        <p>Their experience throughout every platform</p>
        <div className={styles.reviews}>
          <SwiperSlide className={styles.reviewSlide}>
            <div className={styles.review}>
              <p className={styles.point}>"</p>
              <p>
                Lorem ipsum dolor sit amet consectet <br />
                piscing elit, sed do eiusmod tempor incidi <br />
                ut labore et dolore magna aliqua.
              </p>
              <div className={styles.contact}>
                <img src="pictures/avatar1.png" alt="" />
                <p>Luna lovegood,</p>
                <img src="pictures/platform.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewSlide}>
            <div className={styles.review}>
              <p className={styles.point}>"</p>
              <p>
                Lorem ipsum dolor sit amet consectet <br />
                piscing elit, sed do eiusmod tempor incidi <br />
                ut labore et dolore magna aliqua .
              </p>
              <div className={styles.contact}>
                <img src="pictures/avatar2.png" alt="" />
                <p>Emily Blunt,</p>
                <img src="pictures/platform2.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewSlide}>
            <div className={styles.review}>
              <p className={styles.point}>"</p>
              <p>
                Lorem ipsum dolor sit amet consectet <br />
                piscing elit, sed do eiusmod tempor incidi <br />
                ut labore et dolore magna aliqua.
              </p>
              <div className={styles.contact}>
                <img src="pictures/avatar3.png" alt="" />
                <p>Mia Winters,</p>
                <img src="pictures/platform3.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <PodcastEpisodes />
        <MembershipBenefits />
        <SponsorSection />
        <News />
        <DownLoad />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
