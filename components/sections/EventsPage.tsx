import type { ReactElement } from 'react';
import Image from 'next/image';

const EventsPage = (): ReactElement => {
    return (
        <section className="section center items-center max-w-screen-lg mx-auto text-center">
          <div className="lg:-mt-60 mb-10 lg:mb-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">events</h1>
          </div>
          {/* Add event details or future content here */}
        </section>
      );
};

export default EventsPage;