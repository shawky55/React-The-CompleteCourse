import react, { useState } from 'react';

const useInput = (inputValidation) => {
  const [enterdValue, setEnteredValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);
  const inputIsValid = inputValidation(enterdValue);
  const inputError = !inputIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setInputTouched(true);
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setInputTouched(true);
    setEnteredValue(event.target.value);
  };

  const resetInput = () => {
    setEnteredValue('');
    setInputTouched('');
  };

  return {
    value: enterdValue,
    inputIsValid,
    inputError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
