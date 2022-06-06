import React from 'react';

import classes from './Input.module.css';
const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>E-Mail</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        // onBlur={validateEmailHandler}
      />
    </div>
  );
};

export default Input;
