import Cart from "./Cart";

function ReuseComponent() {
  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <h3>Reuse Component Page!!</h3>
        <Cart />
      </div>
    </>
  );
}

export default ReuseComponent;
