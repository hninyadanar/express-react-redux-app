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
    LOGOUT_SUCCESS
} from '../actions/types';
import api from '../services/api';
import { push } from 'react-router-redux';

function* fetchPosts() {
    try {
        const result = yield call(api.fetchPosts);
        yield put({ type: POSTS_FETCHED, payload: result });
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
    console.log("***** logout saga *****");
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
        yield put({ type: POST_LIKE_SUCCESS, payload: result });
    } catch (err) {

    }
}

function* watchPostLike() {
    yield takeEvery(POST_LIKE_REQUEST, postLike);
}

function* addPost(postData) {
    try {
        const result = yield call(api.addPost, postData.payload);
        yield put({ type: ADD_POST_SUCCESS, payload: result });
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
    watchAddPost()]);
}
