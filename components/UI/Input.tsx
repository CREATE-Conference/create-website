import { useState } from 'react';

interface InputPropsInterface {
  isTextArea: boolean;
  name: string;
  placeholder: string;
  value: string;
  isValid: boolean;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  touched: boolean;
  invalidText: string;
}

const Input = ({
  isTextArea,
  name,
  placeholder,
  value,
  isValid,
  onChange,
  touched,
  invalidText,
}: InputPropsInterface) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  const shouldShowError = (): boolean => {
    return !isValid && touched && !isFocused;
  };

  const classes = `placeholder:transition-300 transition-300 block w-full rounded-lg bg-green-5 px-4 py-3 shadow-sm outline outline-1 placeholder:italic ${
    shouldShowError()
      ? 'text-red outline-red placeholder:text-red focus:outline-red'
      : 'text-green-1 outline-green-4 placeholder:text-green-3 focus:outline-green-1'
  }`;

  return (
    <div className="mb-5 last:mb-11 md:mb-8 md:last:mb-16">
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={8}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classes}
        />
      ) : (
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classes}
        />
      )}
      {shouldShowError() && (
        <p className="mt-2.5 text-left text-sm text-red">{invalidText}</p>
      )}
    </div>
  );
};

export default Input;
