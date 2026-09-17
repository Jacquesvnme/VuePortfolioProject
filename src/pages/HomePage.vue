<script setup lang="ts">
import { ArrowDown, ArrowRight } from '@lucide/vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section id="home" class="page-section hero-section" aria-labelledby="home-title">
    <div class="hero-content">
      <p class="eyebrow">Hello, I’m Your Name</p>
      <h1 id="home-title" class="hero-title">
        Full Stack Developer <span>&amp; Software Engineer.</span>
      </h1>
      <p class="hero-copy">
        I design and build thoughtful software across the stack. This is dummy introduction copy
        that can be replaced with a short, personal summary.
      </p>
      <div class="hero-actions">
        <Button as-child size="lg" class="primary-cta"
          ><a href="#projects">View projects <ArrowRight aria-hidden="true" /></a
        ></Button>
        <Button as-child size="lg" variant="outline">
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
            <GithubIcon aria-hidden="true" /> GitHub
          </a>
        </Button>
      </div>
    </div>
    <div class="hero-meta">
      <p><span>Based in</span> General location</p>
      <p><span>Focus</span> Useful, maintainable software</p>
      <a class="scroll-cue" href="#about">Explore <ArrowDown aria-hidden="true" /></a>
    </div>
  </section>
</template>
