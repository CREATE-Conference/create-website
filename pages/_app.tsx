import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { NotificationOpenContextProvider } from '../store/notification-open-context';
import Notification from '../components/UI/Notification';
import FormSubmissionModal from '../components/UI/FormSubmissionModal';
import { FormSubmissionModalOpenContextProvider } from '../store/form-submission-modal-open-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
