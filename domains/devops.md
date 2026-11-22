# DevOps / DevSecOps

CI/CD and repository automation across 300+ AOSSIE repositories (GSoC 2026, DevOps Lead).

[← Back to overview](../README.md)

## Projects

| | Project | Role | What it is |
|---|---|---|---|
| ✅ | AOSSIE org-wide CI/CD standardization | GSoC 2026 contributor & DevOps Lead | Standardized CI/CD and repository automation across 300+ repositories, 215+ merged PRs. |
| ✅ | DevSecOps and supply-chain security pipeline | Author | CodeQL SAST, OpenSSF Scorecard, Gitleaks, OSV-Scanner and dependency-review gating. |
| ✅ | [GitPay](https://github.com/StabilityNexus/GitPay) | Author | CI/CD-native system for policy-driven, multi-chain contributor payouts from maintainer commands on PRs. |
| ✅ | [Template-Repo](https://github.com/AOSSIE-Org/Template-Repo) | Maintainer | Standard GitHub template with preconfigured workflows and issue/PR templates. |
| ✅ | AutoInitialIssues | Maintainer | Generates initial issues to improve contributor onboarding using GitHub workflows. |
| ✅ | EvangeLabs | Author | Reusable GitHub Actions workflows for open-source projects. |
| ✅ | LFX Mentorship: Magma Core (Linux Foundation) | LFX mentee, Jan-Apr 2026 | Ran 3GPP end-to-end tests of the 5G/LTE core and wrote docs (UERANSIM, srsRAN, Wireshark, Docker). |

## Merged pull requests (82)

_Updated automatically every week from GitHub._

<details><summary><b>AOSSIE-Org/Template-Repo</b> — 42 merged</summary>

- 2026-10-19 · [ci: auto-sync skills branch with main](https://github.com/AOSSIE-Org/Template-Repo/pull/166)
- 2026-07-31 · [remove coderabbit approval](https://github.com/AOSSIE-Org/Template-Repo/pull/146)
- 2026-07-30 · [Update copyright year from 2025 to 2026](https://github.com/AOSSIE-Org/Template-Repo/pull/145)
- 2026-08-05 · [add maintainers.md](https://github.com/AOSSIE-Org/Template-Repo/pull/144)
- 2026-07-30 · [Create socket.yml](https://github.com/AOSSIE-Org/Template-Repo/pull/142)
- 2026-06-07 · [Update README.md](https://github.com/AOSSIE-Org/Template-Repo/pull/131)
- 2026-06-04 · [feat: add gitleaks scanning workflow](https://github.com/AOSSIE-Org/Template-Repo/pull/125)
- 2026-06-04 · [chore: add VSCode settings example file](https://github.com/AOSSIE-Org/Template-Repo/pull/124)
- 2026-06-04 · [chore: add VSCode extensions recommendations](https://github.com/AOSSIE-Org/Template-Repo/pull/123)
- 2026-05-29 · [feat: add GoReleaser configuration for automated builds and releases](https://github.com/AOSSIE-Org/Template-Repo/pull/122)
- 2026-05-26 · [Codeql fix](https://github.com/AOSSIE-Org/Template-Repo/pull/121)
- 2026-05-26 · [Goreleaser](https://github.com/AOSSIE-Org/Template-Repo/pull/120)
- 2026-05-29 · [OSV scanner](https://github.com/AOSSIE-Org/Template-Repo/pull/119)
- 2026-03-30 · [Refactor sync PR labels workflow](https://github.com/AOSSIE-Org/Template-Repo/pull/113)
- 2026-05-15 · [Add Danger configuration and enforce PR description template](https://github.com/AOSSIE-Org/Template-Repo/pull/111)
- 2026-05-15 · [Refactor CodeRabbit approval workflow to use pull_request_target and …](https://github.com/AOSSIE-Org/Template-Repo/pull/109)
- 2026-05-15 · [Patch 6](https://github.com/AOSSIE-Org/Template-Repo/pull/108)
- 2026-05-16 · [Add Scorecard workflow for supply-chain security and update README wi…](https://github.com/AOSSIE-Org/Template-Repo/pull/107)
- 2026-03-19 · [Add dependency review workflow to scan for license violations and CVEs](https://github.com/AOSSIE-Org/Template-Repo/pull/105)
- 2026-03-12 · [Add workflow to mark stale issues and pull requests](https://github.com/AOSSIE-Org/Template-Repo/pull/101)
- 2026-05-15 · [Add Cache Reaper workflow to manage stale and orphaned caches](https://github.com/AOSSIE-Org/Template-Repo/pull/100)
- 2026-05-15 · [Add CodeQL security scan workflow](https://github.com/AOSSIE-Org/Template-Repo/pull/99)
- 2026-05-15 · [Add detailed instructions for dependency manifest and lock file reviews](https://github.com/AOSSIE-Org/Template-Repo/pull/94)
- 2026-05-15 · [Add multi-repo analysis configuration guidance to CodeRabbit setup](https://github.com/AOSSIE-Org/Template-Repo/pull/90)
- 2026-02-24 · [Add template sync workflow for automated repository synchronization](https://github.com/AOSSIE-Org/Template-Repo/pull/74)
- 2026-02-21 · [Refactor CodeRabbit approval handler to use external labeller token f…](https://github.com/AOSSIE-Org/Template-Repo/pull/70)
- 2026-02-16 · [Add CodeRabbit approval handler and sync PR labels for review status](https://github.com/AOSSIE-Org/Template-Repo/pull/64)
- 2026-02-24 · [add editorconfig](https://github.com/AOSSIE-Org/Template-Repo/pull/62)
- 2026-02-21 · [try using another api for checking](https://github.com/AOSSIE-Org/Template-Repo/pull/53)
- 2026-01-21 · [add centralized version file](https://github.com/AOSSIE-Org/Template-Repo/pull/52)
- 2026-01-26 · [Add triage](https://github.com/AOSSIE-Org/Template-Repo/pull/51)
- 2026-02-21 · [add error and steps](https://github.com/AOSSIE-Org/Template-Repo/pull/49)
- 2026-01-26 · [pre-issue script](https://github.com/AOSSIE-Org/Template-Repo/pull/48)
- 2025-12-30 · [pre-issue](https://github.com/AOSSIE-Org/Template-Repo/pull/15)
- 2025-12-30 · [add pr template](https://github.com/AOSSIE-Org/Template-Repo/pull/14)
- 2025-12-30 · [pre-commit](https://github.com/AOSSIE-Org/Template-Repo/pull/13)
- 2025-12-26 · [add one more label](https://github.com/AOSSIE-Org/Template-Repo/pull/8)
- 2025-12-25 · [add sync-pr-labels](https://github.com/AOSSIE-Org/Template-Repo/pull/6)
- 2026-05-17 · [add dependabot](https://github.com/AOSSIE-Org/Template-Repo/pull/5)
- 2025-12-28 · [add release drafter](https://github.com/AOSSIE-Org/Template-Repo/pull/4)
- 2025-12-25 · [add issue template](https://github.com/AOSSIE-Org/Template-Repo/pull/3)
- 2025-12-24 · [update](https://github.com/AOSSIE-Org/Template-Repo/pull/2)

</details>
<details><summary><b>StabilityNexus/GitPay</b> — 38 merged</summary>

- 2026-11-01 · [Override minimatch to 11.0.3 so the OSV scan passes](https://github.com/StabilityNexus/GitPay/pull/76)
- 2026-11-01 · [Bump to 1.1.1](https://github.com/StabilityNexus/GitPay/pull/75)
- 2026-11-01 · [License as GPL-3.0 and add Terms of Use](https://github.com/StabilityNexus/GitPay/pull/74)
- 2026-11-01 · [Confirm /send authors' write access; keep the delegate key out of errors](https://github.com/StabilityNexus/GitPay/pull/73)
- 2026-11-01 · [Say 'wait' while a payout transaction is pending](https://github.com/StabilityNexus/GitPay/pull/72)
- 2026-10-31 · [Site: show the MetaMask/wallet option, round:N and unconfirmed; add the setup guide](https://github.com/StabilityNexus/GitPay/pull/71)
- 2026-10-31 · [Release v1.1.0: pay from an ordinary wallet, re-pay with round:N](https://github.com/StabilityNexus/GitPay/pull/70)
- 2026-10-31 · [Never log 'settled' for a payout that did not settle](https://github.com/StabilityNexus/GitPay/pull/69)
- 2026-10-31 · [Accept round:N on /send, and report an unconfirmed receipt as unconfirmed](https://github.com/StabilityNexus/GitPay/pull/68)
- 2026-10-29 · [Add scheme: approve, to pay from an ordinary wallet without a Safe](https://github.com/StabilityNexus/GitPay/pull/67)
- 2026-10-21 · [Add the anti-slop PR check from the AOSSIE template](https://github.com/StabilityNexus/GitPay/pull/58)
- 2026-10-19 · [Pin workflow actions to SHAs and default tokens to read-only](https://github.com/StabilityNexus/GitPay/pull/57)
- 2026-10-19 · [Best-practices follow-ups: release notes, CodeQL, gitleaks](https://github.com/StabilityNexus/GitPay/pull/56)
- 2026-10-18 · [Add brand folder: SVG logo, favicons and icons (fixes broken README logo)](https://github.com/StabilityNexus/GitPay/pull/51)
- 2026-10-18 · [Close the remaining repo-quality items](https://github.com/StabilityNexus/GitPay/pull/50)
- 2026-10-18 · [Queue payouts at job level so other comments cannot cancel a pending /send](https://github.com/StabilityNexus/GitPay/pull/49)
- 2026-10-18 · [Add brand guidelines](https://github.com/StabilityNexus/GitPay/pull/48)
- 2026-10-17 · [Fill in the best practices checklist (42/49, 86%)](https://github.com/StabilityNexus/GitPay/pull/47)
- 2026-10-15 · [Fix the gitleaks allowlist, which CI's gitleaks 8.24 never loaded](https://github.com/StabilityNexus/GitPay/pull/46)
- 2026-10-15 · [Release v1.0.1: ship the /send asset fix](https://github.com/StabilityNexus/GitPay/pull/44)
- 2026-10-14 · [Refuse a /send that names a different asset than the workflow pays](https://github.com/StabilityNexus/GitPay/pull/43)
- 2026-10-14 · [Add the marketing site in frontend/ and deploy it to GitHub Pages](https://github.com/StabilityNexus/GitPay/pull/33)
- 2026-10-13 · [Close the release gate: v1.0.0 tagged, SBOM and provenance published](https://github.com/StabilityNexus/GitPay/pull/32)
- 2026-10-13 · [Look up the major tag exactly before moving it](https://github.com/StabilityNexus/GitPay/pull/31)
- 2026-10-13 · [Bump to 1.0.0 and rewrite AGENTS.md for the allowance model](https://github.com/StabilityNexus/GitPay/pull/30)
- 2026-10-13 · [Run the Action on Node 24](https://github.com/StabilityNexus/GitPay/pull/26)
- 2026-10-13 · [Fix the README quickstart, which could not run](https://github.com/StabilityNexus/GitPay/pull/25)
- 2026-10-13 · [Record 20 consecutive Sepolia settlements and a merged-PR payout](https://github.com/StabilityNexus/GitPay/pull/24)
- 2026-10-13 · [Publish and freeze the input schema; refuse an unknown mode](https://github.com/StabilityNexus/GitPay/pull/23)
- 2026-10-01 · [Release a Node Action with an SBOM and signed build provenance](https://github.com/StabilityNexus/GitPay/pull/22)
- 2026-09-30 · [Record the live Sepolia evidence in the release gate](https://github.com/StabilityNexus/GitPay/pull/21)
- 2026-09-30 · [Close three release-gate boxes with tests](https://github.com/StabilityNexus/GitPay/pull/20)
- 2026-09-30 · [Replace the XOps logo with GitPay artwork](https://github.com/StabilityNexus/GitPay/pull/19)
- 2026-09-30 · [Upgrade brace-expansion and js-yaml past known vulnerabilities](https://github.com/StabilityNexus/GitPay/pull/18)
- 2026-09-30 · [Rename XOps to GitPay](https://github.com/StabilityNexus/GitPay/pull/10)
- 2026-09-30 · [Import the XOps implementation into GitPay](https://github.com/StabilityNexus/GitPay/pull/9)
- 2026-08-27 · [Add REFERENCES.md and ROADMAP.md for XOps project documentation](https://github.com/StabilityNexus/GitPay/pull/2)
- 2026-09-12 · [chore: remove initial issues automation files and related configurations](https://github.com/StabilityNexus/GitPay/pull/1)

</details>
<details><summary><b>StabilityNexus/Template-Repo-EVM-Contracts</b> — 1 merged</summary>

- 2026-03-15 · [Add features section and enhance project maturity checklist in README](https://github.com/StabilityNexus/Template-Repo-EVM-Contracts/pull/21)

</details>
<details><summary><b>AOSSIE-Org/AutoInitialIssues</b> — 1 merged</summary>

- 2026-03-14 · [feat: Implement initial GitHub Action for generating issues from pred…](https://github.com/AOSSIE-Org/AutoInitialIssues/pull/1)

</details>
