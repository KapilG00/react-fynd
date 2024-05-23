import { configureStore, legacy_createStore } from "redux";
import counterReducer from "./reducer";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const store = legacy_createStore(counterReducer);

export default store;
