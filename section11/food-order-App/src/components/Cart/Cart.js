import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAmount = '$' + cartctx.totalAmount.toFixed(2);
  const hasItems = cartctx.items.length > 0;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartctx.items.map((element) => {
        return (
          <CartItem
            key={element.id}
            name={element.name}
            amount={element.amount}
            price={element.price}
            onRemove={cartItemRemoveHandler.bind(null, element.id)}
            onAdd={cartItemAddHandler.bind(null, element)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClick={props.cartStateHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.cartStateHandler}
        >
          close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
