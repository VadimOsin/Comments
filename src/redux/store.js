import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './reducers/Reducer';
import { watchPosts } from './sagas/Saga';


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchPosts);