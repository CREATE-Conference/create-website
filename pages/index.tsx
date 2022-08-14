import type { NextPage } from 'next';
import Page from '../components/layout/Page';
import AboutUs from '../components/sections/AboutUs';
import Contact from '../components/sections/Contact';
import Landing from '../components/sections/Landing';
import MyCreateStory from '../components/sections/MyCreateStory';

const Home: NextPage = () => {
  return (
    <Page curPage="Home">
      <Landing />
      <AboutUs />
      <MyCreateStory />
      <Contact />
    </Page>
  );
};

export default Home;
