import React, { useState } from 'react';
import ghost from '../assets/IMG_20220710_103408-removebg-preview.png';
import blackPic from '../assets/IMG_20230404_064209-removebg-preview.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Transition = () => {

  return (
    <div className='parent'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{display: 'flex', alignItems: 'end', height: '100%'}}>
          <img src={blackPic} alt="" /></div></SwiperSlide>
        <SwiperSlide><div style={{display: 'flex', alignItems: 'end', height: '100%'}}><img src={ghost} alt="" /></div></SwiperSlide>
      </Swiper>
    </div>
  )
};

//<img src={ghost} alt="" />
//<img src={blackPic} alt="" />

export default Transition
