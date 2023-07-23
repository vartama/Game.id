import { FETCH_GAME, FETCH_GAME_DETAIL, LOADING } from "./actionType";

const baseUrl = "http://localhost:3000"

// ACTION
export const gamesAction = (games) => ({
    type: FETCH_GAME,
    payload: games,
})

export const loading = (load) => ({
    type: LOADING,
    payload: load
})

// MIDDLEWARE
export const fetchGames = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/customer`);
        const jsonData = await response.json();

        dispatch(gamesAction(jsonData));
    } catch (error) {
        console.log(error);
    }
}

// ACTION

export const gamesDetailAction = (game) => ({
    type: FETCH_GAME_DETAIL,
    payload: game,
})

// MIDDLEWARE
export const fetchDetailGame = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/customer/${id}`);
        const jsonData = await response.json();

        dispatch(gamesDetailAction(jsonData));
    } catch (error) {
        console.log(error);
    }
}