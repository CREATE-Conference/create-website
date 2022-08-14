import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import LinksPage from '../../components/sections/LinksPage';

const Links: NextPage = () => {
  return (
    <Page curPage="Links">
      <LinksPage/>
    </Page>
  );
};

export default Links;
