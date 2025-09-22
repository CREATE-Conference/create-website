import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import SponsorsPage from '../../components/sections/SponsorsPage';
import SEO from '../../components/SEO/SEO';

const Sponsors: NextPage = () => {
  return (
    <>
      <SEO
        title="Sponsors | CREATE Markham"
        description="View our sponsors and partners!"
        keywords=""
      />
      <Page curPage="Sponsors">
        <SponsorsPage />
      </Page>
    </>
  );
};

export default Sponsors;
