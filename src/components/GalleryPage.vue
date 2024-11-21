<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <img src="../assets/g9-logo.png" alt="g9 logo"
           style="border: 3px solid #d4af37; position: absolute; top: 20px; width: 30%; height: auto;">
      <ul class="navbar-links open-sans-logo" style="margin-left: 40%">
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
      <div class="contact-button">
        <button class="cta-button" style="margin-right: 10px">
          <i class="fa fa-phone"></i>
          07853 901 804
        </button>
        <button class="cta-button">
          <i class="fa fa-phone"></i>
          07718 785 217
        </button>
      </div>
    </nav>

    <!-- Services Overview Section -->
    <section class="services-overview open-sans-logo" id="services">
      <div class="services-overview-content" style="margin-top: 50px">
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtdsILZRmWHLY_VZan_qmr6dQFYqDgzDdx1iVvEkvh-dCIkeirCtMwkkYV3uAUrABJDY&usqp=CAU"
              alt="Full Service"
              class="service-image"
          />
          <h4>Full Service</h4>
          <p>Comprehensive maintenance to ensure your car is roadworthy and running efficiently, covering engine, brakes, and fluids.</p>
        </div>
        <div class="service-item">
          <img
              src="https://media.istockphoto.com/id/1349412663/photo/supervisor-at-a-car-workshop-checking-tablet-while-mechanic-works-at-background-on-a-car.jpg?s=612x612&w=0&k=20&c=8gIKT99lBP5llaNxxpqaxZ2xYZcRDA0vV5hvYmJrkbQ="
              alt="Brake Pads"
              class="service-image"
          />
          <h4>Brake Pads</h4>
          <p>Expert installation and replacement of brake pads to keep your vehicle safe and responsive on the road.</p>
        </div>
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKPxg80SXXDL1h97elTet-gzfMBzkiXyzlQ&s"
              alt="Clutch"
              class="service-image"
          />
          <h4>Clutch</h4>
          <p>Clutch diagnostics, repairs, and replacements to ensure smooth gear transitions and a reliable driving experience.</p>
        </div>
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtdsILZRmWHLY_VZan_qmr6dQFYqDgzDdx1iVvEkvh-dCIkeirCtMwkkYV3uAUrABJDY&usqp=CAU"
              alt="Engine Rebuilt"
              class="service-image"
          />
          <h4>Engine Rebuilt</h4>
          <p>Skilled engine rebuilding services for better performance and extended engine lifespan.</p>
        </div>
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtdsILZRmWHLY_VZan_qmr6dQFYqDgzDdx1iVvEkvh-dCIkeirCtMwkkYV3uAUrABJDY&usqp=CAU"
              alt="Timing Belts"
              class="service-image"
          />
          <h4>Timing Belts</h4>
          <p>Replacement and servicing of timing belts to prevent breakdowns and ensure optimal engine performance.</p>
        </div>
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtdsILZRmWHLY_VZan_qmr6dQFYqDgzDdx1iVvEkvh-dCIkeirCtMwkkYV3uAUrABJDY&usqp=CAU"
              alt="Timing Chain"
              class="service-image"
          />
          <h4>Timing Chain</h4>
          <p>Accurate replacement of timing chains to keep your engine running smoothly and efficiently.</p>
        </div>
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKPxg80SXXDL1h97elTet-gzfMBzkiXyzlQ&s"
              alt="DPF Delete & Remapping"
              class="service-image"
          />
          <h4>DPF (Delete & Remapping)</h4>
          <p>Advanced DPF solutions, including deletion and remapping, for improved emissions and performance.</p>
        </div>
        <div class="service-item">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtdsILZRmWHLY_VZan_qmr6dQFYqDgzDdx1iVvEkvh-dCIkeirCtMwkkYV3uAUrABJDY&usqp=CAU"
              alt="Pick & Drop Off"
              class="service-image"
          />
          <h4>Pick & Drop Off</h4>
          <p>Convenient vehicle collection and delivery services to save you time and hassle.</p>
        </div>
      </div>
    </section>

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

/* Services Overview Section */
.services-overview {
  padding: 40px 20px;
  background-color: #000;
}

.services-overview h2 {
  color: #d4af37;
  margin-bottom: 30px;
}

.services-overview-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 20px;
}

.service-item {
  border: 2px solid #d4af37;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #1a1a1a;
}

.service-item h4 {
  color: #fff;
  margin-bottom: 10px;
}

.service-item p {
  color: #d4af37;
}

.service-image {
  width: 100%;
  max-height: 150px;
  border-radius: 5px;
  object-fit: cover;
}

/* Contact Us Section */
.contact-section {
  text-align: center;
  padding: 20px;
  background-color: #1a1a1a;
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
  color: #fff;
  margin: 0;
}
</style>
