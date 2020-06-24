import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://5ef2534725da2f0016227eb7.mockapi.io',
});

export const galleryApi = {
  get() {
    return instance.get('/gallery').then(response => response.data);
  },
  add(uri) {
    return instance.post(`/gallery`, { uri });
  },
};
