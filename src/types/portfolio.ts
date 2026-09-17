export interface NavigationItem {
  label: string
  id: string
}

export interface HomeDetails {
  githubUrl: string
  location: string
}

export interface AvailabilityEntry {
  title: string
  status: string
}

export interface ContactDetails {
  email: string
  showPhone: boolean
  phone: string
  location: string
  availability: AvailabilityEntry[]
  githubUrl: string
  linkedinUrl: string
  cvPath: string
}

export type ProjectStatus = 'Completed' | 'In Progress' | 'Archived'

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

export interface CertificateEntry {
  title: string
  issuer: string
  year: string
  credentialUrl: string
}

export interface AboutFact {
  label: string
  value: string
}

export interface InterestEntry {
  title: string
  description: string
  tags?: string[]
}

export interface InterestGroup {
  id: string
  title: string
  description: string
  icon: 'user' | 'games' | 'music' | 'heart'
  entries: InterestEntry[]
}

export interface LegalClause {
  title: string
  paragraphs: string[]
}
