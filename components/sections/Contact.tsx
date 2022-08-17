import { ReactElement, useState, useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import handleSubmit from '../../utils/submitForm';
import formSubmissionModalOpenContext from '../../store/form-submission-modal-open-context';

const Contact = (): ReactElement => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formValidity, setFormValidity] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formTouched, setFormTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const formSubmissionModalOpenCtx = useContext(formSubmissionModalOpenContext);

  const inputChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    setFormTouched({ ...formTouched, [name]: true });
    checkValidity(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const checkValidity = (name: string, value: string): void => {
    if (name === 'name') {
      const isValid = value.length > 0;
      setFormValidity({ ...formValidity, name: isValid });
    } else if (name === 'email') {
      const isValid = value.includes('@');
      setFormValidity({ ...formValidity, email: isValid });
    } else {
      const isValid = value.length > 0;
      setFormValidity({ ...formValidity, message: isValid });
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (formValidity.name && formValidity.email && formValidity.message) {
      handleSubmit('contact', formValues);
      formSubmissionModalOpenCtx.showFormSubmissionModal();
      setFormValues({ name: '', email: '', message: '' });
      setFormValidity({ name: false, email: false, message: false });
      setFormTouched({ name: false, email: false, message: false });
    }
  };

  return (
    <section className="section m-horizontal mx-auto max-w-[700px] text-center">
      <h2 className="h2 mb-6 md:mb-8">contact</h2>
      <form
        name="contact"
        id="contact"
        method="post"
        data-netlify="true"
        onSubmit={submitHandler}
      >
        <Input
          isTextArea={false}
          name="name"
          placeholder="Name"
          value={formValues.name}
          isValid={formValidity.name}
          onChange={inputChangeHandler}
          touched={formTouched.name}
          invalidText="Please enter a name."
        />
        <Input
          isTextArea={false}
          name="email"
          placeholder="Email"
          value={formValues.email}
          isValid={formValidity.email}
          onChange={inputChangeHandler}
          touched={formTouched.email}
          invalidText="Please enter a valid email."
        />
        <Input
          isTextArea={true}
          name="message"
          placeholder="Message"
          value={formValues.message}
          isValid={formValidity.message}
          onChange={inputChangeHandler}
          touched={formTouched.message}
          invalidText="Please enter a message."
        />
      </form>
      <Button
        type="secondary"
        purpose="submit"
        formId="contact"
        isEnabled={
          formValidity.name && formValidity.email && formValidity.message
        }
        mobileFullWidth={false}
      >
        Submit
      </Button>
    </section>
  );
};

export default Contact;
