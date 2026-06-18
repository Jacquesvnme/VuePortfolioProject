<script setup>
import NextJs from './Archived/NextJs.vue'
import ExpressJs from './Archived/ExpressJs.vue'
import PlotlyJs from './Archived/PlotlyJs.vue'
import PostgreSql from './Archived/PostgreSql.vue'
</script>

<template>
  <div class="badge-set">
    <NextJs />
    <ExpressJs />
    <PlotlyJs />
    <PostgreSql />
  </div>
</template>

<style scoped>
.badge-set {
  display: flex;
  gap: 8px;
}
</style>
