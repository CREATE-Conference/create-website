import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import GalleryPage from '../../components/sections/GalleryPage';

const Gallery: NextPage = () => {
  return (
    <Page curPage="Gallery">
      <GalleryPage/>
    </Page>
  );
};

export default Gallery;
