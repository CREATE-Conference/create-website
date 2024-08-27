import Image, { StaticImageData } from 'next/image';
import { ReactElement, useState } from 'react';
import { MY_CREATE_STORY } from '../../constants/constants';
import landingGraphic from '../../public/img/graphics/landing.png';
import brain from '../../public/img/sponsers/brain.png';
import sticker from '../../public/img/sponsers/sticker.png';
import hub from '../../public/img/sponsers/hublink.png';
import hublink from '../../public/img/sponsers/hublink.png';
import markham from '../../public/img/sponsers/markham.png';
import creativegenius from '../../public/img/sponsers/creativegenius.png';

const MyCreateStory = (): ReactElement => {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="h2 pb-4 md:pb-5">our sponsors</h2>
      <p className="body pb-9 md:pb-16">
        Sharing those who have supported us over the last years. We truly thank you for making CREATE possible!
      </p>
      <Image
        src={brain}
        alt="Brain Power"
        width="500px"
        height="183px"
      />
      <Image
        src={hublink}
        alt="Hub Climbing – Rock Climbing and Birthday Parties in Markham"
        width="199px"
        height="93px"
      />
      <Image
        src={markham}
        alt="Markham"
        width="450px"
        height="183px"
       
      />
      <Image
        src={creativegenius}
        alt="Creative Genius Academy"
        width="300px"
        height="220px"
      />
      <Image
        src={sticker}
        alt="Sticker Giant"
        width="350px"
        height="183px"
        on-onClick={"https://www.stickergiant.com/coupons"}
      />
      
      <p className="body pb-9 md:pb-16"> </p>

      <h2 className="h2 pb-4 md:pb-5">#mycreatestory</h2>
      <p className="body pb-9 md:pb-16">
        Listen to what some of our participants have said about their CREATE
        experience!
      </p>
      <Testimonials />
    </section>
  );
};

const Testimonials = (): ReactElement => {
  return (
    <div className="flex flex-col items-start gap-9 md:flex-row md:gap-32 lg:gap-44">
      <div className="grid w-full gap-9 md:gap-11">
        {MY_CREATE_STORY.slice(0, Math.ceil(MY_CREATE_STORY.length / 2)).map(
          (story) => (
            <Testimonial
              key={story.id}
              name={story.name}
              text={story.text}
              icon={story.icon}
            />
          )
        )}
      </div>
      <div className="grid w-full gap-9 md:gap-11">
        {MY_CREATE_STORY.slice(Math.ceil(MY_CREATE_STORY.length / 2)).map(
          (story) => (
            <Testimonial
              key={story.id}
              name={story.name}
              text={story.text}
              icon={story.icon}
            />
          )
        )}
      </div>
    </div>
  );
};

interface TestimonialPropsInterface {
  name: string;
  text: string;
  icon: StaticImageData;
}

const Testimonial = ({
  name,
  text,
  icon,
}: TestimonialPropsInterface): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClickHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="w-full cursor-pointer" onClick={toggleClickHandler}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={icon} alt={name} width="50px" height="50px" />
          <p className="text-2xl font-semibold text-green-1">{name}</p>
        </div>
        <div className="relative h-6 w-6">
          <div className="absolute left-1/2 top-1/2 h-1 w-6 -translate-x-1/2 -translate-y-1/2 bg-green-1"></div>
          <div
            className={`transition-300 absolute left-1/2 top-1/2 w-1 -translate-y-1/2 -translate-x-1/2 bg-green-1 ${isOpen ? `h-1` : `h-6`
              }`}
          ></div>
        </div>
      </div>
      <div
        className={`body pt-4 text-left md:pt-5 ${isOpen ? `block` : `hidden`}`}
      >
        {text}
      </div>
    </div>
  );
};

export default MyCreateStory;
