import type { NextPage } from 'next';
import { Header, Menu, Carrossel, FormPromotion } from '../components/index';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Carrossel />
      <FormPromotion />
    </>
  );
};

export default Home;
