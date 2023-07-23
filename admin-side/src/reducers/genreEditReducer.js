import { EDIT_GENRE, EDIT_GENRE_FAILED } from "../actions/actionType";

const initialState = {
    editedGenre: {},
    errorMessage: "",
  };
  
  const genreEditReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_GENRE:
        return {
          ...state,
          editedGenre: action.payload,
        };
      case EDIT_GENRE_FAILED:
        return {
          ...state,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default genreEditReducer;