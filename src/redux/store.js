import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from '../redux/reducers/postReducer';
import { watchPosts } from '../redux/sagas/postSaga';

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchPosts);