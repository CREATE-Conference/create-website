import { ReactElement, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import createLogo from '../../public/img/create/logo.png';
import Button from '../UI/Button';
import closeIcon from '../../public/img/icons/close.svg';
import MenuOpenContext from '../../store/menu-open-context';

const ROUTES = [
  { id: 'route-1', text: 'Home', route: '/' },
  { id: 'route-2', text: 'Applications', route: '/applications' },
  { id: 'route-3', text: 'Team', route: '/team' },
  { id: 'route-4', text: 'Gallery', route: '/gallery'},
  { id: 'route-5', text: 'Events', route: '/events'}
  //{ id: 'route-6', text: 'MyCreateStory', route: '/MyCreateStory'}
];

interface HeaderPropsInterface {
  curPage: string;
}

const Header = ({ curPage }: HeaderPropsInterface): ReactElement => {
  return (
    <header
      className={`navigation mt-6 mb-16 flex items-center justify-between lg:mt-12 ${
        curPage === 'Home' ? 'lg:mb-8' : 'lg:mb-20'
      }`}
    >
      <HeaderLogo />
      <DesktopMenu curPage={curPage} />
      <div className="transition-300 hidden hover:-translate-y-0.5 lg:block">
        <Button
          type="primary"
          purpose="route"
          link="/applications"
          mobileFullWidth={false}
        >
          Join Us!
        </Button>
      </div>
      <MobileMenu />
      <MenuButton />
    </header>
  );
};

const HeaderLogo = (): ReactElement => {
  return (
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
  );
};

const DesktopMenu = ({ curPage }: HeaderPropsInterface): ReactElement => {
  return (
    <nav className="hidden lg:flex lg:gap-14">
      {ROUTES.map((route) => (
        <Link href={route.route} key={route.id}>
          <a
            className={`transition-300 ${
              curPage === route.text ? `text-green-1` : `text-green-2`
            } hover:text-green-1`}
          >
            {route.text}
          </a>
        </Link>
      ))}
    </nav>
  );
};

const MobileMenu = (): ReactElement => {
  const menuOpenCtx: {
    isMenuOpen: boolean;
    toggleMenuHandler: () => void;
  } = useContext(MenuOpenContext);

  return (
    <div
      className={`transition-300 h-screen-trick absolute top-0 left-0 flex w-screen ${
        menuOpenCtx.isMenuOpen ? `opacity-100` : `translate-x-full opacity-0`
      } z-30 items-center bg-green-5`}
    >
      <div
        className="icon-dark absolute right-5 top-6 cursor-pointer"
        onClick={menuOpenCtx.toggleMenuHandler}
      >
        <Image src={closeIcon} width="64" height="64" alt="close icon" />
      </div>
      <nav className="-mt-6 flex w-full flex-col gap-16 pl-9">
        {ROUTES.map((route) => (
          <Link href={route.route} key={route.id}>
            <a
              className="block cursor-pointer"
              onClick={menuOpenCtx.toggleMenuHandler}
            >
              <span className="gradient gradient-text pb-1 text-4xl font-semibold 2xs:text-5xl">
                {route.text}
              </span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const MenuButton = (): ReactElement => {
  const menuOpenCtx: {
    isMenuOpen: boolean;
    toggleMenuHandler: () => void;
  } = useContext(MenuOpenContext);

  return (
    <div
      className="gradient grid h-16 w-16 cursor-pointer place-content-center rounded-full lg:hidden"
      onClick={menuOpenCtx.toggleMenuHandler}
    >
      <div className="mb-1 h-[5px] w-[30px] rounded-full bg-green-5"></div>
      <div className="mb-1 h-[5px] w-[24px] rounded-full bg-green-5"></div>
      <div className="h-[5px] w-[18px] rounded-full bg-green-5"></div>
    </div>
  );
};

export default Header;
