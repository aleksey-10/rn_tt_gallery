import { galleryApi } from '../api/api';

const ON_DOWNLOAD_IMAGE = 'ON_DOWNLOAD_IMG';
const GET_IMAGES = 'GET_IMAGES';
const SENDING_IMAGE = 'SENDING_IMAGE';

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

const getImages = images => ({
  type: GET_IMAGES,
  images,
});

const sendingImage = uri => ({
  type: SENDING_IMAGE,
  uri,
});

export const fetchImages = () => (dispatch) => {
  galleryApi.get().then(images => dispatch(getImages(images)));
};

export const sendImage = uri => (dispatch) => {
  dispatch(sendingImage(uri));

  galleryApi.add(uri).then(() => dispatch(setImage()));
};
