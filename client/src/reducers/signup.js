import {
    SIGN_UP_REQUEST,
    SIGN_UP,
    CHECK_EXISTINT_EMAIL,
    EXISTING_EMAIL
} from '../actions/types';

export default function signup(state = {
    signupSuccess: false,
    signUp: false,
    checkExistingEmailRequest: false,
    existingEmail: false
}, action) {
    switch (action.type) {
        case 'SIGN_UP_REQUEST':
            return { ...state, signUp: true }
        case 'SIGN_UP':
            return { ...state, signupSuccess: true }

        case 'CHECK_EXISTING_EMAIL':
            return { ...state, checkExistingEmail: true }
        case 'EXISTING_EMAIL':
            return { ...state, existingEmail: true }

        default: return state
    }
}