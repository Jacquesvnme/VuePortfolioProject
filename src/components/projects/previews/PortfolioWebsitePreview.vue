<script setup lang="ts">
import type { Project, ProjectPresentation } from '@/types/portfolio'

defineProps<{ project: Project; presentation?: ProjectPresentation }>()
</script>

<template>
  <div class="project-preview-frame">
    <div class="project-preview-top">
      <span>{{ project.title }}</span>
      <span>{{ project.status }} <i aria-hidden="true" /></span>
    </div>
    <div class="project-preview-window" aria-hidden="true">
      <div class="project-preview-image" />
      <div class="project-preview-copy">
        <span>Jacques van Niekerk</span>
        <strong>Software<br />engineer.</strong>
        <i /><i />
      </div>
    </div>
    <div class="project-preview-bottom">
      <span>{{ presentation?.previewFooter?.[0] ?? 'Project preview' }}</span>
      <span>{{ presentation?.previewFooter?.[1] ?? project.status }}</span>
    </div>
  </div>
</template>
