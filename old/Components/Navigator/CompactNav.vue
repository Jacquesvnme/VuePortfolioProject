<script setup>
import ExtraSmallSpacer from '../Spacers/ExtraSmallSpacer.vue'
import AngleRight from '../Svg/Functional/AngleRight.vue'

/*TODO
Fix Academic History for mobile
*/
</script>

<template>
  <RouterLink class="link" :to="'/About-Me'">
    <div class="card compact-card"><AngleRight class="small-svg-styling" />About Me</div>
  </RouterLink>

  <ExtraSmallSpacer />

  <RouterLink class="link" :to="'/Skills'">
    <div class="card compact-card"><AngleRight class="small-svg-styling" />Skills</div>
  </RouterLink>

  <ExtraSmallSpacer />

  <RouterLink class="link" :to="'/Details'">
    <div class="card compact-card"><AngleRight class="small-svg-styling" />Details</div>
  </RouterLink>

  <ExtraSmallSpacer />

  <RouterLink class="link" :to="'/Academic-History'">
    <div class="card compact-card"><AngleRight class="small-svg-styling" />Academic History</div>
  </RouterLink>
</template>

<style scoped>
.small-svg-styling {
  margin-right: 0.5rem;
}

.compact-card {
  height: 10px !important;
  border-radius: 4px !important;
  padding: 12px !important;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: row !important;
}

.link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.link:hover {
  text-decoration: none !important;
}
</style>
