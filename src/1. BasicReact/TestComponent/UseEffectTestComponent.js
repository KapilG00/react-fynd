import { useEffect } from "react";

function UseEffectTestComponent() {
  console.log("start of the component!!");
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
