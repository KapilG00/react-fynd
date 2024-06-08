import React from "react";

function Child() {
  console.log("Child rendering");
  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h3>Child!!</h3>
      </div>
    </>
  );
}

export default React.memo(Child);

// If no props or external change is given to you by parent component then you need to save yourself.

// React.memo -> Will save a snapshot of your child component, and will use that snapshot at every re-render
//               until and unless props changes.
