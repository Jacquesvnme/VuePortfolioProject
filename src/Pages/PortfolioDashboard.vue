<script setup>
import LargeNav from '../Components/Navigator/LargeNav.vue'
import SmallSpacer from '../Components/Spacers/SmallSpacer.vue'
import Bubbles from '../Components/Background/Bubbles.vue'
import AngleLeft from '../Components/Svg/AngleLeft.vue'
</script>

<template>
  <main class="dashboard-page">
    <section class="card">
      <div class="panel-header-inline">
        <RouterLink :to="'/'" class="small-button-styling center-align">
          <AngleLeft class="small-svg-styling" />
        </RouterLink>
        <p class="eyebrow">Portfolio Dashboard</p>
      </div>

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

.small-svg-styling {
  color: var(--black);
  margin-right: 0px !important;
}

.panel-header-inline {
  display: inline-flex;
  align-items: center;
}

.panel-header-inline .eyebrow {
  margin-left: 10px;
}
</style>
