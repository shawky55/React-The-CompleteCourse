import redux from 'redux';

//create inital values and reducer funciton
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//filling store with initial data update it from useReducer
const sotre = redux.createStore(counterReducer);

console.log(sotre.getState());

const counterSubscriber = () => {
  const latestState = sotre.getState();
  console.log(latestState);
};
sotre.subscribe(counterSubscriber);
sotre.dispatch({ type: 'increment' });
sotre.dispatch({ type: 'decrement' });
