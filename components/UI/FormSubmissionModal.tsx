import Image from 'next/image';
import { ReactElement } from 'react';
import messageSentIcon from '../../public/img/icons/message-sent.svg';
import Button from './Button';
import closeIcon from '../../public/img/icons/close.svg';
import { useContext } from 'react';
import FormSubmissionModalOpenContext from '../../store/form-submission-modal-open-context';

const FormSubmissionModal = (): ReactElement => {
  const formSubmissionModalOpenCtx = useContext(FormSubmissionModalOpenContext);

  return (
    <div
      className={`transition-300 h-screen-trick fixed top-0 left-0 w-screen bg-[#C6D2C7] ${
        formSubmissionModalOpenCtx.isFormSubmissionModalOpen
          ? 'z-20 opacity-100'
          : '-z-10 opacity-0'
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="mb-4 inline-block w-[120px] md:w-[200px]">
          <Image
            src={messageSentIcon}
            layout="responsive"
            alt="Message sent icon"
          />
        </div>
        <h2 className="mb-4 text-4xl font-semibold text-green-1 md:mb-6 md:text-5xl">
          Message sent!
        </h2>
        <p className="mb-12 text-lg text-green-1 md:mb-16 md:text-2xl">
          We will reply as soon as possible.
        </p>
        <Button
          type="primary"
          purpose="onClick"
          isEnabled={true}
          onClick={formSubmissionModalOpenCtx.closeFormSubmissionModal}
        >
          Continue
        </Button>
      </div>
      <div
        className="absolute top-6 right-5 cursor-pointer md:top-10 md:right-10"
        onClick={formSubmissionModalOpenCtx.closeFormSubmissionModal}
      >
        <Image src={closeIcon} width={64} height={64} alt="Close icon" />
      </div>
    </div>
  );
};

export default FormSubmissionModal;
