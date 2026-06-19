<template>
  <main class="page">
    <section>
      <p class="eyebrow">Portfolio</p>
      <h1>Jacques Van Niekerk</h1>
      <p class="subtitle">View my work, projects and interests.</p>

      <div style="margin-top: 20px">
        <b class="subtitle">Take Note, this site is still actively in development.</b>
      </div>

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
  position: relative;
  z-index: 10;
}

.max-width {
  max-width: 58ch;
}
</style>
