import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import MembershipBenefits from "../../components/MembershipBenefits";
import PodcastEpisodes from "../../components/PodcastEpisodes";
import SponsorSection from "../../components/SponsorSection";
import News from "./News";
import DownLoad from "../../components/DownLoad";
import Footer from "../../components/Footer";
import { register } from "swiper/element/bundle";
import AccountPage from "../AccountPage";

function Home() {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  return (
    <>
      <Header />
      <h1 className={styles.h1}>
        Talk. Listen. Get inspired<br></br>
        by every minute of it.
      </h1>
      <div className={styles.lorems}>
        <div className={styles.lorem}>
          <img src="pictures/Illustration.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
            Curabitur ac ultrices odio.{" "}
          </p>
        </div>
        <div className={styles.lorem}>
          <img src="pictures/ideas.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
            Curabitur ac ultrices odio.{" "}
          </p>
        </div>
      </div>
      <div className={styles.quote}>
        <p>
          One of the best daily podcasts that<br></br>
          covers every topic on Spotify.
        </p>
        <div className={styles.info}>
          <img src="pictures/avatar.png" alt="" />
          <p>John Smith,</p>
          <img src="pictures/Vector.png" alt="" />
          <p className={styles.second}>Social Community Manager</p>
        </div>
      </div>
      <div className={styles.feedBack}>
        <h2>What our listeners say</h2>
        <p>Their experience throughout every platform</p>
        <div className={styles.reviews}>
      
            <SwiperSlide className={styles.reviewSlide}>
              <div className={styles.review}>
                <p className={styles.point}>"</p>
                <p>
                  Lorem ipsum dolor sit amet consectet <br></br>
                  piscing elit, sed do eiusmod tempor incidi <br></br> ut labore
                  et dolore magna aliqua.{" "}
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
                  Lorem ipsum dolor sit amet consectet <br></br>
                  piscing elit, sed do eiusmod tempor incidi <br></br> ut labore
                  et dolore magna aliqua .{" "}
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
                  Lorem ipsum dolor sit amet consectet <br></br>
                  piscing elit, sed do eiusmod tempor incidi <br></br> ut labore
                  et dolore magna aliqua.{" "}
                </p>
                <div className={styles.contact}>
                  <img src="pictures/avatar3.png" alt="" />
                  <p>Mia Winters,</p>
                  <img src="pictures/platform3.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
       
        </div>
      </div>
      <PodcastEpisodes />
      <MembershipBenefits />
      <SponsorSection />
      <News />
      <DownLoad />
      <Footer />
    </>
  );
}

export default Home;
