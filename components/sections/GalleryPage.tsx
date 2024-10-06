import { ReactElement, useState } from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import arrowLeftIcon from '../../public/img/icons/arrow-gradient-left.svg';
import arrowRightIcon from '../../public/img/icons/arrow-gradient-right.svg';
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

const GALLERY = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15,
  gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22,
  gallery23, gallery24, gallery25
];

const GalleryPage = (): ReactElement => {
  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">Gallery</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {GALLERY.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={507}
              height={340}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;

// const GalleryPage = (): ReactElement => {
//   return (
//     <section className="section center items-center">
//       <div className="lg:-mt-240 text-center">
//         <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">Gallery</h1>
//       </div>
//       <div className="absolute -bottom-6 left-8 hidden xl:block">
//         <Image
//           src={gallery1}
//           alt="IMG1"
//           width="507px"
//           height="340px"
//         />
//       </div>
//     </section>
//   );
// };

// export default GalleryPage;