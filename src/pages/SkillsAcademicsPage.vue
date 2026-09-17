<script setup lang="ts">
import SectionHeading from '@/components/common/SectionHeading.vue'
import CertificateEntry from '@/components/skills/CertificateEntry.vue'
import EducationEntry from '@/components/skills/EducationEntry.vue'
import SkillGroup from '@/components/skills/SkillGroup.vue'
import { certificates, education, skillGroups } from '@/data/portfolio'
</script>

<template>
  <section
    id="skills-and-academics"
    class="page-section"
    aria-labelledby="skills-and-academics-title"
  >
    <SectionHeading
      eyebrow="Capabilities & history"
      title="Skills & Academics"
      description="A badge-led overview of dummy technical skills, followed by formal education and certificates."
    />
    <div class="subsection">
      <div class="subsection-heading">
        <p class="eyebrow">01 / Skills</p>
        <h3>Tools I work with</h3>
      </div>
      <div class="editorial-list content-panel glass-panel">
        <SkillGroup
          v-for="(group, index) in skillGroups"
          :key="group.title"
          :group="group"
          :index="index"
        />
      </div>
    </div>
    <div class="subsection">
      <div class="subsection-heading">
        <p class="eyebrow">02 / Education</p>
        <h3>Formal education</h3>
      </div>
      <div class="editorial-list content-panel glass-panel">
        <EducationEntry
          v-for="(entry, index) in education"
          :key="entry.qualification"
          :entry="entry"
          :index="index"
        />
      </div>
    </div>
    <div class="subsection">
      <div class="subsection-heading">
        <p class="eyebrow">03 / Certificates</p>
        <h3>Continued learning</h3>
      </div>
      <div class="certificate-grid content-panel glass-panel">
        <CertificateEntry
          v-for="certificate in certificates"
          :key="certificate.title"
          :certificate="certificate"
        />
      </div>
    </div>
  </section>
</template>
