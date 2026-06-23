<script setup>
import PYTHON from '../../Svg/Brands/Python.vue'
</script>

<template>
  <div class="badge python-badge display-inline">
    <PYTHON class="small-svg-styling" />
    python
  </div>
</template>

<style scoped>
.python-badge {
  background-color: var(--badge-python-bg);
  color: var(--badge-python-text);
}

.small-svg-styling {
  color: var(--badge-python-text);
  margin-right: -5px;
}
</style>
