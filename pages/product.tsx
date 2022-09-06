import type { NextPage } from 'next';
import {
  Header,
  Menu,
  ProductItem,
  Layout,
  Product,
  ProductPromotion,
  ProductInformation,
  ProductAvaliation,
} from '../components/index';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <ProductItem />
      <Layout
        title='Promoção Relampago ⚡'
        product={
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
        }
      />

      <Layout
        title='Mais vendidos'
        product={
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <ProductPromotion price={true} value='10' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={true} value='10' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={true} value='10' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={true} value='10' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={true} value='10' />
            </SwiperSlide>
          </Swiper>
        }
      />
      <ProductInformation />
      <ProductAvaliation />
    </>
  );
};

export default Home;
