import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'

const GALLERY = [
  require('../../public/img/gallery/2025-2026/01.JPG'),
  require('../../public/img/gallery/2025-2026/02.JPG'),
  require('../../public/img/gallery/2025-2026/03.JPG'),
  require('../../public/img/gallery/2025-2026/04.JPG'),
  require('../../public/img/gallery/2025-2026/05.JPG'),
  require('../../public/img/gallery/2025-2026/06.JPG'),
  require('../../public/img/gallery/2025-2026/07.JPG'),
  require('../../public/img/gallery/2025-2026/08.JPG'),
  require('../../public/img/gallery/2025-2026/09.JPG'),
  require('../../public/img/gallery/2025-2026/10.JPG'),
  require('../../public/img/gallery/2025-2026/11.JPG'),
  require('../../public/img/gallery/2025-2026/12.JPG'),
  require('../../public/img/gallery/2025-2026/13.JPG'),
  require('../../public/img/gallery/2025-2026/14.JPG'),
  require('../../public/img/gallery/2025-2026/15.JPG'),
  require('../../public/img/gallery/2025-2026/16.JPG'),
  require('../../public/img/gallery/2025-2026/17.JPG'),
  require('../../public/img/gallery/2025-2026/18.JPG'),
  require('../../public/img/gallery/2025-2026/19.JPG'),
  require('../../public/img/gallery/2025-2026/20.JPG'),
  require('../../public/img/gallery/2025-2026/21.JPG'),
  require('../../public/img/gallery/2025-2026/22.JPG'),
  require('../../public/img/gallery/2025-2026/23.JPG'),
  require('../../public/img/gallery/2025-2026/24.JPG'),
  require('../../public/img/gallery/2025-2026/25.JPG'),
  require('../../public/img/gallery/2025-2026/26.JPG'),
  require('../../public/img/gallery/2025-2026/27.JPG'),
  require('../../public/img/gallery/2025-2026/28.JPG'),
  require('../../public/img/gallery/2025-2026/29.JPG'),
  require('../../public/img/gallery/2025-2026/30.JPG'),
  require('../../public/img/gallery/2025-2026/31.JPG'),
  require('../../public/img/gallery/2025-2026/32.JPG'),
  require('../../public/img/gallery/2025-2026/33.JPG'),
  require('../../public/img/gallery/2025-2026/34.JPG'),
  require('../../public/img/gallery/2025-2026/35.JPG'),
  require('../../public/img/gallery/2025-2026/36.JPG'),
  require('../../public/img/gallery/2025-2026/37.JPG'),
  require('../../public/img/gallery/2025-2026/37.JPG'),
  require('../../public/img/gallery/2025-2026/38.JPG'),
  require('../../public/img/gallery/2025-2026/38.JPG'),
  require('../../public/img/gallery/2025-2026/39.JPG'),
  require('../../public/img/gallery/2025-2026/40.JPG'),
  require('../../public/img/gallery/2025-2026/41.JPG'),
  require('../../public/img/gallery/2025-2026/42.JPG'),
  require('../../public/img/gallery/2025-2026/43.JPG'),
  require('../../public/img/gallery/2025-2026/44.JPG'),
  require('../../public/img/gallery/2025-2026/45.JPG'),
  require('../../public/img/gallery/2025-2026/46.JPG'),
  require('../../public/img/gallery/2025-2026/47.JPG'),
  require('../../public/img/gallery/2025-2026/48.JPG'),
  require('../../public/img/gallery/2025-2026/49.JPG'),
  require('../../public/img/gallery/2024-2025/IMG_0717.png'),
  require('../../public/img/gallery/2024-2025/IMG_0721.png'),
  require('../../public/img/gallery/2024-2025/IMG_0718.png'),
  require('../../public/img/gallery/2024-2025/IMG_0722.png'),
  require('../../public/img/gallery/2024-2025/IMG_0724.png'),
  require('../../public/img/gallery/2024-2025/IMG_0726.png'),
  require('../../public/img/gallery/2024-2025/IMG_0725.png'),
  require('../../public/img/gallery/2024-2025/IMG_0727.png'),
  require('../../public/img/gallery/2024-2025/IMG_0728.png'),
  require('../../public/img/gallery/2024-2025/IMG_0730.png'),
  require('../../public/img/gallery/2024-2025/IMG_0732.png'),
  require('../../public/img/gallery/2024-2025/IMG_0733.png'),
  require('../../public/img/gallery/2024-2025/IMG_0734.png'),
  require('../../public/img/gallery/2024-2025/IMG_0735.png'),
  require('../../public/img/gallery/2024-2025/IMG_0741.png'),
  require('../../public/img/gallery/2024-2025/IMG_0744.png'),
  require('../../public/img/gallery/2024-2025/IMG_0755.png'),
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
