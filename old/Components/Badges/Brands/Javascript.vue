<script setup>
import JavaScript from '../../Svg/Brands/JavaScript.vue'
</script>

<template>
  <div class="badge javascript-badge display-inline">
    <JavaScript class="small-svg-styling" />
    javascript
  </div>
</template>

<style scoped>
.javascript-badge {
  background-color: var(--badge-javascript-bg);
  color: var(--badge-javascript-text);
}

.small-svg-styling {
  color: var(--badge-javascript-text);
  margin-right: -5px;
}
</style>
