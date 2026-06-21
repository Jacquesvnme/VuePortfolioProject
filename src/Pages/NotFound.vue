<template>
  <div class="not-found-container">
    <h1>404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <router-link to="/" class="home-btn">Return Home</router-link>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #42b883; /* Vue green or your theme color */
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.home-btn {
  margin-top: 1.5rem;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.2s;
}

.home-btn:hover {
  background-color: #35495e;
}
</style>