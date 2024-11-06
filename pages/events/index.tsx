import type { NextPage } from 'next';
import SEO from '../../components/SEO/SEO';
import Page from '../../components/layout/Page';
import Events from '../../components/sections/Events';

const Events: NextPage = () => {
  return (
    <>
      <SEO
        title="Events | CREATE Markham"
        description="Take a look at our events from past years, and more to come soon!"
        keywords=""
      />
      <Page curPage="Events">
        <Events/>
      </Page>
    </>
  );
};

export default Events;
