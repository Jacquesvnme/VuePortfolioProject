<script setup>
import NextJs from '../Badges/Archived/NextJs.vue'
import ExpressJs from '../Badges/Archived/ExpressJs.vue'
import PlotlyJs from '../Badges/Archived/PlotlyJs.vue'
import PostgreSql from '../Badges/Archived/PostgreSql.vue'
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
  flex-wrap: wrap;
  gap: 8px;
}
</style>
