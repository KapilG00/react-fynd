import React from "react";
import ChildFR from "./ChildFR";

function ParentFR() {
  const ref = React.createRef();

  console.log("ref in parent:", ref);

  function focusOnClickHandler() {
    ref.current.focus();
  }

  return (
    <>
      <h3>Parent Forwarding Ref!!</h3>
      <ChildFR ref={ref} />
      <button onClick={focusOnClickHandler}>Focus Input</button>
    </>
  );
}

export default ParentFR;
