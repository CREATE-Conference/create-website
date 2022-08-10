import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import TeamGrid from '../../components/sections/TeamGrid';

const Team: NextPage = () => {
  return (
    <Page curPage="Team">
      <TeamGrid />
    </Page>
  );
};

export default Team;
