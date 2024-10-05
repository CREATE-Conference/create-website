import { ReactElement, useState } from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
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

const GalleryPage = (): ReactElement => {
  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">Gallery</h1>
      </div>
      <div className="h1 mb-10 xs:mb-15 md:mb-19 lg:mb-19 lg:mt-15">
        <Image
          src={gallery1}
          alt="IMG1"
          width="339px"
          height="339px"
        />
      </div>
    </section>
  );
};

export default GalleryPage;