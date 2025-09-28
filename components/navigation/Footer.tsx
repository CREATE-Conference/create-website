import Image from 'next/image';
import { ReactElement } from 'react';
import createLogo from '../../public/img/create/logo2.png';
import Link from 'next/link';
import { FOOTER_SOCIALS } from '../../constants/constants';

const Footer = (): ReactElement => {
  return (
    <footer className="navigation mb-6 md:mb-12">
      <div className="gradient mb-5 h-0.5 w-full rounded-full md:mb-7"></div>
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex w-[116px] items-center lg:w-[132px]">
            <Image
              src={createLogo}
              width="132px"
              height="55px"
              alt="CREATE Markham logo"
            />
          </a>
        </Link>
        <div className="flex gap-4">
          {FOOTER_SOCIALS.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              className="cursor-pointer"
              rel="noreferrer"
            >
              <Image src={social.icon} alt={social.altText} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
