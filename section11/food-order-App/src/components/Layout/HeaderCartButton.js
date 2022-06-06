import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  
  const cartctx=useContext(CartContext);
  const numberOfItmes=cartctx.items.reduce((current,item)=>{
    return current+item.amount
  },0)
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItmes}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
