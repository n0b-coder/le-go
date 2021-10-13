import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {
      carouselImages: [
        'https://bulma.io/images/placeholders/800x480.png',
        'https://bulma.io/images/placeholders/800x480.png',
        'https://bulma.io/images/placeholders/800x480.png',
      ],
      cardImages: [
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
      ],
      galleryImages: [
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
        'https://bulma.io/images/placeholders/480x480.png',
      ],
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
