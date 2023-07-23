import { FETCH_GAME_DETAIL } from "../actions/actionType";

const initialState = {
    game: []
}

const GameDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAME_DETAIL:
            return {
                ...state,
                game: action.payload
            }
        default:
            return state
    }
}

export default GameDetailReducer