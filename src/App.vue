<template>
  <div id="app">
    <navigation-bar @page-selected="handlePageChange"></navigation-bar>
    <div v-if="selectedPage==='services'">
      <services-page></services-page>
    </div>

    <div v-if="selectedPage==='gallery'">
      <gallery-page></gallery-page>
    </div>
    <contact-us></contact-us>

<!--    <div v-if="selectedPage==='about'">-->
<!--      <about-us-page></about-us-page>-->
<!--    </div>-->
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import ServicesPage from "@/components/ServicesPage.vue";
import GalleryPage from "@/components/GalleryPage.vue"
// import AboutUsPage from "@/components/AboutUsPage.vue";
import ContactUs from "@/components/ContactUs.vue";


export default {
  name: "App",
  data() {
    return {
      selectedPage: 'services',
    };
  },
  // components: {NavigationBar, ServicesPage, GalleryPage, AboutUsPage, ContactUs},
  components: {NavigationBar, ServicesPage, GalleryPage, ContactUs},
  methods: {
    handlePageChange(page) {
      const vm = this
      vm.selectedPage = page
    },
  },
};
</script>

<style>

</style>
