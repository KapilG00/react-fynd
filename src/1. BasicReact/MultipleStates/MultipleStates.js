import { useState } from "react";

function MultipleStates() {
  const [multipleState, setState] = useState({
    counter: 0,
    name: "val-valiant-thor",
    isDay: true,
  });

  const { counter, name, isDay } = multipleState;

  function incrementCounter() {
    setState((oldState) => {
      return { ...oldState, counter: oldState.counter + 1 };
    });
  }

  return (
    <>
      <h1>Multiple States!!</h1>

      <p>{counter}</p>
      <p>{name}</p>
      <p>{isDay ? <div>Day</div> : <div>Night</div>}</p>

      <button onClick={incrementCounter}>Increment</button>
    </>
  );
}

export default MultipleStates;
