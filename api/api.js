import * as axios from 'axios';

const instance = axios.create({
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
