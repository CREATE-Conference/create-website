import Image from 'next/image';
import type { ReactElement } from 'react';
import Button from '../UI/Button';
import landingGraphic from '../../public/img/graphics/landing.png';
import landingGraphic1 from '../../public/img/graphics/landing-1.png';

const Landing = (): ReactElement => {
  return (
    <section className="section m-horizontal grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
      <div className="text-center lg:-mt-24 lg:text-left">
        <h1 className="h1 mb-5 lowercase md:mb-6">
          CREATE <span className="hidden md:inline-block">Markham</span>
        </h1>
        <p className="body mb-11 md:mb-16">
          CREATE Markham is a two-day conference where participants come
          together and brainstorm prompts to benefit their community!
          You&apos;ll develop your leadership skills and create connections,
          while also gaining volunteering hours and experience.
        </p>
        <div className="mx-auto flex max-w-[450px] flex-col justify-center gap-5 md:flex-row md:gap-10 lg:mx-0 lg:justify-start">
          <Button
            type="secondary"
            purpose="route"
            link="/#about-us"
            mobileFullWidth={true}
          >
            Learn More
          </Button>
          <Button
            type="tertiary"
            purpose="route"
            link="/#contact"
            mobileFullWidth={true}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="-ml-[20%] w-[140%] sm:mx-auto sm:w-full sm:max-w-[600px] lg:ml-0 lg:w-[110%] lg:max-w-none">
        <Image src={landingGraphic1} alt="CREATE Markham Conference" priority />
      </div>
    </section>
  );
};

export default Landing;
