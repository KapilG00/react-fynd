import { useEffect, useState } from "react";

function MultipleUseEffectComponent() {
  console.log("start of the component!!");

  const [count, setCount] = useState(0);
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    console.log("Inside useEffect 1!!");

    console.log("Inside useEffect 11!!");
    setCount((OldCount) => OldCount + 1);

    return () => {
      console.log("Inside useEffect cleanup 1!!");
    };
  }, [marks]);

  //   useEffect(() => {
  //     console.log("Inside useEffect 2!!");

  //     console.log("Inside useEffect 22!!");

  //     return () => {
  //       console.log("Inside useEffect cleanup 2!!");
  //     };
  //   });

  return (
    <>
      {console.log("Inside UI!!")}
      <h3>Multiple useEffect Component!!</h3>
    </>
  );
}

export default MultipleUseEffectComponent;
