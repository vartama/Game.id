import { DELETE_GAME, DELETE_GAME_FAILED } from "../actions/actionType";

const initialState = {
    deletedGame: {},
    errorMessage: ''
}

const gameDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_GAME:
            return {
                ...state,
                deletedGame: action.payload
            }
        case DELETE_GAME_FAILED: 
        return {
            ...state,
            errorMessage: action.payload
        }
        default:
            return state;
    }
}

export default gameDeleteReducer