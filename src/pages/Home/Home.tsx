import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MembershipBenefits from "../../components/MembershipBenefits";
import PodcastEpisodes from "../../components/PodcastEpisodes";
import SponsorSection from "../../components/SponsorSection";
import News from "./News";
import DownLoad from "../../components/DownLoad";
import Footer from "../../components/Footer";

function Home() {
  // const [podcasts, setPodcasts] = useState([]);

  // useEffect(() => {
  //   fetch("https://radio-t.com/site-api/last/5?categories=podcast")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Последние 5 подкастов:", data);
  //       setPodcasts(data);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при получении подкастов:", error);
  //     });
  // }, []);

  return (
    <>
      {/* <div>
        {podcasts[0] && (
          <>
            <img src={podcasts[3].image} />
            <h1>{podcasts[3].audio_url
            }</h1>
          </>
        )}
      </div> */}
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
          <div className={styles.review}>
            <p className={styles.point}>“</p>
            <p>
              Lorem ipsum dolor sit amet consectet <br></br>
              piscing elit, sed do eiusmod tempor incidi <br></br> ut labore et
              dolore magna aliqua.{" "}
            </p>
            <div className={styles.contact}>
              <img src="pictures/avatar1.png" alt="" />
              <p>Luna lovegood,</p>
              <img src="pictures/platform.png" alt="" />
            </div>
          </div>
          <div className={styles.review}>
            <p className={styles.point}>“</p>
            <p>
              Lorem ipsum dolor sit amet consectet <br></br>
              piscing elit, sed do eiusmod tempor incidi <br></br> ut labore et
              dolore magna aliqua .{" "}
            </p>
            <div className={styles.contact}>
              <img src="pictures/avatar2.png" alt="" />
              <p>Emily Blunt,</p>
              <img src="pictures/platform2.png" alt="" />
            </div>
          </div>
          <div className={styles.review}>
            <p className={styles.point}>“</p>
            <p>
              Lorem ipsum dolor sit amet consectet <br></br>
              piscing elit, sed do eiusmod tempor incidi <br></br> ut labore et
              dolore magna aliqua.{" "}
            </p>
            <div className={styles.contact}>
              <img src="pictures/avatar3.png" alt="" />
              <p>Mia Winters,</p>
              <img src="pictures/platform3.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.switch}>
          <ArrowBackIosIcon />
          <ArrowForwardIosIcon />
        </div>
      </div>
      <MembershipBenefits />
      <PodcastEpisodes />
      <SponsorSection />
      <News />
      <DownLoad />
      <Footer />
    </>
  );
}

export default Home;
