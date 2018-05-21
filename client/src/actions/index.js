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
    ADD_POST_SUCCESS,
    LIKED_POSTS_REQUEST,
    LIKED_POSTS_SUCCESS,
    IMAGE_UPLOAD_REQUEST,
    IMAGE_UPLOAD_SUCCESS,
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_SUCCESS,
    CHANGE_CONTENT,
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    COMMENT_FETCH_REQUEST,
    COMMENT_FETCH_SUCCESS
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

    logoutSuccess: (user) => ({
        type: LOGOUT_SUCCESS,
        payload: user
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

    likedPostsRequest: () => ({
        type: LIKED_POSTS_REQUEST
    }),

    likedPostsSuccess: likedPosts => ({
        type: LIKED_POSTS_SUCCESS,
        payload: likedPosts
    }),

    addPostRequest: postData => ({
        type: ADD_POST_REQUEST,
        payload: postData
    }),

    addPostSuccess: newPost => ({
        type: ADD_POST_SUCCESS,
        payload: newPost
    }),

    fetchPostDetailsRequest: postId => ({
        type: FETCH_POST_DETAILS_REQUEST,
        payload: postId
    }),

    fetchPostDetailsSuccess: (postDetail) => ({
        type: FETCH_POST_DETAILS_SUCCESS,
        payload: postDetail
    }),

    profileFetchRequest: () => ({
        type: PROFILE_FETCH_REQUEST
    }),

    profileFetchSuccess: (profile) => ({
        type: PROFILE_FETCH_SUCCESS,
        payload: profile
    }),

    changeContent: (key) => ({
        type: CHANGE_CONTENT,
        menuItem: key
    }),

    addCommentRequest: comment => ({
        type: ADD_COMMENT_REQUEST,
        payload: comment
    }),

    addCommentSuccess: (comment) => ({
        type: ADD_COMMENT_SUCCESS,
        payload: comment
    }),

    commentFetchRequest: (postId) => ({
        type: COMMENT_FETCH_REQUEST,
        payload: postId
    }),

    commentFetchSuccess: (comments) => ({
        type: COMMENT_FETCH_SUCCESS,
        payload: comments
    })
}