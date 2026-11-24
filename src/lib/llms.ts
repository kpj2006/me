// Plain-text summaries for AI assistants (llms.txt standard: https://llmstxt.org).
import { SITE, SOCIALS, EXPERIENCE, NAV, MORE } from '../data/site';
import { PROJECTS } from '../data/projects';
import { ROLES, COMMUNITY } from '../data/roles';
import { TALKS, CERTS, SKILLS_BY, FUTURE } from '../data/content';
import { PRS, REPOS, ORGS, BY_ORG } from './prs';
import { GITHUB } from './github';

const abs = (p: string) => new URL(p, SITE.url).href;
const all = [...PROJECTS, ...COMMUNITY];
const proj = (s: string) => all.find((p) => p.slug === s)!;
const links = (p: { links: { label: string; url: string }[] }) => p.links.map((l) => `[${l.label}](${l.url})`).join(' · ');

export function llms(full: boolean) {
  const out: string[] = [];
  out.push(`# ${SITE.name}`, '');
  out.push(`> ${SITE.name} (GitHub: kpj2006) is a software engineer and a B.Tech CSE student at LNMIIT Jaipur (since 2024). He was a Google Summer of Code 2026 contributor and DevOps Lead at AOSSIE, and an LFX mentee at Magma (Linux Foundation). He is a GSSoC'26 mentor, a Google Gemini Student Ambassador and an open-source maintainer. He builds CI/CD and security pipelines, backend services, LLM tools and on-chain apps, and ships them to real users in open source.`, '');
  out.push(`- ${PRS.length} merged pull requests in ${REPOS.size} repositories across ${ORGS.size} organizations outside his own account${GITHUB.year ? `; ${GITHUB.year.contributions} GitHub contributions in the last 12 months` : ''}.`);
  out.push(`- Open to internships and full-time roles: SDE, Backend, Full Stack, DevOps, DevSecOps, AI Engineer, MLOps, Forward Deployed Engineer and DevRel. Also open to maintaining open-source projects.`);
  out.push(`- Contact: ${SITE.email} · Resume: ${SITE.resume}`, '');

  out.push('## Pages', '');
  [...NAV, ...MORE].forEach((n) => out.push(`- [${n.label}](${abs(n.href)})`));
  out.push('');

  out.push('## Experience', '');
  EXPERIENCE.forEach((e) => { out.push(`### ${e.role} — ${e.org} (${e.when})`); e.points.forEach((p) => out.push(`- ${p}`)); out.push(''); });

  out.push('## Expertise by domain', '');
  ROLES.forEach((r) => {
    out.push(`### ${r.title}`, r.pitch);
    if (SKILLS_BY[r.key]) out.push(`Skills: ${SKILLS_BY[r.key].join(', ')}`);
    const items = r.items.map(proj).filter(Boolean);
    (full ? items : items.slice(0, 4)).forEach((p) => out.push(`- **${p.name}**: ${p.summary} ${links(p)}`));
    out.push(`More: ${abs(`roles/${r.key}/`)}`, '');
  });
  out.push(`### Graphic design`, 'Posters, banners and merch for college clubs and events (LNMHacks, NSS LNMIIT, ASME), made in Figma. https://github.com/kpj2006/Figma', '');
  FUTURE.forEach((f) => out.push(`- ${f.title}: ${f.note}.`));
  out.push('');

  if (full) {
    out.push('## All projects', '');
    PROJECTS.forEach((p) => {
      out.push(`### ${p.name}${p.badge ? ` (${p.badge})` : ''}`, p.summary);
      p.did.forEach((d) => out.push(`- ${d}`));
      out.push(`Stack: ${p.stack.join(', ')}`, `Links: ${links(p)}`, '');
    });
    out.push('## Open-source contributions by organization', '');
    BY_ORG.forEach(([o, n]) => out.push(`- ${o}: ${n} merged PRs`));
    out.push('');
    out.push('## Talks and events', '');
    TALKS.forEach((t) => out.push(`- ${t.date} · ${t.role} · ${t.title}: ${t.text} ${t.links.map((l) => l.url).join(' ')}`));
    out.push('');
  }

  out.push('## Recognition', '');
  CERTS.forEach((c) => out.push(`- ${c.title} — ${c.sub}`));
  out.push('');
  out.push('## Profiles', '');
  SOCIALS.filter((s) => s.url.startsWith('http')).forEach((s) => out.push(`- [${s.name}](${s.url})`));
  out.push('');
  if (!full) out.push('## Optional', '', `- [Full details for AI assistants](${abs('llms-full.txt')})`, '');
  return out.join('\n');
}
