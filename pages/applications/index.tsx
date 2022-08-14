import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import ApplicationsPage from '../../components/sections/ApplicationsPage';

const Applications: NextPage = () => {
  return (
    <Page curPage="Applications">
      <ApplicationsPage/>
    </Page>
  );
};

export default Applications;
