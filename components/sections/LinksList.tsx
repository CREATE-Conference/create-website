import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../utils/firebaseConfig';

type Link = {
  id: string;
  text: string;
  link: string;
};

const LinksList = (): ReactElement => {
  const [links, setLinks] = useState([
    { id: 'application-1', text: 'Website', link: 'createmarkham.ca' },
  ]);

  useEffect(() => {
    const linksRef = ref(db, 'links');
    onValue(linksRef, (snapshot) => {
      let data = snapshot.val();
      let links: Link[] = [];
      for (let key in data) {
        links.push(data[key]);
      }
      setLinks(links);
    });
  }, []);

  return (
    <section className="section m-horizontal">
      <div className="text-center">
        <h1 className="h1 mb-6 md:mb-9">links</h1>
      </div>
      <div className="mx-auto max-w-[500px]">
        {links.map((link) => (
          <Link key={link.id} text={link.text} link={link.link} />
        ))}
      </div>
    </section>
  );
};

interface LinkPropsInterface {
  text: string;
  link: string;
}

const Link = ({ text, link }: LinkPropsInterface) => {
  return (
    <a
      href={link}
      className="transition-300 mb-6 block rounded-full bg-green-5 py-4 text-center outline outline-1 outline-green-2 last:mb-0 hover:shadow-sm"
      target="_blank"
      rel="noreferrer"
    >
      <span className="gradient-text gradient">{text}</span>
    </a>
  );
};

export default LinksList;
