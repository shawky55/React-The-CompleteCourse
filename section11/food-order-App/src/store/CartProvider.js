import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (id) => {};
  const cartcontext = {
    items: [],
    totalAmount: 45,
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
