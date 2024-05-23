import Child from "./Child";
import { useState } from "react";

function Parent() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h3>Parent!!</h3>
      {toggle && <Child />}

      <button
        onClick={() => {
          setToggle((oldToggle) => !oldToggle);
        }}
      >
        Toggle child
      </button>
    </>
  );
}

export default Parent;
