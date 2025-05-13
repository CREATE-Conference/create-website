import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'

const GALLERY = [
  require('../../public/img/gallery/2024-2025/0B8C69F8-5152-44AB-85FA-4D288C503B68.png'),
  require('../../public/img/gallery/2024-2025/101_1068.png'),
  require('../../public/img/gallery/2024-2025/101_1069.png'),
  require('../../public/img/gallery/2024-2025/101_1073.png'),
  require('../../public/img/gallery/2024-2025/101_1075.png'),
  require('../../public/img/gallery/2024-2025/101_1080.png'),
  require('../../public/img/gallery/2024-2025/101_1081.png'),
  require('../../public/img/gallery/2024-2025/101_1083.png'),
  require('../../public/img/gallery/2024-2025/101_1091.png'),
  require('../../public/img/gallery/2024-2025/101_1092.png'),
  require('../../public/img/gallery/2024-2025/101_1095.png'),
  require('../../public/img/gallery/2024-2025/101_1121.png'),
  require('../../public/img/gallery/2024-2025/101_1123.png'),
  require('../../public/img/gallery/2024-2025/101_1125.png'),
  require('../../public/img/gallery/2024-2025/101_1126.png'),
  require('../../public/img/gallery/2024-2025/DSC01103.png'),
  require('../../public/img/gallery/2024-2025/DSC01104.png'),
  require('../../public/img/gallery/2024-2025/DSC01105.png'),
  require('../../public/img/gallery/2024-2025/DSC01106.png'),
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
  require('../../public/img/gallery/2024-2025/DSC01124.png'),
  require('../../public/img/gallery/2024-2025/DSC01129.png'),
  require('../../public/img/gallery/2024-2025/DSC01126.png'),
  require('../../public/img/gallery/2024-2025/DSC01130.png'),
  require('../../public/img/gallery/2024-2025/DSC01131.png'),
  require('../../public/img/gallery/2024-2025/DSC01133.png'),
  require('../../public/img/gallery/2024-2025/DSC01134.png'),
  require('../../public/img/gallery/2024-2025/DSC01135.png'),
  require('../../public/img/gallery/2024-2025/DSC01136.png'),
  require('../../public/img/gallery/2024-2025/DSC01139.png'),
  require('../../public/img/gallery/2024-2025/DSC01142.png'),
  require('../../public/img/gallery/2024-2025/DSC01145.png'),
  require('../../public/img/gallery/2024-2025/DSC01151.png'),
  require('../../public/img/gallery/2024-2025/DSC01155.png'),
  require('../../public/img/gallery/2024-2025/DSC01157.png'),
  require('../../public/img/gallery/2024-2025/DSC01160.png'),
  require('../../public/img/gallery/2024-2025/DSC01181.png'),
  require('../../public/img/gallery/2024-2025/DSC01182.png'),
  require('../../public/img/gallery/2024-2025/DSC01183.png'),
  require('../../public/img/gallery/2024-2025/DSC01188.png'),
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
  require('../../public/img/gallery/2024-2025/DSC01227.png'),
  require('../../public/img/gallery/2024-2025/DSC01230.png'),
  require('../../public/img/gallery/2024-2025/DSC01233.png'),
  require('../../public/img/gallery/2024-2025/DSC01237.png'),
  require('../../public/img/gallery/2024-2025/DSC01242.png'),
  require('../../public/img/gallery/2024-2025/DSC01246.png'),
  require('../../public/img/gallery/2024-2025/DSC01247.png'),
  require('../../public/img/gallery/2024-2025/DSC01249.png'),
  require('../../public/img/gallery/2024-2025/DSC01251.png'),
  require('../../public/img/gallery/2024-2025/DSC01252.png'),
  require('../../public/img/gallery/2024-2025/DSC01256.png'),
  require('../../public/img/gallery/2024-2025/DSC01258.png'),
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
  require('../../public/img/gallery/2024-2025/IMG_0757.png'),
  require('../../public/img/gallery/2024-2025/IMG_0758.png'),
  require('../../public/img/gallery/2024-2025/IMG_0759.png'),
  require('../../public/img/gallery/2024-2025/IMG_0762.png'),
  require('../../public/img/gallery/2024-2025/IMG_0763.png'),
  require('../../public/img/gallery/2024-2025/IMG_0765.png'),
  require('../../public/img/gallery/2024-2025/IMG_0766.png'),
  require('../../public/img/gallery/2024-2025/IMG_0768.png'),
  require('../../public/img/gallery/2024-2025/IMG_0769.png'),
  require('../../public/img/gallery/2024-2025/IMG_3196.png'),
  require('../../public/img/gallery/2024-2025/IMG_3197.png'),
  require('../../public/img/gallery/2024-2025/IMG_3199.png'),
  require('../../public/img/gallery/2024-2025/IMG_3204.png'),
  require('../../public/img/gallery/2024-2025/IMG_3202.png'),
  require('../../public/img/gallery/2024-2025/IMG_3205.png'),
  require('../../public/img/gallery/2024-2025/IMG_3213.png'),
  require('../../public/img/gallery/2024-2025/IMG_3221.png'),
  require('../../public/img/gallery/2024-2025/IMG_3223.png'),
  require('../../public/img/gallery/2024-2025/IMG_3237.png'),
  require('../../public/img/gallery/2024-2025/IMG_3261.png'),
  require('../../public/img/gallery/2024-2025/IMG_3266.png'),
  require('../../public/img/gallery/2024-2025/IMG_3267.png'),
  require('../../public/img/gallery/2024-2025/IMG_3268.png'),
  require('../../public/img/gallery/2024-2025/IMG_3270.png'),
  require('../../public/img/gallery/2024-2025/IMG_3279.png'),
  require('../../public/img/gallery/2024-2025/IMG_3282.png'),
  require('../../public/img/gallery/2024-2025/IMG_3284.png'),
  require('../../public/img/gallery/2024-2025/IMG_3296.png'),
  require('../../public/img/gallery/2024-2025/IMG_3291.png'),
  require('../../public/img/gallery/2024-2025/IMG_3298.png'),
  require('../../public/img/gallery/2024-2025/IMG_3297.png'),
  require('../../public/img/gallery/2024-2025/IMG_3299.png'),
  require('../../public/img/gallery/2024-2025/IMG_3301.png'),
  require('../../public/img/gallery/2024-2025/IMG_3302.png'),
  require('../../public/img/gallery/2024-2025/IMG_3309.png'),
  require('../../public/img/gallery/2024-2025/IMG_3310.png'),
  require('../../public/img/gallery/2024-2025/IMG_3312.png'),
  require('../../public/img/gallery/2024-2025/IMG_3314.png'),
  require('../../public/img/gallery/2024-2025/IMG_3315.png'),
  require('../../public/img/gallery/2024-2025/IMG_3316.png'),
  require('../../public/img/gallery/2024-2025/IMG_3329.png'),
  require('../../public/img/gallery/2024-2025/IMG_3335.png'),
  require('../../public/img/gallery/2024-2025/IMG_3337.png'),
  require('../../public/img/gallery/2024-2025/IMG_3360.png'),
  require('../../public/img/gallery/2024-2025/IMG_3362.png'),
  require('../../public/img/gallery/2024-2025/IMG_3363.png'),
  require('../../public/img/gallery/2024-2025/IMG_3364.png'),
  require('../../public/img/gallery/2024-2025/IMG_3366.png'),
  require('../../public/img/gallery/2024-2025/IMG_3367.png'),
  require('../../public/img/gallery/2024-2025/IMG_3368.png'),
  require('../../public/img/gallery/2024-2025/IMG_3369.png'),
  require('../../public/img/gallery/2024-2025/IMG_3370.png'),
  require('../../public/img/gallery/2024-2025/IMG_3372.png'),
  require('../../public/img/gallery/2024-2025/IMG_5648.png'),
  require('../../public/img/gallery/2024-2025/IMG_5666.png'),
  require('../../public/img/gallery/2024-2025/IMG_8005.png'),
  require('../../public/img/gallery/2024-2025/IMG_8035.png'),
  require('../../public/img/gallery/2024-2025/IMG_8038.png'),
  require('../../public/img/gallery/2024-2025/SAM_0027.png'),
  require('../../public/img/gallery/2024-2025/SAM_0028.png'),
  require('../../public/img/gallery/2024-2025/SAM_0034.png'),
  require('../../public/img/gallery/2024-2025/SAM_0036.png'),
  require('../../public/img/gallery/2024-2025/SAM_0037.png'),
  require('../../public/img/gallery/2024-2025/SAM_0040.png'),
  require('../../public/img/gallery/2024-2025/SAM_0038.png'),
  require('../../public/img/gallery/2024-2025/SAM_0043.png'),
  require('../../public/img/gallery/2024-2025/SAM_0047.png'),
  require('../../public/img/gallery/2024-2025/SAM_0049.png'),
  require('../../public/img/gallery/2024-2025/SAM_0054.png'),
  require('../../public/img/gallery/2024-2025/SAM_0059.png'),
  require('../../public/img/gallery/2024-2025/SAM_0058.png'),
  require('../../public/img/gallery/2024-2025/SAM_0066.png'),
  require('../../public/img/gallery/2024-2025/SAM_0060.png'),
  require('../../public/img/gallery/2024-2025/SAM_0071.png'),
  require('../../public/img/gallery/2024-2025/SAM_0072.png'),
  require('../../public/img/gallery/2024-2025/SAM_0075.png'),
  require('../../public/img/gallery/2024-2025/SAM_0082.png'),
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