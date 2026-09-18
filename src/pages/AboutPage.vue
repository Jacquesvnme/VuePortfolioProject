<script setup lang="ts">
import { UserRound } from '@lucide/vue'
import InterestGroup from '@/components/about/InterestGroup.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { aboutFacts, interestGroups } from '@/data/portfolio'

const primaryInterestGroups = interestGroups.filter((group) =>
  ['personal-background', 'coding'].includes(group.id),
)
const compactInterestGroups = interestGroups.filter((group) =>
  ['games', 'music', 'manga', 'anime'].includes(group.id),
)
</script>

<template>
  <section id="about" class="page-section" aria-labelledby="about-title">
    <SectionHeading
      eyebrow="Beyond the code"
      title="About"
      description="Personal information about myself."
    />
    <article class="story-panel glass-panel">
      <header class="story-header">
        <UserRound aria-hidden="true" />
        <h3>Personal story</h3>
        <span>Main introduction</span>
      </header>
      <div class="story-copy">
        <p v-for="paragraph in aboutFacts.story" :key="paragraph">{{ paragraph }}</p>
      </div>
      <dl class="fact-grid">
        <div v-for="fact in aboutFacts.entries" :key="fact.label">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </article>
    <div class="interest-groups">
      <InterestGroup v-for="group in primaryInterestGroups" :key="group.id" :group="group" />
      <div class="compact-interest-grid">
        <InterestGroup
          v-for="group in compactInterestGroups"
          :key="group.id"
          :group="group"
          compact
        />
      </div>
    </div>
  </section>
</template>
