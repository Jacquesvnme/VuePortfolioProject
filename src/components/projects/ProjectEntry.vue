<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { Project } from '@/types/portfolio'

defineProps<{ project: Project; index: number }>()

const statusClasses: Record<Project['status'], string> = {
  Completed: 'status-completed',
  'In Progress': 'status-in-progress',
  Archived: 'status-archived',
}
</script>

<template>
  <article class="project-entry">
    <div class="project-meta">
      <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="status-label" :class="statusClasses[project.status]">
        <span class="status-dot" aria-hidden="true" />{{ project.status }}
      </span>
    </div>
    <div class="project-body">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-summary">{{ project.summary }}</p>
      <div class="badge-list" aria-label="Technologies used">
        <Badge v-for="technology in project.technologies" :key="technology">{{ technology }}</Badge>
      </div>
    </div>
    <div class="project-actions">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">View details <ArrowUpRight aria-hidden="true" /></Button>
        </DialogTrigger>
        <DialogContent>
          <p class="eyebrow">Project {{ String(index + 1).padStart(2, '0') }}</p>
          <DialogTitle>{{ project.title }}</DialogTitle>
          <DialogDescription>{{ project.description }}</DialogDescription>
          <ul class="dialog-list">
            <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <div class="badge-list">
            <Badge v-for="technology in project.technologies" :key="technology">{{
              technology
            }}</Badge>
          </div>
          <Button as-child variant="outline" class="dialog-repository-action">
            <a :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer">
              <GithubIcon aria-hidden="true" /> Repository
            </a>
          </Button>
        </DialogContent>
      </Dialog>
      <Button as-child variant="outline">
        <a :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer">
          <GithubIcon aria-hidden="true" /> Repository
        </a>
      </Button>
    </div>
  </article>
</template>
