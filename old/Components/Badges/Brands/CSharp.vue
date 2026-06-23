<script setup>
import Hashtag from '../../Svg/Functional/Hashtag.vue'
</script>

<template>
  <div class="badge csharp-badge display-inline">
    c
    <Hashtag class="small-svg-styling" />
  </div>
</template>

<style scoped>
.csharp-badge {
  background-color: var(--badge-csharp-bg);
  color: var(--badge-csharp-text);
}

.small-svg-styling {
  color: var(--badge-csharp-text);
  margin-left: -5px;
}
</style>
