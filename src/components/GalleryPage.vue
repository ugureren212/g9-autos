<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Services Overview Section -->
    <section class="services-overview open-sans-logo" id="services" style="margin-bottom: 40px">
      <h2 class="carousel-title">Our Gallery</h2>
      <div class="carousel-wrapper">
        <carousel
          ref="carousel"
          :per-page="1"
          :loop="true"
          :navigation-enabled="false"
          class="custom-carousel"
        >
          <slide v-for="(item, idx) in items" :key="idx">
            <img :src="item.image" :alt="'Slide ' + (idx + 1)" class="carousel-image">
          </slide>
        </carousel>
        <div class="carousel-nav">
          <button class="nav-button prev-button" @click="prevSlide">
            <i class="fa fa-chevron-left"></i>
          </button>
          <span class="nav-info">{{ selectedID + 1 }} of {{ items.length }}</span>
          <button class="nav-button next-button" @click="nextSlide">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "GalleryPage",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      selectedID: 0,
      items: [
        { id: 0, info: "800 meter line", image: require("../assets/gallery/pic1.jpeg") },
        { id: 3, info: "800 meter line", image: require("../assets/gallery/pic6.jpeg") },
        { id: 1, info: "800 meter line", image: require("../assets/gallery/pic2.jpeg") },
        { id: 3, info: "800 meter line", image: require("../assets/gallery/pic7.jpeg") },
        { id: 2, info: "800 meter line", image: require("../assets/gallery/pic3.jpeg") },
        { id: 3, info: "800 meter line", image: require("../assets/gallery/pic4.jpeg") },
        { id: 3, info: "800 meter line", image: require("../assets/gallery/pic5.jpeg") },
      ]
    };
  },
  methods: {
    prevSlide() {
      const newIndex =
        this.selectedID === 0 ? this.items.length - 1 : this.selectedID - 1;
      this.toSlide(newIndex);
    },
    nextSlide() {
      const newIndex =
        this.selectedID === this.items.length - 1 ? 0 : this.selectedID + 1;
      this.toSlide(newIndex);
    },
    toSlide(n) {
      this.selectedID = n;
      this.$refs.carousel.goToPage(n);
    }
  }
};
</script>

<style>
/* General Styling */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
}

h1, h2, h4, p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Services Overview Section */
.services-overview {
  padding: 20px;
  background-color: #000;
}

.services-overview h2 {
  color: #d4af37;
  margin-bottom: 20px;
  text-align: center;
}

/* Carousel Wrapper */
.carousel-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
}

/* Carousel Styling */
.custom-carousel {
  width: 100%;
  overflow: hidden;
  border: 2px solid #d4af37;
  border-radius: 15px;
  background-color: #1a1a1a;
}

.carousel-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #d4af37;
}

.carousel-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

/* Carousel Navigation Info & Buttons */
.carousel-nav {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  color: #d4af37;
  font-size: 1rem;
}

.nav-info {
  text-align: center;
  font-size: 1.2rem;
}

.nav-button {
  background-color: #d4af37;
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  flex: 0;
}

.VueCarousel-pagination{
  display: none;
}

.nav-button i {
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .carousel-wrapper {
    max-width: 90%;
  }

  .nav-button {
    padding: 30px 30px;
  }

  .nav-info {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-button {
    padding: 16px 30px; /* Increase padding for larger button */
    font-size: 20px; /* Increase font size for icon */
  }
  .carousel-wrapper {
    max-width: 100%;
  }

  .nav-info {
    font-size: 0.9rem;
  }
}
</style>
