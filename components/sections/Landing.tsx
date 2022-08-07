import { ReactElement } from 'react';
import Button from '../UI/Button';
import landingGraphic from '../../public/img/graphics/landing.png';
import Image from 'next/image';

const Landing = (): ReactElement => {
  return (
    <section className="section m-horizontal grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
      <div className="text-center lg:-mt-24 lg:text-left">
        <h1 className="h1 mb-5 md:mb-6">
          create&nbsp;<span className="hidden md:inline-block">markham</span>
        </h1>
        <p className="body mb-11 md:mb-16">
          CREATE Markham is a two-day conference where participants come
          together and brainstorm prompts to benefit their community! It is a
          fantastic opportunity to develop your leadership skills, foster new
          connections, and discover your full potential!
        </p>
        <div className="mx-auto flex max-w-[450px] flex-col justify-center gap-5 md:flex-row md:gap-10 lg:mx-0 lg:justify-start">
          <Button type="secondary" link="/#about-us">
            Learn More
          </Button>
          <Button type="tertiary" link="/#contact">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="-ml-[20%] w-[140%] sm:mx-auto sm:w-full sm:max-w-[600px] lg:ml-0 lg:w-[110%] lg:max-w-none">
        <Image src={landingGraphic} alt="CREATE Markham Conference" priority />
      </div>
    </section>
  );
};

export default Landing;
