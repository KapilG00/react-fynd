import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  // Consumption of data provided by context api inside component.
  const contextData = useContext(CartContext);
  console.log("context data:", contextData);

  // Setting default values incase if any value is undefined or such.
  const { productCount = 0, setProductCount = () => {} } = contextData;

  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <div style={{ background: "lightblue" }}>
          <h3>Cart Page!!</h3>
          <button
            onClick={() => {
              setProductCount((oldProductCount) => oldProductCount - 1);
            }}
          >
            -
          </button>
          <p>Product Count: {productCount}</p>
          <button
            onClick={() => {
              setProductCount((oldProductCount) => oldProductCount + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
