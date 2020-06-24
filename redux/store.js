import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { galleryReducer } from './galleryReducer';
import { sagaWatcher } from './sagas';

const reducers = combineReducers({ gallery: galleryReducer });

const saga = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(saga),
);

saga.run(sagaWatcher);
