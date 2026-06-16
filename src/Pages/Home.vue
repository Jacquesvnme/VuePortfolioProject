<script setup></script>

<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Portfolio</p>
      <h1>Jacques Van Niekerk</h1>
      <p class="subtitle">View my work, projects and interests.</p>

      <RouterLink :to="'/Portfolio-Dashboard'">
        <button class="button" type="button">View My Work</button>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  box-sizing: border-box;
}

.hero {
  width: min(680px, 100%);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: clamp(1.5rem, 4vw, 3rem);
  backdrop-filter: blur(8px);
}

@media (max-width: 640px) {
  .hero {
    border-radius: 14px;
  }
}
</style>
