import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MenuOpenContextProvider } from '../store/menu-open-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MenuOpenContextProvider>
      <Component {...pageProps} />
    </MenuOpenContextProvider>
  );
};

export default MyApp;
