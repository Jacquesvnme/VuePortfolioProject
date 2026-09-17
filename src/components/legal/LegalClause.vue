<script setup lang="ts">
import type { LegalClause } from '@/types/portfolio'

defineProps<{ clause: LegalClause; index: number }>()
</script>

<template>
  <article :id="`clause-${index + 1}`" class="legal-clause">
    <span class="legal-number">{{ String(index + 1).padStart(2, '0') }}</span>
    <h3>{{ clause.title }}</h3>
    <div class="legal-copy">
      <p v-for="paragraph in clause.paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </article>
</template>
