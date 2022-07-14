import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import { useDispatch } from 'react-redux/es/exports';
import Notification from './components/UI/Notification';
// import { sendCartData } from './store/cart-Actions';
import { sendCartData } from './store/cart-actions';
import { fetchCartData } from './store/cart-actions';
let initialRender = true;
function App() {
  const notification = useSelector((state) => state.ui.notification);

  const cartState = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const send = async () => {
    //   dispatch(
    //     uiActions.setNotfication({
    // status: 'sending',
    //       title: 'sending',
    //       message: 'sending....',
    //     })
    //   );
    //   const response = await fetch(
    //     'https://reduxproject-1cc2c-default-rtdb.firebaseio.com/cart.json',
    //     {
    //       method: 'PUT',
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error('sending cart failed');
    //   }
    //   dispatch(
    //     uiActions.setNotfication({
    //       status: 'success',
    //       title: 'success',
    //       message: 'sending data success....',
    //     })
    //   );
    // };
    // if (initialRender) {
    //   initialRender = false;
    //   return;
    // }
    // send().catch((error) => {
    //   dispatch(
    //     uiActions.setNotfication({
    //       status: 'error',
    //       title: 'error',
    //       message: 'failed....',
    //     })
    //   );
    // });
    if (initialRender) {
      initialRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {cartState && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
