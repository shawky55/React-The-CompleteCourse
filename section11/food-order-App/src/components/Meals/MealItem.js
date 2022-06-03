import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  let data = props.data;
  return (
    <React.Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{data.name}</h3>
          <p className={classes.description}>{data.description}</p>
          <div className={classes.price}>{data.price}</div>
        </div>
        <div>
          <MealItemForm></MealItemForm>
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
