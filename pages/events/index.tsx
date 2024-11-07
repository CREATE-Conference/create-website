import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import EventsPage from '../../components/sections/EventsPage';
import SEO from '../../components/SEO/SEO';

const Events: NextPage = () => {
  return (
    <>
      <SEO
        title="Events | CREATE Markham"
        description="Take a look at our events from past years, and more to come soon!"
        keywords=""
      />
      <Page curPage="Events">
        <EventsPage />
      </Page>
    </>
  );
};

export default Events;
