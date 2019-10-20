import {
    LOGIN, LOGOUT, CURRENT_USER
} from './type';

const initialState = {
    user: {
        username: "",
        name: "",
        email: "",
        notification_token: "",
    },
    currentUser: {},
    isAuthenticated: false
}

export default (state = initialState, action) => {
    let payload;
    let user;

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }

        case CURRENT_USER:
            payload = action.payload;

            return {
                ...state,
                currentUser: payload
            }

        default:
            return state;
    }
}