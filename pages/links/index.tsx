import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import LinksPage from '../../components/sections/LinksList';
import SEO from '../../components/SEO/SEO';

const Links: NextPage = () => {
  return (
    <>
      <SEO title="Links | CREATE Markham" description="" keywords="" />
      <Page curPage="Links">
        <LinksPage />
      </Page>
    </>
  );
};

export default Links;
