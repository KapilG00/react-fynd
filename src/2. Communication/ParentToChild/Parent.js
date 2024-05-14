import Child from "./Child";

function Parent() {
  const pi = 3.14;

  return (
    <>
      <h3>Parent!!</h3>
      <Child pi={pi} />
    </>
  );
}

export default Parent;

// A parent can communicate to child through props.
