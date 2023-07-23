import { REGISTER, REGISTER_FAILED } from "../actions/actionType";

const initialState = {
    registerAdmin : {},
    errorMessage: ''
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                registerAdmin: action.payload
            }
        case REGISTER_FAILED: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        default:
            return state
    }
}

export default registerReducer