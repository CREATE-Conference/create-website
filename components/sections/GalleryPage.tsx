import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'

import gallery1 from '../../public/img/gallery/4971_0001.png';
import gallery2 from '../../public/img/gallery/4971_0002.png';
import gallery3 from '../../public/img/gallery/4971_0004.png';
import gallery4 from '../../public/img/gallery/4971_0005.png';
import gallery5 from '../../public/img/gallery/4971_0006.png';
import gallery6 from '../../public/img/gallery/4971_0008.png';
import gallery7 from '../../public/img/gallery/4971_0009.png';
import gallery8 from '../../public/img/gallery/4971_0011.png';
import gallery9 from '../../public/img/gallery/4971_0015.png';
import gallery10 from '../../public/img/gallery/4971_0016.png';
import gallery11 from '../../public/img/gallery/4971_0017.png';
import gallery12 from '../../public/img/gallery/4971_0018.png';
import gallery13 from '../../public/img/gallery/4971_0020.png';
import gallery14 from '../../public/img/gallery/4971_0021.png';
import gallery15 from '../../public/img/gallery/4971_0022.png';
import gallery16 from '../../public/img/gallery/4971_0023.png';
import gallery17 from '../../public/img/gallery/4971_0024.png';
import gallery18 from '../../public/img/gallery/4971_0025.png';
import gallery19 from '../../public/img/gallery/4971_0026.png';
import gallery20 from '../../public/img/gallery/4971_0027.png';
import gallery21 from '../../public/img/gallery/4971_0028.png';
import gallery22 from '../../public/img/gallery/4971_0029.png';
import gallery23 from '../../public/img/gallery/4971_0031.png';
import gallery24 from '../../public/img/gallery/4971_0032.png';
import gallery25 from '../../public/img/gallery/4971_0033.png';
import gallery26 from '../../public/img/gallery/_7EE7388.png';
import gallery27 from '../../public/img/gallery/_7EE7438.png';
import gallery28 from '../../public/img/gallery/_7EE7568.png';
import gallery29 from '../../public/img/gallery/_7EE7688.png';
//import gallery30 from '../../public/img/gallery/IMG_0216.png';
//import gallery31 from '../../public/img/gallery/IMG_0760.png';
//import gallery32 from '../../public/img/gallery/IMG_0808.png';
import gallery33 from '../../public/img/gallery/IMG_2171.png';
//import gallery34 from '../../public/img/gallery/IMG_5681.png';
//import gallery35 from '../../public/img/gallery/IMG_5682.png';
//import gallery36 from '../../public/img/gallery/IMG_5697.png';
//import gallery37 from '../../public/img/gallery/IMG_5724.png';
import gallery38 from '../../public/img/gallery/IMG_5726.png';
//import gallery39 from '../../public/img/gallery/IMG_6399.png';
//import gallery40 from '../../public/img/gallery/IMG_6410.png';
//import gallery41 from '../../public/img/gallery/IMG_6494.png';
//import gallery42 from '../../public/img/gallery/IMG_6500.png';
import gallery43 from '../../public/img/gallery/IMG_6581.png';
import gallery44 from '../../public/img/gallery/IMG_6588.png';
//import gallery45 from '../../public/img/gallery/IMG_8432.png';
//import gallery46 from '../../public/img/gallery/IMG_8463.png';
import gallery47 from '../../public/img/gallery/IMG_8524.png';
//import gallery48 from '../../public/img/gallery/IMG_8721.png';
//import gallery49 from '../../public/img/gallery/IMG_8840.png';

// const GALLERY = [
//   gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,
//   gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15,
//   gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22,
//   gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29,
//   gallery33, gallery38, gallery43, gallery44, gallery47
// ];

const GALLERY = [
  require('../../public/img/gallery/4971_0001.png'),
  require('../../public/img/gallery/4971_0002.png'),
  require('../../public/img/gallery/4971_0004.png'),
  require('../../public/img/gallery/4971_0005.png'),
  require('../../public/img/gallery/4971_0006.png'),
  require('../../public/img/gallery/4971_0008.png'),
  require('../../public/img/gallery/4971_0009.png'),
  require('../../public/img/gallery/4971_0011.png'),
  require('../../public/img/gallery/4971_0015.png'),
  require('../../public/img/gallery/4971_0016.png'),
  require('../../public/img/gallery/4971_0017.png'),
  require('../../public/img/gallery/4971_0018.png'),
  require('../../public/img/gallery/4971_0020.png'),
  require('../../public/img/gallery/4971_0021.png'),
  require('../../public/img/gallery/4971_0022.png'),
  require('../../public/img/gallery/4971_0023.png'),
  require('../../public/img/gallery/4971_0024.png'),
  require('../../public/img/gallery/4971_0025.png'),
  require('../../public/img/gallery/4971_0026.png'),
  require('../../public/img/gallery/4971_0027.png'),
  require('../../public/img/gallery/4971_0028.png'),
  require('../../public/img/gallery/4971_0029.png'),
  require('../../public/img/gallery/4971_0031.png'),
  require('../../public/img/gallery/4971_0032.png'),
  require('../../public/img/gallery/4971_0033.png'),
  require('../../public/img/gallery/_7EE7388.png'),
  require('../../public/img/gallery/_7EE7438.png'),
  require('../../public/img/gallery/_7EE7568.png'),
  require('../../public/img/gallery/_7EE7688.png'),
  require('../../public/img/gallery/IMG_2171.png'),
  require('../../public/img/gallery/IMG_5726.png'),
  require('../../public/img/gallery/IMG_6581.png'),
  require('../../public/img/gallery/IMG_6588.png'),
  require('../../public/img/gallery/IMG_8524.png'),
];

const GalleryPage = (): ReactElement => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (image: StaticImageData) => setLightboxImage(image.src); // Use image.src
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">gallery</h1>
      </div>
      {/* Gallery container */}
      <div className="gallery-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {GALLERY.map((image, index) => (
          <div
            key={index}
            className="gallery-item relative w-full h-64 cursor-pointer"
            onClick={() => openLightbox(image)} // Pass StaticImageData
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              objectFit="cover" // Ensure images fill their space without leaving gaps
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
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