import type { NextPage } from 'next';
import Header from '../components/navigation/Header';
import Landing from '../components/sections/Landing';

const Home: NextPage = () => {
  return (
    <>
      <Header curPage="Home" />
      <Landing />
    </>
  );
};

export default Home;
