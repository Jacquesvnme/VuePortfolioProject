<script setup lang="ts">
import { ArrowUp, Menu, X } from '@lucide/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AmbientBackground from '@/components/common/AmbientBackground.vue'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import { Button } from '@/components/ui/button'
import { navigation } from '@/data/portfolio'

const activeSection = ref('home')
const mobileMenuOpen = ref(false)
const showBackToTop = ref(false)
const footerElement = ref<HTMLElement | null>(null)
const currentYear = new Date().getFullYear()
let observer: IntersectionObserver | undefined
let footerObserver: IntersectionObserver | undefined
let footerVisible = false

const closeMenu = () => {
  mobileMenuOpen.value = false
}

const updateBackToTop = () => {
  showBackToTop.value = window.scrollY > window.innerHeight * 0.75 && !footerVisible
}

onMounted(() => {
  const initialHash = window.location.hash.slice(1)
  if (navigation.some((item) => item.id === initialHash)) activeSection.value = initialHash

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (!visibleEntry) return
      activeSection.value = visibleEntry.target.id
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}#${visibleEntry.target.id}`,
      )
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.6] },
  )

  navigation.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (section) observer?.observe(section)
  })

  footerObserver = new IntersectionObserver(([entry]) => {
    footerVisible = entry?.isIntersecting ?? false
    updateBackToTop()
  })

  if (footerElement.value) footerObserver.observe(footerElement.value)
  updateBackToTop()
  window.addEventListener('scroll', updateBackToTop, { passive: true })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  footerObserver?.disconnect()
  window.removeEventListener('scroll', updateBackToTop)
})
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <AmbientBackground />

  <header class="site-header glass-panel">
    <a class="brand brand-panel" href="#home" aria-label="Portfolio home" @click="closeMenu">
      <span class="brand-name">Jacques Van Niekerk</span>
      <span class="brand-meta">
        <span class="brand-subtitle">Portfolio Website</span>
        <span class="brand-meta-separator" aria-hidden="true" />
        <span class="brand-development-status">
          <span class="brand-development-dot" aria-hidden="true" />
          In development
        </span>
      </span>
    </a>

    <nav class="desktop-navigation" aria-label="Primary navigation">
      <a
        v-for="item in navigation"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ active: activeSection === item.id }"
        :aria-current="activeSection === item.id ? 'location' : undefined"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="header-actions">
      <ThemeToggle />
      <Button
        class="menu-button"
        variant="ghost"
        size="icon"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <X v-if="mobileMenuOpen" aria-hidden="true" />
        <Menu v-else aria-hidden="true" />
      </Button>
    </div>

    <nav
      v-if="mobileMenuOpen"
      id="mobile-navigation"
      class="mobile-navigation"
      aria-label="Mobile navigation"
    >
      <a
        v-for="item in navigation"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ active: activeSection === item.id }"
        @click="closeMenu"
      >
        <span>{{ item.label }}</span
        ><span>{{ String(navigation.indexOf(item) + 1).padStart(2, '0') }}</span>
      </a>
    </nav>
  </header>

  <main id="main-content" class="site-main"><slot /></main>

  <footer ref="footerElement" class="site-footer glass-panel">
    <p>© {{ currentYear }} · Jacques Van Niekerk</p>
    <p class="footer-note">Portfolio Website · Built with Codex</p>
    <a href="#home">Back to top <ArrowUp aria-hidden="true" /></a>
  </footer>

  <Button v-show="showBackToTop" as-child size="icon" class="back-to-top" aria-label="Back to top">
    <a href="#home"><ArrowUp aria-hidden="true" /></a>
  </Button>
</template>
