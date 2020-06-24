import { takeEvery, put, call } from 'redux-saga/effects';
import { getImages, sendingImage, setImage } from './galleryReducer';
import { REQUEST_IMAGES, POST_IMAGE } from './types';
import { galleryApi } from '../api/api';

export function * sagaWatcher() {
  yield takeEvery(REQUEST_IMAGES, sagaGetImages);
  yield takeEvery(POST_IMAGE, sagaPostImage);
}

function * sagaGetImages() {
  const payload = yield call(fetchImages);

  yield put(getImages(payload));
}

const fetchImages = () => galleryApi.get();

function * sagaPostImage({ uri }) {
  yield put(sendingImage(uri));

  const payload = yield call(() => sendImage(uri));

  yield put(setImage(payload));
}

const sendImage = uri => galleryApi.add(uri);
