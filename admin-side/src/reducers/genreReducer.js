import { FETCH_GENRE, FETCH_GENRE_FAILED } from "../actions/actionType";

const initialState = {
    genres: [],
    errorMessage: "",
  };
  
  const genreReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GENRE:
        return {
          ...state,
          genres: action.payload,
        };
      case FETCH_GENRE_FAILED:
        return {
          ...state,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default genreReducer;
  