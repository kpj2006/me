#!/usr/bin/env python3
"""Build README.md and domains/*.md from data/contributions.yml and merged PRs.

  python scripts/update.py           # fetch merged PRs from GitHub, then render
  python scripts/update.py render    # render only, from the cached data/prs.json

Env: GITHUB_TOKEN (optional locally, set automatically in GitHub Actions),
     GH_USER (default: kpj2006).
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "contributions.yml"
PR_CACHE = ROOT / "data" / "prs.json"
USER = os.environ.get("GH_USER", "kpj2006")
STATUS_ICON = {"shipped": "✅", "ongoing": "🔄", "planned": "🗓️"}
SKIP_OWNERS = {USER}  # PRs to your own repos are left out (they are not "contributions")


def fetch_prs():
    """All merged PRs authored by USER, newest first (GitHub search returns max 1000)."""
    token = os.environ.get("GITHUB_TOKEN")
    headers = {"Accept": "application/vnd.github+json", "User-Agent": f"{USER}-me"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    q = urllib.parse.quote(f"author:{USER} is:pr is:merged")
    prs, page = [], 1
    while page <= 10:
        url = f"https://api.github.com/search/issues?q={q}&sort=created&order=desc&per_page=100&page={page}"
        with urllib.request.urlopen(urllib.request.Request(url, headers=headers)) as r:
            items = json.load(r).get("items", [])
        for it in items:
            repo = it["repository_url"].split("/repos/", 1)[1]
            prs.append({
                "repo": repo,
                "title": it["title"],
                "url": it["html_url"],
                "merged": (it.get("pull_request", {}).get("merged_at") or it["closed_at"] or "")[:10],
            })
        if len(items) < 100:
            break
        page += 1
    PR_CACHE.write_text(json.dumps(prs, indent=1) + "\n")
    return prs


def route(repo, rules):
    for rule in rules:
        if re.search(rule["pattern"], repo):
            return rule["domain"]
    return "open-source"


def md_escape(text):
    return text.replace("|", "\\|").replace("\n", " ")


def render(cfg, prs):
    domains = cfg["domains"]
    prs = [p for p in prs if p["repo"].split("/")[0] not in SKIP_OWNERS]
    by_domain = defaultdict(list)
    for p in prs:
        by_domain[route(p["repo"], cfg.get("pr_routing", []))].append(p)

    (ROOT / "domains").mkdir(exist_ok=True)
    for key, d in domains.items():
        out = [f"# {d['title']}", "", d.get("blurb", ""), "", "[← Back to overview](../README.md)", "",
               "## Projects", "", "| | Project | Role | What it is |", "|---|---|---|---|"]
        for e in d["entries"]:
            name = f"[{e['name']}]({e['link']})" if e.get("link") else e["name"]
            out.append(f"| {STATUS_ICON.get(e.get('status'), '')} | {md_escape(name)} | "
                       f"{md_escape(e.get('role', ''))} | {md_escape(e.get('summary', '') or '')} |")
        dprs = by_domain.get(key, [])
        out += ["", f"## Merged pull requests ({len(dprs)})", "",
                "_Updated automatically every week from GitHub._", ""]
        if dprs:
            for repo, n in Counter(p["repo"] for p in dprs).most_common():
                out.append(f"<details><summary><b>{repo}</b> — {n} merged</summary>\n")
                for p in (x for x in dprs if x["repo"] == repo):
                    out.append(f"- {p['merged']} · [{md_escape(p['title'])}]({p['url']})")
                out.append("\n</details>")
        else:
            out.append("_None yet._")
        (ROOT / "domains" / f"{key}.md").write_text("\n".join(out) + "\n")

    repos = {p["repo"] for p in prs}
    orgs = {r.split("/")[0] for r in repos}
    lines = [
        "# Karun Pacholi — contributions",
        "",
        "B.Tech CSE at LNMIIT Jaipur · GSoC 2026 contributor & DevOps Lead at AOSSIE · "
        "researching AI coding agents and their pull requests.",
        "",
        f"[GitHub](https://github.com/{USER}) · [LinkedIn](https://linkedin.com/in/kpj2006) · "
        "[Links](https://linktr.ee/kpj2006)",
        "",
        f"**{len(prs)} merged PRs** across **{len(repos)} repositories** in **{len(orgs)} organizations** "
        f"(outside my own account). Last updated {date.today().isoformat()}.",
        "",
        "## By domain",
        "",
        "| Domain | Projects | Merged PRs | Highlights |",
        "|---|---:|---:|---|",
    ]
    for key, d in domains.items():
        top = ", ".join(e["name"].split(": ")[0] for e in d["entries"][:3])
        lines.append(f"| [{d['title']}](domains/{key}.md) | {len(d['entries'])} | "
                     f"{len(by_domain.get(key, []))} | {md_escape(top)} |")
    lines += ["", "## Top repositories by merged PRs", ""]
    for repo, n in Counter(p["repo"] for p in prs).most_common(10):
        lines.append(f"- [{repo}](https://github.com/{repo}/pulls?q=is%3Apr+author%3A{USER}+is%3Amerged) — {n}")
    if not prs:
        lines.append("_Run the update workflow to fill this in._")
    lines += ["", "---", "", "✅ shipped · 🔄 ongoing · 🗓️ planned. "
              "Edit `data/contributions.yml` to add projects; PRs are pulled in by "
              "`.github/workflows/update.yml`."]
    (ROOT / "README.md").write_text("\n".join(lines) + "\n")


def main():
    cfg = yaml.safe_load(DATA.read_text())
    if len(sys.argv) > 1 and sys.argv[1] == "render":
        prs = json.loads(PR_CACHE.read_text()) if PR_CACHE.exists() else []
    else:
        prs = fetch_prs()
    render(cfg, prs)
    print(f"Rendered {len(cfg['domains'])} domains, {len(prs)} PRs in cache.")


if __name__ == "__main__":
    main()
