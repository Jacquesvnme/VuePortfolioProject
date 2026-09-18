<script setup lang="ts">
import SectionHeading from '@/components/common/SectionHeading.vue'
import LegalClause from '@/components/legal/LegalClause.vue'
import { legalClauses } from '@/data/portfolio'
</script>

<template>
  <section id="privacy-and-terms" class="page-section" aria-labelledby="privacy-and-terms-title">
    <SectionHeading
      eyebrow="The fine print"
      title="Privacy & Terms"
      description="Privacy & Terms of the website."
    />
    <div class="legal-meta content-panel glass-panel">
      <p><span>Last updated</span> Month 20XX</p>
      <nav aria-label="Privacy and terms contents">
        <a
          v-for="(clause, index) in legalClauses"
          :key="clause.title"
          :href="`#clause-${index + 1}`"
          >{{ String(index + 1).padStart(2, '0') }}</a
        >
      </nav>
    </div>
    <div class="legal-list content-panel glass-panel">
      <LegalClause
        v-for="(clause, index) in legalClauses"
        :key="clause.title"
        :clause="clause"
        :index="index"
      />
    </div>
  </section>
</template>
