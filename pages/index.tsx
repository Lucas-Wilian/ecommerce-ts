import type { NextPage } from 'next';
import {
  Header,
  Menu,
  Carrossel,
  FormPromotion,
  Product,
  Layout,
  Banner,
  ProductPromotion,
} from '../components/index';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Carrossel />
      <FormPromotion />

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

      <Banner />

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

      <Layout
        title='Mais visitados'
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
              <ProductPromotion price={false} value='0' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={false} value='0' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={false} value='0' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={false} value='0' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPromotion price={false} value='0' />
            </SwiperSlide>
          </Swiper>
        }
      />
    </>
  );
};

export default Home;
