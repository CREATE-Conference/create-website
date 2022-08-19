import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { NotificationOpenContextProvider } from '../store/notification-open-context';
import FormSubmissionModal from '../components/UI/FormSubmissionModal';
import { FormSubmissionModalOpenContextProvider } from '../store/form-submission-modal-open-context';
import Notification from '../components/UI/Notification';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  }, []);

  const router = useRouter();
  const path = router.pathname;

  return (
    <MenuOpenContextProvider>
      <NotificationOpenContextProvider>
        <FormSubmissionModalOpenContextProvider>
          <Component {...pageProps} />
          <FormSubmissionModal />
          {path === '/' || path === '/applications' || path === '/team' ? (
            <Notification />
          ) : (
            <></>
          )}
        </FormSubmissionModalOpenContextProvider>
      </NotificationOpenContextProvider>
    </MenuOpenContextProvider>
  );
};

export default MyApp;
