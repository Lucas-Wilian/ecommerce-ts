import type { NextPage } from 'next';
import { Header, Menu, Carrossel } from '../components/index';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Carrossel />
    </>
  );
};

export default Home;
