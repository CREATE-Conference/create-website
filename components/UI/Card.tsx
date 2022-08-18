import type { ReactElement } from 'react';

interface CardPropsInterface {
  children: ReactElement;
}

const Card = ({ children }: CardPropsInterface): ReactElement => {
  return (
    <div className="transition-300 border-1 rounded-2xl border border-green-1 shadow-sm hover:shadow-md md:rounded-3xl">
      {children}
    </div>
  );
};

export default Card;
