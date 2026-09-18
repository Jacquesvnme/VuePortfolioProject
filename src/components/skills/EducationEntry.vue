<script setup lang="ts">
import type { EducationEntry } from '@/types/portfolio'

defineProps<{ entry: EducationEntry; index: number }>()
</script>

<template>
  <article class="editorial-row education-row">
    <span class="row-number">{{ String(index + 1).padStart(2, '0') }}</span>
    <p class="education-period">{{ entry.period }}</p>
    <div>
      <h3 class="row-title">{{ entry.qualification }}</h3>
      <p class="education-institution">{{ entry.institution }}</p>
      <p class="row-description">{{ entry.description }}</p>
    </div>
  </article>
</template>
