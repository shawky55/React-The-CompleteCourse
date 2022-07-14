import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      --state.counter;
    },
  },
});

export default counterSlice;
