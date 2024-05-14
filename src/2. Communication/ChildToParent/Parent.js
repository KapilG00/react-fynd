import Child from "./Child";

function Parent() {
  const pi = 3.14;

  function childCommunicatorHandler(infoFromChild) {
    console.log("Incoming message from child:", infoFromChild);
  }

  return (
    <>
      <h3>Parent!!</h3>
      <Child childCommunicator={childCommunicatorHandler} />
    </>
  );
}

export default Parent;

// A child can communicate to parent through callback function passed to it by parent.
