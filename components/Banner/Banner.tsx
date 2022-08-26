import React from 'react';
import Image from 'next/image';
import * as C from './styled';
import BannerImg from '../Assets/banner-smg.png';

function Banner() {
  return (
    <C.Container>
      <Image src={BannerImg} alt='testebimg' />
    </C.Container>
  );
}

export default Banner;
