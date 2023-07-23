import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import GameDetailReducer from "../reducers/gameDetailReducer"
import GameReducer from "../reducers/gameReducer"
import { CLEAR_STATE } from "../actions/actionType";
import loginReducer from "../reducers/loginReducer";
import registerReducer from "../reducers/registerReducer";
import genreReducer from "../reducers/genreReducer";
import genreAddReducer from "../reducers/genreAddReducer";
import genreEditReducer from "../reducers/genreEditReducer";
import genreDetailReducer from "../reducers/genreDetailReducer";
import genreDeleteReducer from "../reducers/genreDeleteReducer";
import gameEditReducer from "../reducers/gameEditReducer";
import gameDeleteReducer from "../reducers/gameDeleteReducer";
import gameAddReducer from "../reducers/gameAddReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  
  games: GameReducer,
  game: GameDetailReducer,
  addGame: gameAddReducer,
  editGame: gameEditReducer,
  deletedGame: gameDeleteReducer,

  genres: genreReducer,
  genre: genreDetailReducer,
  addGenre: genreAddReducer,
  editGenre: genreEditReducer,
  deleteGenre: genreDeleteReducer

})

const appReducer = (state, action) => {
  if (action.type === CLEAR_STATE) return rootReducer(undefined, action)
  return rootReducer (state, action)
}

const store = createStore(appReducer, applyMiddleware(thunk));

export default store