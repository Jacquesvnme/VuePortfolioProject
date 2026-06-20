<script setup>
import PostgreSql from '../../Svg/Archived/PostgreSql.vue'
</script>

<template>
  <div class="badge postgresql-badge display-inline">
    <PostgreSql class="small-svg-styling" />
    postgresql
  </div>
</template>

<style scoped>
.postgresql-badge {
  background-color: var(--badge-postgresql-bg);
  color: var(--badge-postgresql-text);
}

.small-svg-styling {
  color: var(--badge-postgresql-text);
}
</style>
