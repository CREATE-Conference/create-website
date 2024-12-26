import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'

const GALLERY = [
  require('../../public/img/gallery/2023-2024/4971_0001.png'),
  require('../../public/img/gallery/2023-2024/4971_0002.png'),
  require('../../public/img/gallery/2023-2024/4971_0004.png'),
  require('../../public/img/gallery/2023-2024/4971_0005.png'),
  require('../../public/img/gallery/2023-2024/4971_0006.png'),
  require('../../public/img/gallery/2023-2024/4971_0008.png'),
  require('../../public/img/gallery/2023-2024/4971_0009.png'),
  require('../../public/img/gallery/2023-2024/4971_0011.png'),
  require('../../public/img/gallery/2023-2024/4971_0015.png'),
  require('../../public/img/gallery/2023-2024/4971_0016.png'),
  require('../../public/img/gallery/2023-2024/4971_0017.png'),
  require('../../public/img/gallery/2023-2024/4971_0018.png'),
  require('../../public/img/gallery/2023-2024/4971_0020.png'),
  require('../../public/img/gallery/2023-2024/4971_0021.png'),
  require('../../public/img/gallery/2023-2024/4971_0022.png'),
  require('../../public/img/gallery/2023-2024/4971_0023.png'),
  require('../../public/img/gallery/2023-2024/4971_0024.png'),
  require('../../public/img/gallery/2023-2024/4971_0025.png'),
  require('../../public/img/gallery/2023-2024/4971_0026.png'),
  require('../../public/img/gallery/2023-2024/4971_0027.png'),
  require('../../public/img/gallery/2023-2024/4971_0028.png'),
  require('../../public/img/gallery/2023-2024/4971_0029.png'),
  require('../../public/img/gallery/2023-2024/4971_0031.png'),
  require('../../public/img/gallery/2023-2024/4971_0032.png'),
  require('../../public/img/gallery/2023-2024/4971_0033.png'),
  require('../../public/img/gallery/2023-2024/_7EE7388.png'),
  require('../../public/img/gallery/2023-2024/_7EE7438.png'),
  require('../../public/img/gallery/2023-2024/_7EE7568.png'),
  require('../../public/img/gallery/2023-2024/_7EE7688.png'),
  require('../../public/img/gallery/2023-2024/IMG_2171.png'),
  require('../../public/img/gallery/2023-2024/IMG_5726.png'),
  require('../../public/img/gallery/2023-2024/IMG_6581.png'),
  require('../../public/img/gallery/2023-2024/IMG_6588.png'),
  require('../../public/img/gallery/2023-2024/IMG_8524.png'),
  
];

const GalleryPage = (): ReactElement => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (image: string) => setLightboxImage(image); // Use string for dynamic imports
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section className= "section center items-center bg-black text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">gallery</h1>
      </div>
      {/* Gallery container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-3xl max-h-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryPage;