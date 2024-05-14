import { useEffect } from "react";

function UseEffectTestComponent() {
  useEffect(() => {
    console.log("INSIDE useEffect!!");
  }, []);

  return (
    <>
      {console.log("Inside UI!!")}
      <h3>Use Effect Test Component!!</h3>
    </>
  );
}

export default UseEffectTestComponent;
