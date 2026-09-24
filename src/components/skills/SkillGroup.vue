<script setup lang="ts">
import type { SkillGroup } from '@/types/portfolio'

defineProps<{ group: SkillGroup }>()
</script>

<template>
  <article class="capability-group focus-row">
    <h4>{{ group.title }}</h4>
    <div>
      <p>{{ group.description }}</p>
      <ul class="delimited-list" :aria-label="`${group.title} skills`">
        <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </article>
</template>
