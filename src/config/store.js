import { createStore, combineReducers } from "redux";
import playerReducer from "../features/Player/reducer";
import mapReducer from "../features/Map/reducer";
import textReducer from "../features/Textbox/reducer"
import zoneReducer from "../features/Zone/reducer"

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  textbox: textReducer,
  zone: zoneReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
