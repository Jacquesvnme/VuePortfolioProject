<script setup lang="ts">
import type { EducationEntry } from '@/types/portfolio'

defineProps<{ entry: EducationEntry }>()
</script>

<template>
  <article class="history-item focus-row">
    <span class="history-date">{{ entry.period }}</span>
    <div>
      <h4>{{ entry.qualification }}</h4>
      <p>{{ entry.description }}</p>
      <small>{{ entry.institution }}</small>
    </div>
  </article>
</template>
