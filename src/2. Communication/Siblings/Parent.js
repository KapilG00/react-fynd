import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const pi = 3.14;

  const [child1Marks, setChild1Marks] = useState();

  function childCommunicatorHandler(messageFromChild, childMarks) {
    console.log("Incoming message from child:", messageFromChild, childMarks);
    setChild1Marks(childMarks);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h3>Parent!!</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Child1 childCommunicator={childCommunicatorHandler} />
          <Child2 child1Marks={child1Marks} />
        </div>
      </div>
    </>
  );
}

export default Parent;

// A child1 can communicate to parent through callback function passed to it by parent.
// And then parent can communicate to child2 through props.
