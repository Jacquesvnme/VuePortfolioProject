<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import type { SkillGroup } from '@/types/portfolio'

defineProps<{ group: SkillGroup; index: number }>()
</script>

<template>
  <article class="editorial-row skill-row">
    <span class="row-number">{{ String(index + 1).padStart(2, '0') }}</span>
    <div>
      <h3 class="row-title">{{ group.title }}</h3>
      <p class="row-description">{{ group.description }}</p>
    </div>
    <div class="badge-list skill-badges">
      <Badge v-for="skill in group.skills" :key="skill">{{ skill }}</Badge>
    </div>
  </article>
</template>
