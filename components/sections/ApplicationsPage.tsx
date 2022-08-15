import { ReactElement, useState } from 'react';
import Button from '../UI/Button';

const ApplicationsPage = (): ReactElement => {
  return (
    <section className="section center items-center">
      <div className="lg:-mt-240 text-center">
        <h1 className="h1 mb-5 xs:mb-10 md:mb-14 lg:mb-14 lg:mt-10">
          applications
        </h1>
        <div className="grid place-content-center gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div className="transition-300 inline-block rounded-xl bg-green-5 px-10 py-4 lg:text-left md:text-left xs:text-center text-green-1 shadow-sm outline outline-1 outline-green-1 hover:-translate-y-0.5 hover:shadow-md xs:mx-10 md:mr-1 md:ml-20 lg:ml-24 lg:mr-5">
            <p className=" mt-3 gradient-text gradient mb-2 pb-1 font-semibold xs:text-2xl md:text-3xl lg:text-3xl">
              Activities Chairsperson
            </p>
            <p className="mb-6 text-green-1">
              Interested in planning activities for CREATE? Applications for the
              CREATE Activities Executive position are due by 11:59 PM on July
              6.
            </p>
            <div className="mb-5">
              <Button purpose="route" type="secondary" link="#">
                Apply
              </Button>
            </div>
          </div>
          <div className="lg:text-left md:text-left xs:text-center transition-300 inline-block rounded-xl bg-green-5 px-10 py-4 text-green-1 shadow-sm outline outline-1 outline-green-1 hover:-translate-y-0.5 hover:shadow-md xs:mx-10 md:ml-1 md:mr-20 lg:ml-5 lg:mr-24">
            <p className=" mt-3 gradient-text gradient mb-2 pb-1 font-semibold xs:text-2xl md:text-3xl lg:text-3xl">
              Activites Chairsperson
            </p>
            <p className="mb-6 text-green-1">
              Interested in planning activities for CREATE? Applications for the
              CREATE Activities Executive position are due by 11:59 PM on July
              6.
            </p>
            <div className="mb-5">
              <Button purpose="route" type="secondary" link="#">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsPage;
