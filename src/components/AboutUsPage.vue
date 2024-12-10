<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h2 class="about-us-title" style="font-size: 40px;">About Us</h2>
    <!-- Services Overview Section -->
    <section class="services-overview open-sans-logo" id="services">
      <div class="cards-container" style="margin-top:50px;">
        <div class="about-us-card">
          <img src="https://via.placeholder.com/300x200" alt="Experienced Mechanics" class="card-image"/>
          <h4>Mechanic 1</h4>
          <p>We ensure quick and efficient service to get you back on the road in no time.</p>
        </div>
        <div class="about-us-card">
          <img src="https://via.placeholder.com/300x200" alt="Experienced Mechanics" class="card-image"/>
          <h4>Mechanic 2</h4>
          <p>Our team is dedicated to providing reliable solutions for your vehicle's needs.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUsPage",
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

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 15px;
  color: #d4af37;
}

/* Services Overview Section */
.services-overview {
  padding: 40px 20px;
  background-color: #000;
}

.services-overview h2 {
  color: #d4af37;
  margin-bottom: 30px;
}

.cards-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  text-align: center;
}

.about-us-card {
  flex: 1;
  max-width: 45%; /* Default for larger screens */
  padding: 20px;
  border: 2px solid #d4af37;
  background-color: #1a1a1a;
  border-radius: 10px;
}

.card-image {
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

.card h4 {
  color: #fff;
  margin-bottom: 10px;
}

.card p {
  color: #d4af37;
  font-size: 14px;
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

.about-us-title{
  text-align: center;
  margin: 40px 20px;
  color: #d4af37;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .about-us-card {
    max-width: 90%; /* Take most of the width on smaller screens */
    margin-bottom: 20px; /* Add spacing between cards */
  }

  .card-image {
    width: 100%; /* Make images responsive */
    height: auto;
  }

  .services-overview {
    margin-bottom: 140px;
  }

}
</style>
