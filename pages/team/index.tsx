import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import TeamGrid from '../../components/sections/TeamGrid';
import SEO from '../../components/SEO/SEO';

const Team: NextPage = () => {
  return (
    <>
      <SEO
        title="Team | CREATE Markham"
        description="Meet this year's CREATE Markham executive team!"
        keywords=""
      />
      <Page curPage="Team">
        <TeamGrid />
      </Page>
    </>
  );
};

export default Team;
