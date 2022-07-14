import { uiActions } from './ui-slice';
import { cartAction } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://reduxproject-1cc2c-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('get data falied!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotfication({
          status: 'error',
          title: 'error',
          message: ' fetch failed....',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotfication({
        status: 'sending',
        title: 'sending',
        message: 'sending....',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://reduxproject-1cc2c-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('sending cart failed');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.setNotfication({
          status: 'success',
          title: 'success',
          message: 'sending data success....',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotfication({
          status: 'error',
          title: 'error',
          message: 'failed....',
        })
      );
    }
  };
};
