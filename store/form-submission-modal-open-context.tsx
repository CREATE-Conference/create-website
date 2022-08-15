import { createContext, ReactElement, useState } from 'react';

const FormSubmissionModalOpenContext = createContext({
  isFormSubmissionModalOpen: false,
  showFormSubmissionModal: () => {},
  closeFormSubmissionModal: () => {},
});

interface FormSubmissionModalOpenPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export const FormSubmissionModalOpenContextProvider = ({
  children,
}: FormSubmissionModalOpenPropsInterface): ReactElement => {
  const [isFormSubmissionModalOpen, setIsFormSubmissionModalOpen] =
    useState(false);

  function showFormSubmissionModal(): void {
    setIsFormSubmissionModalOpen(true);
  }

  function closeFormSubmissionModal(): void {
    setIsFormSubmissionModalOpen(false);
  }

  return (
    <FormSubmissionModalOpenContext.Provider
      value={{
        isFormSubmissionModalOpen,
        showFormSubmissionModal,
        closeFormSubmissionModal,
      }}
    >
      {children}
    </FormSubmissionModalOpenContext.Provider>
  );
};

export default FormSubmissionModalOpenContext;
