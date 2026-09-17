<script setup lang="ts">
import { Gamepad2, Headphones, Heart, UserRound } from '@lucide/vue'
import type { Component } from 'vue'
import { Badge } from '@/components/ui/badge'
import type { InterestGroup } from '@/types/portfolio'

defineProps<{ group: InterestGroup }>()

const icons: Record<InterestGroup['icon'], Component> = {
  user: UserRound,
  games: Gamepad2,
  music: Headphones,
  heart: Heart,
}
</script>

<template>
  <article class="interest-group">
    <header class="interest-header">
      <span class="interest-icon"><component :is="icons[group.icon]" aria-hidden="true" /></span>
      <div>
        <h3 class="row-title">{{ group.title }}</h3>
        <p class="row-description">{{ group.description }}</p>
      </div>
    </header>
    <ul class="interest-list">
      <li v-for="entry in group.entries" :key="entry.title" class="interest-entry">
        <h4>{{ entry.title }}</h4>
        <p>{{ entry.description }}</p>
        <div v-if="entry.tags" class="badge-list">
          <Badge v-for="tag in entry.tags" :key="tag">{{ tag }}</Badge>
        </div>
      </li>
    </ul>
  </article>
</template>
