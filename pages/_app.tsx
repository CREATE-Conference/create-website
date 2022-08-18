import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { NotificationOpenContextProvider } from '../store/notification-open-context';
import Notification from '../components/UI/Notification';
import FormSubmissionModal from '../components/UI/FormSubmissionModal';
import { FormSubmissionModalOpenContextProvider } from '../store/form-submission-modal-open-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  }, []);

  return (
    <MenuOpenContextProvider>
      <NotificationOpenContextProvider>
        <FormSubmissionModalOpenContextProvider>
          <Component {...pageProps} />
          <Notification />
          <FormSubmissionModal />
        </FormSubmissionModalOpenContextProvider>
      </NotificationOpenContextProvider>
    </MenuOpenContextProvider>
  );
};

export default MyApp;
