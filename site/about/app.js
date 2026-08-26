'use strict';
const data=window.COMMUNITY_UTILITIES_STATUS,byId=id=>document.getElementById(id);
const makeText=(tag,value,className)=>{const node=document.createElement(tag);node.textContent=value;if(className)node.className=className;return node;};
const formatDate=value=>value?new Date(value).toLocaleString():'Not tracked by this dataset';
const stateLabel=value=>String(value||'').toLowerCase().replaceAll('_',' ').replace(/\b\w/g,letter=>letter.toUpperCase());
const manualCrawlKey='community-utilities-manual-crawl-triggered-at',manualCrawlCooldownMs=24*60*60*1000;
function configureManualCrawlTrigger(){
  const trigger=byId('manual-crawl-trigger');if(!trigger)return;
  let lastTriggered=0;try{lastTriggered=Number(localStorage.getItem(manualCrawlKey)||0);}catch(error){lastTriggered=0;}
  if(Date.now()-lastTriggered<manualCrawlCooldownMs){trigger.setAttribute('aria-disabled','true');trigger.removeAttribute('href');return;}
  trigger.addEventListener('click',()=>{try{localStorage.setItem(manualCrawlKey,String(Date.now()));}catch(error){}trigger.setAttribute('aria-disabled','true');});
}
function flowNode(row,index){const node=document.createElement('div');node.className='flow-node';node.append(makeText('strong',`${index+1}. ${row.label}`),makeText('span',row.description));return node;}
function pair(term,value){const box=document.createElement('div');box.append(makeText('dt',term),makeText('dd',value));return box;}
function sourceCard(row){
  const card=document.createElement('article');card.className=`source-card ${row.state.toLowerCase().replaceAll('_','-')}`;
  const head=document.createElement('div');head.className='source-head';head.append(makeText('h3',row.name),makeText('span',stateLabel(row.state),'state-badge'));card.append(head,makeText('p',row.authority,'authority'),makeText('p',row.role));
  const facts=document.createElement('dl');facts.append(pair('Last checked',formatDate(row.lastAttempt)),pair('Last successful update',formatDate(row.lastSuccess)),pair('Records',Number(row.recordsProduced||0).toLocaleString()),pair('Source updated',formatDate(row.sourceUpdatedAt)));card.append(facts);
  const link=makeText('a','Open source');link.href=row.url;link.target='_blank';link.rel='noopener noreferrer';card.append(link,makeText('p',`Used by: ${(row.outputs||[]).join(', ')}`,'outputs'));return card;
}
function renderSources(){const state=byId('state-filter').value,rows=data.sources.filter(row=>!state||row.state===state);byId('status').textContent=`Showing ${rows.length} of ${data.sources.length} sources. Updated ${formatDate(data.generatedAt)}.`;byId('sources').replaceChildren(...rows.map(sourceCard));}
if(data){
  const states=data.counts.states||{};byId('source-count').textContent=data.counts.sources.toLocaleString();byId('healthy-count').textContent=Number(states.HEALTHY||0).toLocaleString();byId('degraded-count').textContent=Number(states.DEGRADED||0).toLocaleString();byId('manual-count').textContent=Number(states.MANUALLY_REVIEWED||0).toLocaleString();byId('repository-link').href=data.repositoryUrl;
  byId('crawl-time').textContent=`Last successful update: ${formatDate(data.lastSuccessfulHpmCrawl)}.`;byId('build-time').textContent=`Status page updated ${formatDate(data.generatedAt)}.`;
  byId('flow-diagram').replaceChildren(...data.flow.map(flowNode));const contract=data.automationMapContract;byId('contract-summary').textContent=contract.relationship;byId('contract-schema').textContent=contract.schemaVersion;byId('canonical-count').textContent=contract.canonicalEntries.toLocaleString();byId('slim-count').textContent=contract.slimEntries.toLocaleString();renderSources();byId('state-filter').addEventListener('change',renderSources);
}else{byId('status').textContent='Source status is unavailable. Rebuild the site-status data and reopen this page.';}
configureManualCrawlTrigger();
