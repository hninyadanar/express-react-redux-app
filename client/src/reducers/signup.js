import {
    SIGN_UP_REQUEST,
    SIGN_UP
} from '../actions/types';

export default function signup(state = {
    signupSuccess: false,
    signUp: false,
}, action) {
    switch (action.type) {
        case 'SIGN_UP_REQUEST':
            return { ...state, signUp: true }
        case 'SIGN_UP':
            return { ...state, signupSuccess: true }
        default: return state
    }
}