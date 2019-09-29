import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "ADDTEN":
      return { count: state.count + action.value };
    case "MINUS":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw new Error();
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "ADDTEN", value: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};
