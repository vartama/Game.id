import { ADD_GAME, ADD_GAME_FAILED } from "../actions/actionType";

const initialState = {
    newGame: {},
    errorMessage: ''
}

const gameAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GAME:
            return {
                ...state,
                newGame: action.payload
            }
        case ADD_GAME_FAILED: 
        return {
            ...state,
            errorMessage: action.payload
        }
        default:
            return state;
    }
}

export default gameAddReducer