import { FETCH_GAME, FETCH_GAME_FAILED } from "../actions/actionType";

const initialState = {
    games: [],
    errorMessage: ""
}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAME:
            return {
                ...state,
                games: action.payload
            }
        case FETCH_GAME_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default GameReducer