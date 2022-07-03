import CartContext from './cart-context';
import { useReducer } from 'react';

let defaultCartSate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartSate;
};

const CartProvider = (props) => {
  const [cartState, CartStateDispatch] = useReducer(
    cartReducer,
    defaultCartSate
  );
  const addItemToCart = (item) => {
    CartStateDispatch({ type: 'ADD_ITEM', item: item });
  };
  const removeItemFromCart = (id) => {
    CartStateDispatch({ type: 'REMOVE_ITEM', id: id });
  };
  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
