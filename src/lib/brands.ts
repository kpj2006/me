// Original brand logos from Simple Icons, looked up by a friendly name.
import * as si from 'simple-icons';
const MAP: Record<string, string> = {
  'GitHub Actions': 'siGithubactions', GitHub: 'siGithub', 'GitHub API': 'siGithub', 'GitHub CLI': 'siGithub', 'GitHub Pages': 'siGithub',
  TypeScript: 'siTypescript', JavaScript: 'siJavascript', Python: 'siPython', Go: 'siGo', 'C++': 'siCplusplus',
  Docker: 'siDocker', Kubernetes: 'siKubernetes', nginx: 'siNginx', Linux: 'siLinux', Bash: 'siGnubash', Vagrant: 'siVagrant', VirtualBox: 'siVirtualbox',
  Django: 'siDjango', React: 'siReact', 'Next.js': 'siNextdotjs', 'Node.js': 'siNodedotjs', Express: 'siExpress', PostgreSQL: 'siPostgresql', MongoDB: 'siMongodb',
  Flutter: 'siFlutter', 'Ember.js': 'siEmberdotjs', npm: 'siNpm', Vite: 'siVite',
  Ollama: 'siOllama', ChromaDB: 'siChromadb', 'discord.py': 'siDiscord', Discord: 'siDiscord', 'Discord API': 'siDiscord', Telegram: 'siTelegram',
  Solidity: 'siSolidity', Solana: 'siSolana', Sui: 'siSui', Hedera: 'siHedera', Ethereum: 'siEthereum', Hardhat: 'siHardhat',
  'Google Sheets API': 'siGooglesheets', Locust: 'siLocust', YAML: 'siYaml', OAuth: 'siAuth0', 'Fetch.ai uAgents': 'siFetchai',
  Gemini: 'siGooglegemini', Figma: 'siFigma', 'Buy Me a Coffee': 'siBuymeacoffee', Google: 'siGoogle', GSoC: 'siGooglesummerofcode', 'Linux Foundation': 'siLinuxfoundation', YouTube: 'siYoutube',
  CodeQL: 'siGithub', 'OpenSSF Scorecard': 'siOpenssf', Gitleaks: 'siGit', 'OSV-Scanner': 'siGoogle', MCP: 'siModelcontextprotocol', 'Sentence Transformers': 'siHuggingface', BERTopic: 'siPython', RAG: 'siLangchain', 'AGENTS.md': 'siMarkdown',
  Rust: 'siRust', PyTorch: 'siPytorch', 'scikit-learn': 'siScikitlearn', 'Kali Linux': 'siKalilinux', Wireshark: 'siWireshark', 'C++ ': 'siCplusplus', 'Ethers.js v6': 'siEthers', 'ERC-20': 'siEthereum', 'ERC-223': 'siEthereum', 'ERC-4626': 'siEthereum', 'ERC-721': 'siEthereum', 'ERC-2535 Diamond': 'siEthereum',
  'Move (Sui)': 'siSui', Inkscape: 'siInkscape', Git: 'siGit', 'GitHub Projects': 'siGithub', 'Code review': 'siGithub', Markdown: 'siMarkdown', FastAPI: 'siFastapi', 'Hugging Face': 'siHuggingface', LangChain: 'siLangchain', Vercel: 'siVercel', Railway: 'siRailway', 'LinkedIn': 'siLinkedin',
};
export type Brand = { path: string; hex: string; title: string };
export const brand = (name: string): Brand | undefined => {
  const key = MAP[name];
  const icon = key ? (si as Record<string, any>)[key] : undefined;
  return icon ? { path: icon.path, hex: icon.hex, title: icon.title } : undefined;
};
