import { useEffect, useRef } from "react";
import styled from "styled-components";
import ButtonSubscribe from "../../UI/Buttons/ButtonSubscribe";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
const HeaderWrapper = styled.div`
  .header {
    background-color: #f7ede8;
    padding: 0px;
    height: 100%;
    max-width: 100%;
    background-image: url("pictures/Header.png");
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    background-size: cover;
    padding-bottom: 100px;
  }

  .navigation p {
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    color: #000;
  }

  .menus {
    display: flex;
    gap: 60px;
    max-width: 1160px;
    align-items: baseline;
  }
  .b1 {
    font-family: Montserrat Alternates;
    border: 2px solid #000;
    font-weight: bold;
    border-radius: 8px;
    width: 188px;
    height: 41px;
    background-color: #f7ede8;
  }
  .buttons {
    gap: 20px;
    display: flex;
  }
  h1 {
    font-family: Montserrat Alternates;
    font-weight: 700;
    font-size: 76px;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-align: center;
    color: #000;
  }
  .last-word {
    color: #cd4631;
  }
  p {
    font-family: Montserrat Alternates;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #4d4d4d;
  }
  

  .covers-container {
    width: 100%;
    max-width: 1200px;
    margin-top: 120px;
    position: relative;
  }
  
  .covers {
    width: 100%;
  }
  
  .cover-slide {
    width: auto;
    display: flex;
    justify-content: center;
  }
  
  .cover-slide img {
    max-width: 373px;
    height: auto;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  
  /* Navigation buttons */
  .swiper-nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
  
  .nav-button {
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .nav-button:hover {
    transform: scale(1.1);
  }
`;

function Header() {
  const lastWordStyling = (text: string) => {
    const words = text.split(" ");
    const lastWord = words.pop();
    return {
      __html: `${words.join(
        " "
      )}<br /><span class="last-word">${lastWord}</span>`,
    };
  };
  

  const coversSwiperRef = useRef(null);

  return (
    <HeaderWrapper>
      <Navbar />
      <div className="header">
        <h1
          dangerouslySetInnerHTML={lastWordStyling("Your Daily Podcast")}
        ></h1>
        <p>
          We cover all kinds of categories and <br />a weekly special guest.
        </p>
        <ButtonSubscribe>SUBSCRIBE</ButtonSubscribe>
        <div className="covers-container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="pictures/cover11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pictures/cover22.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pictures/cover3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pictures/cover4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pictures/cover55.png" />
        </SwiperSlide>
      </Swiper>
          
          {/* <div className="swiper-nav">
            <div className="nav-button" onClick={handlePrevCover}>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="none"/>
                <polyline points="23,13 16,20 23,27" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="nav-button" onClick={handleNextCover}>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#D14A3C" strokeWidth="2" fill="none"/>
                <polyline points="17,13 24,20 17,27" fill="none" stroke="#D14A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div> */}
        </div>
        
        <div className={styles.platform}>
          <div className={styles.sup}>Supported by:</div>
          <div className={styles.social}>
            <div>
              <img src="pictures/Spotify.svg" alt="" />
            </div>
            <div>
              <img src="pictures/Google.svg" alt="" />
            </div>
            <div>
              <img src="pictures/Youtube.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;