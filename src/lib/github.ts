// Live GitHub stats written by scripts/stats.py (GitHub Actions, daily).
import raw from '../../data/github.json';
export type GH = {
  updated: string | null; followers?: number; following?: number; public_repos?: number; stars?: number; forks?: number;
  prs_opened_all_time?: number; issues_opened_all_time?: number;
  year?: { contributions: number; commits: number; prs: number; reviews: number; issues: number; repos_contributed: number };
  languages?: [string, number][]; top_repos?: { name: string; stars: number }[]; calendar?: [string, number][];
};
export const GITHUB = raw as GH;
