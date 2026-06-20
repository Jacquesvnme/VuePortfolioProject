<script setup>
import HTML from '../../Svg/Brands/HTML.vue'
</script>

<template>
  <div class="badge html-badge display-inline">
    <HTML class="small-svg-styling" />
    html
  </div>
</template>

<style scoped>
.html-badge {
  background-color: var(--badge-html5-bg);
  color: var(--badge-html5-text);
}

.small-svg-styling {
  color: var(--badge-html5-text);
  margin-right: -5px;
}
</style>