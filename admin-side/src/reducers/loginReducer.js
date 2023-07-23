import { LOGIN, LOGIN_FAILED } from "../actions/actionType";

const initialState = {
    isLogin: false,
    errorMessage: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default loginReducer