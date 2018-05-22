import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
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
    LIKED_POSTS_SUCCESS,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_REQUEST,
    CHANGE_CONTENT,
    FETCH_POST_DETAILS_SUCCESS,
    FETCH_POST_DETAILS_REQUEST,
    ADD_COMMENT_SUCCESS,
    COMMENT_FETCH_REQUEST,
    COMMENT_FETCH_SUCCESS,
    CHECK_EXISTING_EMAIL,
    EXISTING_EMAIL
} from '../actions/types';
import api from '../services/api';
import { push } from 'react-router-redux';
import { watch } from 'fs';

/* ------------------- SignUp ----------------------- */
function* signup(formdata) {
    try {
        const result = yield call(api.signup, formdata.payload);
        if (result.status === 401) {
            yield put(push('/signup'));
        } else {
            yield put({ type: SIGN_UP, payload: result });
            yield put(push('/login'));
        }
    } catch (err) {

    }
}

function* watchSignup() {
    yield takeEvery(SIGN_UP_REQUEST, signup);
}

/* ------------------- Login ----------------------- */
function* login(loginData) {
    try {
        const result = yield call(api.login, loginData.payload);
        yield put({ type: LOGIN_SUCCESS });
        yield put(push('/posts'));
    } catch (err) {

    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}

/* ------------------- Logout ----------------------- */
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

/* ------------------- Fetch Posts ----------------------- */
function* fetchPosts() {
    try {
        const result = yield call(api.fetchPosts);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        } else {
            const posts = yield result.json();
            yield put({ type: POSTS_FETCHED, payload: posts });
        }
    } catch (err) {

    }
}

function* watchFetchPosts() {
    yield takeEvery(POSTS_FETCH_REQUEST, fetchPosts);
}


/* ------------------- Post Like ----------------------- */
function* postLike(data) {
    try {
        const result = yield call(api.postLike, data.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        }
        else {
            const post = yield result.json();
            yield put({ type: POST_LIKE_SUCCESS, payload: post });
        }

    } catch (err) {

    }
}

function* watchPostLike() {
    yield takeEvery(POST_LIKE_REQUEST, postLike);
}

/* ------------------- Liked Posts ----------------------- */
function* likedPosts() {
    try {
        const result = yield call(api.likedPosts);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        }
        else {
            const likedPost = yield result.json();
            yield put({ type: LIKED_POSTS_SUCCESS, payload: likedPost });
        }
    } catch (err) {

    }
}

function* watchLikedPosts() {
    yield takeEvery(LIKED_POSTS_REQUEST, likedPosts);
}

/* ------------------- Add New Post ----------------------- */
function* addPost(postData) {
    try {
        const result = yield call(api.addPost, postData.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        } else {
            const newPost = yield result.json();
            yield put({ type: ADD_POST_SUCCESS, payload: newPost });
        }
    } catch (err) {
        //error handling
    }
}

function* watchAddPost() {
    yield takeEvery(ADD_POST_REQUEST, addPost);
}

/* ------------------- Post Detail ----------------------- */
function* postDetails(postId) {
    try {
        const result = yield call(api.postDetail, postId.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        } else {
            const postDetail = yield result.json();
            yield put({ type: FETCH_POST_DETAILS_SUCCESS, payload: postDetail });
            //yield put(push('/post/details'));
        }
    } catch (err) {

    }
}

function* watchPostDetails() {
    yield takeEvery(FETCH_POST_DETAILS_REQUEST, postDetails);
}


/* ------------------- Profile ----------------------- */
function* profile() {
    try {
        const result = yield call(api.profile);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        } else {
            const profile = yield result.json();
            yield put({ type: PROFILE_FETCH_SUCCESS, payload: profile });
        }

    } catch (err) {

    }
}

function* watchProfile() {
    yield takeEvery(PROFILE_FETCH_REQUEST, profile);
}

/* ------------------- Change Content ----------------------- */
function* changeContent() {

}

function* watchChangeContent() {
    yield takeEvery('CHANGE_CONTENT', changeContent);
}


/* ------------------- add Comment ----------------------- */
function* addComment(comment) {
    try {
        const result = yield call(api.addComment, comment.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        } else {
            const newComment = yield result.json();
            yield put({ type: ADD_COMMENT_SUCCESS, payload: newComment });
        }
    } catch (err) {
        //error handling
    }
}

function* watchAddComment() {
    yield takeEvery('ADD_COMMENT_REQUEST', addComment);
}


/* ------------------- Fetch Comments ----------------------- */
function* fetchComments(postId) {
    try {
        const result = yield call(api.fetchComments, postId.payload);
        if (result.status === 401 || result.status === 403) {
            yield put(push('/login'));
        } else {
            const comments = yield result.json();
            yield put({ type: COMMENT_FETCH_SUCCESS, payload: comments });
        }
    } catch (err) {

    }
}

function* watchFetchComments() {
    yield takeEvery('COMMENT_FETCH_REQUEST', fetchComments)
}


/* ----------- check existing email ----------- */
function* checkExistingEmail(email) {
    try {
        const result = yield call(api.checkExistingEmail, email.payload);
        if (result.status === 401) {
            yield put({ type: EXISTING_EMAIL });
        }
    } catch (err) {

    }
}

function* watchCheckExistingEmail() {
    yield takeEvery('CHECK_EXISTING_EMAIL', checkExistingEmail);
}

export default function* rootSaga() {
    yield all([watchFetchPosts(),
    watchSignup(),
    watchLogin(),
    watchLogout(),
    watchPostLike(),
    watchLikedPosts(),
    watchAddPost(),
    watchPostDetails(),
    watchProfile(),
    watchChangeContent(),
    watchAddComment(),
    watchFetchComments(),
    watchCheckExistingEmail()
    ]);
}
