import react, { useRef, useState } from 'react';
import useInput from '../customHooks/useInput';
const SimpleInput = (props) => {
  // let inputValue = useRef('');
  // const [enterdNameValid, setEnteredNameValid] = useState(false);
  // const [name, setEnteredName] = useState('');
  // const [enterdNameTouched, setEnteredNameTouched] = useState(false);
  // const enterdNameValid = name.trim() !== '';
  const nameInputValidation = (inputValue) => {
    return inputValue.trim() !== '';
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const {
    value: nameInputValue,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    inputError: nameInputError,
    resetInput: nameResetInput,
    inputIsValid: nameIsValid,
  } = useInput(nameInputValidation);
  //////emali
  const {
    value: emailInputValue,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputError: emailInputError,
    resetInput: emailResetInput,
    inputIsValid: emailIsValid,
  } = useInput(validateEmail);
  // const [email, setEnteredEmail] = useState('');
  // const [enterdEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredEmailValid = validateEmail(email);
  // console.log('out of funciton', enteredEmailValid);
  // let inputEmailisInValid = !enteredEmailValid && enterdEmailTouched;
  // let inputNameIsInValid = !enterdNameValid && enterdNameTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  // function inputNameHandler(e) {
  //   setEnteredNameTouched(true);
  //   setEnteredName(e.target.value);
  //   // if (e.target.value.trim() !== '') {
  //   //   setEnteredNameValid(true);
  //   // }
  // }
  // function inputEmailHandler(e) {
  //   setEnteredEmail(e.target.value);
  // }

  // function inputNameBlurHandler(e) {
  //   setEnteredNameTouched(true);
  //   setEnteredName(e.target.value);
  //   // if (name.trim() === '') {
  //   //   setEnteredNameValid(false);
  //   //   return;
  //   // }
  // }
  // function inputEmailBlurHandler(e) {
  //   setEnteredEmailTouched(true);
  //   setEnteredEmail(e.target.value);
  // }
  function formSubmitHandler(e) {
    e.preventDefault();
    // setEnteredNameTouched(true);

    if (!nameIsValid && !emailIsValid) {
      // setEnteredNameValid(false);
      return;
    }
    // setEnteredNameValid(true);
    console.log(nameInputValue);
    console.log(emailInputValue);
    nameResetInput();
    emailResetInput();
    // setEnteredName('');
    // setEnteredEmail('');
    // setEnteredNameTouched(false);
    // setEnteredEmailTouched(false);
    // console.log(inputValue.current.value);
  }
  let inputNameStyle = !nameInputError
    ? 'form-control'
    : 'form-control invalid';

  let emailClassStyle = !emailInputError
    ? 'form-control'
    : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInputValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputError && (
        <p className="error-text">input not Valid,try again!</p>
      )}
      <div className={emailClassStyle}>
        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="email"
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputError && (
        <p className="error-text">input not Valid,try again!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
