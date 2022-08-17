import { ReactElement, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import NotificationOpenContext from '../../store/notification-open-context';
import openIcon from '../../public/img/icons/open.svg';
import closeIcon from '../../public/img/icons/close.svg';
import { ref, onValue } from 'firebase/database';
import { db } from '../../utils/firebaseConfig';

const Notification = (): ReactElement => {
  const notificationOpenCtx = useContext(NotificationOpenContext);

  const [notification, setNotification] = useState({
    text: '',
    link: '',
  });

  useEffect(() => {
    const notificationRef = ref(db, 'notification');
    onValue(notificationRef, (snapshot) => {
      let data = snapshot.val();
      let notification = { ...data };
      setNotification(notification);
    });
  }, []);

  let notificationTextFirstPart = notification.text;
  let notificationTextSecondPart = '';

  if (notification.text.indexOf('{LINK}') !== -1) {
    notificationTextFirstPart = notification.text.slice(
      0,
      notification.text.indexOf('{LINK}')
    );
    notificationTextSecondPart = notification.text.slice(
      notification.text.indexOf('{LINK}') + 6
    );
  }

  const text = (
    <p className="inline">
      {notificationTextFirstPart}
      <span className="underline">{notificationTextSecondPart}</span>
    </p>
  );

  const icon = (
    <div className="hidden w-5 sm:inline-block">
      <Image src={openIcon} alt="open icon" layout="responsive" />
    </div>
  );

  return (
    <div
      className={`transition-300 gradient fixed bottom-0 left-0 right-0 z-20 flex px-4 py-4 sm:justify-center
      ${
        (!notificationOpenCtx.isNotificationOpen || notification.text === '') &&
        'translate-y-full opacity-0'
      }`}
    >
      {notification.link !== '' ? (
        <a
          href={notification.link}
          target="_blank"
          rel="noreferrer"
          className="flex max-w-[240px] items-center gap-2 font-medium text-green-5 sm:max-w-none"
        >
          {text}
          {icon}
        </a>
      ) : (
        <div className="flex max-w-[240px] items-center gap-2 font-medium text-green-5 sm:max-w-none">
          {text}
        </div>
      )}
      <div
        className="icon-light absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 cursor-pointer"
        onClick={notificationOpenCtx.closeNotificationHandler}
      >
        <Image src={closeIcon} alt="close icon" layout="responsive" />
      </div>
    </div>
  );
};

export default Notification;
