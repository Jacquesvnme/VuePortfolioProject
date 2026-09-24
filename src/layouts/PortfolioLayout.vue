<script setup lang="ts">
import { Menu, X } from '@lucide/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import { navigation } from '@/data/portfolio'

const activeSection = ref('home')
const mobileMenuOpen = ref(false)
const currentYear = new Date().getFullYear()
let scrollFrame: number | undefined

const closeMenu = () => {
  mobileMenuOpen.value = false
}

const syncActiveSection = () => {
  scrollFrame = undefined
  const readingLine = window.scrollY + Math.max(96, window.innerHeight * 0.3)
  let currentSection = navigation[0]?.id ?? 'home'

  for (const { id } of navigation) {
    const section = document.getElementById(id)
    if (!section || section.offsetTop > readingLine) break
    currentSection = id
  }

  activeSection.value = currentSection

  if (window.location.hash !== `#${currentSection}`) {
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${currentSection}`,
    )
  }
}

const queueSectionSync = () => {
  if (scrollFrame !== undefined) return
  scrollFrame = window.requestAnimationFrame(syncActiveSection)
}

onMounted(() => {
  const initialHash = window.location.hash.slice(1)
  if (navigation.some((item) => item.id === initialHash)) activeSection.value = initialHash

  window.addEventListener('scroll', queueSectionSync, { passive: true })
  window.addEventListener('resize', queueSectionSync)
  queueSectionSync()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', queueSectionSync)
  window.removeEventListener('resize', queueSectionSync)
  if (scrollFrame !== undefined) window.cancelAnimationFrame(scrollFrame)
})
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <header class="site-header full-header">
    <a class="wordmark" href="#home" aria-label="Jacques van Niekerk, home" @click="closeMenu">
      <span class="wordmark-marker" aria-hidden="true" />
      <span class="wordmark-copy">
        <strong>Jacques van Niekerk</strong>
        <small>Software engineer</small>
      </span>
    </a>

    <nav class="site-nav full-nav" aria-label="Primary navigation">
      <a
        v-for="item in navigation"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ current: activeSection === item.id }"
        :aria-current="activeSection === item.id ? 'location' : undefined"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="full-actions">
      <ThemeToggle />
      <button
        class="mobile-menu-button"
        type="button"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <X v-if="mobileMenuOpen" aria-hidden="true" />
        <Menu v-else aria-hidden="true" />
      </button>
    </div>

    <nav
      v-if="mobileMenuOpen"
      id="mobile-navigation"
      class="mobile-navigation"
      aria-label="Mobile navigation"
    >
      <a
        v-for="(item, index) in navigation"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ current: activeSection === item.id }"
        @click="closeMenu"
      >
        <span>{{ item.label }}</span>
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
      </a>
    </nav>
  </header>

  <main id="main-content"><slot /></main>

  <footer class="site-footer">
    <span>© {{ currentYear }} Jacques van Niekerk</span>
    <span>Portfolio Website</span>
    <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
  </footer>
</template>
