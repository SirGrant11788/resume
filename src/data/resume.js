// ============================================================
//  resume.js  — Single source of truth for all CV content.
//  Edit this file to update the website with your real info.
// ============================================================

export const personal = {
  name: 'Grant Verheul',
  title: 'Senior Software Developer',
  tagline:
    'Driven, passionate, and ambitious full-stack developer with a wide range of skills and experience across multiple technologies. I use diligence, persistence, and a programmatic approach to develop elegant solutions and explore new avenues of skill. As a team player I am constantly looking to grow both as an individual and alongside a team. In my free time I enjoy building dev playgrounds using old and new tech via a home lab, tinkering with home automation and IoT, creating tech blogs, and mentoring others. Always eager to learn and grow — passionate about building innovative solutions to real-world problems.',
  taglineShort:
    'Driven, creative, and always ready for new challenges — with a broad range of technical and soft skills.',
  location: 'Johannesburg, South Africa',
  email: 'grant.verheul@gmail.com',
  phone: '+27 72 697 1472',
  linkedin: 'https://linkedin.com/in/grant-verheul', // update if needed
  cvFile: '/Grant_CV.pdf',  // place your PDF in /public and update this path
}

export const experience = [
  {
    id: 'rh-wsb',
    company: 'Runninghill Software Development',
    client: 'WSB — Sports Betting Platform',
    role: 'Senior Full-Stack Developer & Team Lead',
    period: 'June 2020 – Present',
    summary:
      'Led a team of 12 through a complete platform rework and migration using React, .NET microservices, Postgres and DevOps CI/CD. Acting as lead while introducing ways-of-work standards ranging from branching strategy and deployments to agile ceremonies and board management.',
    bullets: [
      'Team lead through the full delivery lifecycle — from planning through to production deployments',
      'Frontend: React — integrate and build new features into the sports betting platform',
      'Backend: C# .NET Microservices — expand and integrate new features, including event-driven payment methods',
      'DB: PostgreSQL — consolidate, migrate, and integrate across database layers',
      'Introduced branching strategy, deployment standards, agile ceremonies and board management practices for the team',
    ],
    stack: ['React', 'C# .NET', 'PostgreSQL', 'Microservices', 'Azure DevOps', 'Agile', 'CI/CD'],
  },
  {
    id: 'rh-omi',
    company: 'Runninghill Software Development',
    client: 'OMI — MyOMInsure / FutureState',
    role: 'Senior Full-Stack Developer & Lead',
    period: 'June 2020 – Present',
    summary:
      'Worked in a team of 7 to deliver a complete insurance portal using React micro-frontend federation and an integration orchestration layer with custom Java libraries for inter-department integrations, multiple caching mechanisms, and restructured source control and deployment pipelines. Spearheaded the Atlassian → Azure DevOps migration and AWS EKS deployment architecture.',
    bullets: [
      'Portal: React — Host Vite federated frontend with unified OAuth login and Redux Saga shared state, serving multiple auth-role-restricted remote micro-frontends',
      'SRT 1: React — Public-facing indicative insurance quote portal for all product lines via Wildfly Java microservices and Salesforce middleware',
      'SRT 2: React — Auth-restricted broker portal expanding SRT 1 with product line detail, enabling brokers to convert indicative quotes to formal quotes',
      'Component Library: React + Tailwind CSS — Universal NPM library adhering to OMI CI/CD standards, stored in Azure Artifacts',
      'Quarkus Migrations — Java: libraries for microservice domain REST API calls using Panache ORM for direct DB exposure; TDD coding style; stored in Azure Artifacts',
      'Quarkus BFF: Java — Backend-for-frontend service layer translating PL/SQL injection calls to RESTful APIs for the current frontend',
      'Deployments: Docker + NGINX → AWS ECR → Kubernetes (AWS EKS) for all frontend and backend services',
      'Spearheaded Atlassian → Azure DevOps migration: migrated repos and boards, created reporting dashboards, enforced governance and audit standards',
      'Integrated SonarQube; rebuilt all CI/CD pipelines; upskilled teams in branching strategies, peer reviews, and mob coding sessions',
      'Assisted with architectural construction and submissions covering frontend frameworks and AWS cloud topology',
    ],
    stack: ['React', 'Vite', 'Federation', 'TypeScript', 'Java', 'Quarkus', 'Panache ORM', 'Redux Saga', 'Salesforce', 'Docker', 'Kubernetes', 'AWS EKS', 'SonarQube', 'Azure DevOps'],
  },
  {
    id: 'rh-tih',
    company: 'Runninghill Software Development',
    client: 'TIH — Insurance Platforms',
    role: 'Full-Stack Developer & Lead',
    period: 'June 2020 – Present',
    summary:
      'Led two projects from inception to deployment. Delivered a public insurance sales platform (VAPS Online) and rescued a half-complete internal broker portal (New Horizon).',
    bullets: [
      'VAPS Online (team of 5): Angular + Node.js — Public-facing reactive insurance policy sales portal supporting multiple whitelabel themes per source company; Node.js backend handles calculations and data manipulation; IBM ORM interfaces with RPG/AS400 backend layer',
      'New Horizon (team of 4): Angular — Internal insurance broker platform for selling and managing policies, claims, client profiles, and product lines; project taken on in rescue state and delivered to completion',
      'Ran deployments, pipeline creation, and DevOps processes for both projects end-to-end',
      'Deployments: Docker + NGINX → Kubernetes cluster',
    ],
    stack: ['Angular', 'Node.js', 'IBM ORM', 'RPG/AS400', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    id: 'rh-misc',
    company: 'Runninghill Software Development',
    client: 'Various — Fusion, Neighbiz, Wellmind',
    role: 'Full-Stack Developer',
    period: 'June 2020 – Present',
    summary:
      'Delivered multiple side projects spanning Telegram bot integrations, Android community apps, and Flutter wellness applications.',
    bullets: [
      'Fusion Security: Node.js — Created a Telegram bot interfacing with a security notification system, appending alerts to a business and home security monitoring dashboard',
      'Neighbiz: Android Java (team of 2) — Multifunctional community app featuring an area map of participating businesses, vendor shops, ecommerce platform, charity drives, giveaways, and an internal money wallet; developed side-by-side with a companion iOS version written in C; GCP + Azure notifications & analytics',
      'Wellmind: Flutter (team of 5) — Mobile wellness app using research-backed algorithms to determine personality architectural types, providing tailored meditation and wellbeing content through structured video and audio courses; GCP + Azure analytics & notifications',
    ],
    stack: ['Node.js', 'Android Java', 'Flutter', 'GCP', 'Azure', 'Firebase'],
  },
  {
    id: 'rh-internal',
    company: 'Runninghill Software Development',
    client: 'Internal & Ongoing',
    role: 'Senior Developer / Culture Committee',
    period: 'June 2020 – Present',
    summary:
      'Active contributor to company culture and knowledge sharing beyond client projects.',
    bullets: [
      'Delivered multiple subject-matter tech-talks and participated in Runninghill Rundowns (live cross-team discussion panels)',
      'Council of Elders — Senior peer discussion panel member, sharing knowledge across the senior developer community',
      'Part founder of the Culture Committee: Hack-A-Thons, monthly cultural polls, company event organisation, and ongoing initiatives',
      'Authored technical articles and blog posts for the Runninghill website; ghost-wrote tech-talk content to assist presenters in converting talks to blog format',
      'First point of call for junior developers — guided them through codebase familiarisation, initial challenges, and peer reviews',
      'Produced documentation (READMEs, wikis, technical articles) to capture system knowledge and processes',
    ],
    stack: [],
  },
  {
    id: 'rowshop',
    company: 'The Rowshop cc / Macarbi Racing',
    client: '',
    role: 'Developer / Sales Agent / Ad Hoc',
    period: 'June 2013 – June 2020',
    summary:
      'Built and maintained internal tools and the public-facing ecommerce website while managing import, sales, and brand representation for multiple international brands.',
    bullets: [
      'Stock Management (Flutter): Cross-platform mobile app to track stock pricing and quantities across multiple brands, highlight low stock levels, integrated live chat, and a shared notes feature — Auth via Google OAuth; backed by GCP NoSQL Firebase',
      'Stock Management POC (Android Java): Native Android version of the stock management tool — also submitted as a university assignment',
      'Ecommerce Website: Built, hosted, and maintained a WordPress / WooCommerce online store with full product catalogue',
      'Brand awareness, online marketing, and import/sales management for NK, Active Tools, Coxmate, and Croker',
      'Ad hoc: equipment deliveries, transport, rowing boat, kayak, bicycle, and electronic equipment repairs, supplier and client management',
    ],
    stack: ['Flutter', 'Android Java', 'Google Firebase', 'WordPress', 'WooCommerce', 'NoSQL'],
  },
  {
    id: 'coach',
    company: 'Various Schools',
    client: 'Parktown Boys / St Stithians / St Johns',
    role: 'Rowing & Squash Coach',
    period: 'May 2014 – March 2019',
    summary:
      'Coached rowing and squash at multiple Johannesburg schools. Managed junior coaches, organised tours and camps, and assisted with equipment maintenance.',
    bullets: [
      "Parktown Boys High School — Rowing Coach (May 2014–March 2015 & April 2017–March 2019): coached age group, managed junior coaches, organised camps and tours, impact coach for senior athletes",
      'St Stithians College — Rowing Coach (August 2015–March 2017): coached age group, managed junior coaches, organised camps and tours',
      'Parktown Boys High School — Squash Coach (March–July 2015): coached the school squash team',
      "St John's College — Rowing Coach & Maintenance (May 2014–March 2015): equipment and boat repairs, purchasing, transportation, impact coaching for seniors",
    ],
    stack: [],
  },
]

export const skills = {
  languages: [
    'JavaScript / TypeScript',
    'C# / .NET',
    'Java',
    'Java (Quarkus)',
    'Dart / Flutter',
    'Android (Java)',
    'SQL / NoSQL',
  ],
  frontend: [
    'React',
    'Angular',
    'Vite / Module Federation',
    'Redux / Redux Saga',
    'Tailwind CSS',
    'HTML / CSS',
  ],
  backendDevOps: [
    'Node.js',
    'Git',
    'Azure DevOps / CI-CD',
    'Docker / Kubernetes (K8s)',
    'Rancher / K8s Cluster Management',
    'AWS (EKS, ECR, S3, CloudFront)',
    'PostgreSQL / MySQL',
    'Firebase / GCP',
    'Atlassian Suite (Jira, Bitbucket)',
    'Proxmox / Home Lab',
    'SonarQube',
  ],
  softSkills: [
    'Team Leadership',
    'Agile & Scrum',
    'Waterfall',
    'Mentoring & Coaching',
    'Technical Writing & Blogging',
    'Project Management',
    'DevOps & Pipeline Design',
    'Automation Testing',
    'Unit Testing / TDD',
    'Public Speaking',
    'Home Lab & IoT',
  ],
}

export const education = [
  {
    id: 'edu-1',
    institution: 'Varsity College',
    qualification: 'Bachelor of Computer and Information Sciences in Application Development',
    year: '2017 – 2019',
  },
  {
    id: 'edu-2',
    institution: 'Varsity College',
    qualification: 'Higher Certificate in Business Principles and Practice',
    year: '2012',
  },
  {
    id: 'edu-3',
    institution: 'UNISA',
    qualification: 'BSC Informatics (1st Year Completed)',
    year: '2016',
  },
  {
    id: 'edu-4',
    institution: 'Varsity College',
    qualification: 'Diploma in Network Management (1st Year Completed)',
    year: '2013',
  },
  {
    id: 'edu-5',
    institution: "St John's College",
    qualification: 'Matric (High School Graduation)',
    year: '2011',
  },
]

export const certifications = [
  {
    id: 'cert-1',
    title: 'Level 1 & 2 International Rowing Certificate',
    issuer: 'Fédération Internationale des Sociétés d\'Aviron (FISA)',
    year: '2013',
  },
  {
    id: 'cert-2',
    title: 'Composites and Mould Making Certification',
    issuer: 'AMT',
    year: '2014',
  },
]

export const projects = [
  {
    id: 'proj-tih-1',
    title: 'VAPS Online — Insurance Sales Portal',
    description:
      'Team of 5. Public-facing reactive insurance policy sales portal supporting multiple whitelabel themes per source company. Node.js backend handles calculations and data manipulation; IBM ORM interfaces with an RPG/AS400 backend layer. Ran deployments and pipeline creation. Deployed via Docker + NGINX to a Kubernetes cluster.',
    stack: ['Angular', 'Node.js', 'IBM ORM', 'RPG/AS400', 'Docker', 'Kubernetes', 'CI/CD'],
    type: 'Professional',
  },
  {
    id: 'proj-tih-2',
    title: 'New Horizon — Internal Broker Portal',
    description:
      'Team of 4. Internal insurance broker platform for selling and managing policies, claims, client profiles, and product lines across multiple brands. Taken on in a rescue state mid-delivery and brought to production completion. Ran deployments and pipeline creation. Deployed via Docker + NGINX to a Kubernetes cluster.',
    stack: ['Angular', 'Node.js', 'Docker', 'Kubernetes', 'CI/CD'],
    type: 'Professional',
  },
  {
    id: 'proj-1',
    title: 'Federated React Platform — MyOMInsure',
    description:
      'Team of 7. Production micro-frontend architecture using Vite Module Federation with a unified OAuth host, Redux Saga-managed shared state, and multiple auth-restricted remote apps. Includes custom Java integration orchestration libraries with multiple caching mechanisms, restructured CI/CD pipelines, and an AWS EKS hosting migration. Deployed via Docker + NGINX to AWS EKS.',
    stack: ['React', 'Vite', 'Module Federation', 'Redux Saga', 'OAuth', 'Java', 'Docker', 'AWS EKS', 'Azure DevOps'],
    type: 'Professional',
  },
  {
    id: 'proj-2',
    title: 'Insurance Quote Platform — SRT 1 & 2',
    description:
      'Public and broker-facing insurance quote portals built as Vite federated remotes consuming host auth. SRT 2 adds broker-exclusive features for transitioning indicative to formal quotes.',
    stack: ['React', 'Vite', 'Federation', 'Salesforce', 'Wildfly Java', 'Kubernetes'],
    type: 'Professional',
  },
  {
    id: 'proj-3',
    title: 'OMI Component Library',
    description:
      'Internal NPM React component library with Tailwind CSS, adhering to OMI CI/CD standards. Stored and versioned in Azure Artifacts, consumed across multiple projects.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'NPM', 'Azure Artifacts'],
    type: 'Professional',
  },
  {
    id: 'proj-4',
    title: 'Wellmind — Flutter Wellness App',
    description:
      'Team of 5 delivering a mobile-first Flutter wellness app using research-backed algorithms to determine personality architectural types and serve tailored meditation and wellbeing content through structured video and audio courses. Push notifications and analytics via Firebase (GCP) and Azure.',
    stack: ['Flutter', 'Dart', 'Firebase', 'GCP', 'Azure'],
    type: 'Professional',
  },
  {
    id: 'proj-5',
    title: 'Neighbiz — Android Community App',
    description:
      'Multifunctional community platform with an area map of participating businesses, vendor shops, ecommerce, charity drives, giveaways, and an internal money wallet. Developed as the Android (Java) version side-by-side with a companion iOS version written in C. GCP Firebase, Azure notifications, and Google Analytics.',
    stack: ['Android Java', 'C (iOS)', 'Firebase', 'GCP', 'Azure'],
    type: 'Professional',
  },
  {
    id: 'proj-6',
    title: 'Stock Management System',
    description:
      'Cross-platform Flutter application for The Rowshop cc to manage product stock levels, pricing across multiple brands, integrated live chat, and shared notes. Auth via Google OAuth backed by GCP Firebase.',
    stack: ['Flutter', 'Firebase NoSQL', 'Google OAuth', 'GCP'],
    type: 'Personal / Commercial',
  },
  {
    id: 'proj-7',
    title: 'AWS Federation POC',
    description:
      'Personal proof-of-concept fully React federated frontend with host and multiple remotes, hosted on personal AWS infrastructure: S3, CloudFront, and Cloudflare CNAME. Used to mirror client cloud-migration roadmap.',
    stack: ['React', 'Module Federation', 'AWS S3', 'CloudFront', 'Cloudflare'],
    type: 'Personal',
  },
]

export const industryExposure = [
  'iGaming / Sports Betting',
  'Insurance & Financial Services',
  'FinTech',
  'Retail / eCommerce',
  'Community & Social Platforms',
  'Security & IoT',
  'Health & Wellness',
  'Home Automation & IoT',
]
