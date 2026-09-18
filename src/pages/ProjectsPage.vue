<script setup lang="ts">
import SectionHeading from '@/components/common/SectionHeading.vue'
import ProjectEntry from '@/components/projects/ProjectEntry.vue'
import { projects } from '@/data/portfolio'
</script>

<template>
  <section id="projects" class="page-section" aria-labelledby="projects-title">
    <SectionHeading
      eyebrow="Selected work"
      title="Projects"
      description="All of my personal projects"
    />
    <div class="project-list content-panel glass-panel">
      <ProjectEntry
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>
