<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { computed } from 'vue'
import { resolveProjectPreview } from '@/components/projects/previews/registry'
import type { Project, ProjectPresentation, ProjectSectionVisibility } from '@/types/portfolio'

const props = defineProps<{
  project: Project
  presentation?: ProjectPresentation
  index: number
}>()

const preview = computed(() => resolveProjectPreview(props.presentation?.previewKey))

const sectionIsVisible = (section: keyof ProjectSectionVisibility) =>
  props.presentation?.sections?.[section] ?? true

const hasFacts = computed(
  () =>
    (sectionIsVisible('status') && Boolean(props.project.status)) ||
    (sectionIsVisible('role') && Boolean(props.presentation?.role)) ||
    (sectionIsVisible('format') && Boolean(props.presentation?.format)),
)
</script>

<template>
  <article class="featured-project" :aria-labelledby="`project-${project.id}-title`">
    <div class="project-visual-column">
      <div class="project-showcase" tabindex="0">
        <component :is="preview" :project="project" :presentation="presentation" />
      </div>
    </div>

    <div class="featured-copy">
      <div class="project-heading-row">
        <div>
          <span class="project-type">{{ presentation?.subtitle ?? 'Personal project' }}</span>
          <h3 :id="`project-${project.id}-title`">{{ project.title }}</h3>
        </div>
        <span class="project-index" :aria-label="`Project ${index + 1}`">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
      </div>

      <p class="project-summary">{{ project.summary }}</p>

      <div
        v-if="sectionIsVisible('narrative') && presentation?.narrative?.length"
        class="project-narrative"
      >
        <p v-for="paragraph in presentation.narrative" :key="paragraph">{{ paragraph }}</p>
      </div>

      <dl v-if="hasFacts" class="project-facts">
        <div v-if="sectionIsVisible('status') && project.status">
          <dt>Status</dt>
          <dd>{{ project.status }}</dd>
        </div>
        <div v-if="sectionIsVisible('role') && presentation?.role">
          <dt>Role</dt>
          <dd>{{ presentation.role }}</dd>
        </div>
        <div v-if="sectionIsVisible('format') && presentation?.format">
          <dt>Format</dt>
          <dd>{{ presentation.format }}</dd>
        </div>
      </dl>

      <section
        v-if="sectionIsVisible('technologies') && project.technologies.length"
        class="project-detail"
        :aria-labelledby="`project-${project.id}-technology`"
      >
        <div class="project-detail-heading">
          <h4 :id="`project-${project.id}-technology`">Technology</h4>
          <span>Tools and platforms</span>
        </div>
        <ul class="delimited-list" :aria-label="`${project.title} technologies`">
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>
      </section>

      <section
        v-if="sectionIsVisible('focus') && presentation?.focus?.length"
        class="project-detail"
        :aria-labelledby="`project-${project.id}-focus`"
      >
        <div class="project-detail-heading">
          <h4 :id="`project-${project.id}-focus`">Focus</h4>
          <span>Project priorities</span>
        </div>
        <ul class="project-focus-grid">
          <li v-for="item in presentation.focus" :key="item.title">
            <strong>{{ item.title }}</strong>
            <span>{{ item.description }}</span>
          </li>
        </ul>
      </section>

      <section
        v-if="sectionIsVisible('highlights') && project.highlights.length"
        class="project-detail"
        :aria-labelledby="`project-${project.id}-highlights`"
      >
        <div class="project-detail-heading">
          <h4 :id="`project-${project.id}-highlights`">Highlights</h4>
          <span>Selected outcomes</span>
        </div>
        <ul class="project-highlight-list">
          <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </section>

      <div
        v-if="sectionIsVisible('repository') && project.repositoryUrl !== '#'"
        class="project-links"
      >
        <a
          class="button button-primary"
          :href="project.repositoryUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
</template>
