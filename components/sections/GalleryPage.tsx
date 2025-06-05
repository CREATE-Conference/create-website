import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'

const GALLERY = [
  require('../../public/img/gallery/2024-2025/0B8C69F8-5152-44AB-85FA-4D288C503B68.png'),
  require('../../public/img/gallery/2024-2025/101_1091.png'),
  require('../../public/img/gallery/2024-2025/101_1092.png'),
  require('../../public/img/gallery/2024-2025/101_1095.png'),
  require('../../public/img/gallery/2024-2025/101_1121.png'),
  require('../../public/img/gallery/2024-2025/101_1123.png'),
  require('../../public/img/gallery/2024-2025/DSC01107.png'),
  require('../../public/img/gallery/2024-2025/DSC01109.png'),
  require('../../public/img/gallery/2024-2025/DSC01108.png'),
  require('../../public/img/gallery/2024-2025/DSC01114.png'),
  require('../../public/img/gallery/2024-2025/DSC01113.png'),
  require('../../public/img/gallery/2024-2025/DSC01115.png'),
  require('../../public/img/gallery/2024-2025/DSC01116.png'),
  require('../../public/img/gallery/2024-2025/DSC01119.png'),
  require('../../public/img/gallery/2024-2025/DSC01117.png'),
  require('../../public/img/gallery/2024-2025/DSC01120.png'),
  require('../../public/img/gallery/2024-2025/DSC01123.png'),
  require('../../public/img/gallery/2024-2025/DSC01130.png'),
  require('../../public/img/gallery/2024-2025/DSC01131.png'),
  require('../../public/img/gallery/2024-2025/DSC01133.png'),
  require('../../public/img/gallery/2024-2025/DSC01134.png'),
  require('../../public/img/gallery/2024-2025/DSC01135.png'),
  require('../../public/img/gallery/2024-2025/DSC01136.png'),
  require('../../public/img/gallery/2024-2025/DSC01151.png'),
  require('../../public/img/gallery/2024-2025/DSC01157.png'),
  require('../../public/img/gallery/2024-2025/DSC01189.png'),
  require('../../public/img/gallery/2024-2025/DSC01200.png'),
  require('../../public/img/gallery/2024-2025/DSC01204.png'),
  require('../../public/img/gallery/2024-2025/DSC01208.png'),
  require('../../public/img/gallery/2024-2025/DSC01213.png'),
  require('../../public/img/gallery/2024-2025/DSC01215.png'),
  require('../../public/img/gallery/2024-2025/DSC01217.png'),
  require('../../public/img/gallery/2024-2025/DSC01218.png'),
  require('../../public/img/gallery/2024-2025/DSC01219.png'),
  require('../../public/img/gallery/2024-2025/DSC01224.png'),
  require('../../public/img/gallery/2024-2025/DSC01225.png'),
  require('../../public/img/gallery/2024-2025/DSC01260.png'),
  require('../../public/img/gallery/2024-2025/DSC01261.png'),
  require('../../public/img/gallery/2024-2025/DSC01279.png'),
  require('../../public/img/gallery/2024-2025/DSC01268.png'),
  require('../../public/img/gallery/2024-2025/DSC01284.png'),
  require('../../public/img/gallery/2024-2025/DSC01293.png'),
  require('../../public/img/gallery/2024-2025/DSC01295.png'),
  require('../../public/img/gallery/2024-2025/DSC01301.png'),
  require('../../public/img/gallery/2024-2025/DSC01307.png'),
  require('../../public/img/gallery/2024-2025/IMG_0420.png'),
  require('../../public/img/gallery/2024-2025/DSC01310.png'),
  require('../../public/img/gallery/2024-2025/IMG_0558.png'),
  require('../../public/img/gallery/2024-2025/IMG_0576.png'),
  require('../../public/img/gallery/2024-2025/IMG_0714.png'),
  require('../../public/img/gallery/2024-2025/IMG_0716.png'),
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