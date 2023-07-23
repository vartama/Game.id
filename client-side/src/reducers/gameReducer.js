import { FETCH_GAME } from "../actions/actionType";

const initialState = {
    games: []
}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAME:
            return {
                ...state,
                games: action.payload
            }
        default:
            return state
    }
}

export default GameReducer