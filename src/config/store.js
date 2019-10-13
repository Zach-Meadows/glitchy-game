import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  // put reducers here
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
