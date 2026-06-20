<script setup>
import NextJs from '../../Svg/Archived/NextJs.vue'
</script>

<template>
  <div class="badge nextjs-badge display-inline">
    <NextJs class="small-svg-styling" />
    next js
  </div>
</template>

<style scoped>
.nextjs-badge {
  background-color: var(--badge-nextjs-bg);
  color: var(--badge-nextjs-text);
}

.small-svg-styling {
  color: var(--badge-nextjs-text);
}
</style>
