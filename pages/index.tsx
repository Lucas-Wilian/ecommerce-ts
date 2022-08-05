import type { NextPage } from 'next';
import {
  Header,
  Menu,
  Carrossel,
  FormPromotion,
  Product,
} from '../components/index';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Carrossel />
      <FormPromotion />
      <Product />
    </>
  );
};

export default Home;
