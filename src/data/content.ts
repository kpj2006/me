const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const TALKS = [
  { date: 'Oct 2026', role: 'Organizer', title: 'Fetch-A-Thon 3.0 — Jaipur campus', text: 'National AI-agent hackathon with Fetch.ai Innovation Lab, hosted by Cybros at LNMIIT. ₹1,00,000 prize pool.', links: [{ label: 'Recap post', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7520479036943384577/' }] },
  { date: 'Sep 2026', role: 'Organizer', title: 'Exploring Autonomous AI with Fetch.ai', text: 'Session on AI agents, autonomous systems and decentralized AI for LNMIIT students.', links: [{ label: 'Watch', url: yt('oZPpCTzGrgw') }] },
  { date: 'Sep 2026', role: 'Speaker', title: 'Cybros OSDC intro', text: 'Introducing the open-source club at LNMIIT, with Sushmit Sharma.', links: [{ label: 'Watch', url: yt('1f1UBNwXgM0') }] },
  { date: 'Sep 2026', role: 'Pitch', title: 'Router402 — x402 AI router', text: 'Pay-per-call AI inference settled in USDC over x402.', links: [{ label: 'Watch', url: yt('nPGxVFmqcp0') }] },
  { date: 'Jul 2026', role: 'Session', title: 'Everything About Open Source in 1 Hour', text: 'First Cybros OSDC session: open-source programs (GSoC, LFX and more), foundations and careers.', links: [{ label: 'Watch', url: yt('6dBKYvTGn3M') }] },
  { date: 'Apr 2026', role: 'Pitch', title: 'PRStake — Rootcamp I', text: 'Winning pitch: crypto-economic PR gating on Rootstock.', links: [{ label: 'Watch', url: yt('XkVcxlGLISo') }] },
];

export const VIDEOS = [
  { id: 'qWbDJNzwTUg', title: 'GitPay promo', date: 'Oct 2026', tag: 'Demo' },
  { id: 'oZPpCTzGrgw', title: 'Exploring Autonomous AI with Fetch.ai', date: 'Sep 2026', tag: 'Session' },
  { id: '1f1UBNwXgM0', title: 'Cybros OSDC intro', date: 'Sep 2026', tag: 'Session' },
  { id: 'nPGxVFmqcp0', title: 'Router402 pitch', date: 'Sep 2026', tag: 'Pitch' },
  { id: '6dBKYvTGn3M', title: 'Everything About Open Source in 1 Hour', date: 'Jul 2026', tag: 'Session' },
  { id: 'KlIk03S4c3w', title: 'AssetFlow demo', date: 'Jul 2026', tag: 'Demo' },
  { id: 'QtN8e_pQrNE', title: 'GoalWatch demo', date: 'Apr 2026', tag: 'Demo' },
  { id: 'XkVcxlGLISo', title: 'PRStake — Rootcamp I winner', date: 'Apr 2026', tag: 'Pitch' },
  { id: 'IEjfEC7U_r8', title: 'Discord auth template', date: 'Apr 2026', tag: 'Demo' },
  { id: 'xMHPiydEukE', title: 'Skill Updater v2', date: 'Mar 2026', tag: 'Demo' },
  { id: 'T2r8UPdkb18', title: 'PR-driven rewards template', date: 'Mar 2026', tag: 'Demo' },
  { id: 's4Z7seEZNx0', title: 'My introduction', date: 'Mar 2026', tag: 'About' },
];

export const ISSUES = [
  { no: '#5', date: 'Nov 2026', title: 'GSoC wrap-up', points: ['GSoC’26 at AOSSIE is done. Thank you Bruno, Bhavik, Madhav and every contributor.', 'This site moved to Astro, with stats rebuilt every week by CI.'], url: 'https://www.linkedin.com/in/kpj2006/recent-activity/all/' },
  { no: '#4', date: 'Oct 2026', title: 'GitPay v1.1.0 and Fetch-A-Thon', points: ['Released GitPay v1.1.0: maintainers pay contributors from a PR comment.', 'Hosted Fetch-A-Thon 3.0, an AI-agent hackathon, at LNMIIT on 24 Oct.'], url: 'https://www.linkedin.com/feed/update/urn:li:activity:7522430543284645888/' },
  { no: '#3', date: 'Sep 2026', title: 'First real payment on-chain', points: ['XOps (now GitPay) sent a real Safe → contributor payment on Sepolia.', 'Duplicate payments and non-maintainer triggers are rejected. 90 tests pass in CI.', 'Lesson: passing tests ≠ working workflow — a live run found a config bug.'], url: 'https://www.linkedin.com/in/kpj2006/recent-activity/all/' },
  { no: '#2', date: 'Aug 2026', title: 'Why payouts should be a GitHub Action', points: ['Settlement is the last manual step in the delivery pipeline.', 'A versioned Action, not a service: no server and no cost for the org.'], url: 'https://www.linkedin.com/feed/update/urn:li:activity:7496770465722445824/' },
  { no: '#1', date: 'Jun–Jul 2026', title: 'Skill Bot and PR Dashboard', points: ['Skill Bot asks a clarifying question instead of guessing when a message is vague.', 'Skill Bot can be @mentioned in any Discord channel and answers in a thread.', 'Became AAIF Community Organizer for Jaipur.'], url: 'https://www.linkedin.com/in/kpj2006/recent-activity/all/' },
];

export const PEOPLE = [
  { name: 'Dr. Bruno Woltzenlogel Paleo', org: 'AOSSIE', note: 'My GSoC’26 mentor and AOSSIE admin' },
  { name: 'Bhavik Mangla', org: 'AOSSIE', note: 'GSoC’26 mentor' },
  { name: 'Madhav Gupta', org: 'AOSSIE', note: 'GSoC’26 mentor' },
  { name: 'Sana Wajid', org: 'Fetch.ai Innovation Lab', note: 'Fetch-A-Thon 3.0' },
  { name: 'Gautam Kumar', org: 'Fetch.ai', note: 'Led our Autonomous AI session' },
  { name: 'Sushmit Sharma', org: 'Cybros · LNMIIT', note: 'Co-presented the Cybros OSDC intro' },
  { name: 'Rahul Parundekar', org: 'Agentic AI Foundation', note: 'AAIF chapter program' },
  { name: 'Ijeoma Onwuka', org: 'Agentic AI Foundation', note: 'AAIF chapter program' },
  { name: 'Demetrios Brinkmann', org: 'Linux Foundation', note: 'AAIF Jaipur onboarding' },
  { name: 'Saurabh Mishra', org: 'AAIF Pune chapter', note: 'Fellow chapter organizer' },
];

export const CERTS = [
  { icon: '☀️', title: 'Google Summer of Code 2026', sub: 'Google · contributor at AOSSIE', year: '2026' },
  { icon: '🐧', title: 'LFX Mentorship — Magma', sub: 'Linux Foundation · Jan–Apr 2026', year: '2026' },
  { icon: '🏗️', title: 'Certified Rootstock Builder', sub: 'Rootcamp I · top 20 builders · PRStake winning project', year: '2026' },
  { icon: '✨', title: 'Gemini Student Ambassador', sub: 'Google · GSA ID 14079', year: '2026' },
  { icon: '◎', title: 'Solana Summer School', sub: 'Solana Foundation · selected', year: '2026' },
  { icon: '🤝', title: 'AAIF Community Organizer', sub: 'Agentic AI Foundation · Jaipur', year: '2026' },
  { icon: '🧑‍🏫', title: 'GSSoC’26 Mentor', sub: 'GirlScript Summer of Code', year: '2026' },
  { icon: '⚖️', title: 'Apprentice of the Stable Order', sub: 'Stability Nexus', year: '2026' },
  { icon: '🎓', title: 'UHI Alumnus (UHI 8)', sub: 'UHI', year: '' },
];

export const EVENTS = [
  { date: 'Oct 2026', title: 'Fetch-A-Thon 3.0 · Jaipur campus', role: 'Organizer', text: 'AI-agent hackathon with Fetch.ai Innovation Lab at LNMIIT.', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7520479036943384577/' },
  { date: 'May–Nov 2026', title: 'Google Summer of Code 2026', role: 'Contributor · DevOps Lead', text: 'AOSSIE.', url: 'https://github.com/AOSSIE-Org' },
  { date: '2026', title: 'Solana Summer School', role: 'Participant', text: 'Solana Foundation.', url: '' },
  { date: 'Jan–Apr 2026', title: 'LFX Mentorship', role: 'Mentee', text: 'Magma, Linux Foundation.', url: 'https://github.com/magma/magma' },
  { date: 'Jan–Mar 2026', title: 'Rootstock Rootcamp I', role: '🏆 Top 20 · winning project', text: 'PRStake, crypto-economic PR gating.', url: 'https://github.com/kpj2006/prstake' },
  { date: '', title: 'SUI x Jaipur hackathon', role: '🥉 3rd place', text: 'zkLogin Raffle, a gasless raffle dApp on Sui.', url: 'https://github.com/kpj2006/zklogin-raffle' },
  { date: '2025', title: 'GDG LNMIIT Hackathon', role: 'Participant', text: 'Built a Meesho-themed project.', url: 'https://github.com/kpj2006/Meesho' },
  { date: 'Jan 2025', title: 'LNMHacks 7.0', role: 'Technical assistant & designer', text: 'Helped speakers and fixed technical issues across tracks.', url: '' },
];

export const HELP = [
  { icon: '⚙️', title: 'CI/CD & DevSecOps setup', text: 'GitHub Actions pipelines, repo templates and security scans (CodeQL, Scorecard, Gitleaks, OSV) for your project or org.' },
  { icon: '🧩', title: 'Backend & full-stack', text: 'Services, APIs and dashboards in TypeScript, Python or Go — with tests, Docker and CI from day one.' },
  { icon: '🤖', title: 'AI & LLM tooling', text: 'RAG assistants, embedding pipelines and local-LLM tools grounded in your own docs and code.' },
  { icon: '⛓️', title: 'Web3', text: 'Smart contracts, x402 payments and dApps on EVM, Solana, Sui and Hedera.' },
  { icon: '🚀', title: 'Embedded with your team', text: 'Sit with users, find the real problem, ship the fix into their workflow.' },
  { icon: '🎤', title: 'Talks, workshops & hackathons', text: 'Sessions on open source, DevOps and AI agents; I organized a national AI-agent hackathon campus round.' },
];

export const USES = [
  { title: 'Machine', items: ['Windows laptop with WSL for Linux work', 'VirtualBox + Vagrant for reproducible VMs'] },
  { title: 'Editors & AI', items: ['VS Code, Cursor and Antigravity', 'GitHub Copilot, Gemini CLI and Claude', 'Ollama for local LLMs'] },
  { title: 'Languages & toolchains', items: ['Python (Anaconda), Node.js and Bun, Go, C++', 'Foundry for Solidity, Sui CLI', 'Expo and Android SDK for mobile'] },
  { title: 'DevOps & infra', items: ['GitHub Actions, Docker', 'Kubernetes', 'Railway and Vercel for quick deploys'] },
  { title: 'Everyday', items: ['Discord — where most of my open-source work happens', 'WakaTime for coding time', 'Google Workspace and Notion'] },
];

export const SKILLS = ['GitHub Actions', 'Docker', 'Linux / Bash', 'CodeQL · Gitleaks · OSV', 'Python', 'TypeScript / Node.js', 'Go', 'C++', 'Django', 'FastAPI', 'React / Next.js', 'PostgreSQL', 'ChromaDB · RAG', 'Ollama', 'Solidity', 'Solana · Sui'];
