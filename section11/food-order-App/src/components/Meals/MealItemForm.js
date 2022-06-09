import React from 'react';
import { useRef, useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const[amountIsValid,setAmountIsValid]=useState(true)
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    let enterdAmount=amountInputRef.current.value;
    let enterdAmountNumber=+enterdAmount;
    if(enterdAmount.trim().length===0||enterdAmountNumber>10||enterdAmountNumber<1){
      setAmountIsValid(false);
      return;
    }
    console.log(enterdAmountNumber);
    props.onAddToCart(enterdAmountNumber);

  };
  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          input={{
            type: 'number',
            min: 1,
            max: 10,
            id: `amout_${props.mealId}`,
            defaultValue: 1,
          }}
        />
        <button >+ Add</button>
        {!amountIsValid&&<p>set Valid Amount [1 -10 ]meals</p>}
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
