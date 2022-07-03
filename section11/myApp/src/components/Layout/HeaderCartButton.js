import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  
  const cartctx=useContext(CartContext);
    const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
