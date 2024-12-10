<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Services Overview Section -->
    <section class="services-overview open-sans-logo" id="services" style="margin-bottom: 40px">
      <h2 style="font-size: 40px;">Gallery</h2>
      <div class="services-overview-content">
          <img
            src="../assets/gallery/pic1.jpeg"
            alt="Full Service"
            class="service-image"
          />
          <img
            src="../assets/gallery/pic2.jpeg"
            alt="Brake Pads"
            class="service-image"
          />
          <img
            src="../assets/gallery/pic3.jpeg"
            alt="Clutch"
            class="service-image"
          />
          <img
            src="../assets/gallery/pic4.jpeg"
            alt="Engine Rebuilt"
            class="service-image"
          />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GalleryPage",
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

.services-overview h2, h1 {
  color: #d4af37;
  margin-bottom: 20px;
  text-align: center;
}

.services-overview-content {
  margin-top: 40px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; /* Small gap between images */
  justify-content: center;
  align-items: center;
}

.service-image {
  border: 2px solid #d4af37;
  border-radius: 10px;
  width: 100%; /* Smaller size for images */
  height: auto;
  object-fit: cover;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-overview-content {
    grid-template-columns: repeat(2, 1fr); /* Two images per row */
    margin-bottom: 150px;
    gap: 8px; /* Slightly reduced gap for smaller screens */
  }

  .service-image {
    width: 80%; /* Slightly smaller image size on smaller screens */
  }
}

@media (max-width: 480px) {
  .services-overview-content {
    grid-template-columns: 1fr; /* One image per row for narrow screens */
    gap: 5px; /* Minimal gap for compact layout */
  }

  .service-image {
    width: 100%; /* Full-width images for narrow screens */
  }
}
</style>
