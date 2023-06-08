import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combineReducers from "../reducer/combine";
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart.cart));
});

export default store;
