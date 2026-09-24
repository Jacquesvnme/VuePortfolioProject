import type { Component } from 'vue'
import GenericProjectPreview from './GenericProjectPreview.vue'
import PortfolioWebsitePreview from './PortfolioWebsitePreview.vue'
import type { ProjectPreviewKey } from '@/types/portfolio'

const projectPreviewRegistry: Record<ProjectPreviewKey, Component> = {
  'portfolio-website-preview': PortfolioWebsitePreview,
}

export const resolveProjectPreview = (key?: ProjectPreviewKey) =>
  key ? projectPreviewRegistry[key] : GenericProjectPreview
