<script setup lang="ts">
import { contactDetails } from '@/data/portfolio'

const visibleGithubLinks = contactDetails.github.filter((entry) => entry.show)
const visibleLinkedinLinks = contactDetails.linkedin.filter((entry) => entry.show)
const visibleCvs = contactDetails.cv.filter((entry) => entry.show)
const visibleLocations = contactDetails.location.filter((entry) => entry.show)
const visiblePhones = contactDetails.phone.filter((entry) => entry.show)
const visibleEmails = contactDetails.email.filter((entry) => entry.show)
</script>

<template>
  <section id="contact" class="contact-full full-section" aria-labelledby="contact-title">
    <div class="content-width contact-full-inner">
      <div class="contact-primary">
        <span class="contact-kicker">Start a conversation</span>
        <h2 id="contact-title">Have something<br />in mind?</h2>
        <p>
          For freelance projects, ideas, or a conversation about building useful software, get in
          touch.
        </p>
        <a
          v-for="entry in visibleEmails"
          :key="entry.email"
          class="contact-email-full"
          :href="`mailto:${entry.email}`"
        >
          {{ entry.email }} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="contact-aside">
        <div class="contact-availability">
          <h3>Availability</h3>
          <p v-for="entry in contactDetails.availability" :key="entry.title">
            <span class="availability-indicator" :class="entry.status" aria-hidden="true" />
            {{ entry.title }} <strong>{{ entry.status }}</strong>
          </p>
        </div>

        <div class="contact-aside-links">
          <h3>Elsewhere</h3>
          <a
            v-for="entry in visibleGithubLinks"
            :key="entry.url"
            :href="entry.url"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub <span aria-hidden="true">↗</span></a
          >
          <a
            v-for="entry in visibleLinkedinLinks"
            :key="entry.url"
            :href="entry.url"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn <span aria-hidden="true">↗</span></a
          >
          <a v-for="entry in visibleCvs" :key="entry.path" :href="entry.path" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div v-if="visibleLocations.length" class="contact-location">
          <h3>Location</h3>
          <p v-for="entry in visibleLocations" :key="entry.location">{{ entry.location }}</p>
        </div>

        <div v-if="visiblePhones.length" class="contact-location">
          <h3>Phone</h3>
          <a v-for="entry in visiblePhones" :key="entry.phone" :href="`tel:${entry.phone}`">
            {{ entry.phone }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
