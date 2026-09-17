import type {
  AboutFact,
  CertificateEntry,
  EducationEntry,
  InterestGroup,
  LegalClause,
  NavigationItem,
  Project,
  SkillGroup,
} from '@/types/portfolio'

export const navigation: NavigationItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills & Academics', id: 'skills-and-academics' },
  { label: 'Projects', id: 'projects' },
  { label: 'Privacy & Terms', id: 'privacy-and-terms' },
  { label: 'Contact', id: 'contact' },
]

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project title one',
    summary:
      'A concise dummy summary explaining the problem this project solves and the value it creates.',
    description:
      'This is placeholder copy for a longer project overview. Replace it with the project context, your role, the decisions you made, and the final outcome.',
    status: 'Completed',
    technologies: ['Vue', 'TypeScript', 'API'],
    highlights: [
      'Reusable feature architecture',
      'Accessible interaction patterns',
      'Responsive interface',
    ],
    repositoryUrl: 'https://github.com/example/project-one',
  },
  {
    id: 'project-two',
    title: 'Project title two',
    summary: 'A second dummy project with enough copy to demonstrate how entries grow vertically.',
    description:
      'Use this area for implementation notes, technical challenges, or a fuller README-style explanation without crowding the main project list.',
    status: 'In Progress',
    technologies: ['Python', 'C#', 'SQL'],
    highlights: [
      'Structured data workflow',
      'Documented service boundaries',
      'Maintainable modules',
    ],
    repositoryUrl: 'https://github.com/example/project-two',
  },
  {
    id: 'project-three',
    title: 'Project title three',
    summary: 'A final placeholder entry showing the repeatable, single-column editorial rhythm.',
    description:
      'The project list is rendered from one typed array. Add, remove, or reorder objects there and the layout will adapt automatically.',
    status: 'Archived',
    technologies: ['React', 'Node.js', 'Docker'],
    highlights: ['Independent UI components', 'Clear content hierarchy', 'Deployment-ready build'],
    repositoryUrl: 'https://github.com/example/project-three',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend development',
    description: 'Dummy collection for interface, accessibility, and client-side tools.',
    skills: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Accessibility'],
  },
  {
    title: 'Backend development',
    description: 'Dummy collection for services, APIs, and server-side systems.',
    skills: ['C#', '.NET', 'Python', 'Node.js', 'REST APIs', 'SQL'],
  },
  {
    title: 'Tools & workflow',
    description: 'Dummy collection for delivery, collaboration, and engineering workflow.',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Testing', 'Agile', 'Documentation'],
  },
]

export const education: EducationEntry[] = [
  {
    period: '20XX — 20XX',
    qualification: 'Dummy university qualification',
    institution: 'Example university',
    description:
      'Placeholder details covering the field of study, notable coursework, and academic focus.',
  },
  {
    period: '20XX — 20XX',
    qualification: 'Dummy high school qualification',
    institution: 'Example high school',
    description: 'Placeholder details covering subjects, activities, and relevant achievements.',
  },
]

export const certificates: CertificateEntry[] = [
  {
    title: 'Example professional certificate',
    issuer: 'Dummy issuer',
    year: '20XX',
    credentialUrl: '#',
  },
  {
    title: 'Example technology certificate',
    issuer: 'Dummy provider',
    year: '20XX',
    credentialUrl: '#',
  },
  { title: 'Example short course', issuer: 'Dummy academy', year: '20XX', credentialUrl: '#' },
]

export const aboutFacts: AboutFact[] = [
  { label: 'Location', value: 'General location' },
  { label: 'Languages', value: 'Language one · Language two' },
  { label: 'Current chapter', value: 'Short personal status' },
  { label: 'Personal value', value: 'A value or principle' },
]

export const interestGroups: InterestGroup[] = [
  {
    id: 'personal-background',
    title: 'Personal background',
    description: 'A reusable group for personal information and short stories.',
    icon: 'user',
    entries: [
      {
        title: 'Background entry',
        description: 'Dummy description for a personal background entry.',
      },
      {
        title: 'Current chapter',
        description: 'Dummy description explaining a current goal or stage of life.',
      },
      {
        title: 'Personal value',
        description: 'Dummy description of a principle that matters personally.',
      },
    ],
  },
  {
    id: 'games',
    title: 'Games',
    description: 'Add as many individual games, genres, or gaming interests as needed.',
    icon: 'games',
    entries: [
      {
        title: 'Game title',
        description: 'Dummy note explaining why this game is included.',
        tags: ['Genre', 'Platform'],
      },
      {
        title: 'Another game',
        description: 'Another dummy note for a separate game or series.',
        tags: ['Genre'],
      },
    ],
  },
  {
    id: 'music',
    title: 'Music',
    description: 'A repeatable list for artists, albums, genres, or listening habits.',
    icon: 'music',
    entries: [
      {
        title: 'Artist or album',
        description: 'Dummy description for a favourite artist, album, or song.',
      },
      {
        title: 'Music genre',
        description: 'Dummy description for a preferred genre or style of music.',
      },
    ],
  },
  {
    id: 'likes-and-dislikes',
    title: 'Likes & dislikes',
    description: 'Each preference is its own entry, so this list can grow freely.',
    icon: 'heart',
    entries: [
      {
        title: 'Something I like',
        description: 'Dummy description of an activity, quality, or experience.',
      },
      {
        title: 'Something I dislike',
        description: 'Dummy description of something generally avoided.',
      },
    ],
  },
]

export const legalClauses: LegalClause[] = [
  {
    title: 'Information and privacy',
    paragraphs: [
      'This is dummy legal copy describing what information the website does or does not collect.',
      'Replace this section with terms reviewed for the final website, its hosting, analytics, and third-party services.',
    ],
  },
  {
    title: 'External links',
    paragraphs: [
      'This portfolio may link to external websites. This placeholder explains that their content and privacy practices are separate.',
    ],
  },
  {
    title: 'Content and intellectual property',
    paragraphs: [
      'This dummy clause reserves rights to original portfolio content while acknowledging referenced tools and technologies.',
    ],
  },
  {
    title: 'Accuracy and availability',
    paragraphs: [
      'This placeholder states that information may change and uninterrupted website availability is not guaranteed.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'This dummy clause directs privacy or terms questions to the email address in the contact section.',
    ],
  },
]

export const contactDetails = {
  email: 'hello@example.com',
  phone: '+27 00 000 0000',
  location: 'General location, South Africa',
  availability: 'Open to thoughtful opportunities',
  githubUrl: 'https://github.com/example',
  linkedinUrl: 'https://www.linkedin.com/in/example',
  cvPath: '/dummy-cv.txt',
}
