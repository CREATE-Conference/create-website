import type { NextPage } from 'next';
import Header from '../../components/navigation/Header';
import TeamGrid from '../../components/sections/TeamGrid';

const Team: NextPage = () => {
  return (
    <>
      <Header curPage="Team" />
      <TeamGrid />
    </>
  );
};

export default Team;
