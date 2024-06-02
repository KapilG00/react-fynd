import { useRef, useState, useEffect } from "react";

function ShowPrevValueWithLatest() {
  const [counter, setCounter] = useState(0);

  const ref = useRef("-");

  // FLAVOUR 1 USE CASE.
  useEffect(() => {
    ref.current = counter;
  });

  return (
    <>
      <h1>useRef Hook Usage!!</h1>
      <div>Previous value: {ref.current} </div>
      <div>Latest value: {counter}</div>

      <button
        onClick={() => {
          setCounter((oldCounter) => oldCounter + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

export default ShowPrevValueWithLatest;
