import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent rendering");
  const [count, setCount] = useState(0);

  // For every re-render React will create new "arr" which leads to new memory address every time.
  // const arr = [1, 2, 3, 4]; // abc@123 abc@345

  const arr = useMemo(() => [1, 2, 3, 4], []); // abc@123

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
      <Child arr={arr} />
      {/* Both below ways leads to re-rendering of child component for every re-render. */}
      {/* <Child arr={arr} val={322}} /> */}
      {/* <Child arr={arr} obj={{ name: "kapil", age: 27 }} /> */}
    </>
  );
}

export default Parent;
