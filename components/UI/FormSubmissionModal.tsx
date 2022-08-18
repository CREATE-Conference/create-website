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
      className={`transition-300 h-screen-trick fixed top-0 left-0 w-screen bg-[rgba(8,_28,_21,_0.2)] ${
        formSubmissionModalOpenCtx.isFormSubmissionModalOpen
          ? 'z-20 opacity-100'
          : '-z-10 opacity-0'
      }`}
    >
      <div className="absolute top-1/2 left-1/2 w-11/12 max-w-[864px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-green-5 py-12 text-center outline outline-1 outline-green-1 md:py-16">
        <div className="inline-block h-[80px] w-[80px] md:mb-2 md:h-[120px] md:w-[120px]">
          <Image src={messageSentIcon} layout="responsive" alt="Email sent" />
        </div>
        <p className="mb-3 text-3xl font-semibold text-green-1 md:text-4xl">
          Message sent!
        </p>
        <p className="mb-8 text-green-1 md:mb-10 md:text-lg">
          We will reply as soon as possible.
        </p>
        <Button
          type="primary"
          purpose="onClick"
          onClick={formSubmissionModalOpenCtx.closeFormSubmissionModal}
          mobileFullWidth={false}
        >
          Continue
        </Button>
        <div
          className="absolute top-4 right-4 h-12 w-12 cursor-pointer md:top-6 md:right-6 md:h-14 md:w-14"
          onClick={formSubmissionModalOpenCtx.closeFormSubmissionModal}
        >
          <Image src={closeIcon} alt="Close icon" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default FormSubmissionModal;
