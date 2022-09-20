import React from "react";
import { connect } from "react-redux";

import {  DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../features/reducers";

const CounterDumb = ({ value, onIncrementAsync, onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment Async</button>{" "}
    <button onClick={onIncrement}>+</button>{" "}
    <button onClick={onDecrement}>-</button>
    <hr />
    <div>{value}</div>
  </div>
);

const action = type => () => ({ type });
export const Counter = connect(state => ({ value: state }), {
  onIncrement: action(INCREMENT),
  onDecrement: action(DECREMENT),
  onIncrementAsync: action(INCREMENT_ASYNC),
})(CounterDumb);
