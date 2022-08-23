import type { NextPage } from 'next';
import {
  Header,
  Menu,
  Carrossel,
  FormPromotion,
  Product,
  Layout,
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
            <Product />
          </>
        }
      />
    </>
  );
};

export default Home;
