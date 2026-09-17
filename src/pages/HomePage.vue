<script setup lang="ts">
import { ArrowDown, ArrowRight } from '@lucide/vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import { Button } from '@/components/ui/button'
import { homeDetails } from '@/data/portfolio'
</script>

<template>
  <section id="home" class="page-section hero-section" aria-labelledby="home-title">
    <div class="hero-content">
      <p class="eyebrow">Hello, I’m Jacques van Niekerk</p>
      <h1 id="home-title" class="hero-title">Full Stack <span> Software Engineer.</span></h1>
      <p class="hero-copy">
        I am a full stack developer with a huge love for developing personal application.
      </p>
      <div class="hero-actions">
        <Button as-child size="lg" class="primary-cta">
          <a href="#projects">View projects<ArrowRight aria-hidden="true" /> </a>
        </Button>
        <Button as-child size="lg" variant="outline">
          <a :href="homeDetails.githubUrl" target="_blank" rel="noopener noreferrer">
            <GithubIcon aria-hidden="true" /> GitHub
          </a>
        </Button>
      </div>
    </div>
    <div class="hero-meta">
      <p><span>Based in</span> {{ homeDetails.location }}</p>
      <p><span>Focus</span> Smaller, narrow focused personal applications</p>
      <a class="scroll-cue" href="#about">Explore <ArrowDown aria-hidden="true" /></a>
    </div>
  </section>
</template>
