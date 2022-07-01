import React ,{useRef ,useImperativeHandle} from 'react';
import { useEffect } from 'react';

import classes from './Input.module.css';
const Input =React.forwardRef((props,ref) => {
    const inputRef=useRef();
    const activatInput=()=>{
        inputRef.current.focus();
    }
    useImperativeHandle(ref,()=>{
        return {
          focus: activatInput,
        };
    })
    // useEffect(()=>{
    //     inputRef.current.focus();
    // },[])
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>E-Mail</label>
      <input
      ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        // onBlur={validateEmailHandler}
      />
    </div>
  );
});

export default Input;
