import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { galleryReducer } from './galleryReducer';

const reducers = combineReducers({ gallery: galleryReducer });

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
