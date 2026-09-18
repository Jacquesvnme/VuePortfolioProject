<script setup lang="ts">
import ChapterDivider from '@/components/common/ChapterDivider.vue'
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
    <ChapterDivider number="02" total="06" />
    <ProjectsPage />
    <ChapterDivider number="03" total="06" />
    <SkillsAcademicsPage />
    <ChapterDivider number="04" total="06" />
    <AboutPage />
    <ChapterDivider number="05" total="06" />
    <ContactPage />
    <ChapterDivider number="06" total="06" />
    <PrivacyTermsPage />
  </PortfolioLayout>
</template>
