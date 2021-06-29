import React, { useReducer } from "react";
import { useFetch } from "./useFetch";


function reducer(state, action){
  switch (action.type) {
    case 'increment':
      return state++
    case 'decrement':
      return state--
    default:
      return state

  }
}
const App = () => {
  const [count, dispatch]= useReducer(reducer, 0)
  return (
    <div>
     <div>count: {count}</div>
     <button onClick={() => dispatch({ type: "increment"})}>increment</button>
     <button onClick={() => dispatch({ type: "decrement"})}>decrement</button>

    </div>
  );
};

export default App;
