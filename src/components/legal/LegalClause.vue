<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import type { LegalClause } from '@/types/portfolio'

defineProps<{ clause: LegalClause; index: number }>()
</script>

<template>
  <article :id="`clause-${index + 1}`" class="legal-clause">
    <span class="legal-number">{{ String(index + 1).padStart(2, '0') }}</span>
    <h3>{{ clause.title }}</h3>
    <div class="legal-copy">
      <p v-for="paragraph in clause.paragraphs" :key="paragraph">{{ paragraph }}</p>
      <div v-if="clause.link?.length" class="legal-links">
        <Button v-for="link in clause.link" :key="link.url" as-child variant="outline" size="sm">
          <a
            class="legal-link"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.name} (opens in a new tab)`"
          >
            {{ link.name }} <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  </article>
</template>
