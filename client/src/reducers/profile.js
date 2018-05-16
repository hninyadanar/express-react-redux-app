import {
    PROFILE_FETCH_REQUEST,
    PROFOLE_FETCH_SUCCESS
} from '../actions/types';

export default function profile(state = {
    profileRequest: false,
    profileSuccess: false,
    profile: ''
}, action) {
    switch (action.type) {
        case 'PROFILE_FETCH_REQUEST':
            return { ...state, profileRequest: true }
        case 'PROFILE_FETCH_SUCCESS':
            return {
                ...state,
                profile: action.payload,
                profileSuccess: true
            }
        default: return state
    }
}