import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./3. CounterAppUsingRedux/store";
import Counter from "./3. CounterAppUsingRedux/Counter";
import { BrowserRouter } from "react-router-dom";
import RoutingApp from "./10. RoutingApp/RoutingApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
  // <Provider store={store}>
  //   <Counter />
  // </Provider>

  // <BrowserRouter>
  //   <RoutingApp />
  // </BrowserRouter>
);
