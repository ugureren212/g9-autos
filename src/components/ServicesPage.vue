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
      <h2 class="address-text">📍Walthamstow, London, E17 6bh unit 4</h2>
      <div class="cards-container">
        <div class="card">
          <img src="../assets/fastIcon.png" alt="Fast Service" class="card-image"/>
          <h4>Fast</h4>
          <p>We ensure quick and efficient service to get you back on the road in no time.</p>
        </div>
        <div class="card">
          <img src="../assets/reliabilityIcon.png" alt="Reliable Service" class="card-image"/>
          <h4>Reliable</h4>
          <p>Our team is dedicated to providing reliable solutions for your vehicle's needs.</p>
        </div>
        <div class="card">
          <img src="../assets/honestIcon.png" alt="Honest Service" class="card-image"/>
          <h4>Honest</h4>
          <p>We offer transparent pricing and honest advice for every service we provide.</p>
        </div>
      </div>
    </section>

    <!-- Location and Review Overview Section -->
    <section class="location-and-review-overview open-sans-logo" id="services">
      <div class="two-column-layout">
        <!-- Left Column: Google Map -->
        <div class="map-column">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239.370640854936!2d-0.03976224332229152!3d51.5913048929288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761dd10742f863%3A0xdacabb1e28e7e48f!2s61%20Sutherland%20Rd%2C%20London!5e0!3m2!1sen!2suk!4v1734540613308!5m2!1sen!2suk" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Right Column: Reviews -->
        <div class="reviews-column">
          <h2 style="color: black; text-align: center">Reviews</h2>
          <div class="review">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Reviewer 1" class="review-icon"/>
            <p>"Always a good experience, pricing good and repairs done in time quoted." - Micheal C.</p>
          </div>
          <div class="review">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Reviewer 2" class="review-icon"/>
            <p>"Effective, efficient, reliable and honest. Highly professional and quality car repair and maintenance
              service. I will highly recommend him to anyone in need of car repair and maintenance services." - Lorraine
              G.</p>
          </div>
          <div class="review">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Reviewer 3" class="review-icon"/>
            <p>"We service & MOT our car here. The peace of mind is the fact that they will only repair what needs
              doing, in other words, RJS are 100% genuine and reliable, very pleased we found them." - Jonathan P.</p>
          </div>
          <div class="review">
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Reviewer 4" class="review-icon"/>
            <p>"Affordable and reliable. My car has never run better." - Sarah L.</p>
          </div>
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
  font-size: 80px;
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
  text-align: center;
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

/* Location and Review Overview Section */
.location-and-review-overview {
  background: #d4af37;
  padding: 20px;
}

.two-column-layout {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.map-column {
  flex: 1;
  padding: 20px;
  min-width: 300px;
  height: 400px;
}

.reviews-column {
  flex: 1;
  min-width: 300px;
  padding: 20px;
}

.reviews-column h2 {
  color: #d4af37;
  margin-bottom: 15px;
}

.review {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.review-icon {
  border-radius: 50%;
  margin-right: 10px;
  width: 50px;
  height: 50px;
}

.review p {
  color: #fff;
  margin: 0;
}

/* Responsive Design for Location and Review Section */
@media (max-width: 768px) {
  .two-column-layout {
    flex-direction: column;
  }

  .hero-content h1 {
    font-size: 50px;
  }

  .map-column {
    width: 100%;
    padding: 10px;
    height: 300px;
  }

  .reviews-column {
    width: 100%;
    padding: 10px;
  }

  .review {
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
  }

  .review-icon {
    margin-bottom: 10px;
    margin-right: 0;
  }

  .review p {
    font-size: 14px;
  }
}
</style>
