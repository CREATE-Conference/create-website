import { createContext, ReactElement, useState } from 'react';

const MenuOpenContext = createContext({
  isMenuOpen: false,
  toggleMenuHandler: () => {},
});

interface MenuOpenPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export const MenuOpenContextProvider = ({
  children,
}: MenuOpenPropsInterface): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuHandler(): void {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    document!.querySelector('body')!.classList.toggle('h-screen-trick');
  }

  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, toggleMenuHandler }}>
      {children}
    </MenuOpenContext.Provider>
  );
};

export default MenuOpenContext;
