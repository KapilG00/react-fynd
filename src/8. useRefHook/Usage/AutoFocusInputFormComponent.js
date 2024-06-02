import { useEffect, useRef } from "react";

// If we want to point to a particular element then we will use "useRef".

function AutoFocusInputFormComponent() {
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    console.log("ref1:", ref1);
    ref1.current.focus();
    // ref2.current.focus();
  });

  return (
    <>
      <h1>Input form Component</h1>
      <input
        id="input-box"
        ref={ref1}
        type="text"
        placeholder="first input box"
      />

      <input
        id="input-box"
        ref={ref2}
        type="text"
        placeholder="second input box"
      />
    </>
  );
}

export default AutoFocusInputFormComponent;
