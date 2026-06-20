<script setup>
import PlotlyJs from '../../Svg/Archived/PlotlyJs.vue'
</script>

<template>
  <div class="badge plotlyjs-badge display-inline">
    <PlotlyJs class="small-svg-styling" />
    plotly js
  </div>
</template>

<style scoped>
.plotlyjs-badge {
  background-color: var(--badge-plotly-bg);
  color: var(--badge-plotly-text);
}

.small-svg-styling {
  color: var(--badge-plotly-text);
}
</style>
