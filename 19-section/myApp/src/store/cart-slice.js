import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalQuantity: 0,
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      state.changed = true;
      const itemData = action.payload;
      const existingItem = state.items.find((item) => itemData.id === item.id);
      state.totalQuantity++;
      if (existingItem) {
        existingItem.totalPrice += existingItem.price;
        existingItem.quantity++;
      }
      if (!existingItem) {
        const newItem = {
          id: itemData.id,
          name: itemData.title,
          price: itemData.price,
          quantity: 1,
          totalPrice: itemData.price,
        };
        state.items.push(newItem);
      }
    },

    removeItemFromCart(state, action) {
      state.changed = true;

      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity > 0 && state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -=  existingItem.price;
        console.log(existingItem.quantity);
      }
    },
  },
});
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.setNotfication({
//         status: 'sending',
//         title: 'sending',
//         message: 'sending....',
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://reduxproject-1cc2c-default-rtdb.firebaseio.com/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify(cart),
//         }
//       );
//       if (!response.ok) {
//         throw new Error('sending cart failed');
//       }
//     };
//       try {
//         await sendRequest();

//         dispatch(
//           uiActions.setNotfication({
//             status: 'success',
//             title: 'success',
//             message: 'sending data success....',
//           })
//         );
//       } catch (error) {
//         dispatch(
//           uiActions.setNotfication({
//             status: 'error',
//             title: 'error',
//             message: 'failed....',
//           })
//         );
//       }
//     };
//   };

export const cartAction = cartSlice.actions;
export default cartSlice;
