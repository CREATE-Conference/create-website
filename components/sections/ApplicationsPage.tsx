import { ReactElement, useState } from 'react';
import Button from '../UI/Button';

const ApplicationsPage = (): ReactElement => {
  return ( 
    <section className="section items-center center">
    <div className="text-center lg:-mt-240">
    <h1 className="h1 mb-5 lg:mb-14 lg:mt-10 md:mb-14 xs:mb-10">
          applications
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 place-content-center">
          <div className = "text-left md:mr-1 xs:mx-10 lg:ml-24 md:ml-20 lg:mr-5 rounded-xl bg-green-5 text-green-1 outline outline-1 outline-green-1 transition-300 inline-block px-10 py-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md">
            <p className= " mb-2 font-semibold text-left gradient-text gradient pb-1 xs:text-2xl md:text-3xl lg:text-3xl" >
              Activities Chairsperson
            </p>
            <p className = "text-green-1 mb-6">
            Interested in planning activities for CREATE? 
            Applications for the CREATE Activities Executive 
            position are due by 11:59 PM on July 6.
            </p>
            <div className = "mb-5">
            <Button type="secondary" link="#" >
          Apply
        </Button>
            </div>
          </div>
          <div className="text-left md:ml-1 lg:ml-5 lg:mr-24 md:mr-20 xs:mx-10 rounded-xl bg-green-5 text-green-1 outline outline-1 outline-green-1 transition-300 inline-block px-10 py-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md">
          <p className= " mb-2 font-semibold gradient-text gradient pb-1 xs:text-2xl md:text-3xl lg:text-3xl" >
              
          Activites Chairsperson
            </p>
            <p className = "text-green-1 mb-6">
            Interested in planning activities for CREATE? 
          Applications for the CREATE Activities Executive 
          position are due by 11:59 PM on July 6.
            </p>
            <div className = "mb-5">
            <Button type="secondary" link="#" >
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
