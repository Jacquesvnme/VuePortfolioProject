<script setup lang="ts">
import { Heart, UserRound, X } from '@lucide/vue'
import InterestGroup from '@/components/about/InterestGroup.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { aboutFacts, interestGroups } from '@/data/portfolio'
</script>

<template>
  <section id="about" class="page-section" aria-labelledby="about-title">
    <SectionHeading
      eyebrow="Beyond the code"
      title="About"
      description="A personal, expandable portrait made from repeatable sections and list entries. Everything below is placeholder content."
    />
    <article class="story-panel glass-panel">
      <header class="story-header">
        <UserRound aria-hidden="true" />
        <h3>Personal story</h3>
        <span>Main introduction</span>
      </header>
      <div class="story-copy">
        <p>
          Primary dummy paragraph. Introduce your background, personality, motivations, and the
          experiences that shaped you.
        </p>
        <p>
          Secondary dummy paragraph. Add another part of your story, what matters to you, or how you
          spend time away from work.
        </p>
      </div>
      <dl class="fact-grid">
        <div v-for="fact in aboutFacts" :key="fact.label">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </article>
    <div class="preference-grid">
      <article class="preference-card">
        <Heart aria-hidden="true" />
        <div>
          <h3>Things I like</h3>
          <p>Dummy description of experiences, qualities, or activities you enjoy.</p>
        </div>
      </article>
      <article class="preference-card">
        <X aria-hidden="true" />
        <div>
          <h3>Not for me</h3>
          <p>Dummy description of things or environments you generally prefer to avoid.</p>
        </div>
      </article>
    </div>
    <div class="interest-groups">
      <InterestGroup v-for="group in interestGroups" :key="group.id" :group="group" />
    </div>
  </section>
</template>
