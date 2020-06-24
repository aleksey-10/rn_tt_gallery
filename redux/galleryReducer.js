import {
  GET_IMAGES,
  ON_DOWNLOAD_IMAGE,
  SENDING_IMAGE,
  REQUEST_IMAGES,
  POST_IMAGE,
} from './types';

const initState = {
  uri: '',
  images: [],
  isLoading: true,
  isImageLoading: false,
};

export const galleryReducer = (prevState = initState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...prevState,
        images: [...action.images],
        isLoading: false,
      };

    case ON_DOWNLOAD_IMAGE:
      return {
        ...prevState,
        isImageLoading: false,
      };

    case SENDING_IMAGE:
      return {
        ...prevState,
        isImageLoading: true,
        uri: action.uri,
      };

    default:
      return prevState;
  }
};

export const setImage = () => ({ type: ON_DOWNLOAD_IMAGE });

export const getImages = images => ({
  type: GET_IMAGES,
  images,
});

export const sendingImage = uri => ({
  type: SENDING_IMAGE,
  uri,
});

export const fetchImages = () => ({ type: REQUEST_IMAGES });

export const sendImage = uri => ({
  type: POST_IMAGE,
  uri,
});
