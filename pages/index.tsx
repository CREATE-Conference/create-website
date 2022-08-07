import type { NextPage } from 'next';
import Header from '../components/navigation/Header';
import Landing from '../components/sections/Landing';
import MyCreateStory from '../components/sections/MyCreateStory';

const Home: NextPage = () => {
  return (
    <>
      <Header curPage="Home" />
      <Landing />
      <MyCreateStory />
    </>
  );
};

export default Home;
