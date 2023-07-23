import { FETCH_GAME_DETAIL, FETCH_GAME_DETAIL_FAILED } from "../actions/actionType";

const initialState = {
    genreDetail: {},
    errorMessage: "",
  };
  
  const genreDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GAME_DETAIL:
        return {
          ...state,
          genreDetail: action.payload,
        };
      case FETCH_GAME_DETAIL_FAILED:
        return {
          ...state,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default genreDetailReducer;
  