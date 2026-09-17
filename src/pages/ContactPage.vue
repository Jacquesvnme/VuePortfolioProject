<script setup lang="ts">
import { BriefcaseBusiness, Download, Mail, MapPin, Phone } from '@lucide/vue'
import CopyButton from '@/components/common/CopyButton.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import { Button } from '@/components/ui/button'
import { contactDetails } from '@/data/portfolio'

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
      <div class="contact-email-row">
        <a class="contact-email" :href="`mailto:${contactDetails.email}`"
          ><Mail aria-hidden="true" /> {{ contactDetails.email }}</a
        >
        <CopyButton :value="contactDetails.email" label="Copy email" />
      </div>
    </div>
    <div class="contact-links">
      <Button as-child variant="outline"
        ><a :href="contactDetails.linkedinUrl" target="_blank" rel="noopener noreferrer"
          ><LinkedinIcon aria-hidden="true" /> LinkedIn</a
        ></Button
      >
      <Button as-child variant="outline"
        ><a :href="contactDetails.githubUrl" target="_blank" rel="noopener noreferrer"
          ><GithubIcon aria-hidden="true" /> GitHub</a
        ></Button
      >
      <Button as-child variant="outline"
        ><a :href="contactDetails.cvPath" download
          ><Download aria-hidden="true" /> Download CV</a
        ></Button
      >
    </div>
    <dl class="contact-details glass-panel">
      <div v-if="contactDetails.showPhone">
        <dt><Phone aria-hidden="true" /> Phone</dt>
        <dd>
          {{ contactDetails.phone }}
          <CopyButton :value="contactDetails.phone" label="Copy phone number" />
        </dd>
      </div>
      <div>
        <dt><MapPin aria-hidden="true" /> Location</dt>
        <dd>{{ contactDetails.location }}</dd>
      </div>
      <div>
        <dt><BriefcaseBusiness aria-hidden="true" /> Availability</dt>
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
    </dl>
  </section>
</template>
