import styles from './Sponsor.module.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
function Sponsor() {
 
  return (
    <>
      <div className={styles.sponsors}>
        <h2>Our Sponsor</h2>
        <p>Our current official sponsor</p>
        <div className={styles.sponsorCarts}>
        <Swiper
        slidesPerView={1}
        spaceBetween={50}
           pagination={{
          dynamicBullets: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper">
         
            <SwiperSlide className={styles.sponsorCart}>
            <div className="logo">
            <img src="pictures/google.png" alt="" />
            </div>
            <div className={styles.text}>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend estcon sctetur
              interdum eu in auctor. Gravida leo et.
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sponsorCart}>
            <div className="logo">
            <img src="pictures/spotify.png" alt="" />
            </div>
            <div className={styles.text}>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend estcon sctetur
              interdum eu in auctor. Gravida leo et.
            </div>
            </SwiperSlide>
     
            <SwiperSlide className={styles.sponsorCart}>
            <div className="logo">
            <img src="pictures/youtube.png" alt="" />
            </div>
            <div className={styles.text}>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend estcon sctetur
              interdum eu in auctor. Gravida leo et.
            </div>
            </SwiperSlide>
    
          </Swiper>
        </div>
  
      </div>
    </>
  );
}

export default Sponsor;


