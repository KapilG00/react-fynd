import { useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent rendering");
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Parent!!</h3>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((oldCount) => oldCount + 1);
        }}
      >
        click me!!
      </button>
      <Child />
    </>
  );
}

export default Parent;
