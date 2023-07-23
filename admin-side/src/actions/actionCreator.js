import { DELETE_GAME, DELETE_GAME_FAILED, EDIT_GAME, EDIT_GAME_FAILED, FETCH_GAME_DETAIL_FAILED } from "./actionType";
import { FETCH_GENRE_FAILED } from "./actionType";
import { FETCH_GENRE } from "./actionType";
import { FETCH_GAME_FAILED } from "./actionType";
import {
    ADD_GAME,
    ADD_GAME_FAILED,
    FETCH_GAME,
    FETCH_GAME_DETAIL,
    LOGIN, LOGIN_FAILED,
    REGISTER,
    REGISTER_FAILED
}
    from "./actionType";

const baseUrl = "http://localhost:3000"

// ACTION GAME
export const gamesAction = (games) => ({
    type: FETCH_GAME,
    payload: games,
})

export const gamesActionFailed = (error) => ({
    type: FETCH_GAME_FAILED,
    payload: error
})

export const fetchGames = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/customer`);
        const jsonData = await response.json();

        dispatch(gamesAction(jsonData));
    } catch (error) {
        dispatch(gamesActionFailed(error))
    }
}

// ACTION ADD GAME
export const addGameAction = (game) => ({
    type: ADD_GAME,
    payload: game
})

export const addGameActionFailed = (error) => ({
    type: ADD_GAME_FAILED,
    payload: error
})

export const addGameMiddleware = (game) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/game`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                access_token: localStorage.getItem("access_token"),
            },
            body: JSON.stringify(game),
        });

        const jsonData = await response.json();

        if (!response.ok.ok) {
            throw jsonData.error;
        }

        dispatch(addGameAction(game));
    } catch (error) {
        dispatch(addGameActionFailed(error))
    }
}

// ACTION EDIT GAME
export const editGameAction = (game) => ({
    type: EDIT_GAME,
    payload: game
})

export const editGameActionFailed = (error) => ({
    type: EDIT_GAME_FAILED,
    payload: error
})

export const editGameMiddleware = (game, id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/game/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                access_token: localStorage.getItem("access_token"),
            },
            body: JSON.stringify(game),
        });

        const jsonData = await response.json();

        if (!response.ok.ok) {
            throw jsonData.error;
        }

        dispatch(editGameAction(game));
    } catch (error) {
        dispatch(editGameActionFailed(error))
    }
}

// ACTION DELETE GAME
export const deleteAction = (deletedGame) => ({
    type: DELETE_GAME,
    payload: deletedGame
})

export const deleteActionFailed = (error) => ({
    type: DELETE_GAME_FAILED,
    payload: error
})

export const deleteGameMiddleware = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/game/${id}`, {
            method: 'GET',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })

        const jsonData = await response.json()
        const responseDelete = await fetch(`${baseUrl}/admin/game/${id}`, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        const data = await responseDelete.json()
        if (!responseDelete) throw data.error
        dispatch(deleteAction(jsonData))
    } catch (error) {
        dispatch(deleteActionFailed(error))
    }
}

// ACTION GAME DETAIL
export const gamesDetailAction = (game) => ({
    type: FETCH_GAME_DETAIL,
    payload: game,
})

export const gamesDetailActionFailed = (error) => ({
    type: FETCH_GAME_DETAIL_FAILED,
    payload: error
})

export const fetchDetailGame = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/customer/${id}`);
        const jsonData = await response.json();

        dispatch(gamesDetailAction(jsonData));
    } catch (error) {
        dispatch(gamesDetailActionFailed(error))
    }
}

// ACTION GENRE
export const genreAction = (genre) => ({
    type: FETCH_GENRE,
    payload: genre
})

export const genreActionFailed = (error) => ({
    type: FETCH_GENRE_FAILED,
    payload: error
})

export const genreMiddleware = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/genres`, {
            method: 'GET',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        const jsonData = await response.json()
        if (!response.ok) throw jsonData.error

        dispatch(genreAction(jsonData))
    } catch (error) {
        dispatch(genreActionFailed(error))
    }
}

// ACTION GENRE DETAIL
export const genreDetailAction = (genre) => ({
    type: FETCH_GENRE,
    payload: genre
})

export const genreDetailActionFailed = (error) => ({
    type: FETCH_GENRE_FAILED,
    payload: error
})

export const genreDetailMiddleware = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/genres/${id}`, {
            method: 'GET',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        const jsonData = await response.json()
        if (!response.ok) throw jsonData.error

        dispatch(genreDetailAction(jsonData))
    } catch (error) {
        dispatch(genreDetailActionFailed(error))
    }
}

// ACTION ADD GENRE
export const genreAddAction = (genre) => ({
    type: FETCH_GENRE,
    payload: genre
})

export const genreAddActionFailed = (error) => ({
    type: FETCH_GENRE_FAILED,
    payload: error
})

export const genreAddMiddleware = (genre) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/genres`, {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                access_token: localStorage.getItem('access_token')
            },
            body: JSON.stringify(genre)
        })
        const jsonData = await response.json()
        if (!response.ok) throw jsonData.error

        dispatch(genreAddAction(genre))
    } catch (error) {
        dispatch(genreAddActionFailed(error))
    }
}

// ACTION EDIT GENRE 
export const genreEditAction = (genre) => ({
    type: FETCH_GENRE,
    payload: genre
})

export const genreEditActionFailed = (error) => ({
    type: FETCH_GENRE_FAILED,
    payload: error
})

export const genreEditMiddleware = (genre, id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/genres/${id}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                access_token: localStorage.getItem('access_token')
            },
            body: JSON.stringify(genre)
        })
        const jsonData = await response.json()
        if (!response.ok) throw jsonData.error

        dispatch(genreEditAction(genre))
    } catch (error) {
        dispatch(genreEditActionFailed(error))
    }
}

// ACTION DELETE GENRE
export const genreDeleteAction = (deleted) => ({
    type: FETCH_GENRE,
    payload: deleted
})

export const genreDeleteActionFailed = (error) => ({
    type: FETCH_GENRE_FAILED,
    payload: error
})

export const genreDeleteMiddleware = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/genres/${id}`, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        const jsonData = await response.json()
        if (!response.ok) throw jsonData.error

        dispatch(genreDeleteAction("Genre has been deleted"))
    } catch (error) {
        dispatch(genreDeleteActionFailed(error))
    }
}

// ACTION LOGIN
export const loginAction = () => ({
    type: LOGIN
})

export const loginActionFailed = (error) => ({
    type: LOGIN_FAILED,
    payload: error
})

export const loginMiddleware = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/login`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const jsonData = await response.json();

        if (!response.ok) {
            throw jsonData.error;
        }

        localStorage.setItem("access_token", jsonData.access_token);

        dispatch(loginAction());
    } catch (error) {
        dispatch(loginActionFailed(error));
    }
}

// ACTION REGISTER
export const registerAction = (registered) => ({
    type: REGISTER,
    payload: registered,
});

export const registerActionFailed = (error) => ({
    type: REGISTER_FAILED,
    payload: error,
});

export const registerMiddleware = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}/admin/register`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                access_token: localStorage.getItem("access_token"),
            },
            body: JSON.stringify(data),
        });

        const jsonData = await response.json();

        if (!response.ok) {
            throw jsonData.error;
        }

        dispatch(registerAction(jsonData));
    } catch (error) {
        dispatch(registerActionFailed(error));
    }
};