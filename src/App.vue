<template>
  <div id="app">
<!--    <services-page></services-page>-->
    <gallery-page></gallery-page>
   </div>
</template>

<script>
import ServicesPage from "@/components/ServicesPage.vue";
import GalleryPage from "@/components/GalleryPage.vue";

export default {
  name: "App",
  components: { ServicesPage, GalleryPage },
};
</script>

<style>

</style>
