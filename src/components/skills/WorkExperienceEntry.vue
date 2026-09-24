<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { computed } from 'vue'
import type { JobRole, WorkExperience } from '@/types/portfolio'

const props = defineProps<{ experience: WorkExperience }>()

const monthFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

const formatMonth = (value: string) => {
  const [year = '1970', month = '1'] = value.split('-')
  return monthFormatter.format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)))
}

const rolePeriod = (role: JobRole) =>
  `${formatMonth(role.startDate)} — ${role.endDate ? formatMonth(role.endDate) : 'Present'}`

const orderedRoles = computed(() =>
  [...props.experience.roles].sort((first, second) =>
    second.startDate.localeCompare(first.startDate),
  ),
)

const companyPeriod = computed(() => {
  const firstRole = orderedRoles.value.at(-1)
  const latestRole = orderedRoles.value[0]
  const hasCurrentRole = orderedRoles.value.some((role) => role.endDate === null)

  if (!firstRole || !latestRole) return ''
  return `${formatMonth(firstRole.startDate)} — ${hasCurrentRole ? 'Present' : formatMonth(latestRole.endDate ?? latestRole.startDate)}`
})
</script>

<template>
  <article class="history-company focus-row">
    <header class="history-company-heading">
      <div>
        <h4>{{ experience.company }}</h4>
        <p>
          <span v-if="experience.location">{{ experience.location }}</span>
          <span v-if="experience.location && companyPeriod" aria-hidden="true"> · </span>
          <span>{{ companyPeriod }}</span>
        </p>
      </div>
      <a
        v-if="experience.links?.[0]"
        :href="experience.links[0].url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ experience.links[0].name }} <ArrowUpRight aria-hidden="true" />
      </a>
    </header>

    <ol class="career-path" :aria-label="`${experience.company} role progression`">
      <li v-for="(role, index) in orderedRoles" :key="role.id" class="career-step">
        <div class="career-step-marker" aria-hidden="true">
          {{ String(orderedRoles.length - index).padStart(2, '0') }}
        </div>

        <div class="career-step-content">
          <div class="career-role-meta">
            <span class="history-date">{{ rolePeriod(role) }}</span>
            <span v-if="role.endDate === null" class="career-current">Current role</span>
          </div>
          <h5>{{ role.title }}</h5>
          <div v-if="role.descriptions?.length" class="history-descriptions">
            <p v-for="description in role.descriptions" :key="description">{{ description }}</p>
          </div>
          <ul v-if="role.tags?.length" class="delimited-list" aria-label="Technologies used">
            <li v-for="tag in role.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </article>
</template>
