import {
    POSTS_FETCH_REQUEST,
    POSTS_FETCHED,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    POST_LIKE_REQUEST,
    POST_LIKE_SUCCESS,
} from '../actions/types';
import { stat } from 'fs';

export default function posts(state = {
    list: [],
    fetching: false,
    fetched: false,
    addPostRequest: false,
    addPostSuccess: false,
    postLikeRequest: false,
    postLikeSuccess: false,
}, action) {
    switch (action.type) {
        case POSTS_FETCH_REQUEST:
            return { ...state, fetching: true };
        case POSTS_FETCHED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                list: action.payload
            };

        case 'ADD_POST_REQUEST':
            return { ...state, addPostRequest: true }
        case 'ADD_POST_SUCCESS':
            return {
                ...state,
                list: [...state.list, action.payload],
                addPostSuccess: true
            }

        case 'POST_LIKE_REQUEST':
            return { ...state, postLikeRequest: true }
        case 'POST_LIKE_SUCCESS':

            var posts = state.list.slice();
            posts[posts.findIndex(post => post.id === action.payload.id)] = action.payload;
            return {
                ...state,
                list: [ ...posts]
            }

        default: return state
    }
}