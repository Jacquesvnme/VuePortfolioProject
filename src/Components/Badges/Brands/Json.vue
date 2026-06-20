<script setup>
import JSON from '../../Svg/Brands/Json.vue'
</script>

<template>
  <div class="badge json-badge display-inline">
    <JSON class="small-svg-styling" />
    json
  </div>
</template>

<style scoped>
.json-badge {
  background-color: var(--badge-json-bg);
  color: var(--badge-json-text);
}

.small-svg-styling {
  color: var(--badge-json-text);
}
</style>
