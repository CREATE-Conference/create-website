import { ReactElement, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import briceZhao from '../../public/img/mycreatestory/bricezhao.png';
import dylanKang from '../../public/img/mycreatestory/dylankang.png';
import jianaWan from '../../public/img/mycreatestory/jianiwan.png';
import sarahMak from '../../public/img/mycreatestory/sarahmak.png';

const MYCREATESTORY = [
  {
    id: 'story-1',
    name: 'Brice Zhao',
    text: "When looking back on my high school experiences, I remember a lot of fond things from CREATE. It was an opportunity to see new places, try new things, and (most importantly) foster genuine human connections. I say that because going to CREATE as a delegate helped me get closer to a lot of the friends I have today. I loved the experience so much and I decided to become a maven, unknowing how much it was going to affect my future. Being a creative worker in the industry of photography, I've learned that the best photographers are not only great at taking photos but great at interacting with people. CREATE taught me to be a lot more outgoing, and is honestly a huge contributor to the interpersonal skills I have today. Whenever I get comments about being such a friendly photographer, I attribute a lot of the credit to the habits I picked up at CREATE.",
    icon: briceZhao,
  },
  {
    id: 'story-2',
    name: 'Dylan Kang',
    text: "To this day CREATE remains one of the most valuable life experiences I've ever had. The camp allowed me to meet dozens of people I would normally have never spoken to, but who to this day remain close friends of mine. I credit much of my development as a leader to every minute I spent at CREATE, from campfires to team cheers to staying up past midnight doing spicy ramen challenges with my roommates (then waking up extra early as a result, yikes), the memories I shared with all my fellow mavens and delegates hold a special place in my heart. CREATE offers a completely safe and comfortable space for shy and outgoing people alike to develop as leaders, which is why 9/10 dentists recommend CREATE for a brighter smile. 😉",
    icon: dylanKang,
  },
  {
    id: 'story-3',
    name: 'Jiana Wan',
    text: "I applied for the CREATE Conference Council in November of 2019 in hopes of building my confidence in leadership as well as meeting new people with similar interests in community involvement. This experience exceeded my expectations, and so much more. Not only did I get to make unique memories with an amazing group of people, I learned a lot about being a successful and well-rounded student, friend, and leader. At the start of the weekend, I was a bit shy as it seemed like everyone else had already known each other for years. In reality, the council environment was very welcoming and inclusive, and I had made good friends within the first few hours. I also really enjoyed the case competition activity, as it taught me more about myself, my strengths and my weaknesses, and how to collaborate with others. The “What's in the box” activity was a super fun way to get everyone to open up to each other. I would definitely recommend CREATE, not just to Markham-located students, looking for a very enriching opportunity to build character.",
    icon: jianaWan,
  },
  {
    id: 'story-4',
    name: 'Sarah Mak',
    text: "CREATE remains to be one of the fondest events of my life, as I got to share smiles and laughs with my friends 😄. If I had to choose my favourite memory about CREATE— night activities. I remember my group and i running around in the dark trying to go to one from place to another. Now thinking back, we were super sweaty and tired, but it was quite funny how everyone looked like a swarm of minions scattered around on the field haha. CREATE taught me so much about not being afraid to reach out to people because everyone is super duper friendly and kind (don't worry, people are not as scary as you may think) 😁. In fact, I am probably still that one timid and shy girl, but deep down inside my heart, I got little more courage. Connect with the people around you— new and old— don't forget to share some happiness (or food) 😆.",
    icon: sarahMak,
  },
];

const MyCreateStory = (): ReactElement => {
  return (
    <section className="section m-horizontal text-center">
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
        {MYCREATESTORY.slice(0, Math.ceil(MYCREATESTORY.length / 2)).map(
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
        {MYCREATESTORY.slice(Math.ceil(MYCREATESTORY.length / 2)).map(
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
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={icon} alt={name} width="50px" height="50px" />
          <p className="text-2xl font-semibold text-green-1">{name}</p>
        </div>
        <div
          className="relative h-6 w-6 cursor-pointer"
          onClick={toggleClickHandler}
        >
          <div className="absolute left-1/2 top-1/2 h-1 w-6 -translate-x-1/2 -translate-y-1/2 bg-green-1"></div>
          <div
            className={`transition-300 absolute left-1/2 top-1/2 w-1 -translate-y-1/2 -translate-x-1/2 bg-green-1 ${
              isOpen ? `h-1` : `h-6`
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
