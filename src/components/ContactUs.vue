<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Contact Us Section -->
    <section id="contact" class="contact-section">
      <h2>Contact Us</h2>
      <div class="contact-details">
        <p>📞 <strong>Phone:</strong> +1 234 567 8901</p>
        <p>📧 <strong>Email:</strong> info@g9autoltd.com</p>
        <p>📍 <strong>Address:</strong> 123 Auto Lane, Mechanicsville, XY 12345</p>
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

.services-overview h2 {
  color: #d4af37;
  margin-bottom: 30px;
}

.service-item h4 {
  color: #fff;
  margin-bottom: 10px;
}

.service-item p {
  color: #d4af37;
}

/* Contact Us Section */
.contact-section {
  text-align: center;
  padding: 20px;
  background-color: #1a1a1a;
  color: #fff;
  position: fixed; /* Fix the section to the viewport */
  bottom: 0; /* Position it at the bottom */
  left: 0;
  width: 100%; /* Ensure it spans the full width of the screen */
  z-index: 100; /* Make sure it stays above other content if necessary */
}

.contact-section h2 {
  color: #d4af37;
  margin-bottom: 15px;
}

.contact-details {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.contact-details p {
  margin: 0;
}

</style>
