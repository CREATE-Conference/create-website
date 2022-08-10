import Image, { StaticImageData } from 'next/image';
import { ReactElement, useState } from 'react';
import { TEAM } from '../../constants/constants';
import arrowLeftIcon from '../../public/img/icons/arrow-gradient-left.svg';
import arrowRightIcon from '../../public/img/icons/arrow-gradient-right.svg';
import instagramIcon from '../../public/img/icons/instagram.svg';
import Card from '../UI/Card';

const TeamGrid = (): ReactElement => {
  const [year, setYear] = useState(0);

  const yearChangeHandler = (direction: number): void => {
    if (direction === 1) {
      setYear((year) => Math.min(year + 1, TEAM.length - 1));
    } else {
      setYear((year) => Math.max(0, year - 1));
    }
  };

  return (
    <div className="section m-horizontal">
      <div className="text-center">
        <h1 className="h1 mb-6 md:mb-10">team</h1>
      </div>
      <YearIndicator year={year} yearChangeHandler={yearChangeHandler} />
      <Members year={year} />
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
      <p className="inline-block rounded-full px-10 py-4 outline outline-1 outline-green-1">
        {TEAM[year].year}
      </p>
      <div
        className={`transition-300 mt-1.5 cursor-pointer ${
          year === TEAM.length - 1 && 'opacity-50'
        }`}
        onClick={() => yearChangeHandler(1)}
      >
        <Image src={arrowRightIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

interface MembersPropsInterface {
  year: number;
}

interface MemberInterface {
  id: string;
  name: string;
  position?: string;
  picture: StaticImageData;
  description?: string[];
  instagram?: string;
}

const Members = ({ year }: MembersPropsInterface): ReactElement => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {TEAM[year].members.map((member: MemberInterface) => (
        <Card key={member.id}>
          <div className="px-5 pt-5 pb-6 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10 lg:pb-12">
            <h3
              className={`gradient-text gradient text-2xl font-semibold ${
                member.position ? `mb-1.5 md:mb-2.5` : `mb-3 md:mb-5`
              } md:text-3xl lg:text-4xl`}
            >
              {member.name}
            </h3>
            {member.position && (
              <p className="mb-4 text-sm italic text-green-1 md:mb-5 md:text-base lg:text-lg">
                {member.position}
              </p>
            )}
            <div
              className={`${
                member.description ? 'mb-5' : 'mb-0'
              } relative overflow-hidden rounded-2xl outline outline-1 outline-green-1 md:rounded-3xl`}
            >
              <Image
                src={member.picture}
                alt={member.name}
                layout="responsive"
              />
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-300 absolute top-5 right-5 hover:scale-105 lg:top-8 lg:right-8"
                >
                  <Image src={instagramIcon} alt="Instagram icon" />
                </a>
              )}
            </div>
            {member.description &&
              member.description.map((text: string, i: number) => (
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
    </div>
  );
};

export default TeamGrid;
