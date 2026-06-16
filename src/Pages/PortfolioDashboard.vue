<script setup>
// Components
import LargeNav from '../Components/Navigator/LargeNav.vue'

//Utils
import SmallSpacer from '../Components/Spacers/SmallSpacer.vue'
import Bubbles from '../Components/Background/Bubbles.vue'
</script>

<template>
  <main class="dashboard-page">
    <section class="card">
      <p class="eyebrow">Portfolio Dashboard</p>
      <h2>Welcome</h2>
      <p>Here you can view all the different sections of my portfolio.</p>

      <SmallSpacer />

      <LargeNav />
    </section>
    <Bubbles />
  </main>
</template>

<style scoped>
/* Adding to the already existing styling */
.card {
  max-width: 820px;
  padding: clamp(1.5rem, 4vw, 3rem) !important;
}
</style>
