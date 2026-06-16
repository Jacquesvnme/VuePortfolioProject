<script setup>
import ExtraSmallSpacer from '../Spacers/ExtraSmallSpacer.vue'
import AngleRight from '../Svg/AngleRight.vue'

/*TODO
Need to add small and large back buttons to the CompactView
*/

/*TODO
Need to make the entire card clickable and not just the text
Keep in mind the on:hover event
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

.link:hover {
  text-decoration: none !important;
}
</style>
