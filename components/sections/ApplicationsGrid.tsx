import { ReactElement } from 'react';
import Row2 from '../layout/Row2';
import Button from '../UI/Button';
import Card from '../UI/Card';

const APPLICATIONS = [
  {
    description:
      'Interested in planning activities for CREATE? Applications for the CREATE Activities Executive position are due by 11:59 PM on July 6.',
    id: 'application-1',
    link: 'https://forms.gle/DxvnvAvbLWt72RCY9',
    title: 'Activites Executive',
  },
  {
    description:
      'Interested in planning activities for CREATE? Applications for the CREATE Activities Executive position are due by 11:59 PM on July 6.',
    id: 'application-1',
    link: 'https://forms.gle/DxvnvAvbLWt72RCY9',
    title: 'Activites Executive',
  },
];

const ApplicationsGrid = (): ReactElement => {
  return (
    <section className="section m-horizontal">
      <div className="text-center">
        <h1 className="h1 mb-9 md:mb-14">applications</h1>
      </div>
      <Row2>
        {APPLICATIONS.map((application) => (
          <Card key={application.id}>
            <div className="m-5 text-center md:m-10 md:text-left">
              <h3 className="gradient gradient-text mb-2 text-2xl font-semibold md:mb-4 md:text-3xl">
                {application.title}
              </h3>
              <p className="mb-7 text-base text-green-1 md:mb-10 md:text-lg">
                {application.description}
              </p>
              <Button type="secondary" purpose="route" link={application.link}>
                Apply
              </Button>
            </div>
          </Card>
        ))}
      </Row2>
    </section>
  );
};

export default ApplicationsGrid;
