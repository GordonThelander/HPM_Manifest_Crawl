'use strict';
const data=window.HUBITAT_RELEASE_FEATURES,svg=document.getElementById('release-timeline'),ns='http://www.w3.org/2000/svg';
const node=(tag,attrs={})=>{const item=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([key,value])=>item.setAttribute(key,value));return item;};
const formatDate=value=>value?new Date(value).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}):'date unavailable';
function render(){
  if(!data||!Array.isArray(data.timeline)){document.getElementById('status').textContent='Release activity is temporarily unavailable. Use the link above to open the full Update Tracker.';return;}
  const rows=data.timeline.filter(row=>row.releasedAt).slice().sort((a,b)=>new Date(a.releasedAt)-new Date(b.releasedAt));
  if(!rows.length){document.getElementById('status').textContent='No release activity is currently available. Use the link above to open the full Update Tracker.';return;}
  const width=1100,height=310,left=62,right=26,top=24,bottom=48,plotWidth=width-left-right,plotHeight=height-top-bottom;
  const times=rows.map(row=>new Date(row.releasedAt).getTime()),minimum=Math.min(...times),maximum=Math.max(...times),peak=Math.max(...rows.map(row=>row.featureCount),1);
  const x=time=>left+(maximum===minimum?plotWidth/2:(time-minimum)/(maximum-minimum)*plotWidth),y=count=>top+plotHeight-(count/peak)*plotHeight;
  for(let index=0;index<=4;index+=1){const yy=top+plotHeight*index/4;svg.append(node('line',{x1:left,y1:yy,x2:width-right,y2:yy,class:'grid'}));const label=node('text',{x:left-10,y:yy+4,'text-anchor':'end',class:'axis-label'});label.textContent=Math.round(peak*(4-index)/4);svg.append(label);}
  [...new Set(times.map(time=>new Date(time).getFullYear()))].forEach(year=>{const xx=x(new Date(`${year}-01-01T00:00:00Z`).getTime());if(xx>=left&&xx<=width-right){svg.append(node('line',{x1:xx,y1:top,x2:xx,y2:top+plotHeight,class:'grid'}));const label=node('text',{x:xx,y:height-16,'text-anchor':'middle',class:'axis-label'});label.textContent=year;svg.append(label);}});
  svg.append(node('line',{x1:left,y1:top+plotHeight,x2:width-right,y2:top+plotHeight,class:'axis'}));
  svg.append(node('polyline',{points:rows.map(row=>`${x(new Date(row.releasedAt).getTime())},${y(row.featureCount)}`).join(' '),class:'release-line'}));
  rows.forEach(row=>{const circle=node('circle',{cx:x(new Date(row.releasedAt).getTime()),cy:y(row.featureCount),r:Math.max(4,Math.min(10,4+row.featureCount/8)),class:`release-dot ${row.newlyPossibleCount?'new':'fix'}`}),title=node('title');title.textContent=`${row.version}, ${formatDate(row.releasedAt)}: ${row.featureCount} documented changes`;circle.append(title);svg.append(circle);});
  const firstByFamily=new Map;rows.forEach(row=>{if(row.releaseFamily&&!firstByFamily.has(row.releaseFamily))firstByFamily.set(row.releaseFamily,row);});
  const placedLabels=[];firstByFamily.forEach((row,family)=>{const xx=x(new Date(row.releasedAt).getTime()),radius=Math.max(4,Math.min(10,4+row.featureCount/8));let yy=Math.max(16,y(row.featureCount)-radius-7);while(yy>16&&placedLabels.some(item=>Math.abs(xx-item.x)<42&&Math.abs(yy-item.y)<19))yy=Math.max(16,yy-19);placedLabels.push({x:xx,y:yy});const label=node('text',{x:xx,y:yy,class:'family-label','text-anchor':'middle'});label.textContent=family;svg.append(label);});
  document.getElementById('range-summary').textContent=`${formatDate(rows[0].releasedAt)} to ${formatDate(rows.at(-1).releasedAt)}`;
  document.getElementById('freshness').textContent=`Evidence refreshed ${formatDate(data.lastSuccessfulHarvest)}. Independent community project.`;
  // The parent validates this page's origin, the sending window and this exact
  // message shape. A wildcard target is required because the Hubitat parent
  // origin is a private LAN address unknown to this public, reusable embed.
  window.parent.postMessage({type:'automation-map-release-activity-ready',version:1},'*');
}
render();
