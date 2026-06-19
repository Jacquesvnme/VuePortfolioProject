<script setup>
import CompactNav from '../Components/Navigator/CompactNav.vue'
import SmallSpacer from '../Components/Spacers/SmallSpacer.vue'
import AngleLeft from '../Components/Svg/Normal/AngleLeft.vue'
import TopBar from '../Components/Bar/TopBar.vue'

/*TODO
I have a few ideas here for this page

Left side like with the previous app is a share-able component that contains all the links
Have this be small and semi floating on the left side of the page
 
Add a top bar with dynamically built up url with 'backwards' navigation and any other required buttons
Have this floating to the left and 70% across the page
*/

/*TODO
Need to test more mobile reactiveness and test
*/
</script>

<template>
  <main class="three-section-layout">
    <aside class="page-section">
      <div class="panel-header-inline">
        <RouterLink :to="'/Portfolio-Dashboard'" class="small-button-styling center-align">
          <AngleLeft class="small-svg-styling" />
        </RouterLink>
        <p class="eyebrow">Portfolio</p>
      </div>
      <SmallSpacer />
      <CompactNav />
    </aside>

    <section class="page-section">
      <slot />
    </section>
  </main>
</template>

<style scoped>
.card {
  height: 100%;
  padding: 1rem !important;
  border-radius: 12px !important;
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
