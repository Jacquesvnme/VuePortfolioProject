<script setup>
import CompactNav from '../Components/Navigator/CompactNav.vue'
import SmallSpacer from '../Components/Spacers/SmallSpacer.vue'

/*TODO
I have a few ideas here for this page

Left side like with the previous app is a share-able component that contains all the links
Have this be small and semi floating on the left side of the page
 
Add a top bar with dynamically built up url with 'backwards' navigation and any other required buttons
Have this floating to the left and 70% across the page
*/
</script>

<template>
  <main class="three-section-layout">
    <aside class="page-section">
      <p class="eyebrow">Portfolio</p>
      <SmallSpacer />
      <CompactNav />
    </aside>

    <section class="page-section">
      <div class="card">
        <slot />
      </div>
    </section>

    <aside class="page-section about-right-panel"></aside>
  </main>
</template>

<style scoped>
.card {
  height: 100%;
  padding: 1rem !important;
  border-radius: 12px !important;
}
</style>
