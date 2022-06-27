<template>
  <div class="slider">
    <carousel @next="next" @prev="prev">
      <carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlide="visibleSlide"
      >
        <img :src="slide" />
      </carousel-slide>
    </carousel>
    
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";
export default {
  data() {
    return {
      slides: [
        "https://picsum.photos/id/237/800/500",
        "https://picsum.photos/id/238/800/500",
        "https://picsum.photos/id/239/800/500",
        "https://picsum.photos/id/240/800/500",
        "https://picsum.photos/id/241/800/500",
      ],
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      console.log("next", this.slides.length, this.visibleSlide);
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      console.log("prev", this.slides.length, this.visibleSlide);
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  components: {
    Carousel,
    CarouselSlide,
  },
};
</script>

<style lang="sass" scoped>
.slider
    display: flex
    justify-content: center
    max-width: 800px
</style>
