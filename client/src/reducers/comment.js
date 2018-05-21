import {
    COMMENT_FETCH_REQUEST,
    COMMENT_FETCH_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS
} from '../actions/types';

export default function comment(state = {
    commentFetchRequest: false,
    commentFetchSuccess: false,
    commentList: [],
    addCommentRequest: false,
    addCommentSuccess: false
}, action) {
    switch (action.type) {

        case 'COMMENT_FETCH_REQUEST':
            return { ...state, commentFetchRequest: true }
        case 'COMMENT_FETCH_SUCCESS':
            return {
                ...state,
                commentList: action.payload,
                commentFetchSuccess: true
            }

        case 'ADD_COMMENT_REQUEST':
            return { ...state, addCommentRequest: true }
        case 'ADD_COMMENT_SUCCESS':
            return {
                ...state,
                commentList: [...state.commentList, action.payload],
                addCommentSuccess: true,
            }
        default: return state
    }
}