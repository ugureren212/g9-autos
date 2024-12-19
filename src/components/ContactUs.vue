<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Contact Us Section -->
    <section id="contact" class="contact-section">
      <h2>Contact Us</h2>
      <div class="contact-details">
        <p>📞 07853 901 804  | 📞 07718 785 217</p>
        <p>📧 info@g9autoltd.com</p>
        <p>📍 Walthamstow, London, E17 6bh unit 4</p>
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
  padding: 5px;
  background-color: #1a1a1a;
  color: #fff;
  width: 100%; /* Ensure it spans the full width of the screen */
}

.contact-section h2 {
  color: #d4af37;
  margin-bottom: 15px;
}

.contact-details {
  display: flex;
  justify-content: center; /* Align items in the center horizontally */
  gap: 20px; /* Add space between the items */
  flex-wrap: wrap; /* Allow wrapping if the screen size is too small */
}

.contact-details p {
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-details {
    width: 90%;
    flex-direction: column; /* Stack items vertically on smaller screens */
    gap: 10px; /* Reduce the gap between items */
  }

  h2 {
    margin-right: 30px;
  }
}
</style>
