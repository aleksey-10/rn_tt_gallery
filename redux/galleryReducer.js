const ON_DOWNLOAD_IMAGE = 'ON_DOWNLOAD_IMG';

const initState = {
  uri: '',
  images: [],
};

export const galleryReducer = (prevState = initState, action) => {
  switch (action.type) {
    case ON_DOWNLOAD_IMAGE:
      return {
        ...prevState,
        uri: action.uri,
        images: [
          ...prevState.images,
          {
            uri: action.uri,
          },
        ],
      };

    default:
      return prevState;
  }
};

export const getUri = uri => ({
  type: ON_DOWNLOAD_IMAGE,
  uri,
});
