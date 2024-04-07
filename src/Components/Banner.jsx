import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-[650px] object-cover opacity-60' src="https://i.ibb.co/xgKK6w9/home-parallax-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] object-cover opacity-60' src="https://i.ibb.co/wdHWfy6/home-parallax-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] object-cover opacity-60' src="https://i.ibb.co/gF7wp0m/home-parallax-2.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;