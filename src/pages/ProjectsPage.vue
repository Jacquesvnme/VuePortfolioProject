<script setup lang="ts">
import ProjectEntry from '@/components/projects/ProjectEntry.vue'
import { projectPresentations, projects } from '@/data/portfolio'
</script>

<template>
  <section
    id="projects"
    class="content-width projects-main full-section"
    aria-labelledby="projects-title"
  >
    <div class="page-heading projects-heading">
      <div>
        <span class="section-kicker">Selected work</span>
        <h2 id="projects-title">Projects<span class="title-stop">.</span></h2>
      </div>
      <p>Personal software projects, built to answer a specific need.</p>
    </div>

    <div class="project-list">
      <ProjectEntry
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :presentation="projectPresentations[project.id]"
        :index="index"
      />
    </div>
  </section>
</template>
