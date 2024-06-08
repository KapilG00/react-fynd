import { useState } from "react";
import GroceryPage from "./Components/GroceryPage";
import ProductDetailPage from "./Components/ProductDetailPage";
import ReuseComponent from "./Components/ReuseComponent";
import CartContext from "./context/CartContext";

function ContextApiReactApp() {
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <h3>Context API React App Page!!</h3>

      <CartContext.Provider value={{ productCount, setProductCount }}>
        <GroceryPage />
        <ProductDetailPage />
        <ReuseComponent />
      </CartContext.Provider>
    </>
  );
}

export default ContextApiReactApp;

/*
Note: If a parent is connected to global state then it's child is automatically connected to the same.
*/

// STEPS:

// 1. Create component and its hierarchy.
// 2. Create a context.
// 3. Connect components to context through PROVIDER (<CartContext.Provider>).
// 4. Consume in the component (useContext(CartContext));.
