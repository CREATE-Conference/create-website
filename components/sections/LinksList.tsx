import { ReactElement } from 'react';

const LINKS = [
  { id: 'link-1', link: 'https://createmarkham.ca/', text: 'Website' },
  {
    id: 'link-2',
    link: 'https://www.instagram.com/createmarkham/',
    text: 'Instagram',
  },
  { id: 'link-3', link: 'mailto:createcouncilorg@gmail.com', text: 'Email' },
];

const LinksList = (): ReactElement => {
  return (
    <section className="section m-horizontal">
      <div className="text-center">
        <h1 className="h1 mb-6 md:mb-9">links</h1>
      </div>
      <div className="mx-auto max-w-[500px]">
        {LINKS.map((link) => (
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
