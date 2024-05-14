import { useState } from "react";

function expensiveWeightCalculation() {
  console.log("expensiveCalculation working");
  return "6 * 10^31 Kg";
}

function CounterComponent() {
  console.log("counter component re-rendering");

  // Here, "count" is state variable and not JS variable.
  const [count, setCount] = useState(0);

  // This way of writing leads to expensive function call at every re-renders, which is not efficient.
  // const [sunWeight, setSunWeight] = useState(expensiveWeightCalculation());

  // LAZY INITIALIZATION: This function expensiveCalculation will work only 1 time (initially)
  // and it will not work in future re-renderings.
  const [sunWeight, setSunWeight] = useState(() => {
    return expensiveWeightCalculation();
  });

  // setCount guarantees 2 things:
  // 1. Update the "count".
  // 2. Re-render (re-run) the counter component.

  // 1. Should not go with this way.
  // function countIncrementHandler() {
  //     setCount(count + 1);
  // }

  // function countDecrementHandler() {
  //     setCount(count - 1);
  // }

  // 2. Issue with using setCount(count + 1) or setCount(count - 1) multiple times.
  // function countIncrementHandler() {
  //     // 1st way.
  //     // setCount(count + 4)

  //     // 2nd way.
  //     // Should not use this if your new state is dependent on old state.
  //     // React will batches all the 4 setCount(count + 1) and perform it only once.
  //     // See the screenshot(BatchQueue.png) for reference.
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  // }

  // function countDecrementHandler() {
  //     // 1st way.
  //     // setCount(count - 4)

  //     // 2nd way.
  //     // Should not use this if your new state is dependent on old state.
  //     // React will batches all the 4 setCount(count - 1) and perform it only once.
  //     // See the screenshot(BatchQueue.png) for reference.
  //     setCount(count - 1);
  //     setCount(count - 1);
  //     setCount(count - 1);
  //     setCount(count - 1);
  // }

  // // 3. Should use this if your new state is dependent on old state.
  // //    If we want to use using setCount(count + 1) or setCount(count - 1) multiple times.
  // //    Here, Batch Queue is not JS queue but it is React queue.
  // //    After updating the value of count 4 times, the setCount((oldCount) => oldCount + 1) will go into the call stack only once to execute.
  // function countIncrementHandler() {
  //     // React will batches all the 4 setCount(count + 1) and perform it only once.
  //     // See the screenshot(BatchQueue.png) for reference.
  //     setCount((oldCount) => oldCount + 1);
  //     setCount((oldCount) => oldCount + 1);
  //     setCount((oldCount) => oldCount + 1);
  //     setCount((oldCount) => oldCount + 1);
  // }

  // function countDecrementHandler() {
  //     // React will batches all the 4 setCount(count -1 1) and perform it only once.
  //     // See the screenshot(BatchQueue.png) for reference.
  //     setCount((oldCount) => oldCount - 1);
  //     setCount((oldCount) => oldCount - 1);
  //     setCount((oldCount) => oldCount - 1);
  //     setCount((oldCount) => oldCount - 1);
  // }

  // 4. Should use this if your new state is dependent on old state.
  function countIncrementHandler() {
    setCount((oldCount) => oldCount + 1);
  }

  function countDecrementHandler() {
    setCount((oldCount) => oldCount - 1);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div>{count}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={countIncrementHandler}>Increment</button>

          <button onClick={countDecrementHandler}>Decrement</button>

          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Reset Counter
          </button>
        </div>

        <div>
          <h1>Sun Weight</h1>
          {sunWeight}
        </div>
      </div>
    </>
  );
}

export default CounterComponent;
