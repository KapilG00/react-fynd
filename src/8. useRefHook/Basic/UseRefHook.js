import { useRef, useState } from "react";

// USAGE:
// 1. It is a storing mechanism without re-rendering.
// 2. If we want to point to a particular element then we will use "useRef".

function UseRefHook() {
  const [counter, setCounter] = useState(0);

  const ref = useRef(322);
  const { current } = ref;

  console.log("ref:", ref);

  // This change in ref.current will not be visible on the screen.
  function onClickHandler() {
    console.log("-------- PREV VALUE ----------", ref.current);
    ref.current++;
    console.log("-------- CURRENT VALUE ----------", ref.current);
  }

  return (
    <>
      <h3>useRef Hook!!</h3>
      <div>Current value: {current}</div>
      <div>Counter value: {counter}</div>
      <button onClick={onClickHandler}>+</button>
      <button
        onClick={() => {
          setCounter((oldCounter) => oldCounter + 1);
        }}
      >
        count++
      </button>
    </>
  );
}

export default UseRefHook;

// useRef -> Preservation of the data (just like useState, useReducer) but without re-rendering.
//           Preservation of the data throughout multiple re-renders.
//           It can store Number, String, Boolean, Arrays, objects, function, JSX/HTML ELEMENTS.
