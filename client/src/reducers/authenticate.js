import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
} from '../actions/types';

export default function login(state = {
    loginRequest: false,
    loginSuccess: false,
    logoutRequest: false,
    logoutSuccess: false,
}, action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, loginRequest: true }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loginSuccess: true
            }

        case 'LOGOUT_REQUEST':
            return { ...state, logoutRequest: true }
        case 'LOGOUT_SUCCESS':
            return { ...state, logoutSuccess: true }
        default: return state
    }
}