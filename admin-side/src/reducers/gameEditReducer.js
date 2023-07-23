import { EDIT_GAME, EDIT_GAME_FAILED } from "../actions/actionType";

const initialState = {
    editGame: {},
    errorMessage: ''
}

const gameEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_GAME:
            return {
                ...state,
                editGame: action.payload
            }
        case EDIT_GAME_FAILED: 
        return {
            ...state,
            errorMessage: action.payload
        }
        default:
            return state;
    }
}

export default gameEditReducer