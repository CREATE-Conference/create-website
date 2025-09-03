import { ReactElement, useState, useEffect } from 'react';
import Row2 from '../layout/Row2';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { db } from '../../utils/firebaseConfig';
import { ref, onValue } from 'firebase/database';

interface Application {
  id: string;
  title: string;
  description: string;
  link: string;
}

const ApplicationsGrid = (): ReactElement => {
  const emptyApplications: Application[] = [];
  const [applications, setApplications] = useState(emptyApplications);

  useEffect(() => {
    const linksRef = ref(db, 'applications');
    onValue(linksRef, (snapshot) => {
      let data = snapshot.val();
      let links: Application[] = [];
      for (let key in data) {
        links.push(data[key]);
      }
      setApplications(links);
    });
  }, []);

  return (
    <section className="section m-horizontal">
      <div className="text-center">
        <h1 className="h1 mb-9 md:mb-14">applications</h1>
      </div>
      {applications.length > 0 ? (
        <Row2>
          {applications.map((application) => (
            <Card key={application.id}>
              <div className="m-5 text-center md:m-10 md:text-left">
                <h3 className="gradient gradient-text mb-2 text-2xl font-semibold md:mb-4 md:text-3xl">
                  {application.title}
                </h3>
                <p className="mb-7 text-sm text-green-1 md:mb-10 md:text-lg">
                  {application.description}
                </p>
                <Button
                  type="secondary"
                  purpose="externalLink"
                  link={application.link}
                  mobileFullWidth={true}
                >
                  Apply
                </Button>
              </div>
            </Card>
          ))}
        </Row2>
      ) : (
        <p className="text-center text-lg font-medium text-green-1">
          Looking for an opportunity to lead and connect with like-minded individuals? 
          Applications for Maven are now open until September 8th! Apply here: {" "}
          <a
            href="https://forms.gle/L8BCw8x5bnzx9bMy8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "#0645AD" }}
          >
            https://forms.gle/L8BCw8x5bnzx9bMy8
          </a>
        </p>
      )}
    </section>
  );
};

export default ApplicationsGrid;
