<script setup lang="ts">
import { BriefcaseBusiness, Download, Mail, MapPin, Phone } from '@lucide/vue'
import CopyButton from '@/components/common/CopyButton.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import { Button } from '@/components/ui/button'
import { contactDetails } from '@/data/portfolio'

const visibleGithubLinks = contactDetails.github.filter((entry) => entry.show)
const visibleLinkedinLinks = contactDetails.linkedin.filter((entry) => entry.show)
const visibleCvs = contactDetails.cv.filter((entry) => entry.show)
const visibleLocations = contactDetails.location.filter((entry) => entry.show)
const visiblePhones = contactDetails.phone.filter((entry) => entry.show)
const visibleEmails = contactDetails.email.filter((entry) => entry.show)
const hasVisibleContactLinks =
  visibleGithubLinks.length > 0 || visibleLinkedinLinks.length > 0 || visibleCvs.length > 0

const availabilityBadgeClass = (status: string) => ({
  'availability-badge-available': status === 'available',
  'availability-badge-unavailable': status === 'unavailable',
  'availability-badge-neutral': status !== 'available' && status !== 'unavailable',
})
</script>

<template>
  <section id="contact" class="page-section contact-section" aria-labelledby="contact-title">
    <div class="contact-statement">
      <p class="eyebrow">Start a conversation</p>
      <h2 id="contact-title" class="display-title">
        <span>Have something</span>
        <span>In mind?</span>
      </h2>
      <p>Please make use of the below contact information.</p>
      <div v-for="entry in visibleEmails" :key="entry.email" class="contact-email-row">
        <a class="contact-email" :href="`mailto:${entry.email}`"
          ><Mail aria-hidden="true" /> {{ entry.email }}</a
        >
        <CopyButton :value="entry.email" label="Copy email" />
      </div>
    </div>
    <div v-if="hasVisibleContactLinks" class="contact-links">
      <Button
        v-for="entry in visibleLinkedinLinks"
        :key="entry.url"
        as-child
        variant="outline"
        size="lg"
        class="hero-secondary-action"
        ><a :href="entry.url" target="_blank" rel="noopener noreferrer"
          ><LinkedinIcon aria-hidden="true" /> LinkedIn</a
        ></Button
      >
      <Button
        v-for="entry in visibleGithubLinks"
        :key="entry.url"
        as-child
        variant="outline"
        size="lg"
        class="hero-secondary-action"
        ><a :href="entry.url" target="_blank" rel="noopener noreferrer"
          ><GithubIcon aria-hidden="true" /> GitHub</a
        ></Button
      >
      <Button
        v-for="entry in visibleCvs"
        :key="entry.path"
        as-child
        variant="outline"
        size="lg"
        class="hero-secondary-action"
        ><a :href="entry.path" download><Download aria-hidden="true" /> Download CV</a></Button
      >
    </div>
    <dl class="contact-details glass-panel">
      <div v-for="entry in visiblePhones" :key="entry.phone">
        <Phone class="contact-detail-icon" aria-hidden="true" />
        <div class="contact-detail-content">
          <dt>Phone</dt>
          <dd>
            {{ entry.phone }}
            <CopyButton :value="entry.phone" label="Copy phone number" />
          </dd>
        </div>
      </div>
      <div v-for="entry in visibleLocations" :key="entry.location">
        <MapPin class="contact-detail-icon" aria-hidden="true" />
        <div class="contact-detail-content">
          <dt>Location</dt>
          <dd>{{ entry.location }}</dd>
        </div>
      </div>
      <div>
        <BriefcaseBusiness class="contact-detail-icon" aria-hidden="true" />
        <div class="contact-detail-content">
          <dt>Availability</dt>
          <dd class="availability-statuses">
            <span
              v-for="availability in contactDetails.availability"
              :key="availability.title"
              class="availability-badge"
              :class="availabilityBadgeClass(availability.status)"
            >
              <span class="availability-dot" aria-hidden="true" />
              {{ availability.title }} — {{ availability.status }}
            </span>
          </dd>
        </div>
      </div>
    </dl>
  </section>
</template>
