import react, { useRef, useState } from 'react';
const SimpleInput = (props) => {
  // let inputValue = useRef('');
  // const [enterdNameValid, setEnteredNameValid] = useState(false);
  const [name, setEnteredName] = useState('');
  const [enterdNameTouched, setEnteredNameTouched] = useState(false);
  const enterdNameValid = name.trim() !== '';
  //////emali
  const [email, setEnteredEmail] = useState('');
  const [enterdEmailTouched, setEnteredEmailTouched] = useState(false);
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const enteredEmailValid = validateEmail(email);
  console.log('out of funciton', enteredEmailValid);
  let inputEmailisInValid = !enteredEmailValid && enterdEmailTouched;
  let inputNameIsInValid = !enterdNameValid && enterdNameTouched;
  let formIsValid = false;

  if (enterdNameValid && enteredEmailValid) {
    formIsValid = true;
  }
  function inputNameHandler(e) {
    setEnteredNameTouched(true);
    setEnteredName(e.target.value);
    // if (e.target.value.trim() !== '') {
    //   setEnteredNameValid(true);
    // }
  }
  function inputEmailHandler(e) {
    setEnteredEmail(e.target.value);
  }

  function inputNameBlurHandler(e) {
    setEnteredNameTouched(true);
    setEnteredName(e.target.value);
    // if (name.trim() === '') {
    //   setEnteredNameValid(false);
    //   return;
    // }
  }
  function inputEmailBlurHandler(e) {
    setEnteredEmailTouched(true);
    setEnteredEmail(e.target.value);
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enterdNameValid && !enteredEmailValid) {
      // setEnteredNameValid(false);
      return;
    }
    // setEnteredNameValid(true);
    console.log(name);
    console.log(email);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    // console.log(inputValue.current.value);
  }
  let inputNameStyle = !inputNameIsInValid
    ? 'form-control'
    : 'form-control invalid';

  let emailClassStyle = !inputEmailisInValid
    ? 'form-control'
    : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={inputNameHandler}
          onBlur={inputNameBlurHandler}

          // ref={inputValue}
        />
      </div>
      {inputNameIsInValid && (
        <p className="error-text">input not Valid,try again!</p>
      )}
      <div className={emailClassStyle}>
        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={inputEmailHandler}
          onBlur={inputEmailBlurHandler}
        />
      </div>
      {inputEmailisInValid && (
        <p className="error-text">input not Valid,try again!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
