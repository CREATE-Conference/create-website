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
  mobileFullWidth: boolean;
}

const Button = ({
  type,
  purpose,
  link = '',
  formId = '',
  isEnabled,
  children,
  onClick,
  mobileFullWidth,
}: ButtonPropsInterface): ReactElement => {
  const buttonClasses = `
        ${type === 'primary' && `gradient text-green-5`}
        ${type === 'secondary' && `bg-green-2 text-green-5`}
        ${
          type === 'tertiary' &&
          `bg-green-5 text-green-1 outline outline-1 outline-green-1`
        }
        ${mobileFullWidth && `w-full md:w-auto`}
        transition-300 inline-block rounded-full px-10 py-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md`;

  const buttonContent =
    purpose === 'externalLink' ? (
      <a
        className={buttonClasses}
        target={purpose === 'externalLink' ? '_blank' : ''}
        href={purpose === 'externalLink' ? link : ''}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <a
        className={`${buttonClasses}
        ${
          purpose === 'submit' &&
          !isEnabled &&
          `cursor-default opacity-50 hover:-translate-y-0`
        }`}
      >
        {children}
      </a>
    );

  if (purpose === 'route') {
    return <Link href={link}>{buttonContent}</Link>;
  } else if (purpose === 'externalLink') {
    return buttonContent;
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
