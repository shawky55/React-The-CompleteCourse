import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const USER_INPUT_EMAIL = 'USER_INPUT_EMAIL';
const USER_INPUT_PASSWORD = 'USER_INPUT_PASSWORD';
function emailReducer(state, actions) {
  function CheckingEmail(value) {
    return value.includes('@');
  }
  if (actions.type === USER_INPUT_EMAIL) {
    return { value: actions.value, isVaild: CheckingEmail(actions.value) };
  }

  return { value: actions.value, isVaild: false };
}
function passwordReducer(state, actions) {
  const CheckingPassword = (pass) => {
    // console.log(pass.trim().length > 6);
    return pass.trim().length > 6;
  };
  if (actions.type === USER_INPUT_PASSWORD) {
    return {
      value: actions.value,
      isVaild: CheckingPassword(actions.value),
    };
  }

  return { value: actions.value, isVaild: false };
}

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isVaild: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isVaild: null,
  });
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => {
  //     console.log('EFFECT CLEANUP');
  //   };
  // }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const { isVaild: emailValidState } = emailState;
  const { isVaild: passwordValidState } = passwordState;

  useEffect(() => {
    let identifier = setTimeout(() => {
      console.log('check valid');
      setFormIsValid(emailValidState && passwordValidState);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailValidState, passwordValidState]);
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: USER_INPUT_EMAIL, value: event.target.value });

    // setFormIsValid(emailState.isVaild && passwordState.isVaild);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: USER_INPUT_PASSWORD, value: event.target.value });

    // setFormIsValid(emailState.isVaild && passwordState.isVaild);
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(emailState.isVaild);
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isVaild === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isVaild === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
