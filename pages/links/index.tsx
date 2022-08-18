import type { NextPage } from 'next';
import { useContext } from 'react';
import Page from '../../components/layout/Page';
import LinksPage from '../../components/sections/LinksList';
import NotificationOpenContext from '../../store/notification-open-context';

const Links: NextPage = () => {
  const notificationOpenCtx = useContext(NotificationOpenContext);
  notificationOpenCtx.closeNotificationHandler();

  return (
    <Page curPage="Links">
      <LinksPage />
    </Page>
  );
};

export default Links;
