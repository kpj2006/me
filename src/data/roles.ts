// Domains I work in. Order of `items` = order of the work blocks shown.
import type { Project } from './projects';

export type Role = { key: string; title: string; icon: string; pitch: string; items: string[] };

export const ROLES: Role[] = [
  { key: 'devops', title: 'DevOps', icon: '⚙️', pitch: 'I build and standardize CI/CD so every repo in an org ships the same way.',
    items: ['gitpay', 'template-repo', 'no-dues-portal', 'template-family', 'content-freshness-gate', 'autoinitialissues', 'magma', 'issuesnap', 'pr-feedback-action', 'polyglot', 'gitpay-quickstart', 'openvino-env'] },
  { key: 'devsecops', title: 'DevSecOps', icon: '🛡️', pitch: 'I put security gates in the pipeline, not after it.',
    items: ['devsecops-pipeline', 'gitpay', 'template-repo', 'ard-trust'] },
  { key: 'maintainer', title: 'Open Source Maintainer', icon: '🧭', pitch: 'I keep open-source repos healthy: review PRs, triage issues and run CI/CD.',
    items: ['socialsharebutton', 'template-repo', 'autoinitialissues', 'agent-skills'] },
  { key: 'backend', title: 'SDE / Backend', icon: '🧩', pitch: 'Backend systems with clear boundaries, typed errors and tests.',
    items: ['gitpay', 'no-dues-portal', 'course-allotment', 'router402', 'ergoscript-lsp', 'polyglot', 'discord-auth', 'uniswap-decoder', 'gist-as-db', 'cp'] },
  { key: 'fullstack', title: 'Full Stack', icon: '🖥️', pitch: 'From the database to the UI, deployed.',
    items: ['no-dues-portal', 'pr-dashboard', 'orgexplorer', 'pragati', 'course-allotment', 'assetflow', 'fluxapi', 'rugs-fun', 'devwatch', 'ember-bootstrap'] },
  { key: 'ai', title: 'AI Engineer', icon: '🤖', pitch: 'LLM apps grounded in real project data, running on local models.',
    items: ['skillbot', 'pr-dashboard', 'skill-updater', 'agent-skills', 'flowise', 'hedera-harness', 'carecompass', 'rag-assistant', 'oobe-agent', 'goalwatch', 'ard-catalog', 'gsoc-proposal', 'kleos'] },
  { key: 'mlops', title: 'MLOps', icon: '🔁', pitch: 'The pipeline around the model: ingest, index, serve, update.',
    items: ['skillbot', 'skill-updater', 'oobe-agent', 'research-gap'] },
  { key: 'web3', title: 'Web3', icon: '⛓️', pitch: 'Smart contracts, payments and dApps across EVM, Solana, Sui and Hedera.',
    items: ['prstake', 'zklogin-raffle', 'gitpay', 'router402', 'ard-trust', 'tangiblefi', 'zkmail', 'lendflow', 'rugs-fun', 'shadowmarkets', 'fluxapi', 'ergoscript-lsp', 'tectonic', 'hedera-harness', 'chainvoice', 'fate', 'uniswap-decoder'] },
  { key: 'fde', title: 'Forward Deployed', icon: '🚀', pitch: 'I sit with users, find the real problem, and ship the fix into their workflow.',
    items: ['gitpay', 'no-dues-portal', 'skillbot', 'pragati', 'goalwatch', 'pr-feedback-action', 'issuesnap', 'agent-skills', 'discord-auth', 'openvino-env'] },
  { key: 'devrel', title: 'DevRel', icon: '🎤', pitch: 'I teach, write and run events for developers.',
    items: ['fetchathon', 'gemini', 'aaif', 'asi', 'swytchcode', 'cybros'] },
];

// DevRel / volunteering blocks (not code projects)
export const COMMUNITY: Project[] = [
  { slug: 'fetchathon', name: 'Fetch-A-Thon 3.0 · LNMIIT', badge: 'Organizer', summary: 'National AI-agent hackathon with Fetch.ai Innovation Lab, hosted by Cybros at LNMIIT on 24 Oct 2026. ₹1,00,000 prize pool.',
    did: ['Ran the campus round and the pre-event “Exploring Autonomous AI with Fetch.ai” session.'], stack: ['Hackathon', 'AI agents'], domains: ['devrel'],
    links: [{ label: 'Post', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7520479036943384577/' }, { label: 'Video', url: 'https://www.youtube.com/watch?v=oZPpCTzGrgw' }] },
  { slug: 'gemini', name: 'Google Gemini Student Ambassador', badge: 'GSA ID 14079', summary: 'Represent Gemini on campus: workshops and AI adoption among students.',
    did: ['Campus sessions and Gemini usage drives.'], stack: ['Google', 'Gemini'], domains: ['devrel'],
    links: [{ label: 'Docs', url: 'https://grow.google/intl/ALL_in/ai-skills/' }] },
  { slug: 'aaif', name: 'AAIF Community Organizer', badge: 'Linux Foundation', summary: 'Building a local chapter of the Agentic AI Foundation: vendor-neutral, builder-first agentic AI events.',
    did: ['Started the chapter and its speaker/company network.'], stack: ['Community', 'Agentic AI'], domains: ['devrel'],
    links: [{ label: 'Post', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7484794478403268609/' }] },
  { slug: 'asi', name: 'ASI:ONE Community Lead', summary: 'Growing the agentic and decentralized AI community since Oct 2026.',
    did: ['Meetups, workshops and ecosystem partner connections.'], stack: ['Community', 'Agentic AI'], domains: ['devrel'],
    links: [{ label: 'Page', url: 'https://www.linkedin.com/company/asi-one-community-jaipur/' }] },
  { slug: 'swytchcode', name: 'Swytchcode developer community', summary: 'Hands-on with Swytchcode’s CLI and API-integration platform; shared it with developers.',
    did: ['Ran a first demo integration and wrote about it.'], stack: ['APIs', 'CLI'], domains: ['devrel'],
    links: [{ label: 'Post', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7484273791628406784/' }] },
  { slug: 'gssoc', name: "GSSoC'26 Mentor", summary: 'Mentored GirlScript Summer of Code contributors on AOSSIE projects.',
    did: ['Reviewed and merged contributor PRs on SocialShareButton.'], stack: ['Mentoring'], domains: ['devrel'],
    links: [{ label: 'Code', url: 'https://github.com/AOSSIE-Org/SocialShareButton' }] },
  { slug: 'cybros', name: 'Cybros OSDC · LNMIIT', badge: 'Coordinator', summary: 'Open-source wing of the Cybros Coding Club.',
    did: ['Sessions like “Everything About Open Source in 1 Hour”.'], stack: ['Talks'], domains: ['devrel'],
    links: [{ label: 'Code', url: 'https://github.com/Cybros-OSDC' }, { label: 'Video', url: 'https://www.youtube.com/watch?v=6dBKYvTGn3M' }] },
  { slug: 'buildinpublic', name: 'Build in public', summary: 'Weekly GSoC updates, release posts and demo videos.',
    did: ['LinkedIn posts and YouTube demos.'], stack: ['Writing', 'Video'], domains: ['devrel'],
    links: [{ label: 'Post', url: 'https://www.linkedin.com/in/kpj2006/recent-activity/all/' }, { label: 'Video', url: 'https://www.youtube.com/channel/UC1jB0sHS3HeekQmmk4utdNA' }] },
];
