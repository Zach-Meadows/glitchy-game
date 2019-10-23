import { createStore, combineReducers } from "redux";
import playerReducer from "../features/Player/reducer";
import mapReducer from "../features/Map/reducer";
import textReducer from "../features/Textbox/reducer"

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  text: textReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
