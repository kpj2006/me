const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const TALKS = [
  { date: 'Oct 2026', role: 'Organizer', img: 'assets/fetchathon/hall.jpg', title: 'Fetch-A-Thon 3.0 — Jaipur campus', text: 'National AI-agent hackathon with Fetch.ai Innovation Lab, hosted by Cybros at LNMIIT. ₹1,00,000 prize pool.', links: [{ label: 'Recap post', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7520479036943384577/' }] },
  { date: 'Sep 2026', role: 'Organizer', img: 'https://i.ytimg.com/vi/oZPpCTzGrgw/hqdefault.jpg', title: 'Exploring Autonomous AI with Fetch.ai', text: 'Session on AI agents, autonomous systems and decentralized AI for LNMIIT students.', links: [{ label: 'Watch', url: yt('oZPpCTzGrgw') }] },
  { date: 'Sep 2026', role: 'Speaker', img: 'https://i.ytimg.com/vi/1f1UBNwXgM0/hqdefault.jpg', title: 'Cybros OSDC intro', text: 'Introducing the open-source club at LNMIIT, with Sushmit Sharma.', links: [{ label: 'Watch', url: yt('1f1UBNwXgM0') }] },
    { date: 'Jul 2026', role: 'Speaker', img: 'https://i.ytimg.com/vi/6dBKYvTGn3M/hqdefault.jpg', title: 'Everything About Open Source in 1 Hour', text: 'First Cybros OSDC session: open-source programs (GSoC, LFX and more), foundations and careers.', links: [{ label: 'Watch', url: yt('6dBKYvTGn3M') }] },
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
  { logo: 'GSoC', icon: '☀️', title: 'Google Summer of Code 2026', sub: 'Google · contributor at AOSSIE', year: '2026' },
  { logo: 'Linux Foundation', icon: '🐧', title: 'LFX Mentorship — Magma', sub: 'Linux Foundation · Jan–Apr 2026', year: '2026' },
  { icon: '🏗️', title: 'Certified Rootstock Builder', sub: 'Rootcamp I · top 20 builders · PRStake winning project', year: '2026' },
  { logo: 'Gemini', icon: '✨', title: 'Gemini Student Ambassador', sub: 'Google · GSA ID 14079', year: '2026' },
  { logo: 'Solana', icon: '◎', title: 'Solana Summer School', sub: 'Solana Foundation · selected', year: '2026' },
  { logo: 'Linux Foundation', icon: '🤝', title: 'AAIF Community Organizer', sub: 'Agentic AI Foundation · Jaipur', year: '2026' },
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

// Uses page, written like kakkoyun.me/uses. Each item: [name, what I use it for, link?]
export type Use = [string, string, string?];
export const USES: { title: string; items: Use[] }[] = [
  { title: 'Hardware / Desk', items: [
    ['Laptop', 'HP OMEN — Intel Core i7-13620H, NVIDIA GeForce RTX 4060 (8 GB), 16 GB RAM, 1 TB SSD, 144 Hz display'],
    ['Monitor', 'Dell 24 Plus (S2425HSM)'],
    ['Keyboard', 'Rapoo E9350L wireless', 'https://rapoo.in/keyboards/rapoo-e9350l/'],
    ['Mouse', 'HP M120 wireless mouse'],
    ['Desk mat', 'Medium size, black'],
    ['Laptop stand', 'Keeps the OMEN raised next to the monitor'],
    ['Phone', 'Samsung Galaxy on a desk stand'],
    ['Earbuds', 'Intex TWS for calls and music'],
    ['Extra screen', 'spacedesk and Second screen turn my phone or tablet into a third display'],
  ] },
  { title: 'Dev Machines', items: [
    ['Windows 11', 'Main OS on the OMEN'],
    ['WSL', 'Ubuntu 22.04 and Alpine Linux for Linux-first work'],
    ['Docker Desktop', 'Containers for reproducible toolchains'],
    ['kind', 'Local Kubernetes clusters'],
    ['VirtualBox + Vagrant', 'Reproducible VMs (used a lot during LFX Magma)'],
  ] },
  { title: 'Terminal / CLI', items: [
    ['Windows Terminal + PowerShell 7', 'Daily shell, themed with Oh My Posh'],
    ['Warp', 'AI terminal for longer sessions'],
    ['git, GitHub CLI, GitHub Desktop', 'Version control and PRs from the terminal'],
    ['act', 'Run GitHub Actions locally before pushing'],
    ['bat, Volta, Pandoc', 'Better cat, Node version manager, doc conversion'],
    ['AWS CLI, Google Cloud SDK', 'Cloud work from the terminal'],
  ] },
  { title: 'Editors & AI', items: [
    ['VS Code', 'Main editor'],
    ['Cursor and Antigravity IDE', 'Agentic coding'],
    ['Claude', 'Claude desktop and Claude Code for most writing and coding help'],
    ['GitHub Copilot, Microsoft Copilot, Google AI Studio, IBM Bob', 'Second opinions and quick prototypes'],
    ['Perplexity', 'Research with sources'],
    ['Ollama', 'Local LLMs on the RTX 4060'],
    ['Visual Studio + Build Tools', 'C++ and .NET builds on Windows'],
  ] },
  { title: 'Languages & Toolchains', items: [
    ['Python', '3.11 and 3.13, plus Anaconda for data work'],
    ['Node.js', 'TypeScript and JavaScript projects'],
    ['Go', 'Services and CLIs'],
    ['C++ with CMake', 'DSA practice and systems code'],
    ['Java (Temurin JDK) and .NET SDK', 'When a project needs them'],
    ['Android Studio', 'Mobile builds and emulators'],
    ['Foundry and Sui CLI', 'Solidity and Move smart contracts'],
  ] },
  { title: 'Databases', items: [
    ['PostgreSQL 17', 'With pgAgent and PgBouncer'],
    ['MySQL 8.4', 'For college and older projects'],
  ] },
  { title: 'Security & Networking', items: [
    ['Burp Suite', 'Testing web apps'],
    ['Wireshark + Npcap', 'Packet capture and debugging'],
    ['Cisco Packet Tracer', 'Computer Networks coursework'],
    ['Cloudflare One (WARP)', 'Secure network access'],
  ] },
  { title: 'Design & Content', items: [
    ['Figma', 'Posters, banners and UI', 'https://github.com/kpj2006/Figma'],
    ['Inkscape', 'Vector graphics'],
    ['OBS Studio and Clipchamp', 'Recording and editing my YouTube demos'],
    ['ShareX and Snipping Tool', 'Screenshots and screen GIFs'],
  ] },
  { title: 'Notes & Productivity', items: [
    ['Notion and AppFlowy', 'Plans, notes and project docs'],
    ['OneNote, Microsoft To Do, Sticky Notes', 'Class notes and daily tasks'],
    ['Microsoft Whiteboard', 'Sketching system designs'],
    ['ActivityWatch', 'Tracks where my time goes'],
    ['Ditto, AutoHotkey, X-Mouse Button Control', 'Clipboard history, shortcuts and mouse macros'],
    ['Power Automate and UI.Vision RPA', 'Automating boring desktop tasks'],
  ] },
  { title: 'Communication', items: [
    ['Discord', 'Where most of my open-source work happens'],
    ['Slack, Telegram, WhatsApp', 'Teams, communities and friends'],
    ['Zoom, Microsoft Teams, Outlook', 'Calls and mail'],
  ] },
  { title: 'Everyday', items: [
    ['Brave and Chrome', 'Browsers'],
    ['Spotify', 'Music while coding'],
    ['7-Zip, TreeSize, Diffchecker', 'Archives, disk space and quick diffs'],
    ['Samsung Flow and Chrome Remote Desktop', 'Phone ↔ laptop and remote access'],
  ] },
  { title: 'Off the clock', items: [
    ['World of Tanks', 'Gaming on the RTX 4060'],
    ['Graphic design and photography', 'Free-time hobbies'],
  ] },
];

// Skills shown under each domain on /expertise (keys match ROLES).
export const SKILLS_BY: Record<string, string[]> = {
  devops: ['GitHub Actions', 'Docker', 'Kubernetes', 'Linux', 'Bash', 'nginx', 'Vagrant', 'YAML'],
  devsecops: ['CodeQL', 'Gitleaks', 'OSV-Scanner', 'OpenSSF Scorecard'],
  maintainer: ['Code review', 'Issue triage', 'GitHub Actions', 'GitHub Projects', 'AGENTS.md', 'Mentoring'],
  backend: ['Python', 'TypeScript', 'Node.js', 'Go', 'C++', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  fullstack: ['React', 'Next.js', 'Vite', 'Express', 'TypeScript'],
  ai: ['RAG', 'ChromaDB', 'Ollama', 'Sentence Transformers', 'BERTopic', 'MCP', 'Gemini'],
  mlops: ['Python', 'ChromaDB', 'GitHub Actions', 'Docker'],
  web3: ['Solidity', 'ERC-20', 'ERC-223', 'ERC-4626', 'ERC-721', 'ERC-2535 Diamond', 'Ethers.js v6', 'Viem', 'Foundry', 'Hardhat', 'Rust', 'Move (Sui)', 'Ethereum', 'Solana', 'Sui', 'Hedera', 'Rootstock', 'x402', 'React', 'Next.js', 'Vite'],
  fde: ['Python', 'TypeScript', 'GitHub Actions', 'Discord API'],
  devrel: ['Talks', 'Workshops', 'Hackathons', 'Writing', 'YouTube'],
  design: ['Figma', 'Posters', 'Event branding', 'Social media creatives', 'Merch design'],
};

// Graphic design work, from github.com/kpj2006/Figma
export const DESIGNS = [
  { img: 'lnmhacks-7-poster', title: 'LNMHacks 7.0 poster', sub: 'Pixel-art campaign' },
  { img: 'lnmhacks-7-countdown', title: 'LNMHacks 7.0 countdown', sub: 'Social media' },
  { img: 'lnmhacks-7-mentors', title: 'Mentors of LNMHacks 7.0', sub: 'Speaker cards' },
  { img: 'lnmhacks-8-header', title: 'LNMHacks 8.0 header', sub: 'X / Twitter banner' },
  { img: 'lnmhacks-logo', title: 'LNM Hacks logo', sub: 'Brand mark' },
  { img: 'decipher', title: 'Decipher', sub: 'Cipher club event poster' },
  { img: 'nss-banner', title: 'NSS LNMIIT banner', sub: 'National Service Scheme' },
  { img: 'plantation-drive', title: 'Plantation drive', sub: 'NSS event poster' },
  { img: 'youth-day', title: 'International Youth Day', sub: 'NSS event poster' },
  { img: 'aspiring-engineers', title: 'Aspiring Engineers', sub: 'Webinar poster' },
  { img: 'asme-jacket', title: 'ASME jacket', sub: 'Merch design' },
];

// Broad role map. `done` roles link to work; the rest are planned.
export type MapRole = { name: string; icon: string; href?: string };
export const ROLE_MAP: { group: string; later?: string; roles: MapRole[] }[] = [
  { group: 'Core Software & Infrastructure', roles: [
    { name: 'DevOps', icon: '⚙️', href: 'roles/devops/' }, { name: 'DevSecOps', icon: '🛡️', href: 'roles/devsecops/' },
    { name: 'SDE / Backend', icon: '🧩', href: 'roles/backend/' }, { name: 'Full Stack', icon: '🖥️', href: 'roles/fullstack/' },
    { name: 'Platform Engineer', icon: '🏗️' }, { name: 'Cloud Engineer', icon: '☁️' }, { name: 'Site Reliability Engineer', icon: '📟' },
    { name: 'Infrastructure Engineer', icon: '🧱' }, { name: 'Distributed Systems Engineer', icon: '🔗' }, { name: 'Systems Engineer', icon: '🖧' },
    { name: 'Database Engineer', icon: '🗄️' }, { name: 'Mobile Engineer', icon: '📱' }, { name: 'Product Engineer', icon: '🛠️' },
    { name: 'Software Architect', icon: '🏛️' }, { name: 'Performance Engineer', icon: '⚡' } ] },
  { group: 'AI, Machine Learning & Data', roles: [
    { name: 'Agentic AI Engineer', icon: '🤖', href: 'roles/ai/' }, { name: 'AI Engineer', icon: '🧠', href: 'roles/ai/' },
    { name: 'MLOps Engineer', icon: '🔁', href: 'roles/mlops/' }, { name: 'Generative AI Engineer', icon: '✨' },
    { name: 'AI Research Engineer', icon: '🔬' }, { name: 'Applied Scientist', icon: '🧪' }, { name: 'Data Scientist', icon: '📊' },
    { name: 'Data Engineer', icon: '🚰' }, { name: 'Data Architect', icon: '🏛️' } ] },
  { group: 'Cybersecurity & Security Research', later: 'Planned to start in 2030', roles: [
    { name: 'Application Security Engineer', icon: '🔐' }, { name: 'Product Security Engineer', icon: '🛡️' }, { name: 'Cloud Security Engineer', icon: '☁️' },
    { name: 'Security Researcher', icon: '🔍' }, { name: 'Penetration Tester', icon: '🎯' }, { name: 'Red Team Engineer', icon: '🚩' },
    { name: 'Threat Intelligence Analyst', icon: '🕵️' }, { name: 'Incident Response Engineer', icon: '🚨' }, { name: 'Security Architect', icon: '🏰' },
    { name: 'Security Operations Engineer', icon: '📡' } ] },
  { group: 'Web3, Blockchain & Cryptography', roles: [
    { name: 'Web3', icon: '⛓️', href: 'roles/web3/' }, { name: 'Smart Contract Engineer', icon: '📜', href: 'roles/web3/' },
    { name: 'Protocol Engineer', icon: '🔗' }, { name: 'Blockchain Infrastructure Engineer', icon: '🧱' }, { name: 'Blockchain Security Engineer', icon: '🔒' },
    { name: 'Zero-Knowledge Engineer', icon: '🫥' }, { name: 'Cryptography Engineer', icon: '🔑' }, { name: 'DeFi Engineer', icon: '💰' } ] },
  { group: 'Product, Solutions & Developer Ecosystem', roles: [
    { name: 'Open Source Maintainer', icon: '🧭', href: 'roles/maintainer/' }, { name: 'DevRel', icon: '🎤', href: 'roles/devrel/' },
    { name: 'Forward Deployed Engineer', icon: '🚀', href: 'roles/fde/' }, { name: 'Developer Experience Engineer', icon: '🧰' },
    { name: 'Solutions Engineer', icon: '🤝' }, { name: 'Solutions Architect', icon: '📐' }, { name: 'Technical Product Manager', icon: '📦' },
    { name: 'Technical Program Manager', icon: '📋' }, { name: 'Founding Engineer', icon: '🌱' }, { name: 'Technical Consultant', icon: '💡' } ] },
  { group: 'Design', roles: [ { name: 'Graphic Designer', icon: '🎨', href: 'expertise/#design' } ] },
  { group: 'Emerging & Specialized Engineering', roles: [
    { name: 'Network Engineer', icon: '🌐' }, { name: 'Edge Computing Engineer', icon: '🛰️' }, { name: 'IoT Engineer', icon: '📶' },
    { name: 'Embedded Systems Engineer', icon: '🔌' }, { name: 'FPGA Engineer', icon: '🧮' }, { name: 'Quantum Computing Engineer', icon: '⚛️' } ] },
];

// Domains I have not started yet, shown at the end of /expertise.
export const FUTURE = [
  { key: 'cs', title: 'CS Fundamentals', icon: '📚', note: 'Updated soon', pitch: 'Data structures and algorithms, operating systems, databases, networks and OOP. I study these every week.', skills: ['DSA', 'Operating Systems', 'DBMS', 'Computer Networks', 'OOP', 'C++'] },
  { key: 'coreml', title: 'Core ML', icon: '🧠', note: 'Planned to start in 2030', pitch: 'Machine learning from the ground up: math, classic models, deep learning and research.', skills: ['Linear algebra', 'Probability', 'scikit-learn', 'PyTorch', 'Deep learning'] },
  { key: 'cybersec', title: 'Cybersecurity', icon: '🔐', note: 'Planned to start in 2030', pitch: 'Security beyond CI scans: application security, pentesting and security research.', skills: ['Web security', 'Network security', 'Kali Linux', 'Wireshark', 'CTFs', 'Threat modeling'] },
];
