import { useEffect, useState } from "react";

function UseEffectTestCleanupComponent() {
  //   const [count, setCount] = useState(0);

  console.log("start of the component!!");

  useEffect(() => {
    console.log("Inside useEffect1!!");

    console.log("Inside useEffect2!!");

    // function incrementHandler() {
    //   console.log("inside increment handler!!");
    //   setCount((oldCount) => oldCount + 1);
    // }

    // incrementHandler();

    return () => {
      console.log("Inside useEffect cleanup!!");
    };
  }, []);

  return (
    <>
      {console.log("Inside UI!!")}
      <h3>Cleanup Component!!</h3>
      {/* <div>
        {count}
        <button>Increment</button>
      </div> */}
    </>
  );
}

export default UseEffectTestCleanupComponent;
