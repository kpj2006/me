// Global links and profile facts. Edit here; every page reads from this file.
export const SITE = {
  name: 'Karun Pacholi',
  handle: 'kpj2006',
  url: 'https://kpj2006.github.io/me/',
  tagline: 'Software engineer across DevOps, backend, AI and Web3.',
  intro:
    'I build CI/CD and security pipelines, backend services, LLM tools and on-chain apps — and ship them to real users in open source.',
  location: 'Jaipur, India',
  email: 'jaihanumanji2006@gmail.com',
  resume: 'https://docs.google.com/document/d/1c9CfRKa6iIBsk2vvV6EQX7kZ4jbOnIymQfl7N_JmMT0/edit?usp=sharing',
  calendar: 'https://calendar.app.google/Wvp7aZNk29KuAJxH6',
  linkedin: 'https://www.linkedin.com/in/kpj2006/',
  github: 'https://github.com/kpj2006',
  youtube: 'https://www.youtube.com/channel/UC1jB0sHS3HeekQmmk4utdNA',
};

export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/kpj2006', handle: '@kpj2006', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kpj2006/', handle: 'in/kpj2006', icon: 'linkedin' },
  { name: 'X', url: 'https://x.com/_kpj2006', handle: '@_kpj2006', icon: 'x' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UC1jB0sHS3HeekQmmk4utdNA', handle: 'kpj2006', icon: 'youtube' },
  { name: 'Telegram', url: 'https://t.me/kpj2006', handle: '@kpj2006', icon: 'telegram' },
  { name: 'Instagram', url: 'https://instagram.com/karunpacholi', handle: '@karunpacholi', icon: 'instagram' },
  { name: 'Email', url: 'mailto:jaihanumanji2006@gmail.com', handle: 'jaihanumanji2006@gmail.com', icon: 'mail' },
] as const;

export const NAV = [
  { label: 'Home', href: '' },
  { label: 'Projects', href: 'projects/' },
  { label: 'Open Source', href: 'open-source/' },
  { label: 'Talks', href: 'talks/' },
  { label: 'Videos', href: 'videos/' },
  { label: 'Newsletter', href: 'newsletter/' },
  { label: 'Work with me', href: 'work-with-me/' },
  { label: 'Contact', href: 'contact/' },
];

export const MORE = [
  { label: 'About me', href: 'about/' },
  { label: 'Appearances', href: 'appearances/' },
  { label: "People I've met", href: 'people/' },
  { label: 'Certificates', href: 'certificates/' },
  { label: 'Uses', href: 'uses/' },
  { label: 'Stats', href: 'stats/' },
  { label: 'Sponsorship', href: 'sponsorship/' },
  { label: 'Misc', href: 'misc/' },
];

export const FACTS = [
  { title: "GSoC'26 · DevOps Lead", sub: 'AOSSIE' },
  { title: "LFX'26 Mentee", sub: 'Magma · Linux Foundation' },
  { title: '2× hackathon podium', sub: 'Rootcamp I · SUI x Jaipur' },
  { title: 'B.Tech CSE', sub: 'LNMIIT Jaipur' },
];

export const EXPERIENCE = [
  {
    role: "GSoC'26 Contributor & DevOps Lead",
    org: 'AOSSIE · Google Summer of Code',
    when: 'May – Nov 2026',
    points: [
      'Org-wide CI/CD and DevSecOps: reusable GitHub Actions, a standard repo template, CodeQL, OpenSSF Scorecard, Gitleaks and OSV-Scanner.',
      'Built GitPay, Skill Bot, Skill Updater and PR Dashboard for maintainers.',
    ],
  },
  {
    role: 'LFX Mentee',
    org: 'Magma · Linux Foundation',
    when: 'Jan – Apr 2026',
    points: [
      'Reproducible cross-OS dev environments with Vagrant, VirtualBox, Bash and Docker.',
      'Ran 3GPP end-to-end tests of the 5G/LTE core; wrote setup and onboarding docs.',
    ],
  },
  {
    role: 'Blockchain Developer · Rootcamp I',
    org: 'Rootstock Labs',
    when: 'Jan – Mar 2026',
    points: ['12-week builder program: finished in the top 20 builders, and PRStake was a winning project.', 'Testing, debugging and security auditing in CI/CD.'],
  },
  {
    role: 'Open Source Project Maintainer',
    org: 'AOSSIE',
    when: 'Feb 2025 – now',
    points: ['Core maintainer of SocialShareButton; co-maintainer of Template-Repo, AutoInitialIssues and Skills.'],
  },
];
