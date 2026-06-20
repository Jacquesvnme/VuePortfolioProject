<script setup>
import CSS from '../../Svg/Brands/CSS.vue'
</script>

<template>
  <div class="badge css-badge display-inline">
    <CSS class="small-svg-styling" />
    css
  </div>
</template>

<style scoped>
.css-badge {
  background-color: var(--badge-css-bg);
  color: var(--badge-css-text);
}

.small-svg-styling {
  color: var(--badge-css-text);
  margin-right: -5px;
}
</style>
