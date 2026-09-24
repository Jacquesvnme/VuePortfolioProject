<script setup lang="ts">
import PortfolioLayout from '@/layouts/PortfolioLayout.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PrivacyTermsPage from '@/pages/PrivacyTermsPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import SkillsAcademicsPage from '@/pages/SkillsAcademicsPage.vue'
</script>

<template>
  <PortfolioLayout>
    <HomePage />
    <ProjectsPage />
    <SkillsAcademicsPage />
    <AboutPage />
    <ContactPage />
    <PrivacyTermsPage />
  </PortfolioLayout>
</template>
