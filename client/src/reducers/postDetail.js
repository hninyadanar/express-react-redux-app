import {
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_SUCCESS
} from '../actions/types';

export default function postDetail(state = {
    fetchPostDetailsRequest: false,
    fetchPostDetailsSuccess: false,
    details: ''
}, action) {
    switch (action.type) {
        case 'FETCH_POST_DETAILS_REQUEST':
            return { ...state, fetchPostDetailsRequest: true }
        case 'FETCH_POST_DETAILS_SUCCESS':
            return {
                ...state,
                details: action.payload,
                fetchPostDetailsSuccess: true
            }
        default: return state
    }
}