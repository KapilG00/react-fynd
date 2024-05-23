import { useEffect, useState } from "react";

// 3 flavours of useEffect.
function UseEffectHookFlavours() {
  const [counter, setCounter] = useState(0);
  const [newCounter, setNewCounter] = useState(0);
  const [phase, setPhase] = useState("MOUNTING PHASE!!");

  console.log("Phase of component:-", phase);

  // 1. Flavour 1: No dependency array.
  //    It works in Mounting phase, Update phase and in Unmounting phase.
  //    We rarely use this flavour.
  //    We should never use useState (setData) inside flavour 1.
  useEffect(() => {
    console.log("Inside useEffect flavour 1");

    // It is a cleanup function which useEffect can return.
    return () => {
      // This is an UNMOUNTING PHASE.
      // Here we can do following things;
      // 1. clear setTimeouts.
      // 2. clear setIntervals.
      // 3. can set obj = null; explicitly for garbage collection.
      // 4. can perform logging, etc.
      console.log("UNMOUNTING PHASE: Inside cleanup of flavour 1");
    };
  });

  // 2. Flavour 2: Blank dependency array.
  //    It works in Mounting phase and in Unmounting phase.
  useEffect(() => {
    console.log("Inside useEffect flavour 2");

    // It is a cleanup function which useEffect can return.
    return () => {
      // This is an UNMOUNTING PHASE.
      // Here we can do following things;
      // 1. clear setTimeouts.
      // 2. clear setIntervals.
      // 3. can set obj = null; explicitly for garbage collection.
      // 4. can perform logging, etc.
      console.log("UNMOUNTING PHASE: Inside cleanup of flavour 2");
    };
  }, []);

  // 3. Flavour 3: Filled dependency array.
  //    It works in Mounting phase, selectively in Update phase and in Unmounting phase.
  //    If any of the state variable in dependency array changes then useEffect will run.
  useEffect(() => {
    console.log("Inside useEffect flavour 3");

    // It is a cleanup function which useEffect can return.
    return () => {
      // This is an UNMOUNTING PHASE.
      // Here we can do following things;
      // 1. clear setTimeouts.
      // 2. clear setIntervals.
      // 3. can set obj = null; explicitly for garbage collection.
      // 4. can perform logging, etc.
      console.log("UNMOUNTING PHASE: Inside cleanup of flavour 3");
    };
  }, [newCounter]);

  return (
    <>
      <h3>useEffect flavour 1!!</h3>
      {console.log("INSIDE UI!!")}
      <p>Counter 1: {counter}</p>
      <p>Counter 2: {newCounter}</p>

      <button
        onClick={() => {
          setCounter((oldCounter) => oldCounter + 1);
          setPhase("UPDATE PHASE!!");
        }}
      >
        Increment counter 1
      </button>

      <button
        onClick={() => {
          setNewCounter((oldCounter) => oldCounter + 1);
          setPhase("UPDATE PHASE!!");
        }}
      >
        Increment counter 2
      </button>
    </>
  );
}

export default UseEffectHookFlavours;
