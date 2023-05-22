
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS, FETCH_COMMENTS, fetchPostsSuccess, fetchCommentsSuccess } from '../actions/postActions';

function* fetchPostsSaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts?_limit=10');
        yield put(fetchPostsSuccess(response.data));
    } catch (error) {

    }
}

function* fetchCommentsSaga(action) {
    try {
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${action.payload}`);
        yield put(fetchCommentsSuccess({ postId: action.payload, comments: response.data }));
    } catch (error) {

    }
}

export function* watchPosts() {
    yield takeEvery(FETCH_POSTS, fetchPostsSaga);
    yield takeEvery(FETCH_COMMENTS, fetchCommentsSaga);
}
