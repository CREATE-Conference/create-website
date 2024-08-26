import Image from 'next/image';
import type { ReactElement } from 'react';
import Button from '../UI/Button';
import { ABOUT_US } from '../../constants/constants';
import graphic1 from '../../public/img/graphics/about-1.png';
import graphic2 from '../../public/img/graphics/about-2.png';
import graphic3 from '../../public/img/graphics/about-3.png';
import graphic4 from '../../public/img/graphics/about-4.png';
import graphic5 from '../../public/img/graphics/about-5.png';
import graphic6 from '../../public/img/graphics/about-6.png';
import graphic7 from '../../public/img/graphics/about-7.png';

const AboutUs = (): ReactElement => {
  return (
    <section
      className="section m-horizontal relative text-center"
      id="about-us"
    >
      <div className="mx-auto max-w-[744px]">
        <h2 className="h2 mb-4 md:mb-5">about us</h2>
        <div className="mb-11 text-left md:mb-16 md:text-center">
          {ABOUT_US.map((about) => (
            <p className="mb-4 md:mb-5" key={about.id}>
              {about.text}
            </p>
          ))}
        </div>
        <Button
          type="secondary"
          purpose="route"
          link="/applications"
          mobileFullWidth={false}
        >
          Apply Today
        </Button>
      </div>
      <div className="absolute -top-4 -left-5 hidden xl:block">
        <Image
          src={graphic1}
          alt="CREATE Markham Retreat 1"
          width="183px"
          height="183px"
        />
      </div>
      <div className="absolute -right-12 bottom-24 hidden xl:block">
        <Image
          src={graphic6}
          alt="CREATE Markham Retreat 2"
          width="339px"
          height="339px"
        />
      </div>
      <div className="absolute -bottom-24 left-3 hidden xl:block">
        <Image
          src={graphic7}
          alt="CREATE Markham Retreat 3"
          width="280px"
          height="280px"
        />
      </div>
    </section>
  
  );
};

export default AboutUs;
