import { ReactElement, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from '../UI/Button';
import { GALLERY_IMG } from '../../constants/constants';

const GalleryPage = (): ReactElement => {
  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">Gallery</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_IMG.map((src, index) => (
          <div key={index} className="gallery-item">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              priority={index === 0} // Set priority for the first image for better performance
              fill
              style={{ objectFit: 'cover' }} // Use style instead of objectFit
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;