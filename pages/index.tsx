import type { NextPage } from 'next';
import Page from '../components/layout/Page';
import AboutUs from '../components/sections/AboutUs';
import Contact from '../components/sections/Contact';
import Landing from '../components/sections/Landing';
import MyCreateStory from '../components/sections/MyCreateStory';
import SEO from '../components/SEO/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="CREATE Markham | Leadership and Volunteering Conference"
        description="Looking for volunteering and leadership opportunities in Markham? Join CREATE Conference and collaborate on improving your community while gaining volunteer hours!"
        keywords="volunteer, volunteering, leadership, markham, create markham, create conference, high school volunteer opportunities markham, youth volunteer opportunities, student volunteer opportunities"
      />
      <Page curPage="Home">
        <Landing />
        <AboutUs />
        <MyCreateStory />
        <Contact />
      </Page>
    </>
  );
};

export default Home;
