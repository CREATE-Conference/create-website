import type { NextPage } from 'next';
import SEO from '../../components/SEO/SEO';
import Page from '../../components/layout/Page';
import ApplicationsGrid from '../../components/sections/ApplicationsGrid';

const Applications: NextPage = () => {
  return (
    <>
      <SEO
        title="Applications | CREATE Markham"
        description="Interested in gaining volunteer hours in Markham? Apply for the CREATE Conference today!"
        keywords=""
      />
      <Page curPage="Applications">
        <ApplicationsGrid />
      </Page>
    </>
  );
};

export default Applications;
