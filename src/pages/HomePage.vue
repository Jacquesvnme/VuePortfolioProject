<script setup lang="ts">
import WebsiteWarning from '@/components/home/WebsiteWarning.vue'
import { homeDetails, homePresentation } from '@/data/portfolio'
</script>

<template>
  <section id="home" class="home-hero" aria-labelledby="home-title">
    <div class="home-scene" role="img" aria-label="Misty forest landscape" />
    <div class="home-hero-content">
      <div class="home-intro">
        <span class="presence">
          <span class="presence-light" aria-hidden="true" />{{ homePresentation.presence }}
        </span>
        <p class="intro-name">{{ homePresentation.name }}</p>
        <h1 id="home-title">
          <template v-for="(line, index) in homePresentation.title" :key="line">
            {{ line }}<br v-if="index < homePresentation.title.length - 1" />
          </template>
        </h1>
        <p class="hero-description">{{ homePresentation.description }}</p>
        <div class="action-row">
          <a class="button button-primary" href="#projects">
            Explore projects <span aria-hidden="true">↗</span>
          </a>
          <a
            class="button button-quiet"
            :href="homeDetails.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div class="scene-note">
        <span class="scene-rule" aria-hidden="true" />
        <span>Build small.<br />Think carefully.</span>
      </div>
    </div>
    <div class="scene-caption">
      <span>Portfolio / 2026</span><span>{{ homePresentation.focus }}</span>
    </div>
  </section>

  <section class="home-forward content-width" aria-labelledby="forward-title">
    <div class="home-forward-heading">
      <span class="section-kicker">{{ homePresentation.contextKicker }}</span>
      <h2 id="forward-title">{{ homePresentation.contextTitle }}</h2>
    </div>
    <div class="home-forward-copy">
      <p v-for="paragraph in homePresentation.contextParagraphs" :key="paragraph">
        {{ paragraph }}
      </p>
      <a class="text-link" href="#skills-and-academics">
        See my skills and experience <span aria-hidden="true">↗</span>
      </a>
    </div>
    <WebsiteWarning v-if="homeDetails.showWebsiteWarning" />
  </section>
</template>
