import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { NotificationOpenContextProvider } from '../store/notification-open-context';
import Notification from '../components/UI/Notification';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MenuOpenContextProvider>
      <NotificationOpenContextProvider>
        <Component {...pageProps} />
        <Notification />
      </NotificationOpenContextProvider>
    </MenuOpenContextProvider>
  );
};

export default MyApp;
