<script setup lang="ts">
import SectionHeading from '@/components/common/SectionHeading.vue'
import CertificateEntry from '@/components/skills/CertificateEntry.vue'
import EducationEntry from '@/components/skills/EducationEntry.vue'
import SkillGroup from '@/components/skills/SkillGroup.vue'
import WorkExperienceEntry from '@/components/skills/WorkExperienceEntry.vue'
import { certificates, education, skillGroups, workExperience } from '@/data/portfolio'
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
      description="Information about my academic history and skills"
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
        <p class="eyebrow">02 / Work experience</p>
        <h3>Professional experience</h3>
      </div>
      <div class="experience-list">
        <WorkExperienceEntry
          v-for="experience in workExperience"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </div>
    <div class="subsection">
      <div class="subsection-heading">
        <p class="eyebrow">03 / Education</p>
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
        <p class="eyebrow">04 / Certificates</p>
        <h3>Continued learning</h3>
      </div>
      <div
        class="certificate-grid content-panel glass-panel"
        :data-desktop-placeholders="(3 - (certificates.length % 3)) % 3"
        :data-tablet-placeholders="certificates.length % 2"
      >
        <CertificateEntry
          v-for="(certificate, index) in certificates"
          :key="`${certificate.title}-${certificate.issuer}-${certificate.year}-${index}`"
          :certificate="certificate"
        />
        <div class="certificate-placeholder certificate-placeholder-primary" aria-hidden="true" />
        <div class="certificate-placeholder certificate-placeholder-secondary" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>
