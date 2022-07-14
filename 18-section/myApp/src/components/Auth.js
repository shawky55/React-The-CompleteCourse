import classes from './Auth.module.css';
import React, { useRef, useState } from 'react';
import { authActions } from '../sotre/index';
import { useDispatch } from 'react-redux';
const Auth = () => {
  const [valid, setValid] = useState(true);
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const emailRef = useRef();
  function authHandler(e) {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    console.log(emailInput);
    const passwordInput = passwordRef.current.value;
    if (emailInput !== '' && passwordInput !== '') {
      dispatch(authActions.logIn());
      console.log('success login');
    } else {
      console.log('fill fields');
      setValid(false);
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password" ref={passwordRef}>
              Password
            </label>
            <input type="password" id="password" />
          </div>
          <button onClick={authHandler}> Login</button>
          {!valid && <p className={classes.inValid}>use valid data </p>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
