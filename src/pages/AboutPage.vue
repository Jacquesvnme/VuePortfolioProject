<script setup lang="ts">
import InterestGroup from '@/components/about/InterestGroup.vue'
import { aboutFacts, interestGroups } from '@/data/portfolio'

const codingGroup = interestGroups.find((group) => group.id === 'coding')
const compactInterestGroups = interestGroups.filter((group) =>
  ['games', 'music', 'manga', 'anime'].includes(group.id),
)
</script>

<template>
  <section id="about" class="about-section full-section" aria-labelledby="about-title">
    <div class="content-width">
      <div class="page-heading about-heading">
        <div>
          <span class="section-kicker">Beyond the code</span>
          <h2 id="about-title">About<span class="title-stop">.</span></h2>
        </div>
        <p>A few things that shape what I build and how I spend my time.</p>
      </div>

      <div class="about-overview">
        <div class="about-story">
          <span class="about-margin-label">Personal story</span>
          <p
            v-for="(paragraph, index) in aboutFacts.story"
            :key="paragraph"
            :class="{ 'story-in-progress': index > 0 }"
          >
            {{ paragraph }}
          </p>
        </div>
        <dl class="about-facts">
          <div v-for="fact in aboutFacts.entries" :key="fact.label">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </div>

      <div v-if="codingGroup" class="interest-heading">
        <div>
          <span class="section-kicker">What holds my attention</span>
          <h3>Coding interests</h3>
        </div>
        <p>{{ codingGroup.description }}</p>
      </div>
      <InterestGroup v-if="codingGroup" :group="codingGroup" />

      <section class="outside-section" aria-labelledby="outside-title">
        <div class="outside-heading">
          <span class="section-kicker">Away from the editor</span>
          <h3 id="outside-title">What I’m into.</h3>
          <p>A few of the games, music, manga, and anime I keep returning to.</p>
        </div>
        <div class="outside-grid">
          <InterestGroup
            v-for="group in compactInterestGroups"
            :key="group.id"
            :group="group"
            compact
          />
        </div>
      </section>
    </div>
  </section>
</template>
