#!/usr/bin/env python3
"""Write data/github.json with live GitHub stats for the /stats page.

Runs in GitHub Actions (free for public repos) with the built-in GITHUB_TOKEN.
If a request fails, the old values are kept so the site never breaks.
"""
import json
import os
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "data" / "github.json"
USER = os.environ.get("GH_USER", "kpj2006")
TOKEN = os.environ.get("GITHUB_TOKEN", "")

QUERY = """
query($login: String!) {
  user(login: $login) {
    followers { totalCount }
    following { totalCount }
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100, privacy: PUBLIC,
                 orderBy: {field: STARGAZERS, direction: DESC}) {
      totalCount
      nodes { name stargazerCount forkCount primaryLanguage { name } }
    }
    pullRequests { totalCount }
    issues { totalCount }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalIssueContributions
      totalRepositoriesWithContributedPullRequests
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
}
"""


def gql():
    body = json.dumps({"query": QUERY, "variables": {"login": USER}}).encode()
    req = urllib.request.Request(
        "https://api.github.com/graphql", data=body,
        headers={"Authorization": f"Bearer {TOKEN}", "User-Agent": f"{USER}-me", "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.load(r)
    if data.get("errors"):
        raise RuntimeError(data["errors"])
    return data["data"]["user"]


def shape(u):
    c = u["contributionsCollection"]
    repos = u["repositories"]["nodes"]
    langs = {}
    for r in repos:
        if r["primaryLanguage"]:
            n = r["primaryLanguage"]["name"]
            langs[n] = langs.get(n, 0) + 1
    days = [d for w in c["contributionCalendar"]["weeks"] for d in w["contributionDays"]]
    return {
        "updated": datetime.now(timezone.utc).isoformat(timespec="minutes"),
        "followers": u["followers"]["totalCount"],
        "following": u["following"]["totalCount"],
        "public_repos": u["repositories"]["totalCount"],
        "stars": sum(r["stargazerCount"] for r in repos),
        "forks": sum(r["forkCount"] for r in repos),
        "prs_opened_all_time": u["pullRequests"]["totalCount"],
        "issues_opened_all_time": u["issues"]["totalCount"],
        "year": {
            "contributions": c["contributionCalendar"]["totalContributions"],
            "commits": c["totalCommitContributions"],
            "prs": c["totalPullRequestContributions"],
            "reviews": c["totalPullRequestReviewContributions"],
            "issues": c["totalIssueContributions"],
            "repos_contributed": c["totalRepositoriesWithContributedPullRequests"],
        },
        "languages": sorted(langs.items(), key=lambda x: -x[1])[:8],
        "top_repos": [{"name": r["name"], "stars": r["stargazerCount"]} for r in repos[:6]],
        "calendar": [[d["date"], d["contributionCount"]] for d in days],
    }


def main():
    old = json.loads(OUT.read_text()) if OUT.exists() else {}
    try:
        new = shape(gql())
    except Exception as e:  # keep the old file on any API problem
        print(f"GitHub API failed, keeping old stats: {e}")
        return
    OUT.write_text(json.dumps(new, indent=1) + "\n")
    print(f"Wrote {OUT.name}: {new['year']['contributions']} contributions, {new['followers']} followers "
          f"(was {old.get('followers')})")


if __name__ == "__main__":
    main()
