import Image, { StaticImageData } from 'next/image';
import { ReactElement , useState } from 'react';
import button from '../UI/Button';
import Row2 from '../layout/Row2';
import Card from '../UI/Card';
import { EVENTS } from '../../constants/constants';
import arrowLeftIcon from '../../public/img/icons/arrow-gradient-left.svg';
import arrowRightIcon from '../../public/img/icons/arrow-gradient-right.svg';

const EventsPage = (): ReactElement => {
    const [year, setYear] = useState(0);
  
    const yearChangeHandler = (direction: number): void => {
      if (direction === 1) {
        setYear((year) => Math.min(year + 1, EVENTS.length - 1));
      } else {
        setYear((year) => Math.max(0, year - 1));
      }
    };
    return (
        <div className="section m-horizontal">
          <div className="text-center">
            <h1 className="h1 mb-6 md:mb-10">Events</h1>
          </div>
          <YearIndicator year={year} yearChangeHandler={yearChangeHandler} />
          <EventList year={year} />
        </div>
    );
};

interface YearIndicatorPropsInterface {
    year: number;
    yearChangeHandler: (direction: number) => void;
}

const YearIndicator = ({
    year,
    yearChangeHandler,
}: YearIndicatorPropsInterface): ReactElement => {
    return (
      <div className="mb-9 flex items-center justify-center gap-4 md:mb-16 md:gap-7">
        <div
          className={`transition-300 mt-1.5 cursor-pointer ${
            year === 0 && 'opacity-50'
          }`}
          onClick={() => yearChangeHandler(-1)}
        >
          <Image src={arrowLeftIcon} alt="Arrow icon" />
        </div>
        <p className="border-1 inline-block rounded-full border border-green-1 px-10 py-4">
          {EVENTS[year].year}
        </p>
        <div
          className={`transition-300 mt-1.5 cursor-pointer ${
            year === EVENTS.length - 1 && 'opacity-50'
          }`}
          onClick={() => yearChangeHandler(1)}
        >
          <Image src={arrowRightIcon} alt="Arrow icon" />
        </div>
      </div>
    );
};

interface EventListPropsInterface {
    year: number;
}

interface EventInterface {
    id: string;
    title: string;
    date?: string;
    picture: StaticImageData;
    description?: string[];
    link?: string;
}


const EventList = ({ year }: EventListPropsInterface): ReactElement => {
    return (
      <Row2>
        {EVENTS[year].events.map((event: EventInterface) => (
          <Card key={event.id}>
            <div className="px-5 pt-5 pb-6 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10 lg:pb-12">
              <h3
                className={`gradient-text gradient text-2xl font-semibold ${
                  event.date ? `mb-1.5 md:mb-2.5` : `mb-3 md:mb-5`
                } md:text-3xl lg:text-4xl`}
              >
                {event.title}
              </h3>
              {event.date && (
                <p className="mb-4 text-sm italic text-green-1 md:mb-5 md:text-base lg:text-lg">
                  {event.date}
                </p>
              )}
              <div
                className={`${
                  event.description ? 'mb-5' : 'mb-0'
                } border-1 relative overflow-hidden rounded-2xl border border-green-1 md:rounded-3xl`}
              >
                <Image
                  src={event.picture}
                  alt={event.title}
                  layout="responsive"
                />
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-300 absolute top-5 right-5 hover:scale-105 lg:top-8 lg:right-8"
                  >
                    <p className="text-white text-sm">Learn More</p>
                  </a>
                )}
              </div>
              {event.description &&
                event.description.map((text: string, i: number) => (
                  <p
                    className="mb-4 text-sm text-green-1 last:mb-0 md:text-base"
                    key={i}
                  >
                    {text}
                  </p>
                ))}
            </div>
          </Card>
        ))}
      </Row2>
    );
};

export default EventsPage;