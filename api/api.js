import * as axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://5ef2534725da2f0016227eb7.mockapi.io',
  baseURL: 'https://tt-gallry.firebaseio.com/',
});

export const galleryApi = {
  get() {
    return instance.get('/gallery.json').then(response => response.data);
  },
  add(uri) {
    return instance.post(`/gallery.json`, {
      image: uri,
      date: JSON.stringify(new Date()),
    });
  },
};
