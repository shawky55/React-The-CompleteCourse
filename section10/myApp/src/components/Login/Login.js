import React, { useState ,useRef} from 'react';


import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useEffect, useReducer } from 'react';
import { useContext } from 'react';
import AtuhContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
// const emailReducerHandler = (state, action) => {
//   if (action.type === 'input_user') {
//     return { value: action.value, isVaild: action.value.includes('@') };
//   }
//   return { value: '', isVaild: null };
// };
// const passwordReducerHandler = (state, action) => {
//   if (action.type == 'input_password') {
//     return { value: action.value, isVaild: action.value.trim().length > 6 };
//   }
//   return { value: '', isVaild: null };
// };
const loginReducerHandler = (state, action) => {
  const checkEmail = (email) => email.includes('@');
  const chekPassword = (password) => password.trim().length > 6;
  if (action.type === 'EMAIL_INPUT') {
    return {
      emailValue: action.value,
      emailIsValid: checkEmail(action.value),
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordIsValid,
    };
  }
  if (action.type === 'PASSWORD_INPUT') {
    return {
      emailValue: state.emailValue,
      emailIsValid: state.emailIsValid,
      passwordValue: action.value,
      passwordIsValid: chekPassword(action.value),
    };
  }

  return {
    emailValue: '',
    passwordValue: '',
    emailIsValid: null,
    passwordIsValid: null,
  }; //initail state
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // const [passwordEntered, setPasswordReducer] = useReducer(
  //   passwordReducerHandler,
  //   { value: '', isVaild: null }
  // );
  // const [emailEntered, setEmailReducer] = useReducer(emailReducerHandler, {
  //   value: '',
  //   isVaild: null,
  // });
  /**
   * instead of create two reducer create one
   */
  const [loginDataEnterd, setLoginReducer] = useReducer(loginReducerHandler, {
    emailValue: '',
    passwordValue: '',
    emailIsValid: null,
    passwordIsValid: null,
  });
  // const emaliValidState = emailEntered.isVaild;
  // const passwordValidState = passwordEntered.isVaild;
  const emaliValidState = loginDataEnterd.emailIsValid;
  const passwordValidState = loginDataEnterd.passwordIsValid;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('send request');
      setFormIsValid(emaliValidState && passwordValidState);
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [emaliValidState, passwordValidState]);

  const emailChangeHandler = (event) => {
    setLoginReducer({ type: 'EMAIL_INPUT', value: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setLoginReducer({ type: 'PASSWORD_INPUT', value: event.target.value });

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(emailEntered.value.includes('@'));
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const ctx = useContext(AtuhContext);
  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(loginDataEnterd.emailValue, loginDataEnterd.passwordValue);
    }else if(!loginDataEnterd.emailIsValid){
      emailInputRef.current.focus();
    }else{
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        ref={emailInputRef}
        type="email"
        id="email_field"
        value={loginDataEnterd.emailValue}
        onChange={emailChangeHandler}
        isValid={loginDataEnterd.emailIsValid}
        />
      <Input
      ref={passwordInputRef}
      type="password"
      id="password_field"
      value={loginDataEnterd.passwordValue}
      onChange={passwordChangeHandler}
      isValid={loginDataEnterd.passwordIsValid}
      />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
