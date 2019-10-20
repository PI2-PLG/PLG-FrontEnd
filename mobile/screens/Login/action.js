import {
    LOGIN, LOGOUT, CURRENT_USER
} from './type';

export const login = () => ({
    type: LOGIN,
});

export const logout = () => ({
    type: LOGOUT,
});

export const getCurrentUser = data => ({
    type: CURRENT_USER,
    payload: data
});