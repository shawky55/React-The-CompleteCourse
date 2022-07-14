import classes from './Counter.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../sotre/index.js';
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.oggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };
// export default connect(mapState, mapDispatchToProps)(Counter);

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  console.log(counterValue);
  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 10 });
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle', showCounter: !showCounter });
    dispatch(counterActions.toogle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}> Flexible increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
