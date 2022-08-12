import { createContext, ReactElement, useState } from 'react';

const NotificationOpenContext = createContext({
  isNotificationOpen: false,
  closeNotificationHandler: () => {},
});

interface NotificationOpenPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export const NotificationOpenContextProvider = ({
  children,
}: NotificationOpenPropsInterface): ReactElement => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);

  function closeNotificationHandler(): void {
    setIsNotificationOpen(false);
  }

  return (
    <NotificationOpenContext.Provider
      value={{ isNotificationOpen, closeNotificationHandler }}
    >
      {children}
    </NotificationOpenContext.Provider>
  );
};

export default NotificationOpenContext;
