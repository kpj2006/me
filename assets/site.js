const SOCIALS=[
 ["GitHub","https://github.com/kpj2006","M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.4 4.8 18.4 5 18.4 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"],
 ["LinkedIn","https://www.linkedin.com/in/kpj2006","M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5Z"],
 ["X","https://x.com/_kpj2006","M18.2 2.3h3.4l-7.4 8.5 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.9 2.3h7l4.8 6.4 5.5-6.4Zm-1.2 18h1.9L7.1 4.2H5.1l11.9 16.1Z"],
 ["YouTube","https://www.youtube.com/channel/UC1jB0sHS3HeekQmmk4utdNA","M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"],
 ["Telegram","https://t.me/kpj2006","M21.9 3.6 18.6 19c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.2-8.3c.4-.4-.1-.6-.6-.2L6 12.5l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6l19.1-7.4c.9-.3 1.7.2 1.5 1.6Z"],
 ["Instagram","https://instagram.com/karunpacholi","M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 4 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"],
 ["Email","mailto:jaihanumanji2006@gmail.com","M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.3.2 7.7 6 7.7-6H4.3Zm15.7 2-7.4 5.8a1 1 0 0 1-1.2 0L4 7.7v10.8c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.7Z"]
];
const B='/me/';
const NAV=[["Home",""],["Projects","projects/"],["Open Source","open-source/"],["Talks","talks/"],["Videos","videos/"],["Newsletter","newsletter/"],["Contact","contact/"]];
const MORE=[["About me","about/"],["People I've met","people/"],["Certificates","certificates/"],["Resume ↗","https://docs.google.com/document/d/1c9CfRKa6iIBsk2vvV6EQX7kZ4jbOnIymQfl7N_JmMT0/edit?usp=sharing"]];
const here=location.pathname.replace(/index\.html$/,'');
const href=p=>p.startsWith('http')?p:B+p;
const isOn=p=>p===''?(here===B||here===B.slice(0,-1)):here.startsWith(B+p);
document.getElementById('hdr').innerHTML=`<div class="wrap nav">
 <a class="brand" href="${B}"><img src="${B}assets/avatar.jpg" alt="">Karun Pacholi</a>
 <nav class="links" id="links">${NAV.map(([n,p])=>`<a href="${href(p)}" class="${isOn(p)?'active':''}">${n}</a>`).join('')}
  <div class="more"><button aria-haspopup="true">More ▾</button><div class="menu">${MORE.map(([n,p])=>`<a href="${href(p)}" ${p.startsWith('http')?'target="_blank" rel="noopener"':''}>${n}</a>`).join('')}</div></div></nav>
 <span class="spacer"></span>
 <button class="iconbtn" id="openCmd" aria-label="Search">⌕ <kbd>Ctrl K</kbd></button>
 <button class="iconbtn" id="theme" aria-label="Toggle theme"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg></button>
 <button class="iconbtn burger" id="burger" aria-label="Menu">☰</button></div>`;
document.querySelector('.more>button').onclick=e=>e.currentTarget.parentElement.classList.toggle('open');
document.getElementById('burger').onclick=()=>document.getElementById('links').classList.toggle('show');
const soc=SOCIALS.map(([n,u,p])=>`<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}"><svg viewBox="0 0 24 24"><path d="${p}"/></svg></a>`).join('');
document.querySelectorAll('.socials').forEach(el=>el.innerHTML=soc);
document.getElementById('ftr').innerHTML=`<div class="wrap"><span>© ${new Date().getFullYear()} Karun Pacholi · <a href="https://github.com/kpj2006/me" target="_blank" rel="noopener">source</a></span><span class="socials" style="display:flex;gap:6px">${soc}</span></div>`;
// theme
const root=document.documentElement;
document.getElementById('theme').onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}};
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.06});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// command palette
const CMDS=[...NAV,...MORE].map(([n,p])=>({n,u:href(p),g:'page'})).concat(SOCIALS.map(([n,u])=>({n,u,g:'social'}))).concat([{n:'Book a call',u:'https://calendar.app.google/Wvp7aZNk29KuAJxH6',g:'link'},{n:'Toggle dark / light',act:()=>document.getElementById('theme').click(),g:'action'}]);
document.body.insertAdjacentHTML('beforeend','<div id="cmdk" role="dialog" aria-modal="true"><div class="palette"><input id="cmdInput" placeholder="Go to a page or link…" autocomplete="off"><ul id="cmdList"></ul></div></div>');
const box=document.getElementById('cmdk'),inp=document.getElementById('cmdInput'),list=document.getElementById('cmdList');let sel=0,cur=[];
function draw(){const q=inp.value.toLowerCase();cur=CMDS.filter(c=>c.n.toLowerCase().includes(q)||c.g.includes(q));sel=Math.min(sel,Math.max(cur.length-1,0));list.innerHTML=cur.map((c,i)=>`<li class="${i===sel?'sel':''}" data-i="${i}">${c.n}<small>${c.g}</small></li>`).join('')}
function open(){box.classList.add('open');inp.value='';sel=0;draw();inp.focus()}
function close(){box.classList.remove('open')}
function go(c){if(!c)return;close();if(c.act)return c.act();if(c.u.startsWith(B))location.href=c.u;else window.open(c.u,'_blank','noopener')}
document.getElementById('openCmd').onclick=open;
box.onclick=e=>{if(e.target===box)close();const li=e.target.closest('li');if(li)go(cur[+li.dataset.i])};
inp.oninput=()=>{sel=0;draw()};
addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();box.classList.contains('open')?close():open();return}
 if(!box.classList.contains('open'))return;
 if(e.key==='Escape')close();else if(e.key==='ArrowDown'){sel=Math.min(sel+1,cur.length-1);draw();e.preventDefault()}
 else if(e.key==='ArrowUp'){sel=Math.max(sel-1,0);draw();e.preventDefault()}else if(e.key==='Enter')go(cur[sel]);
});
// live PR stats
if(document.querySelector('[data-pr]')){
 fetch(B+'data/prs.json',{cache:'no-cache'}).then(r=>r.ok?r.json():[]).then(all=>{
  const prs=all.filter(p=>p.repo.split('/')[0].toLowerCase()!=='kpj2006');
  const repos=new Set(prs.map(p=>p.repo)),orgs=new Set(prs.map(p=>p.repo.split('/')[0]));
  const set=(k,v)=>document.querySelectorAll(`[data-pr="${k}"]`).forEach(e=>e.textContent=v);
  set('prs',prs.length);set('repos',repos.size);set('orgs',orgs.size);
  const L=document.getElementById('prList');
  if(L){const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
   L.innerHTML=[...prs].sort((a,b)=>b.merged.localeCompare(a.merged)).slice(0,10).map(p=>`<li><span class="d">${p.merged}</span><a href="${p.url}" target="_blank" rel="noopener">${esc(p.title)}<span class="r">${p.repo}</span></a></li>`).join('');
   const cnt={};prs.forEach(p=>cnt[p.repo]=(cnt[p.repo]||0)+1);const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,8),max=top.length?top[0][1]:1;
   document.getElementById('bars').innerHTML=top.map(([r,n])=>`<div class="bar"><span title="${r}">${r}</span><span class="t"><i style="width:${n/max*100}%"></i></span><span class="c">${n}</span></div>`).join('');}
 }).catch(()=>{});
}
