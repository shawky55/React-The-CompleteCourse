import useInput from '../customHooks/useInput2';

const BasicForm = (props) => {
  const nameValidation = (inputValue) => {
    return inputValue.trim() !== '';
  };
  const emailValidation = (inputValue) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputValue).toLowerCase());
  };

  const {
    value: nameValue,
    inputIsValid: nameIsValid,
    inputError: nameError,
    inputBlurHandler: nameBlurHandler,
    inputOnchangeHandler: nameOnchangeHandler,
    inputReset: nameReset,
  } = useInput(nameValidation);
  const {
    value: lNameValue,
    inputIsValid: lNameValid,
    inputError: lNameError,
    inputBlurHandler: lNameBlurHandler,
    inputOnchangeHandler: lNameOnchangeHandler,
    inputReset: lNameReset,
  } = useInput(nameValidation);
  const {
    value: emailValue,
    inputIsValid: emailValid,
    inputError: emailError,
    inputBlurHandler: emailBlurHandler,
    inputOnchangeHandler: emailOnchangeHandler,
    inputReset: emailReset,
  } = useInput(emailValidation);

  let formIsValid = false;
  if (nameIsValid && emailValid && lNameValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid && !emailValid && !lNameValid) {
      return;
    }
    console.log(nameValue);
    console.log(lNameValue);
    console.log(emailValue);
    nameReset();
    lNameReset();
    emailReset();
  };
  let nameClasses = !nameError ? 'form-control' : 'form-control invalid';
  let lNameClasses = !lNameError ? 'form-control' : 'form-control invalid';
  let emailClasses = !emailError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameOnchangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameError && <p className="error-text">invalid input,try again</p>}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lNameValue}
            onChange={lNameOnchangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameError && <p className="error-text">invalid input,try again</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={emailValue}
          onChange={emailOnchangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">invalid input,try again</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
