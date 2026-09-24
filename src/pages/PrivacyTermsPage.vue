<script setup lang="ts">
import LegalClause from '@/components/legal/LegalClause.vue'
import { legalClauses, legalPresentation } from '@/data/portfolio'
</script>

<template>
  <section
    id="privacy-and-terms"
    class="legal-full full-section"
    aria-labelledby="privacy-and-terms-title"
  >
    <div class="content-width legal-full-inner">
      <div class="legal-intro">
        <span class="section-kicker">The fine print</span>
        <h2 id="privacy-and-terms-title">
          Privacy &amp;<br />Terms<span class="title-stop">.</span>
        </h2>
        <p>{{ legalPresentation.introduction }}</p>
        <small>Effective {{ legalPresentation.lastUpdated }}</small>
      </div>

      <div class="legal-contents">
        <nav aria-label="Privacy and terms contents">
          <a
            v-for="(clause, index) in legalClauses"
            :key="clause.title"
            :href="`#clause-${index + 1}`"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span
            >{{ clause.title }}
          </a>
        </nav>
      </div>

      <div class="legal-full-clauses">
        <LegalClause
          v-for="(clause, index) in legalClauses"
          :key="clause.title"
          :clause="clause"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
