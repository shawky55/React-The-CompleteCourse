import React from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = () => {
  return (
    <React.Fragment>
      <form className={classes.form}>
        <Input
          input={{
            type: 'number',
            min: 1,
            max: 10,
            id: 'welcome',
            defaultValue: 1,
          }}
        />
        <button>+ Add</button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
