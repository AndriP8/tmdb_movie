import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import searchReducer from "./reducers/search";

const middlwwares = [thunk, logger];

const store = createStore(
  searchReducer,
  composeWithDevTools(applyMiddleware(...middlwwares))
);

export default store;
