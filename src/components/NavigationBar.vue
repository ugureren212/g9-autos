<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <img class="logo" src="../assets/g9-logo.png" alt="g9 logo">
      <ul class="navbar-links open-sans-logo">
        <li v-for="link in links" :key="link.id">
          <a
            :class="{ active: activeLink === link.id }"
            href="javascript:void(0);"
            @click.prevent="setActive(link.id)"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      activeLink: null, // Tracks the active link
      links: [
        { id: 'services', name: 'Services' },
        { id: 'gallery', name: 'Gallery' },
        // Add more links here if needed
      ],
    };
  },
  methods: {
    setActive(linkId) {
      this.activeLink = linkId; // Update the active link
      this.$emit('page-selected', linkId); // Emit event to parent
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

li {
  font-size: 30px;
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
  transition: background-color 0.3s, color 0.3s;
}

.navbar-links li a:hover {
  background-color: #d4af37;
  color: #000;
}

.navbar-links li a.active {
  background-color: #d4af37;
  color: #000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .logo {
    display: none;
  }

  .navbar-links {
    flex-direction: row;
    justify-content: center;
    width: 80%;
    margin: 10px 0;
  }

  .navbar-links li a {
    padding: 8px 15px;
    font-size: 25px;
  }
}
</style>
