import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {
  const cartctx = useContext(CartContext);
  let data = props.data;
  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: data.id,
      name: data.name,
      amount: amount,
      price: data.price,
    });
  };
  console.log(data);
  return (
    <React.Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{data.name}</h3>
          <p className={classes.description}>{data.description}</p>
          <div className={classes.price}>{data.price}</div>
        </div>
        <div>
          <MealItemForm
            mealId={data.id}
            onAddToCart={addToCartHandler}
          ></MealItemForm>
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
