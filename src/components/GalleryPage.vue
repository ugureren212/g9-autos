<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Services Overview Section -->
    <section class="services-overview open-sans-logo" id="services" style="margin-bottom: 40px">
      <h2 style="font-size: 40px;">Gallery</h2>
      <div class="services-overview-content" style="margin: auto auto; margin-bottom: 100px; margin-top: 50px; height:90%; width:90%">
        <div class="service-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtdsILZRmWHLY_VZan_qmr6dQFYqDgzDdx1iVvEkvh-dCIkeirCtMwkkYV3uAUrABJDY&usqp=CAU"
            alt="Full Service"
            class="service-image"
          />
          <h4>Full Service</h4>
          <p>Comprehensive maintenance to ensure your car is roadworthy and running efficiently, covering engine,
            brakes, and fluids.</p>
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
          <p>Clutch diagnostics, repairs, and replacements to ensure smooth gear transitions and a reliable driving
            experience.</p>
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
  padding: 40px 20px;
  background-color: #000;
}

.services-overview h2, h1{
  color: #d4af37;
  margin-bottom: 30px;
}

.services-overview-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

/* Responsive Design */
@media (max-width: 768px) {
  .services-overview-content {
    grid-template-columns: repeat(2, 1fr); /* Two items per row */
    gap: 15px;
  }

  .service-item {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .services-overview-content {
    grid-template-columns: 1fr; /* One item per row */
  }
}
</style>
