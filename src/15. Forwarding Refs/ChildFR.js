import React from "react";

const ChildFR = React.forwardRef((props, ref) => {
  return (
    <>
      <h3>Child Forwarding Ref!!</h3>
      <input type="text" ref={ref} />
    </>
  );
});

export default ChildFR;
