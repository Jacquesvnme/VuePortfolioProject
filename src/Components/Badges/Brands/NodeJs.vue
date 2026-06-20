<script setup>
import NodeJs from '../../Svg/Brands/NodeJs.vue'
</script>

<template>
  <div class="badge nodejs-badge display-inline">
    <NodeJs class="small-svg-styling" />
    nodejs
  </div>
</template>

<style scoped>
.nodejs-badge {
  background-color: var(--badge-nodejs-bg);
  color: var(--badge-nodejs-text);
}

.small-svg-styling {
  color: var(--badge-nodejs-text);
  margin-right: -5px;
}
</style>
