import React, { useReducer } from "react";
import "./App.css";
import { useStateContextCustom } from "./context/StateContext";

const App = () => {
  const aa = useStateContextCustom();
  console.log(aa);

  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return { count: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" p-10 shadow-lg rounded-md">
        <h1 className=" text-center text-9xl">{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "increase" })}
          className=" btn btn-circle"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="  m-10 btn btn-circle "
        >
          reset
        </button>
        <button
          onClick={() => dispatch({ type: "decrease" })}
          className=" btn btn-circle"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
