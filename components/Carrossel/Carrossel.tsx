import React from 'react';
import * as C from './styled';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import BannerImg1 from '../Assets/banner-1.png';
import BannerImg2 from '../Assets/banner-2.png';

export default function Carrossel() {
  return (
    <C.Container>
      <Swiper
        className='mySwiper'
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <Image src={BannerImg1} alt='testebimg' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BannerImg2} alt='testebimg' />
        </SwiperSlide>
      </Swiper>
    </C.Container>
  );
}
