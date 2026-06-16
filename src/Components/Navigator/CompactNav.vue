<script setup>
import ExtraSmallSpacer from '../Spacers/ExtraSmallSpacer.vue'
import AngleRight from '../Svg/AngleRight.vue'
</script>

<template>
  <div class="card compact-card">
    <AngleRight class="small-svg-styling" />
    <RouterLink class="link" :to="'/About-Me'">About Me</RouterLink>
  </div>

  <ExtraSmallSpacer />

  <div class="card compact-card">
    <AngleRight class="small-svg-styling" />
    <RouterLink class="link" :to="'/Skills'">Skills</RouterLink>
  </div>

  <ExtraSmallSpacer />

  <div class="card compact-card">
    <AngleRight class="small-svg-styling" />
    <RouterLink class="link" :to="'/Details'">Details</RouterLink>
  </div>

  <ExtraSmallSpacer />

  <div class="card compact-card">
    <AngleRight class="small-svg-styling" />
    <RouterLink class="link" :to="'/Academic-History'">Academic History</RouterLink>
  </div>
</template>

<style scoped>
.compact-card {
  height: 10px !important;
  border-radius: 4px !important;
  padding: 12px !important;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.small-svg-styling {
  width: 1rem;
  height: 1rem;
  color: var(--secondary-color);
  margin-right: 0.5rem;
  vertical-align: middle;
  margin-top: -0.1rem;
}

.link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
