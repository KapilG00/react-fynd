import { createContext } from "react";

// const CartContext = createContext({
//   name: "kapil", // fallback state
//   count: 0, // fallback state
// });

const CartContext = createContext(); // created blank global state.

// Here, this "CartContext" has something known as "Provider".
// Through "Provider" we can provide data to all the components.

export default CartContext;
