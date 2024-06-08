import React from "react";

function Child(props) {
  console.log("Child rendering");
  const { arr } = props;

  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h3>Child!!</h3>
        <p>{arr}</p>
      </div>
    </>
  );
}

export default React.memo(Child);

// If no props or external change is given to you by parent component then you need to save yourself.

// React.memo -> Will save a snapshot of your child component, and will use that snapshot at every re-render
//               until and unless props changes.

// In here the "arr" props are changing.

// "React.memo" memoize component.
