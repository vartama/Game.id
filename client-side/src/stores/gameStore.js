import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import GameReducer from "../reducers/gameReducer";
import GameDetailReducer from "../reducers/gameDetailReducer";


const rootReducer = combineReducers({
  games: GameReducer,
  game: GameDetailReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


