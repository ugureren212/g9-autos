<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <img class="logo" src="../assets/g9-logo.png" alt="g9 logo">
      <ul class="navbar-links open-sans-logo">
        <li>
          <a href="#services" @click.prevent="navigate('services')">Services</a>
        </li>
        <li>
          <a href="#gallery" @click.prevent="navigate('gallery')">Gallery</a>
        </li>
        <li>
          <a href="#about" @click.prevent="navigate('about')">About</a>
        </li>
      </ul>
      <div class="contact-button">
        <button class="cta-button" disabled>
          <i class="fa fa-phone"></i>
          07853 901 804
        </button>
        <button class="cta-button" disabled>
          <i class="fa fa-phone"></i>
          07718 785 217
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    navigate(page) {
      // Emit the selected page to the parent component
      this.$emit('page-selected', page);
    },
  },
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
  padding: 15px 20px;
  border-bottom: 2px solid #d4af37;
  flex-wrap: wrap;
}

.logo {
  border: 3px solid #d4af37;
  position: absolute;
  top: 20px;
  width: 30%;
  height: auto;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin-left: 40%;
}

.navbar-links li a {
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navbar-links li a:hover {
  background-color: #d4af37;
  color: #000;
}

.contact-button {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.cta-button {
  background-color: #d4af37;
  color: #000;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .logo {
    display: none;
  }

  .navbar-links {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
  }

  .navbar-links li a {
    padding: 8px 15px;
    font-size: 16px;
  }

  .contact-button {
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .cta-button {
    width: auto;
    text-align: center;
    font-size: 14px;
  }
}
</style>
