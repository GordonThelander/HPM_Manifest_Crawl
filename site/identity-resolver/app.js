'use strict';
let index=window.IDENTITY_INDEX;
const $ = id => document.getElementById(id);
const norm = value => String(value || '').trim().toLocaleLowerCase();
const fuzzy = value => norm(value).match(/[a-z0-9]+/g)?.join(' ') || '';

function similarity(a,b) {
  a=fuzzy(a); b=fuzzy(b); if(a===b) return 1; if(!a||!b) return 0;
  const bigrams = value => { const out=[]; for(let i=0;i<value.length-1;i++) out.push(value.slice(i,i+2)); return out; };
  const left=bigrams(a), right=bigrams(b), counts=new Map();
  right.forEach(x=>counts.set(x,(counts.get(x)||0)+1)); let overlap=0;
  left.forEach(x=>{ if(counts.get(x)>0){overlap++;counts.set(x,counts.get(x)-1);} });
  return (2*overlap)/(left.length+right.length||1);
}
function safeLink(url,label) {
  if(!url || !/^https?:\/\//i.test(url)) return null;
  const a=document.createElement('a'); a.href=url; a.textContent=label; a.target='_blank'; a.rel='noopener noreferrer'; return a;
}
function resolve(name,namespace,kind,author) {
  if(!norm(name)&&!norm(namespace)&&norm(author)){
    const authorExact=[],authorRelated=[],manualAuthorExact=[],manualAuthorRelated=[];
    for(const definition of index.definitions){if(kind&&definition.kind!==kind)continue;const value=norm(definition.package.author);if(value===norm(author))authorExact.push({definition});else if(norm(author).length>=2&&value.includes(norm(author)))authorRelated.push({definition});}
    for(const project of index.manualProjects||[]){if(kind&&project.kind!==kind)continue;const value=norm(project.author);if(value===norm(author))manualAuthorExact.push(project);else if(norm(author).length>=2&&value.includes(norm(author)))manualAuthorRelated.push(project);}
    return {exact:[],nameMatches:[],builtIns:[],builtInSuggestions:[],related:[],suggestions:[],manualExact:[],manualNameMatches:[],manualRelated:[],communityExact:[],communityRelated:[],namespaceExact:[],namespaceRelated:[],manualNamespaceExact:[],manualNamespaceRelated:[],authorExact,authorRelated,manualAuthorExact,manualAuthorRelated,needsNamespace:false};
  }
  if(!norm(name)&&norm(namespace)){
    const namespaceExact=[],namespaceRelated=[],manualNamespaceExact=[],manualNamespaceRelated=[];
    for(const definition of index.definitions){if(kind&&definition.kind!==kind)continue;if(author&&!norm(definition.package.author).includes(norm(author)))continue;const values=[...new Set(definition.identities.map(x=>norm(x.namespace)).filter(Boolean))];if(values.includes(norm(namespace)))namespaceExact.push({definition});else if(norm(namespace).length>=2&&values.some(x=>x.includes(norm(namespace))))namespaceRelated.push({definition});}
    for(const project of index.manualProjects||[]){if(kind&&project.kind!==kind)continue;if(author&&!norm(project.author).includes(norm(author)))continue;if(norm(project.namespace)===norm(namespace))manualNamespaceExact.push(project);else if(norm(namespace).length>=2&&norm(project.namespace).includes(norm(namespace)))manualNamespaceRelated.push(project);}
    return {exact:[],nameMatches:[],builtIns:[],builtInSuggestions:[],related:[],suggestions:[],manualExact:[],manualNameMatches:[],manualRelated:[],communityExact:[],communityRelated:[],namespaceExact,namespaceRelated,manualNamespaceExact,manualNamespaceRelated,authorExact:[],authorRelated:[],manualAuthorExact:[],manualAuthorRelated:[],needsNamespace:false};
  }
  const exact=[],nameMatches=[],related=[],suggestions=[];
  for(const definition of index.definitions) {
    if(kind && definition.kind!==kind) continue;
    if(author&&!norm(definition.package.author).includes(norm(author)))continue;
    const bases=[],nameBases=[]; let best=0,bestIdentity;
    for(const identity of definition.identities) {
      const sameNamespace=norm(identity.namespace)===norm(namespace);
      if(norm(identity.name)===norm(name)) nameBases.push(identity.basis);
      if(norm(identity.name)===norm(name)&&sameNamespace&&namespace) bases.push(identity.basis);
      if(namespace&&!sameNamespace) continue;
      const score=similarity(name,identity.name);if(score>best){best=score;bestIdentity=identity;}
    }
    if(bases.length) exact.push({definition,bases});
    else if(nameBases.length) nameMatches.push({definition,bases:nameBases});
    else if(fuzzy(name).length>=3&&bestIdentity&&fuzzy(bestIdentity.name).includes(fuzzy(name))) related.push({definition,basis:bestIdentity.basis});
    else if(best>=index.matching.suggestionThreshold) suggestions.push({definition,score:best});
  }
  suggestions.sort((a,b)=>b.score-a.score||a.definition.id.localeCompare(b.definition.id));
  const availableBuiltIns=(!author&&(!kind||kind==='APP'))?index.builtIns:[];
  const builtIns=availableBuiltIns.filter(x=>x.names.some(n=>norm(n)===norm(name)));
  const builtInSuggestions=availableBuiltIns.filter(x=>!builtIns.includes(x)&&fuzzy(name).length>=3&&x.names.some(n=>fuzzy(n).includes(fuzzy(name))));
  const manualExact=[],manualNameMatches=[],manualRelated=[];
  for(const project of index.manualProjects||[]){
    if(kind&&project.kind!==kind)continue;
    if(author&&!norm(project.author).includes(norm(author)))continue;
    const sameName=norm(project.name)===norm(name),sameNamespace=norm(project.namespace)===norm(namespace);
    if(sameName&&sameNamespace&&namespace)manualExact.push(project);
    else if(sameName)manualNameMatches.push(project);
    else if(fuzzy(name).length>=3&&fuzzy(project.name).includes(fuzzy(name)))manualRelated.push(project);
  }
  const communityExact=[],communityRelated=[];
  if(!author&&(!kind||kind==='APP'))for(const app of index.communityApps||[]){
    if(norm(app.name)===norm(name))communityExact.push(app);
    else if(fuzzy(name).length>=3&&fuzzy(app.name).includes(fuzzy(name)))communityRelated.push(app);
  }
  return {exact,nameMatches,builtIns,builtInSuggestions,related:related.slice(0,20),suggestions:suggestions.slice(0,10),manualExact,manualNameMatches,manualRelated,communityExact,communityRelated:communityRelated.slice(0,20),namespaceExact:[],namespaceRelated:[],manualNamespaceExact:[],manualNamespaceRelated:[],authorExact:[],authorRelated:[],manualAuthorExact:[],manualAuthorRelated:[],needsNamespace:!namespace&&(nameMatches.length+manualNameMatches.length)>0};
}
function heading(container,title,badge,className) {
  container.className=`group ${className}`; const h=document.createElement('h3'); h.textContent=title;
  const b=document.createElement('span'); b.className='badge'; b.textContent=badge; h.append(b); container.append(h);
  const cards=document.createElement('div'); cards.className='cards'; container.append(cards); return cards;
}
function packageCard(result) {
  const d=result.definition,p=d.package,card=document.createElement('article'),h=document.createElement('h4');
  card.classList.add(d.kind==='APP'?'app-card':'driver-card');
  const primary=d.identities[0]||{};h.textContent=primary.name||p.name||d.id;const badge=document.createElement('span');badge.className=`type-badge ${d.kind.toLowerCase()}`;badge.textContent=d.kind;h.append(badge);card.append(h);
  const identity=document.createElement('p'); identity.textContent=`Namespace: ${primary.namespace||'(none)'}`; card.append(identity);
  const packageName=document.createElement('p');packageName.textContent=`Package: ${p.name||'Not declared'}`;card.append(packageName);
  const author=document.createElement('p'); author.textContent=`Author: ${p.author||'Not declared'}`; card.append(author);
  const links=document.createElement('div'); links.className='links';
  [[p.manifestUrl,'Manifest'],[p.documentationUrl,'Documentation'],[p.communityUrl,'Community'],[d.sourceUrl,'Source']].forEach(([u,l])=>{const a=safeLink(u,l);if(a)links.append(a);}); card.append(links); return card;
}
function groupedPackageCards(results) {
  const groups=new Map();
  for(const result of results){const d=result.definition,p=d.package,id=p.id||d.id;if(!groups.has(id))groups.set(id,{package:p,definitions:[]});groups.get(id).definitions.push(d);}
  const fragment=document.createDocumentFragment();
  for(const group of [...groups.values()].sort((a,b)=>String(a.package.name||'').localeCompare(String(b.package.name||'')))){
    const card=document.createElement('article');card.className='package-group';const h=document.createElement('h4');h.textContent=group.package.name||group.package.id;card.append(h);
    const author=document.createElement('p');author.textContent=`Author: ${group.package.author||'Not declared'} · ${group.definitions.length} definition${group.definitions.length===1?'':'s'}`;card.append(author);
    const list=document.createElement('ul');list.className='definition-list';
    for(const d of group.definitions.sort((a,b)=>a.kind.localeCompare(b.kind)||a.id.localeCompare(b.id))){const item=document.createElement('li');item.className=d.kind==='APP'?'app-definition':'driver-definition';const badge=document.createElement('span');badge.className=`type-badge ${d.kind.toLowerCase()}`;badge.textContent=d.kind;item.append(badge);const identity=d.identities[0]||{};const label=document.createElement('span');label.textContent=`${identity.name||d.id} · ${identity.namespace||'(no namespace)'}`;item.append(label);const source=safeLink(d.sourceUrl,'Source');if(source)item.append(source);list.append(item);}
    card.append(list);const links=document.createElement('div');links.className='links';[[group.package.manifestUrl,'Manifest'],[group.package.documentationUrl,'Documentation'],[group.package.communityUrl,'Community']].forEach(([u,l])=>{const a=safeLink(u,l);if(a)links.append(a);});card.append(links);fragment.append(card);
  }
  return fragment;
}
function manualCard(project,matchLabel) {
  const card=document.createElement('article'),h=document.createElement('h4');card.classList.add(project.kind==='APP'?'app-card':'driver-card');h.textContent=project.name;const badge=document.createElement('span');badge.className=`type-badge ${project.kind.toLowerCase()}`;badge.textContent=project.kind;h.append(badge);card.append(h);
  const identity=document.createElement('p');identity.textContent=`${project.namespace} · ${matchLabel}`;card.append(identity);
  const author=document.createElement('p');author.textContent=`Author: ${project.author||'Not declared'} · Manual installation (not HPM)`;card.append(author);
  const links=document.createElement('div');links.className='links';[[project.documentationUrl,'Repository'],[project.communityUrl,'Community'],[project.sourceUrl,'Source']].forEach(([u,l])=>{const a=safeLink(u,l);if(a)links.append(a);});card.append(links);return card;
}
function communityCard(app,matchLabel) {
  const card=document.createElement('article'),h=document.createElement('h4');card.classList.add('app-card');h.textContent=app.name;const badge=document.createElement('span');badge.className='type-badge app';badge.textContent='APP';h.append(badge);card.append(h);
  const evidence=document.createElement('p');evidence.textContent=`${matchLabel} · Community Apps Wiki · ${app.section||'Uncategorised'}`;card.append(evidence);
  const caution=document.createElement('p');caution.textContent=app.lifecycleFlags.length?`Lifecycle wording: ${app.lifecycleFlags.join(', ')}`:'The wiki listing does not prove current maintenance, source identity, or HPM availability.';card.append(caution);
  const links=document.createElement('div');links.className='links';app.links.forEach((u,i)=>{const a=safeLink(u,i?'Project link':'Community link');if(a)links.append(a);});card.append(links);return card;
}
function render(result) {
  $('results').hidden=false; ['exact','namespace-results','author-results','name-matches','manual','community-apps','builtins','builtin-related','related','suggestions'].forEach(id=>$(id).replaceChildren());
  if(result.exact.length){const cards=heading($('exact'),'Exact HPM identity matches','Exact','exact');result.exact.forEach(x=>cards.append(packageCard(x)));}
  const namespaceCount=result.namespaceExact.length+result.namespaceRelated.length+result.manualNamespaceExact.length+result.manualNamespaceRelated.length;
  if(namespaceCount){const cards=heading($('namespace-results'),'Namespace results','Grouped by package','name-match');cards.append(groupedPackageCards([...result.namespaceExact,...result.namespaceRelated]));result.manualNamespaceExact.forEach(x=>cards.append(manualCard(x,'Exact namespace')));result.manualNamespaceRelated.forEach(x=>cards.append(manualCard(x,'Related namespace')));}
  const authorCount=result.authorExact.length+result.authorRelated.length+result.manualAuthorExact.length+result.manualAuthorRelated.length;
  if(authorCount){const cards=heading($('author-results'),'Author results','Grouped by package','name-match');cards.append(groupedPackageCards([...result.authorExact,...result.authorRelated]));result.manualAuthorExact.forEach(x=>cards.append(manualCard(x,'Exact author')));result.manualAuthorRelated.forEach(x=>cards.append(manualCard(x,'Related author')));}
  if(result.nameMatches.length){const cards=heading($('name-matches'),'Exact-name HPM candidates','Namespace unconfirmed','name-match');result.nameMatches.forEach(x=>cards.append(packageCard(x)));}
  const manualCount=result.manualExact.length+result.manualNameMatches.length+result.manualRelated.length;
  if(manualCount){const cards=heading($('manual'),'Reviewed manual-install community projects','Not in HPM','manual');result.manualExact.forEach(x=>cards.append(manualCard(x,'Exact source identity')));result.manualNameMatches.forEach(x=>cards.append(manualCard(x,'Exact name; confirm namespace')));result.manualRelated.forEach(x=>cards.append(manualCard(x,'Related name')));}
  const communityCount=result.communityExact.length+result.communityRelated.length;
  if(communityCount){const cards=heading($('community-apps'),'Community Apps Wiki listings','Discovery evidence','community-app');result.communityExact.forEach(x=>cards.append(communityCard(x,'Exact listing name')));result.communityRelated.forEach(x=>cards.append(communityCard(x,'Related listing name')));}
  if(result.builtIns.length){const cards=heading($('builtins'),'Documented Hubitat built-in candidates','Separate evidence','builtin');result.builtIns.forEach(x=>{const card=document.createElement('article'),h=document.createElement('h4');h.textContent=x.names[0];card.append(h);const p=document.createElement('p');p.textContent='Official Hubitat application documentation; this is not an HPM package.';card.append(p);const a=safeLink(x.documentationUrl,'Official documentation');if(a)card.append(a);cards.append(card);});}
  if(result.builtInSuggestions.length){const cards=heading($('builtin-related'),'Related documented Hubitat built-ins','Possible built-in','builtin');result.builtInSuggestions.forEach(x=>{const card=document.createElement('article'),h=document.createElement('h4');h.textContent=x.names[0];card.append(h);const p=document.createElement('p');p.textContent='Related official Hubitat application documentation; not an exact identity and not an HPM package.';card.append(p);const a=safeLink(x.documentationUrl,'Official documentation');if(a)card.append(a);cards.append(card);});}
  if(result.related.length){const cards=heading($('related'),'Related HPM definition names','Discovery match','related');result.related.forEach(x=>cards.append(packageCard(x)));}
  if(result.suggestions.length){const cards=heading($('suggestions'),'Conservative suggestions','Not exact','suggested');result.suggestions.forEach(x=>cards.append(packageCard(x)));}
  const total=result.exact.length+namespaceCount+authorCount+result.nameMatches.length+manualCount+communityCount+result.builtIns.length+result.builtInSuggestions.length+result.related.length+result.suggestions.length;
  $('status').textContent=total ? `${authorCount} author, ${namespaceCount} namespace, ${result.exact.length} exact HPM identity, ${result.nameMatches.length} HPM name, ${manualCount} reviewed manual, ${communityCount} wiki listing, ${result.builtIns.length} built-in, ${result.related.length+result.builtInSuggestions.length+result.suggestions.length} other possible result(s).${result.needsNamespace?' Add the namespace to confirm an exact identity.':''}` : 'No credible match found. Absence is not proof that the code is invalid.';
}
function ready(data){index=data;$('status').textContent=`Ready: ${index.definitionCount.toLocaleString()} HPM definitions, ${index.communityAppCount||0} community-wiki apps, ${index.manualProjectCount||0} reviewed manual projects, and ${index.builtInCount} documented built-ins.`;}
if(index) ready(index);
else fetch('data/identity_index.json').then(r=>{if(!r.ok)throw new Error();return r.json();}).then(ready).catch(()=>{$('status').textContent='The identity index could not be loaded. Rebuild the resolver data and reopen this page.';});
$('lookup-form').addEventListener('submit',event=>{event.preventDefault();if(!index)return;if(!$('name').value.trim()&&!$('namespace').value.trim()&&!$('author').value.trim()){$('status').textContent='Enter a definition name, namespace, author, or a combination.';$('name').focus();return;}$('status').textContent='Matching locally…';render(resolve($('name').value,$('namespace').value,$('kind').value,$('author').value));});
document.querySelectorAll('.examples button').forEach(button=>button.addEventListener('click',()=>{
  $('name').value=button.dataset.name;$('namespace').value=button.dataset.namespace;$('kind').value=button.dataset.kind;
  if(index) render(resolve($('name').value,$('namespace').value,$('kind').value,$('author').value));
}));
