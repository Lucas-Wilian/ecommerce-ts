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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import Link from 'next/link';

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
              <Link href='./product'>
                <a>
                  <Product />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <Product />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <Product />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <Product />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <Product />
                </a>
              </Link>
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
              <Link href='./product'>
                <a>
                  <ProductPromotion price={true} value='10' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={true} value='10' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={true} value='10' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={true} value='10' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={true} value='10' />
                </a>
              </Link>
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
              <Link href='./product'>
                <a>
                  <ProductPromotion price={false} value='0' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={false} value='0' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={false} value='0' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={false} value='0' />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='./product'>
                <a>
                  <ProductPromotion price={false} value='0' />
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        }
      />
    </>
  );
};

export default Home;
