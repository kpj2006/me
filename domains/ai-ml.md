# AI / ML

LLMs for software engineering, AI coding agents, semantic clustering, RAG, small local models.

[← Back to overview](../README.md)

## Projects

| | Project | Role | What it is |
|---|---|---|---|
| 🔄 | Research: Intent-level overlap among AI-agent pull requests | Independent researcher | How many AI-agent PRs overlap in intent with no git conflict, and how well can small local models (3B-8B) catch them? Data: AIDev, AgenticFlict, AOSSIE repos. |
| ✅ | [PR Dashboard](https://github.com/AOSSIE-Org/PullRequestDashboard) | Author | Groups GitHub PRs by intent with sentence-embedding clustering, runs conflict analysis and dependency-aware merge ordering, and uses local LLMs to explain conflicts. |
| ✅ | [Skill Bot](https://github.com/AOSSIE-Org/SkillBot) | Author | Self-hosted RAG system for open-source communities: repository-aware retrieval, local LLM inference, automated ingestion. Configured for 52 AOSSIE repositories. |
| ✅ | Skill Updater | Author | NLP pipeline (BERTopic) that turns community discussions into documentation updates. |
| ✅ | [AI Agent Skills](https://github.com/AOSSIE-Org/Skills) | Author | Organization-wide agent instructions and contribution policies to reduce low-quality AI PRs, with AI-disclosure rules. Works with Claude Code, Cursor and GitHub Copilot. |

## Merged pull requests (34)

_Updated automatically every week from GitHub._

<details><summary><b>AOSSIE-Org/SkillBot</b> — 13 merged</summary>

- 2026-11-16 · [docs: add a privacy policy](https://github.com/AOSSIE-Org/SkillBot/pull/69)
- 2026-10-31 · [Remove AOSSIE-only files from the template; link the AOSSIE example](https://github.com/AOSSIE-Org/SkillBot/pull/53)
- 2026-10-31 · [Make Skill Bot a template any organization can use](https://github.com/AOSSIE-Org/SkillBot/pull/52)
- 2026-10-21 · [ci: add anti-slop PR workflow](https://github.com/AOSSIE-Org/SkillBot/pull/51)
- 2026-07-30 · [Org wide](https://github.com/AOSSIE-Org/SkillBot/pull/23)
- 2026-08-12 · [add skills](https://github.com/AOSSIE-Org/SkillBot/pull/21)
- 2026-07-20 · [update readme](https://github.com/AOSSIE-Org/SkillBot/pull/18)
- 2026-07-13 · [Replace placeholder README security badge URLs with repository-specific links](https://github.com/AOSSIE-Org/SkillBot/pull/17)
- 2026-07-18 · [Roadmap](https://github.com/AOSSIE-Org/SkillBot/pull/14)
- 2026-07-01 · [feat: add bot mention stripping and enable cross-channel responses wh…](https://github.com/AOSSIE-Org/SkillBot/pull/13)
- 2026-06-23 · [feat: implement OOD query filtering in bot logic and enforce scoped i…](https://github.com/AOSSIE-Org/SkillBot/pull/11)
- 2026-06-15 · [feat: add gap logging functionality and improve bot thread management](https://github.com/AOSSIE-Org/SkillBot/pull/6)
- 2026-06-11 · [feat: add initial bot implementation with environment configuration a…](https://github.com/AOSSIE-Org/SkillBot/pull/4)

</details>
<details><summary><b>AOSSIE-Org/PullRequestDashboard</b> — 12 merged</summary>

- 2026-10-31 · [Raise dependency floors to clear OSV-Scanner findings](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/57)
- 2026-10-31 · [Make PR Dashboard a standalone tool any organization can use](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/56)
- 2026-10-21 · [ci: add anti-slop PR workflow](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/54)
- 2026-08-04 · [feat: add Gitleaks license check workflow](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/23)
- 2026-07-30 · [feat: add fallback path lookup for HTML reports in simulation deploym…](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/18)
- 2026-07-30 · [feat: add CI workflow for GH Pages and generate standalone conflict/i…](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/17)
- 2026-08-19 · [feat: add context and implement automated subtree synchronization wor…](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/14)
- 2026-07-30 · [feat: add simulation script for gh page](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/13)
- 2026-07-30 · [docs: complete best practices checklist and add security reporting po…](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/12)
- 2026-07-20 · [docs: update README with project-specific documentation and metadata …](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/9)
- 2026-08-04 · [Patch 1](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/6)
- 2026-06-11 · [feat: Implement semantic clustering and analysis for PRs](https://github.com/AOSSIE-Org/PullRequestDashboard/pull/4)

</details>
<details><summary><b>AOSSIE-Org/Skills</b> — 9 merged</summary>

- 2026-10-21 · [ci: add anti-slop PR workflow](https://github.com/AOSSIE-Org/Skills/pull/12)
- 2026-10-19 · [docs: note that Template-Repo skills branch already wires in these skills](https://github.com/AOSSIE-Org/Skills/pull/11)
- 2026-10-19 · [docs: refocus README on org-wide skills](https://github.com/AOSSIE-Org/Skills/pull/10)
- 2026-08-13 · [feat: add GitHub Actions workflow for deploying static content to Pages](https://github.com/AOSSIE-Org/Skills/pull/7)
- 2026-08-13 · [Refactor dashboard layout and card styles for improved responsiveness…](https://github.com/AOSSIE-Org/Skills/pull/6)
- 2026-08-12 · [.](https://github.com/AOSSIE-Org/Skills/pull/5)
- 2026-08-12 · [.](https://github.com/AOSSIE-Org/Skills/pull/4)
- 2026-07-20 · [feat: implement interactive ecosystem simulation dashboard for AOSSIE…](https://github.com/AOSSIE-Org/Skills/pull/2)
- 2026-06-13 · [Add AOSSIE AI Contributor Policy and Communication Guidelines](https://github.com/AOSSIE-Org/Skills/pull/1)

</details>
