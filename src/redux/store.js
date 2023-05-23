import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './reducers/postReducer';
import { watchPosts } from './sagas/postSaga';


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchPosts);