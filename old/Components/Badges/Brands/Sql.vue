<script setup>
import SQL from '../../Svg/Brands/Sql.vue'
</script>

<template>
  <div class="badge sql-badge display-inline">
    <SQL class="small-svg-styling" />
    sql
  </div>
</template>

<style scoped>
.sql-badge {
  background-color: var(--badge-sql-bg);
  color: var(--badge-sql-text);
}

.small-svg-styling {
  color: var(--badge-sql-text);
  margin-right: -2px;
}
</style>