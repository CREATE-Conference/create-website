import Image, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import Row2 from '../layout/Row2';
import Card from '../UI/Card';
import { SPONSORS } from '../../constants/constants';

interface SponsorInterface {
  id: string;
  name: string;
  text: string;
  link: string;
  icon: StaticImageData;
}

const SponsorsPage = (): ReactElement => {
  return (
    <div className="section m-horizontal">
      <div className="text-center">
        <h1 className="h1 mb-6 md:mb-10">sponsors</h1>
      </div>
      <Row2>
        {SPONSORS.map((sponsor: SponsorInterface) => (
          <Card key={sponsor.id}>
            <div className="px-5 pt-5 pb-6 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10 lg:pb-12">
              <h3 className="gradient-text gradient text-2xl font-semibold mb-1.5 md:mb-2.5 md:text-3xl lg:text-4xl">
                {sponsor.name}
              </h3>
              <p className="mb-4 text-sm italic text-green-1 md:mb-5 md:text-base lg:text-lg">
                {sponsor.text}
              </p>
              <div className="mb-5 border-1 relative overflow-hidden rounded-2xl border border-green-1 md:rounded-3xl">
                <Image
                  src={sponsor.icon}
                  alt={sponsor.name}
                  layout="responsive"
                />
                {sponsor.link && (
                  <a
                    href={sponsor.link.startsWith('http') ? sponsor.link : `https://${sponsor.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-300 absolute top-5 right-5 hover:scale-105 lg:top-8 lg:right-8 bg-white bg-opacity-80 rounded-full p-2"
                  >
                    <span className="text-black text-xs font-semibold">Visit</span>
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </Row2>
    </div>
  );
};

export default SponsorsPage;
