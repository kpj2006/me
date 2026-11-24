// Structured data (schema.org JSON-LD) so search engines and AI assistants know who this site is about.
import { SITE, SOCIALS, EXPERIENCE } from '../data/site';
const abs = (p: string) => new URL(p, SITE.url).href;
export const SAME_AS = [...SOCIALS.filter((s) => s.url.startsWith('http')).map((s) => s.url), 'https://linktr.ee/kpj2006', SITE.coffee];
export const PERSON = {
  '@type': 'Person',
  '@id': `${SITE.url}#person`,
  name: SITE.name,
  givenName: 'Karun',
  familyName: 'Pacholi',
  alternateName: ['kpj2006', 'Karun P'],
  url: SITE.url,
  image: abs('assets/karun-lake.jpg'),
  jobTitle: 'Software Engineer (DevOps, Backend, AI, Web3)',
  description: `${SITE.tagline} ${SITE.intro}`,
  homeLocation: { '@type': 'Place', name: SITE.location },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'The LNM Institute of Information Technology (LNMIIT), Jaipur', url: 'https://lnmiit.ac.in/' },
  memberOf: [
    { '@type': 'Organization', name: 'AOSSIE', url: 'https://aossie.org/' },
    { '@type': 'Organization', name: 'Agentic AI Foundation (AAIF)' },
  ],
  hasOccupation: EXPERIENCE.map((e) => ({ '@type': 'Occupation', name: e.role, description: `${e.org} · ${e.when}` })),
  award: ["Google Summer of Code 2026 — DevOps Lead, AOSSIE", 'LFX Mentorship 2026 — Magma, Linux Foundation', "GSSoC'26 Mentor", 'Google Gemini Student Ambassador', 'Rootstock Rootcamp I — winning project (PRStake)', 'SUI x Jaipur hackathon — 3rd place'],
  knowsAbout: ['DevOps', 'CI/CD', 'GitHub Actions', 'DevSecOps', 'Docker', 'Kubernetes', 'Python', 'TypeScript', 'Go', 'Backend development', 'RAG', 'LLM tools', 'AI agents', 'MLOps', 'Solidity', 'Web3', 'Open source maintenance', 'Developer relations'],
  sameAs: SAME_AS,
};
export const WEBSITE = { '@type': 'WebSite', '@id': `${SITE.url}#website`, url: SITE.url, name: `${SITE.name} — portfolio`, inLanguage: 'en', author: { '@id': `${SITE.url}#person` }, publisher: { '@id': `${SITE.url}#person` } };
export const graph = (pageUrl: string, title: string, isProfile: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    PERSON,
    WEBSITE,
    { '@type': isProfile ? 'ProfilePage' : 'WebPage', '@id': pageUrl, url: pageUrl, name: title, isPartOf: { '@id': `${SITE.url}#website` },
      about: { '@id': `${SITE.url}#person` }, ...(isProfile ? { mainEntity: { '@id': `${SITE.url}#person` } } : {}), inLanguage: 'en' },
  ],
});
