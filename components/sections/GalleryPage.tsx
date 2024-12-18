import { ReactElement, useState } from 'react';
import Image from 'next/image';

const GalleryPage = (): ReactElement => {
  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">gallery</h1>
      </div>
      <div className="w-full h-full">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1b3b7dnTPzxtMABpfR_614fesngDgtAAs#grid"
          width="200%"
          height="200%"
          frameBorder="0"
          style={{ pointerEvents: "none" }}
        ></iframe>
      </div>
    </section>
  );
};

export default GalleryPage;