import type { NextPage } from 'next';
import Page from '../components/layout/Page';
import Landing from '../components/sections/Landing';
import MyCreateStory from '../components/sections/MyCreateStory';

const Home: NextPage = () => {
  return (
    <Page curPage="Home">
      <Landing />
      <MyCreateStory />
    </Page>
  );
};

export default Home;
