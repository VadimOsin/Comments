import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_POSTS,
    FETCH_COMMENTS,
    fetchPostsSuccess,
    fetchCommentsSuccess,
    fetchUser,
    FETCH_USER,
    fetchUserPostsSuccess,
    FETCH_USER_POSTS
} from '../actions/Actions';

function* fetchPostsSaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts?_limit=20');
        yield put(fetchPostsSuccess(response.data));
    } catch (error) {
        // Обработка ошибок при неудачном запросе
    }
}

function* fetchCommentsSaga(action) {
    try {
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${action.payload}`);
        yield put(fetchCommentsSuccess({ postId: action.payload, comments: response.data }));
    } catch (error) {
        // Обработка ошибок при неудачном запросе
    }
}

function* fetchUserSaga(action) {
    try {
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${action.payload}`);
        yield put(fetchUser(response.data));
    } catch (error) {
        // Обработка ошибок при неудачном запросе
    }
}

function* fetchUserPostSaga(action) {
    try {
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${action.payload}/posts`);
        yield put(fetchUserPostsSuccess({ userId: action.payload, posts: response.data }));
    } catch (error) {
        // Обработка ошибок при неудачном запросе
    }
}

export function* watchPosts() {
    yield takeEvery(FETCH_POSTS, fetchPostsSaga);
    yield takeEvery(FETCH_COMMENTS, fetchCommentsSaga);
    yield takeEvery(FETCH_USER, fetchUserSaga);
    yield takeEvery(FETCH_USER_POSTS, fetchUserPostSaga);
}
