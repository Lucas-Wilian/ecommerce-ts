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
          <>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </>
        }
      />

      <Banner />

      <Layout
        title='Mais vendidos'
        product={
          <>
            <ProductPromotion price={true} value='10' />
            <ProductPromotion price={true} value='10' />
            <ProductPromotion price={true} value='10' />
            <ProductPromotion price={true} value='10' />
            <ProductPromotion price={true} value='10' />
          </>
        }
      />

      <Layout
        title='Mais visitados'
        product={
          <>
            <ProductPromotion price={false} value='10' />
            <ProductPromotion price={false} value='10' />
            <ProductPromotion price={false} value='10' />
            <ProductPromotion price={false} value='10' />
            <ProductPromotion price={false} value='10' />
          </>
        }
      />
    </>
  );
};

export default Home;
