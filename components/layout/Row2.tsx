import { ReactElement } from 'react';

interface Row2PropsInterface {
  children: ReactElement | ReactElement[];
}

const Row2 = ({ children }: Row2PropsInterface): ReactElement => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {children}
    </div>
  );
};

export default Row2;
