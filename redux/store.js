import { createStore, combineReducers } from 'redux';
import { galleryReducer } from './galleryReducer';

const reducers = combineReducers({ gallery: galleryReducer });

export const store = createStore(reducers);
