export interface NavigationItem {
  label: string
  id: string
}

export interface HomeDetails {
  githubUrl: string
  location: string
  showWebsiteWarning: boolean
}

export interface HomePresentation {
  presence: string
  name: string
  title: string[]
  description: string
  focus: string
  contextKicker: string
  contextTitle: string
  contextParagraphs: string[]
}

export interface AvailabilityEntry {
  title: string
  status: string
}

export interface VisibleContactUrl {
  url: string
  show: boolean
}

export interface VisibleContactPath {
  path: string
  show: boolean
}

export interface VisibleContactLocation {
  location: string
  show: boolean
}

export interface VisibleContactPhone {
  phone: string
  show: boolean
}

export interface VisibleContactEmail {
  email: string
  show: boolean
}

export interface ContactDetails {
  availability: AvailabilityEntry[]
  github: VisibleContactUrl[]
  linkedin: VisibleContactUrl[]
  cv: VisibleContactPath[]
  location: VisibleContactLocation[]
  phone: VisibleContactPhone[]
  email: VisibleContactEmail[]
}

export type ProjectStatus = 'Completed' | 'In Progress' | 'Archived' | 'Still to come'

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  status: ProjectStatus
  technologies: string[]
  highlights: string[]
  repositoryUrl: string
}

export type ProjectPreviewKey = 'portfolio-website-preview'

export interface ProjectFocus {
  title: string
  description: string
}

export interface ProjectSectionVisibility {
  narrative?: boolean
  status?: boolean
  role?: boolean
  format?: boolean
  technologies?: boolean
  focus?: boolean
  highlights?: boolean
  repository?: boolean
}

export interface ProjectPresentation {
  subtitle: string
  narrative?: string[]
  role?: string
  format?: string
  focus?: ProjectFocus[]
  previewKey?: ProjectPreviewKey
  previewFooter?: [string, string]
  sections?: ProjectSectionVisibility
}

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

export interface EducationEntry {
  period: string
  qualification: string
  institution: string
  description: string
}

export interface ExperienceLink {
  name: string
  url: string
}

export interface JobRole {
  id: string
  title: string
  startDate: string
  endDate: string | null
  descriptions: string[] | null
  tags?: string[]
  links?: ExperienceLink[]
}

export interface WorkExperience {
  id: string
  company: string
  companyInitial?: string
  location?: string
  links?: ExperienceLink[]
  roles: JobRole[]
}

export interface CertificateEntry {
  title: string
  issuer: string
  year: string
  credentialUrl: string
}

export interface AboutFactEntry {
  label: string
  value: string
}

export interface AboutFact {
  story: string[]
  entries: AboutFactEntry[]
}

export interface InterestLink {
  name: string
  url: string
}

export interface InterestEntry {
  title: string
  description: string[]
  tags?: string[]
  links?: InterestLink[] | null
  hoursPlayed?: number | null
}

export interface InterestGroup {
  id: string
  title: string
  description: string
  icon: 'user' | 'code' | 'games' | 'music' | 'manga' | 'anime'
  entries: InterestEntry[]
}

export interface LegalLink {
  name: string
  url: string
}

export interface LegalClause {
  title: string
  paragraphs: string[]
  link?: LegalLink[] | null
}

export interface LegalPresentation {
  lastUpdated: string
  introduction: string
}
