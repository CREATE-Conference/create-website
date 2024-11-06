import type { NextPage } from 'next';
import Page from '../../components/layout/Page';
import GalleryPage from '../../components/sections/GalleryPage';
import SEO from '../../components/SEO/SEO';

const Gallery: NextPage = () => {
  return (
    <>
      <SEO
        title="Gallery | CREATE Markham"
        description="View our photos from past years!"
        keywords=""
      />
      <Page curPage="Gallery">
        <GalleryPage />
      </Page>
    </>
  );
};

export default Gallery;
