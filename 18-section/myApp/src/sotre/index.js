// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { isAuth: false },
//   reducers: {
//     logIn(state) {
//       state.isAuth = true;
//     },
//     logOut(state) {
//       state.isAuth = false;
//     },
//   },
// });
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { counter: 0, showCounter: true },
//   reducers: {
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toogle(state) {
//       state.showCounter = !state.showCounter;
//     },
//     increment(state) {
//       state.counter = state.counter + 1;
//     },
//     decrement(state) {
//       --state.counter;
//     },
//   },
// });

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   return state;
// };

// const store = configureStore({ reducer: counterSlice.reducer });
// const subscribtion1 = () => {
//   const latestUpdate = sotre.getData();
//   console.log(latestUpdate);
// };
// sotre.subscribe(subscribtion1);
// sotre.dispatch();
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
