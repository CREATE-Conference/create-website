import { ReactElement, useState } from 'react';
import Button from '../UI/Button';
import { GALLERY_IMG } from '../../constants/constants';

const GalleryPage = (): ReactElement => {
  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMG.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
