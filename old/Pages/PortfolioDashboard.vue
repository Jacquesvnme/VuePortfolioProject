<script setup>
import LargeNav from '../../src/Components/Navigator/LargeNav.vue';
import SmallSpacer from '../../src/Components/Spacers/SmallSpacer.vue';
import ThinDivider from '../../src/Components/Divider/ThinDivider.vue';
import AngleLeft from '../../src/Components/Svg/Functional/AngleLeft.vue';

import Notification from '../../src/Components/Notification/Notification.vue';
import License from '../../src/Components/License/License.vue';
</script>

<template>
  <Notification />

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
  
    <ThinDivider class="limit-divider"/>
    
    <License />
  </main>
</template>

<style scoped>
.limit-divider{
  max-width: 820px;
  margin: 2rem auto;
}

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
