import Link from 'next/link';
import { ReactElement } from 'react';

interface ButtonPropsInterface {
  type: string;
  link: string;
  children: string;
}

const Button = ({
  type,
  link,
  children,
}: ButtonPropsInterface): ReactElement => {
  return (
    <Link href={link}>
      <a
        className={`
        ${type === 'primary' && `gradient text-green-5`}
        ${type === 'secondary' && `bg-green-2 text-green-5`}
        ${
          type === 'tertiary' &&
          `bg-green-5 text-green-1 outline outline-1 outline-green-1`
        }
        transition-300 inline-block rounded-full px-10 py-4 hover:-translate-y-0.5 hover:shadow-md`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
