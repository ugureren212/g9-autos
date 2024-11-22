<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content">
        <h1>G9 Autos Ltd</h1>
        <p>Your one-stop shop for MOT, repairs, and diagnostics.</p>
      </div>
    </header>

    <!-- Services Overview Section -->
    <section class="services-overview open-sans-logo" id="services">
      <h2 style="margin-left: 28%">Garage Services in Walthamstow, London, E17 6bh unit 4</h2>
      <div class="cards-container">
        <div class="card">
          <img src="../assets/fastIcon.png" alt="Fast Service" class="card-image" />
          <h4>Fast</h4>
          <p>We ensure quick and efficient service to get you back on the road in no time.</p>
        </div>
        <div class="card">
          <img src="../assets/reliabilityIcon.png" alt="Reliable Service" class="card-image" />
          <h4>Reliable</h4>
          <p>Our team is dedicated to providing reliable solutions for your vehicle's needs.</p>
        </div>
        <div class="card">
          <img src="../assets/honestIcon.png" alt="Honest Service" class="card-image" />
          <h4>Honest</h4>
          <p>We offer transparent pricing and honest advice for every service we provide.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
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

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 15px 30px;
  border-bottom: 2px solid #d4af37;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.cta-button {
  background-color: #d4af37;
  color: #000;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
  ), url('https://ukfilmlocation.com/storage/images/generated/resized/825x620/location/5192/99813.jpg?v=1629367283') no-repeat center center/cover;
  text-align: center;
  padding: 100px 20px;
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
  gap: 20px;
  flex-wrap: wrap;
  text-align: center;
}

.card {
  flex: 1;
  max-width: 300px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 100%;
  }
}
</style>
