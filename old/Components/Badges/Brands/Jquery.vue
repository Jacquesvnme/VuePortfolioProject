<script setup>
import JQuery from '../../Svg/Brands/JQuery.vue'
</script>

<template>
  <div class="badge jquery-badge display-inline">
    <JQuery class="small-svg-styling" />
    jquery
  </div>
</template>

<style scoped>
.jquery-badge {
  background-color: var(--badge-jquery-bg);
  color: var(--badge-jquery-text);
}

.small-svg-styling {
  color: var(--badge-jquery-text);
}
</style>
