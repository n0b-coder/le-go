<template>
  <div class="home">
    <splide>
      <splide-slide v-for="image in images.carouselImages" :key=image.id>
        <img style="width: 100%" :src="image">
      </splide-slide>
    </splide>
    <div class="container">
      <section class="hero is-medium">
        <div class="hero-body">
          <p class="lego-titles title has-text-left pb-3">
            Encuentra el modelo Lego
          </p>
          <div class="columns is-multiline is-justify-content-space-between">
      <div v-for="imageCard in images.cardImages" :key="imageCard.id"
      class="is-one-quarter-desktop column is-clickable">
        <image-cards
          :imgUrl = "imageCard"
        />
      </div>
    </div>
        </div>
      </section>
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="is-flex is-flex-direction-row-reverse is-align-items-center">
            <p class="title has-text-right lego-titles">
              Visualiza el vídeo demostración
            </p>
            <figure class="image id-4by3">
              <img src="https://bulma.io/images/placeholders/800x480.png">
            </figure>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ImageCards from '@/components/ImageCards.vue';

export default {
  name: 'Home',
  components: {
    ImageCards,
  },
  created() {
    console.log(this.images.cardImages);
  },
  computed: {
    ...mapState([
      'images',
    ]),
  },
};
</script>
