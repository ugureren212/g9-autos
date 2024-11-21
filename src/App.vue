<template>
  <div id="app">
<!--    <services-page></services-page>-->
<!--    <gallery-page></gallery-page>-->
      <about-us-page></about-us-page>

   </div>
</template>

<script>
import ServicesPage from "@/components/ServicesPage.vue";
import GalleryPage from "@/components/GalleryPage.vue"
import AboutUsPage from "@/components/AboutUsPage.vue";


export default {
  name: "App",
  components: { ServicesPage, GalleryPage, AboutUsPage },
};
</script>

<style>

</style>
