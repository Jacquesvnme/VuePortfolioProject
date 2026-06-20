<script setup>
import NextJs from '../badges/archived/NextJs.vue'
import ExpressJs from '../badges/archived/ExpressJs.vue'
import PlotlyJs from '../badges/archived/PlotlyJs.vue'
import PostgreSql from '../badges/archived/PostgreSql.vue'
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
