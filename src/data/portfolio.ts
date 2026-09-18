import type {
  AboutFact,
  CertificateEntry,
  ContactDetails,
  EducationEntry,
  HomeDetails,
  InterestGroup,
  LegalClause,
  NavigationItem,
  Project,
  SkillGroup,
  WorkExperience,
} from '@/types/portfolio'

export const navigation: NavigationItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills & Academics', id: 'skills-and-academics' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
  { label: 'Privacy & Terms', id: 'privacy-and-terms' },
]

export const homeDetails: HomeDetails = {
  githubUrl: 'https://github.com/Jacquesvnme',
  location: 'South Africa · Gauteng',
  showWebsiteWarning: true,
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    summary:
      'A responsive, data-driven portfolio for presenting my projects, skills, experience, and interests.',
    description:
      'A custom single-page portfolio designed and developed as a flexible personal showcase. The site combines an editorial interface, responsive layouts, light and dark themes, reusable Vue components, and centralized content models, with Codex used as an AI-assisted development collaborator.',
    status: 'In Progress',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS', 'Codex'],
    highlights: [
      'Centralized, strongly typed portfolio content',
      'Responsive editorial layouts with light and dark themes',
      'Accessible reusable components and interaction patterns',
      'AI-assisted design and development with Codex',
    ],
    repositoryUrl: 'https://github.com/Jacquesvnme/VuePortfolioProject',
  },
  {
    id: 'still-to-come',
    title: 'Other',
    summary: 'There will be more projects still to come.',
    description: 'Still to come.',
    status: 'Still to come',
    technologies: ['Still to come'],
    highlights: ['Still to come'],
    repositoryUrl: '#',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend development',
    description: 'Frontend related development knowdledge.',
    skills: [
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'JQuery',
      'Blazor',
      'MudBlazor',
      'ASPX',
    ],
  },
  {
    title: 'Backend development',
    description: 'Backend related development knowdledge.',
    skills: [
      'C#',
      '.NET',
      'Python',
      'REST APIs',
      'SQL',
      'T-SQL',
      'EntityFramework',
      'MediatR',
      'Visual Basic',
      'ASP.NET',
    ],
  },
  {
    title: 'Tools & workflow',
    description: 'Useful tools, and knowledge semi related to the industry.',
    skills: ['Git', 'GitHub Actions', 'Testing', 'Markdown', 'XML', 'JSON', 'HTTP', 'Bash'],
  },
  {
    title: 'Other tools',
    description:
      'Other tools that I have experience with. Some relevant, other may not be, knowledge non the less.',
    skills: [
      'Word',
      'Excel',
      'Powerpoint',
      'SQL Server',
      'Github',
      'VS',
      'VS Code',
      'NPM',
      'PNPM',
      'Postman',
      'Bruno',
    ],
  },
  {
    title: 'Archived skills',
    description:
      'Skills I’ve used previously but haven’t worked with recently. I may need some time to refresh my knowledge.',
    skills: ['Node.Js', 'Next Js', 'Express Js', 'Plotly Js', 'PostGreSql', 'OpenCV'],
  },
]

export const workExperience: WorkExperience[] = [
  {
    id: 'signiflow',
    company: 'Signiflow',
    companyInitial: 'S',
    location: 'On-site',
    links: [
      {
        name: 'Company',
        url: 'https://www.signiflow.com',
      },
    ],
    roles: [
      {
        id: 'junior-developer',
        title: 'Junior Developer',
        startDate: '2025-12',
        endDate: null,
        descriptions: [
          'Happily appart for the flownamix family and working on software specializing in document signification.',
        ],
        tags: ['C#', '.NET', 'Blazor'],
      },
      {
        id: 'trainee-software-engineer',
        title: 'Trainee Software Engineer',
        startDate: '2025-02',
        endDate: '2025-12',
        descriptions: null,
      },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    period: '2022 - 2026, In progress',
    qualification: 'Bachelor of Computing - Software Engineering Specialization',
    institution: 'Belgium Campus ITversity · Online',
    description:
      'A specialized study in computer science with a specialization in software engineering. Important topics such as computer architecture, database development, web programming, programming, project management, software testing and machine learning.',
  },
  {
    period: 'Graduated 2021',
    qualification: 'National Senior Certificate',
    institution: 'Hoërskool Brandwag · Benoni',
    description: 'Highschool.',
  },
]

export const certificates: CertificateEntry[] = [
  {
    title: 'Learn the command line',
    issuer: 'Codecademy',
    year: '2024',
    credentialUrl:
      'https://www.codecademy.com/profiles/Jacquesvnme/certificates/c87ba0541f8be78bc2f4ba1128233f6f',
  },
  {
    title: 'Learn Navigation Design Course',
    issuer: 'Codecademy',
    year: '2024',
    credentialUrl:
      'https://www.codecademy.com/profiles/Jacquesvnme/certificates/91cf4a1767724a02a20b1eba7eca74ea',
  },
  {
    title: 'Learn Node.js: Setting Up a Server Course',
    issuer: 'Codecademy',
    year: '2024',
    credentialUrl:
      'https://www.codecademy.com/profiles/Jacquesvnme/certificates/827011ad71164a86a41365e2262dcb5a',
  },
  {
    title: 'Reading and note taking - preparation for study ',
    issuer: 'OepnLearn',
    year: '2024',
    credentialUrl: 'https://www.open.edu/openlearn/profiles/zs182747/achievements',
  },
  {
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    year: '2026',
    credentialUrl:
      'https://learn.microsoft.com/en-us/users/jacquesvanniekerk-8517/credentials/6e1d287dd50affe0?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
]

export const aboutFacts: AboutFact = {
  story: ['STILL NEED TO ADD', 'STILL NEED TO ADD.'],
  entries: [
    { label: 'Location', value: 'South Africa · Gauteng' },
    { label: 'Languages', value: 'Afrikaans · English' },
    { label: 'Current chapter', value: 'Building & Learning' },
    { label: 'Personal value', value: 'Independence' },
  ],
}

export const interestGroups: InterestGroup[] = [
  {
    id: 'personal-background',
    title: 'Personal background',
    description: 'My personal background and story',
    icon: 'user',
    entries: [
      {
        title: 'Background entry',
        description: ['STILL TO ADD.'],
      },
      {
        title: 'Current chapter',
        description: ['STILL TO ADD.'],
      },
      {
        title: 'Personal value',
        description: ['STILL TO ADD.'],
      },
    ],
  },
  {
    id: 'coding',
    title: 'Coding interests',
    description: 'Technical areas, tools, and ideas I enjoy exploring',
    icon: 'code',
    entries: [
      {
        title: 'Automation & Management',
        description: [
          'I love designing smaller application with a focused purpose on automating and managing personal items and data.',
          'These are sometimes script, other times small application and even larger interactive applications.',
        ],
        tags: ['Python', 'Powershell', 'C#'],
      },
      {
        title: 'Network attached storage',
        description: [
          'I have recently started exploring NAS setups with a very old laptop of mine.',
          'This is so that I can have 1 shared storage connecting my multiple devices without me having to copy my data to usb`s or purchase an expensive storage subscription while selling my data.',
        ],
        tags: ['OMV', 'Jellyfin', 'Homarr', 'Portainer', 'Debian Linux', 'AdGuard', 'Immich'],
      },
      {
        title: 'Agentic Engineering',
        description: [
          'I have recently started exploring agentic engineering.',
          'I have come to the desicion that with most of my personal projects going forward, I would have a specific design structure.',
          'This would be ReachWebApi`s. A C# backend managed by myself and an AI manage frontend with me just reviewing it afterwards.',
          'ReactWebApi`s are perfect for this',
          'AI is perfect at creating and understanding it. I get a great frontend while',
          'Maintaining a great backend with auth, database connections with Entityframework, modular design with MediatR, and coding in C#.',
        ],
        tags: ['Rules', 'CodeGraph', 'Skill.sh', 'Agents.md', 'Ai-Brains', 'Codex', 'Sol 5.6 High'],
        links: [
          {
            name: 'Skills.sh',
            url: 'https://www.skills.sh/',
          },
          {
            name: 'CodeGraph',
            url: 'https://github.com/colbymchenry/codegraph',
          },
          {
            name: 'Agents.md',
            url: 'https://agents.md/',
          },
        ],
      },
      {
        title: 'Cybersecurity',
        description: [
          'I have a small interest in cybersecurity. This is mostly the reason I got my SC900 certificate.',
        ],
        tags: [
          'Zero trust',
          'CIA Triad',
          'Defence in depth',
          'Encryption & Hashing',
          'Protection & Security principles',
        ],
      },
    ],
  },
  {
    id: 'games',
    title: 'Games',
    description: 'A few games I like to play.',
    icon: 'games',
    entries: [
      {
        title: 'Total war Warhammer 3',
        description: [],
        links: [
          {
            name: 'Visit',
            url: 'https://store.steampowered.com/app/1142710/Total_War_WARHAMMER_III/',
          },
        ],
        hoursPlayed: 310,
      },
      {
        title: 'Terraria',
        description: [],
        links: [{ name: 'Visit', url: 'https://store.steampowered.com/app/105600/Terraria/' }],
        hoursPlayed: 450,
      },
      {
        title: 'Stardew Valley',
        description: [],
        links: [
          { name: 'Visit', url: 'https://store.steampowered.com/app/413150/Stardew_Valley/' },
        ],
        hoursPlayed: 140,
      },
      {
        title: 'Age of Empires II',
        description: [],
        links: [
          {
            name: 'Visit',
            url: 'https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/',
          },
        ],
        hoursPlayed: 500,
      },
      {
        title: 'The Witcher 3',
        description: [],
        links: [
          {
            name: 'Visit',
            url: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
          },
        ],
        hoursPlayed: 240,
      },
    ],
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Some of the music I like to listen to.',
    icon: 'music',
    entries: [
      {
        title: 'Lying from You · Linkin Park',
        description: [],
        links: [
          {
            name: 'Listen',
            url: 'https://music.youtube.com/watch?v=INBstIKmV_4&si=q7G8D7ALs7HCn5gv',
          },
        ],
      },
      {
        title: 'Animal I Have Become · Three Days Grace',
        description: [],
        links: [
          {
            name: 'Listen',
            url: 'https://music.youtube.com/watch?v=ysho2xTWUYo&si=Xf2uHZ2CGo5mmLRY',
          },
        ],
      },
      {
        title: 'My Way · Limp Bizkit',
        description: [],
        links: [
          {
            name: 'Listen',
            url: 'https://music.youtube.com/watch?v=LMsBHDoC51c&si=TlPnSPXMqD15DARn',
          },
        ],
      },
      {
        title: 'Change (In the House of Flies) · Deftones',
        description: [],
        links: [
          {
            name: 'Listen',
            url: 'https://music.youtube.com/watch?v=hzRltUL5M3k&si=xJOYD1xxxVObXMFI',
          },
        ],
      },
      {
        title: 'Lonely Day · System Of A Down',
        description: [],
        links: [
          {
            name: 'Listen',
            url: 'https://music.youtube.com/watch?v=Jc6-WXt5iKA&si=Hp6PcZUZ4dcPXgtq',
          },
        ],
      },
    ],
  },
  {
    id: 'manga',
    title: 'Manga',
    description: 'The best mangas I have read.',
    icon: 'manga',
    entries: [
      {
        title: 'The Greatest Estate Developer',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://myanimelist.net/manga/147272/The_Greatest_Estate_Developer',
          },
        ],
      },
      {
        title: 'Solo Leveling',
        description: [],
        links: [{ name: 'Details', url: 'https://myanimelist.net/manga/121496/Solo_Leveling' }],
      },
      {
        title: 'The Fragrant Flower Blooms with Dignity',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://myanimelist.net/anime/59845/Kaoru_Hana_wa_Rin_to_Saku',
          },
        ],
      },
      {
        title: 'Nano Machine',
        description: [],
        links: [{ name: 'Details', url: 'https://myanimelist.net/manga/147863/Nano_Machine' }],
      },
      {
        title: 'The Legend of the Northern Blade',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://myanimelist.net/manga/134744/The_Legend_of_the_Northern_Blade',
          },
        ],
      },
    ],
  },
  {
    id: 'anime',
    title: 'Anime',
    description: 'The best anime I have watched.',
    icon: 'anime',
    entries: [
      {
        title: 'Demon Slayer',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba',
          },
        ],
      },
      {
        title: 'Sugar Apple Fairy Tale',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://www.crunchyroll.com/series/G5PHNM7E2/sugar-apple-fairy-tale',
          },
        ],
      },
      {
        title: 'Tokyo Ghoul',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://www.crunchyroll.com/series/G6NV7Z50Y/tokyo-ghoul',
          },
        ],
      },
      {
        title: 'Bleach',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://www.hulu.com/series/bleach-0c265948-3450-40ad-89b4-883af457f36d',
          },
        ],
      },
      {
        title: 'One Piece',
        description: [],
        links: [
          {
            name: 'Details',
            url: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece',
          },
        ],
      },
    ],
  },
]

export const legalClauses: LegalClause[] = [
  {
    title: 'Information and privacy',
    paragraphs: ['This site does not collect any personal information.'],
  },
  {
    title: 'License',
    paragraphs: [
      'This site is licensed under the Apache License, Version 2.0. You may obtain a copy of the license at the link below.',
      'Copyright 2026 Jacques Van Niekerk',
      'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at',
      'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
    ],
    link: [
      {
        name: 'View license',
        url: 'http://www.apache.org/licenses/LICENSE-2.0',
      },
    ],
  },
]

export const contactDetails: ContactDetails = {
  availability: [
    { title: 'Full-time roles', status: 'unavailable' },
    { title: 'Freelance projects', status: 'available' },
  ],
  github: [
    {
      url: 'https://github.com/Jacquesvnme',
      show: true,
    },
  ],
  linkedin: [
    {
      url: 'https://www.linkedin.com/in/jacques-van-niekerk-231b872ba',
      show: true,
    },
  ],
  cv: [
    {
      path: '/dummy-cv.txt',
      show: false,
    },
  ],
  location: [
    {
      location: 'South Africa · Gauteng',
      show: true,
    },
  ],
  phone: [
    {
      phone: '+27 00 000 0000',
      show: false,
    },
  ],
  email: [
    {
      email: 'jacquesvnme@email.com',
      show: true,
    },
  ],
}
