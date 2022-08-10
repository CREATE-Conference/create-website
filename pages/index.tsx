import type { NextPage } from 'next';
import Page from '../components/layout/Page';
import AboutUs from '../components/sections/AboutUs';
import Landing from '../components/sections/Landing';
import MyCreateStory from '../components/sections/MyCreateStory';

const Home: NextPage = () => {
  return (
    <Page curPage="Home">
      <Landing />
      <AboutUs />
      <MyCreateStory />
    </Page>
  );
};

export default Home;
