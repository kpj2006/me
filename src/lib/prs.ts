import raw from '../../data/prs.json';
type PR = { repo: string; title: string; url: string; merged: string };
export const PRS = (raw as PR[]).filter((p) => p.repo.split('/')[0].toLowerCase() !== 'kpj2006');
export const REPOS = new Set(PRS.map((p) => p.repo));
export const ORGS = new Set(PRS.map((p) => p.repo.split('/')[0]));
const count = (key: (p: PR) => string) => {
  const m = new Map<string, number>();
  PRS.forEach((p) => m.set(key(p), (m.get(key(p)) ?? 0) + 1));
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
};
export const BY_REPO = count((p) => p.repo);
export const BY_ORG = count((p) => p.repo.split('/')[0]);
export const BY_MONTH = count((p) => p.merged.slice(0, 7)).sort((a, b) => a[0].localeCompare(b[0]));
export const RECENT = [...PRS].sort((a, b) => b.merged.localeCompare(a.merged));
