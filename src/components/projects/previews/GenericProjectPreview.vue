<script setup lang="ts">
import type { Project, ProjectPresentation } from '@/types/portfolio'

defineProps<{ project: Project; presentation?: ProjectPresentation }>()
</script>

<template>
  <div class="project-preview-frame generic-project-preview">
    <div class="project-preview-top">
      <span>{{ project.title }}</span>
      <span>{{ project.status }} <i aria-hidden="true" /></span>
    </div>
    <div class="generic-preview-body" aria-hidden="true">
      <span>{{ String(project.title.charAt(0) || 'P').toUpperCase() }}</span>
      <strong>{{ project.title }}</strong>
    </div>
    <div class="project-preview-bottom">
      <span>{{ presentation?.previewFooter?.[0] ?? 'Project preview' }}</span>
      <span>{{ presentation?.previewFooter?.[1] ?? 'Details to come' }}</span>
    </div>
  </div>
</template>
