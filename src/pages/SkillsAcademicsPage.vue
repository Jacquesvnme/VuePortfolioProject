<script setup lang="ts">
import CertificateEntry from '@/components/skills/CertificateEntry.vue'
import EducationEntry from '@/components/skills/EducationEntry.vue'
import SkillGroup from '@/components/skills/SkillGroup.vue'
import WorkExperienceEntry from '@/components/skills/WorkExperienceEntry.vue'
import { certificates, education, skillGroups, workExperience } from '@/data/portfolio'
</script>

<template>
  <section
    id="skills-and-academics"
    class="content-width skills-main full-section"
    aria-labelledby="skills-and-academics-title"
  >
    <div class="page-heading skills-heading">
      <div>
        <span class="section-kicker">Practice and progress</span>
        <h2 id="skills-and-academics-title">
          Skills &amp;<br />Academics<span class="title-stop">.</span>
        </h2>
      </div>
      <p>The tools I use, the work that shaped my practice, and the studies behind it.</p>
    </div>

    <div class="skills-layout">
      <section class="capability-section" aria-labelledby="capability-title">
        <div class="column-heading">
          <h3 id="capability-title">Capabilities</h3>
          <span>Current toolkit</span>
        </div>
        <SkillGroup v-for="group in skillGroups" :key="group.title" :group="group" />
      </section>

      <div class="history-column">
        <section class="history-section" aria-labelledby="experience-title">
          <div class="column-heading">
            <h3 id="experience-title">Experience</h3>
            <span>Work</span>
          </div>
          <WorkExperienceEntry
            v-for="experience in workExperience"
            :key="experience.id"
            :experience="experience"
          />
        </section>

        <section class="history-section education-section" aria-labelledby="education-title">
          <div class="column-heading">
            <h3 id="education-title">Education</h3>
            <span>Study</span>
          </div>
          <EducationEntry v-for="entry in education" :key="entry.qualification" :entry="entry" />
        </section>
      </div>
    </div>

    <section class="credentials" aria-labelledby="credentials-title">
      <div class="column-heading">
        <h3 id="credentials-title">Continued learning</h3>
        <span>Certificates</span>
      </div>
      <ul class="credential-list">
        <CertificateEntry
          v-for="certificate in certificates"
          :key="`${certificate.title}-${certificate.issuer}-${certificate.year}`"
          :certificate="certificate"
        />
      </ul>
    </section>
  </section>
</template>
