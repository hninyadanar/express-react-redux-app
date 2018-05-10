import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
    POSTS_FETCH_REQUEST,
    POSTS_FETCHED,
    SIGN_UP_REQUEST,
    SIGN_UP,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    POST_LIKE_REQUEST,
    POST_LIKE_SUCCESS,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LIKED_POSTS_REQUEST,
    LIKED_POSTS_SUCCESS
} from '../actions/types';
import api from '../services/api';
import { push } from 'react-router-redux';

function* fetchPosts() {
    try {
        const result = yield call(api.fetchPosts);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        }
        const posts = yield result.json();
        yield put({ type: POSTS_FETCHED, payload: posts });
    } catch (err) {

    }
}

function* watchFetchPosts() {
    yield takeEvery(POSTS_FETCH_REQUEST, fetchPosts);
}

function* signup(formdata) {
    try {
        const result = yield call(api.signup, formdata.payload);
        yield put({ type: SIGN_UP, payload: result });
        yield put(push('/login'));
    } catch (err) {

    }
}

function* watchSignup() {
    yield takeEvery(SIGN_UP_REQUEST, signup);
}

function* login(loginData) {
    try {
        const result = yield call(api.login, loginData.payload);
        yield put({ type: LOGIN_SUCCESS });
        yield put(push('/posts'));
    } catch (err) {

    }
}

function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, login);
}

function* logout() {
    try {
        yield call(api.logout);
        yield put({ type: LOGOUT_SUCCESS });
        yield put(push('/login'));
    } catch (err) {

    }
}

function* watchLogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}

function* postLike(data) {
    try {
        const result = yield call(api.postLike, data.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        }
        const post = yield result.json();
        yield put({ type: POST_LIKE_SUCCESS, payload: post });
    } catch (err) {

    }
}

function* watchPostLike() {
    yield takeEvery(POST_LIKE_REQUEST, postLike);
}

function* likedPosts() {
    try {
        const result = yield call(api.likedPosts);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        }
        const likedPost = yield result.json();
        yield put({ type: LIKED_POSTS_SUCCESS, payload: likedPost });

    } catch (err) {

    }
}

function* watchLikedPosts() {
    yield takeEvery(LIKED_POSTS_REQUEST, likedPosts);
}

function* addPost(postData) {
    try {
        const result = yield call(api.addPost, postData.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        }
        const newPost = yield result.json();
        yield put({ type: ADD_POST_SUCCESS, payload: newPost });
    } catch (err) {
        //error handling
    }
}

function* watchAddPost() {
    yield takeEvery(ADD_POST_REQUEST, addPost);
}

export default function* rootSaga() {
    yield all([watchFetchPosts(),
    watchSignup(),
    watchLogin(),
    watchLogout(),
    watchPostLike(),
    watchLikedPosts(),
    watchAddPost()]);
}
