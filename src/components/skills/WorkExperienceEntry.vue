<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { JobRole, WorkExperience } from '@/types/portfolio'

const props = defineProps<{ experience: WorkExperience }>()

interface MonthValue {
  year: number
  month: number
}

const monthFormatter = new Intl.DateTimeFormat('en', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const parseMonth = (value: string): MonthValue => {
  const [year = '1970', month = '1'] = value.split('-')
  return { year: Number(year), month: Number(month) }
}

const currentMonth = (): MonthValue => {
  const now = new Date()
  return { year: now.getFullYear(), month: now.getMonth() + 1 }
}

const formatMonth = (value: string) => {
  const { year, month } = parseMonth(value)
  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 1)))
}

const monthIndex = ({ year, month }: MonthValue) => year * 12 + month

const durationBetween = (startDate: string, endDate: string | null) => {
  const start = parseMonth(startDate)
  const end = endDate ? parseMonth(endDate) : currentMonth()
  const totalMonths = Math.max(1, monthIndex(end) - monthIndex(start) + 1)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []

  if (years) parts.push(`${years} yr${years === 1 ? '' : 's'}`)
  if (months) parts.push(`${months} mo${months === 1 ? '' : 's'}`)

  return parts.join(' ')
}

const rolePeriod = (role: JobRole) =>
  `${formatMonth(role.startDate)} — ${role.endDate ? formatMonth(role.endDate) : 'Present'}`

const earliestStart = computed(() =>
  props.experience.roles.reduce(
    (earliest, role) => (role.startDate < earliest ? role.startDate : earliest),
    props.experience.roles[0]?.startDate ?? '',
  ),
)

const latestEnd = computed(() => {
  if (props.experience.roles.some((role) => role.endDate === null)) return null

  return props.experience.roles.reduce<string | null>((latest, role) => {
    if (!role.endDate) return latest
    return !latest || role.endDate > latest ? role.endDate : latest
  }, null)
})

const companyPeriod = computed(() => {
  if (!earliestStart.value) return ''
  return `${formatMonth(earliestStart.value)} — ${latestEnd.value ? formatMonth(latestEnd.value) : 'Present'}`
})

const companyDuration = computed(() =>
  earliestStart.value ? durationBetween(earliestStart.value, latestEnd.value) : '',
)

const roleCount = computed(
  () =>
    `${props.experience.roles.length} ${props.experience.roles.length === 1 ? 'role' : 'roles'}`,
)
</script>

<template>
  <article class="experience-company content-panel glass-panel">
    <header class="experience-company-header">
      <span class="experience-company-mark" aria-hidden="true">
        {{ experience.companyInitial ?? experience.company.charAt(0) }}
      </span>
      <div class="experience-company-copy">
        <h4>{{ experience.company }}</h4>
        <p>
          {{ roleCount }} · {{ companyPeriod }} · {{ companyDuration }}
          <template v-if="experience.location"> · {{ experience.location }}</template>
        </p>
      </div>
      <div v-if="experience.links?.length" class="experience-company-links">
        <Button
          v-for="link in experience.links"
          :key="link.url"
          as-child
          variant="outline"
          size="sm"
        >
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.name} (opens in a new tab)`"
          >
            {{ link.name }} <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>

    <ol class="experience-role-list">
      <li
        v-for="role in experience.roles"
        :key="role.id"
        class="experience-role"
        :class="{ 'is-current': role.endDate === null }"
      >
        <div class="experience-timeline" aria-hidden="true">
          <span class="experience-timeline-node" />
        </div>
        <p class="experience-role-period">
          <span>{{ rolePeriod(role) }}</span>
          <span>{{ durationBetween(role.startDate, role.endDate) }}</span>
        </p>
        <div class="experience-role-content">
          <h4 class="row-title">{{ role.title }}</h4>
          <div v-if="role.descriptions?.length" class="experience-role-descriptions">
            <p v-for="(description, index) in role.descriptions" :key="`${role.id}-${index}`">
              {{ description }}
            </p>
          </div>
          <div
            v-if="role.tags?.length"
            class="badge-list experience-role-tags"
            aria-label="Technologies used"
          >
            <Badge v-for="tag in role.tags" :key="tag">{{ tag }}</Badge>
          </div>
          <div v-if="role.links?.length" class="experience-role-links">
            <Button v-for="link in role.links" :key="link.url" as-child variant="outline" size="sm">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${link.name} (opens in a new tab)`"
              >
                {{ link.name }} <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <span v-if="role.endDate === null" class="experience-current-status">
          <span class="status-dot" aria-hidden="true" />Current
        </span>
      </li>
    </ol>
  </article>
</template>
