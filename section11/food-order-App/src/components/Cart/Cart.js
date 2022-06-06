import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 1.5 }].map((element) => {
        <li>{element.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClick={props.cartStateHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>358.5</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.cartStateHandler}
        >
          close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
