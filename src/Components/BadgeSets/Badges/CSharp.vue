<script setup>
import CSharp from '../../Svg/Badges/CSharp.vue'
</script>

<template>
  <div class="badge csharp-badge display-inline">
    <CSharp class="small-svg-styling" />
    c#
  </div>
</template>

<style scoped>
.csharp-badge {
  background-color: var(--badge-csharp-bg);
  color: var(--badge-csharp-text);
}

.small-svg-styling {
  color: var(--badge-csharp-text);
  margin-right: -5px;
}
</style>
