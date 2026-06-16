<script setup>
import Bubbles from '../Components/Background/Bubbles.vue'

/*TODO
Add an animated background with potencially text moving
vertically and horizontally in a slow motion to add some visual interest to the page
*/
</script>

<template>
  <main class="page">
    <section>
      <p class="eyebrow">Portfolio</p>
      <h1>Jacques Van Niekerk</h1>
      <p class="subtitle">View my work, projects and interests.</p>

      <RouterLink :to="'/Portfolio-Dashboard'">
        <button class="button" type="button">View My Work</button>
      </RouterLink>
    </section>
    <Bubbles />
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}
</style>
