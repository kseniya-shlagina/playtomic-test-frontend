import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

export const initStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
