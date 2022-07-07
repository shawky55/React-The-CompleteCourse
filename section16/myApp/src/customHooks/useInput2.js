import react, { useState } from 'react';

const useInput = (inputValidation) => {
  const [enterdInput, setEnteredInput] = useState('');
  const [inputTouched, setInputTouched] = useState(false);
  const inputIsValid = inputValidation(enterdInput);
  const inputError = !inputIsValid && inputTouched;
  const inputOnchangeHandler = (event) => {
    setInputTouched(true);
    setEnteredInput(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setInputTouched(true);
    setEnteredInput(event.target.value);
  };
  const inputReset = () => {
    setInputTouched(false);
    setEnteredInput('');
  };

  return {
    value: enterdInput,
    inputIsValid,
    inputError,
    inputBlurHandler,
    inputOnchangeHandler,
    inputReset,
  };
};

export default useInput;
