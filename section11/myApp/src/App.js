import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';
function App() {
  const [cartOpened, setCart] = useState(false);
  function cartStateHandler() {
    setCart((previousState) => !previousState);
    console.log(cartOpened);
  }

  return (
    <CartProvider>
      {cartOpened && <Cart cartStateHandler={cartStateHandler}></Cart>}
      <Header showCart={cartStateHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
