import {
    POSTS_FETCH_REQUEST,
    POSTS_FETCHED,
    SIGN_UP_REQUEST,
    SIGN_UP,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    POST_LIKE_REQUEST,
    POST_LIKE_SUCCESS,
    POST_LIKE_INCREMENT,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS
} from './types';

export default {

    signupRequest: formdata => ({
        type: SIGN_UP_REQUEST,
        payload: formdata
    }),

    signup: () => ({
        type: SIGN_UP,
    }),

    loginRequest: loginData => ({
        type: LOGIN_REQUEST,
        payload: loginData
    }),

    loginSuccess: () => ({
        type: LOGIN_SUCCESS
    }),

    logoutRequest: authenticate => ({
        type: LOGOUT_REQUEST,
        payload: authenticate
    }),

    logoutSuccess: () => ({
        type: LOGOUT_SUCCESS
    }),

    postsFetchRequest: () => ({
        type: POSTS_FETCH_REQUEST
    }),

    postsFetched: posts => ({
        type: POSTS_FETCHED,
        payload: posts
    }),

    postLikeRequest: data => ({
        type: POST_LIKE_REQUEST,
        payload: data
    }),

    postLikeSuccess: post => ({
        type: POST_LIKE_SUCCESS,
        payload: post
    }),

    addPostRequest: postData => ({
        type: ADD_POST_REQUEST,
        payload: postData
    }),

    addPostSuccess: newPost => ({
        type: ADD_POST_SUCCESS,
        payload: newPost
    })
}