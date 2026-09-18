<script setup lang="ts">
import {
  ArrowUpRight,
  BookOpenText,
  Clapperboard,
  Clock3,
  Code2,
  Gamepad2,
  Headphones,
  UserRound,
} from '@lucide/vue'
import type { Component } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { InterestGroup } from '@/types/portfolio'

withDefaults(defineProps<{ group: InterestGroup; compact?: boolean }>(), {
  compact: false,
})

const icons: Record<InterestGroup['icon'], Component> = {
  user: UserRound,
  code: Code2,
  games: Gamepad2,
  music: Headphones,
  manga: BookOpenText,
  anime: Clapperboard,
}
</script>

<template>
  <article class="interest-group" :class="{ 'interest-group-compact': compact }">
    <header class="interest-header">
      <span class="interest-icon"><component :is="icons[group.icon]" aria-hidden="true" /></span>
      <div>
        <h3 class="row-title">{{ group.title }}</h3>
        <p class="row-description">{{ group.description }}</p>
      </div>
    </header>
    <ul class="interest-list">
      <li v-for="entry in group.entries" :key="entry.title" class="interest-entry">
        <div class="interest-entry-title">
          <h4>{{ entry.title }}</h4>
          <span v-if="compact && entry.hoursPlayed != null" class="compact-interest-hours">
            {{ entry.hoursPlayed.toLocaleString() }} hours
          </span>
        </div>
        <div class="interest-entry-description">
          <p v-for="paragraph in entry.description" :key="paragraph">{{ paragraph }}</p>
        </div>
        <div
          v-if="entry.tags?.length || (!compact && entry.hoursPlayed != null)"
          class="interest-entry-resources"
        >
          <div v-if="entry.tags?.length" class="badge-list">
            <Badge
              v-for="tag in entry.tags"
              :key="tag"
              :class="compact ? 'compact-interest-tag' : undefined"
              >{{ tag }}</Badge
            >
          </div>
          <span v-if="!compact && entry.hoursPlayed != null" class="interest-entry-hours">
            <Clock3 aria-hidden="true" />{{ entry.hoursPlayed.toLocaleString() }} hours
          </span>
        </div>
        <div v-if="entry.links?.length" class="interest-entry-links">
          <Button v-for="link in entry.links" :key="link.url" as-child variant="outline" size="sm">
            <a
              class="interest-entry-link"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${link.name} (opens in a new tab)`"
            >
              {{ link.name }} <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </li>
    </ul>
  </article>
</template>
