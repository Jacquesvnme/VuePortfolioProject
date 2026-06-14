<script setup></script>

<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Portfolio</p>
      <h1>Jacques Van Niekerk</h1>
      <p class="subtitle">This site is in development. More projects and details are coming soon.</p>
      <!-- <button class="cta" type="button">View My Work</button> -->
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

  .eyebrow {
    margin: 0;
    color: var(--secondary-color);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
  }

  h1 {
    margin: 0.5rem 0 0;
    font-size: clamp(2rem, 6vw, 3.2rem);
    line-height: 1.1;
  }

  .subtitle {
    margin-top: 1rem;
    margin-bottom: 0;
    color: rgba(236, 240, 241, 0.9);
    font-size: clamp(1rem, 2.2vw, 1.15rem);
    line-height: 1.6;
    max-width: 58ch;
  }

  .cta {
    margin-top: 1.75rem;
    border: none;
    border-radius: 999px;
    padding: 0.8rem 1.4rem;
    font-weight: 700;
    color: #12202e;
    background: linear-gradient(90deg, var(--secondary-color), #80ffc3);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(46, 204, 113, 0.35);
  }

  @media (max-width: 640px) {
    .hero {
      border-radius: 14px;
    }
  }
</style>
