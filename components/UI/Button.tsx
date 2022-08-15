import Link from 'next/link';
import { ReactElement } from 'react';

interface ButtonPropsInterface {
  type: string;
  purpose: string;
  link?: string;
  formId?: string;
  isEnabled?: boolean;
  children: string;
  onClick?: () => void;
}

const Button = ({
  type,
  purpose,
  link = '',
  formId = '',
  isEnabled,
  children,
  onClick,
}: ButtonPropsInterface): ReactElement => {
  const buttonContent = (
    <a
      className={`
        ${type === 'primary' && `gradient text-green-5`}
        ${type === 'secondary' && `bg-green-2 text-green-5`}
        ${
          type === 'tertiary' &&
          `bg-green-5 text-green-1 outline outline-1 outline-green-1`
        }
        ${
          purpose === 'onClick' &&
          !isEnabled &&
          `cursor-default opacity-50 hover:-translate-y-0`
        }
        transition-300 inline-block rounded-full px-10 py-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md`}
    >
      {children}
    </a>
  );

  if (purpose === 'route') {
    return <Link href={link}>{buttonContent}</Link>;
  } else if (purpose === 'submit') {
    return (
      <button type="submit" form={formId}>
        {buttonContent}
      </button>
    );
  } else {
    return (
      <div className="cursor-pointer" onClick={onClick}>
        {buttonContent}
      </div>
    );
  }
};

export default Button;
