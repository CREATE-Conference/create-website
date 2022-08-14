import { ReactElement, useState } from 'react';
import Button from '../UI/Button';

const LinksPage = (): ReactElement => {
  return ( 
    <section className="section items-center center">
    <div className="text-center lg:-mt-240">
    <h1 className="h1 mb-5 lg:mb-10 lg:mt-10 md:mb-10">
          links
        </h1>
      <div className="flex justify-center flex-col gap-10 md:gap-5 lg:mx-[22.4rem] md:mx-32 xs:mx-14" >
        <Button type="tertiary" link="https://createmarkham.ca/">
          Website
        </Button>
        <Button type="tertiary" link="/#">
          CREATE Delegate Application
        </Button>
        <Button type="tertiary" link="/#">
          CREATE Maven Application
        </Button>
        <Button type="tertiary" link="https://www.instagram.com/createmarkham/">
          Instagram
        </Button>
        <Button type="tertiary" link="mailto:createconferencecouncil@gmail.com">
          Email
        </Button>
        
      </div>
    </div>
  </section>
  );
};

export default LinksPage;
