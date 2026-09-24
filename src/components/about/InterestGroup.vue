<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import type { InterestGroup } from '@/types/portfolio'

withDefaults(defineProps<{ group: InterestGroup; compact?: boolean }>(), {
  compact: false,
})
</script>

<template>
  <div v-if="compact" class="outside-column">
    <h4>{{ group.title }}</h4>
    <ul>
      <li v-for="entry in group.entries" :key="entry.title">
        <a
          v-if="entry.links?.[0]"
          class="outside-entry"
          :href="entry.links[0].url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${entry.title} (opens in a new tab)`"
        >
          <span>
            <strong>{{ entry.title }}</strong>
            <small v-if="entry.hoursPlayed != null">
              {{ entry.hoursPlayed.toLocaleString() }} hours
            </small>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div v-else class="outside-entry">
          <span
            ><strong>{{ entry.title }}</strong></span
          >
        </div>
      </li>
    </ul>
  </div>

  <div v-else class="interest-index">
    <article v-for="entry in group.entries" :key="entry.title" class="interest-index-row focus-row">
      <h4>{{ entry.title }}</h4>
      <div class="interest-content">
        <div class="interest-description">
          <p v-for="paragraph in entry.description" :key="paragraph">{{ paragraph }}</p>
        </div>
        <ul v-if="entry.tags?.length" class="delimited-list" :aria-label="`${entry.title} tags`">
          <li v-for="tag in entry.tags" :key="tag">{{ tag }}</li>
        </ul>
        <div v-if="entry.links?.length" class="interest-links">
          <a
            v-for="link in entry.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.name }} <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  </div>
</template>
