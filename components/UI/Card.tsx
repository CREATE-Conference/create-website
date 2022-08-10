import { ReactElement } from 'react';

interface CardPropsInterface {
  children: ReactElement;
}

const Card = ({ children }: CardPropsInterface): ReactElement => {
  return (
    <div className="transition-300 rounded-2xl shadow-sm outline outline-1 outline-green-1 hover:shadow-md md:rounded-3xl">
      {children}
    </div>
  );
};

export default Card;
