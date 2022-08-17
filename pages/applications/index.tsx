import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import ApplicationsGrid from '../../components/sections/ApplicationsGrid';

const Applications: NextPage = () => {
  return (
    <Page curPage="Applications">
      <ApplicationsGrid />
    </Page>
  );
};

export default Applications;
