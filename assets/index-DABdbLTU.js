(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function W(t,a){const n={};for(const s of a)t[s.id]!=null&&(n[s.dim]=(n[s.dim]||0)+t[s.id]);return n}function D(t,a){const n={};for(const[s,e]of Object.entries(t))e<=a.L[1]?n[s]="L":e>=a.H[0]?n[s]="H":n[s]="M";return n}const F={L:5.5,M:9.5,H:14},N=10.5;function O(t){return t.replace(/-/g,"").split("")}function Q(t,a,n){const s=O(n);let e=0,o=0,l=0;for(let d=0;d<a.length;d++){const c=t[a[d]]??10,b=s[d]||"M",M=F[b]??9.5,y=Math.abs(c-M);e+=y,b==="H"?(l++,c>=12&&o++):b==="L"&&(l++,c<=7&&o++)}const i=a.length*N,r=Math.max(0,Math.round((1-e/i)*100));return{distance:e,similarity:r,exactExtremes:o,extremeCount:l}}function j(t,a,n,s){const e=n.map(i=>({...i,...Q(t,a,i.pattern)}));e.sort((i,r)=>i.distance!==r.distance?i.distance-r.distance:r.exactExtremes-i.exactExtremes);const o=e[0],l=s.find(i=>i.code==="PATHFINDER");return o.similarity<50&&l?{primary:{...l,similarity:o.similarity},secondary:o,rankings:e,mode:"fallback"}:{primary:o,secondary:e[1]||null,rankings:e,mode:"normal"}}function z(t){return[...t.main]}function K(t,a,n,s){const{onAnswer:e,onBack:o,currentAnswer:l}=s,i=document.createElement("div");i.className="quiz-question";const r=a>0;i.innerHTML=`
    <div class="progress">
      <div class="progress-row">
        <button class="back-btn" type="button" ${r?"":"disabled"}>← 上一题</button>
        <span class="progress-text">${a+1} / ${n}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${(a+1)/n*100}%"></div></div>
    </div>
    <p class="question-text">${V(t.text)}</p>
    <div class="option-list"></div>
  `,r&&i.querySelector(".back-btn").addEventListener("click",o);const d=i.querySelector(".option-list");return t.options.forEach(c=>{const b=document.createElement("button");b.className="option-btn"+(l===c.value?" option-btn--selected":""),b.type="button",b.textContent=c.label,b.addEventListener("click",()=>e(t.id,c.value)),d.appendChild(b)}),i}function V(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}const X={L:1,M:2,H:3},$={ring:["rgba(230, 108, 122, 0.10)","rgba(230, 108, 122, 0.06)","rgba(230, 108, 122, 0.03)"],grid:"rgba(230, 108, 122, 0.18)",axis:"rgba(230, 108, 122, 0.14)",label:"#a25763",polyFill:"rgba(230, 108, 122, 0.28)",polyStroke:"rgba(210, 82, 96, 0.85)",dot:"#d25260"};function ee(t,a,n,s){var A;const e=t.getContext("2d"),o=window.devicePixelRatio||1,l=320;t.width=l*o,t.height=l*o,t.style.width=l+"px",t.style.height=l+"px",e.scale(o,o);const i=l/2,r=l/2,d=l/2-44,c=n.length,b=Math.PI*2/c,M=-Math.PI/2;e.clearRect(0,0,l,l);for(let u=3;u>=1;u--){const g=u/3*d;e.beginPath(),e.arc(i,r,g,0,Math.PI*2),e.fillStyle=$.ring[3-u],e.fill(),e.strokeStyle=$.grid,e.lineWidth=.5,e.stroke()}e.font='10px system-ui, -apple-system, "PingFang SC", sans-serif',e.textAlign="center",e.textBaseline="middle";for(let u=0;u<c;u++){const g=M+u*b,f=i+Math.cos(g)*d,L=r+Math.sin(g)*d;e.beginPath(),e.moveTo(i,r),e.lineTo(f,L),e.strokeStyle=$.axis,e.lineWidth=.5,e.stroke();const w=d+22,Z=i+Math.cos(g)*w,Y=r+Math.sin(g)*w,k=n[u],B=((A=s[k])==null?void 0:A.name)||k;e.fillStyle=$.label,e.fillText(B,Z,Y)}const y=n.map(u=>X[a[u]]||2);e.beginPath();for(let u=0;u<c;u++){const g=M+u*b,f=y[u]/3*d,L=i+Math.cos(g)*f,w=r+Math.sin(g)*f;u===0?e.moveTo(L,w):e.lineTo(L,w)}e.closePath(),e.fillStyle=$.polyFill,e.fill(),e.strokeStyle=$.polyStroke,e.lineWidth=2,e.stroke();for(let u=0;u<c;u++){const g=M+u*b,f=y[u]/3*d,L=i+Math.cos(g)*f,w=r+Math.sin(g)*f;e.beginPath(),e.arc(L,w,3,0,Math.PI*2),e.fillStyle=$.dot,e.fill()}}const te="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";let R=null;function ae(){return window.html2canvas?Promise.resolve(window.html2canvas):R||(R=new Promise((t,a)=>{const n=document.createElement("script");n.src=te,n.onload=()=>t(window.html2canvas),n.onerror=()=>a(new Error("html2canvas failed to load")),document.head.appendChild(n)}),R)}async function ne(t,a="lbti-result.png"){const e=(await(await ae())(t,{backgroundColor:"#fdf5f3",scale:2,useCORS:!0,logging:!1})).toDataURL("image/png");le(e,a)}function le(t,a){const n=/MicroMessenger/i.test(navigator.userAgent),s=/Mobile|Android|iPhone|iPad/i.test(navigator.userAgent),e=n?"👇 长按图片，选择「保存图片」到相册":s?"👇 长按图片保存到相册（或用下方按钮下载）":"👇 右键图片保存，或用下方按钮下载",o=document.createElement("div");o.className="img-modal-backdrop",o.innerHTML=`
    <div class="img-modal">
      <button class="img-modal-close" type="button" aria-label="关闭">×</button>
      <p class="img-modal-hint">${e}</p>
      <img class="img-modal-img" src="${t}" alt="LBTI 结果">
      ${n?"":`<a class="btn btn-primary img-modal-dl" download="${se(a)}" href="${t}">下载图片</a>`}
    </div>
  `,document.body.appendChild(o);const l=()=>o.remove();o.querySelector(".img-modal-close").addEventListener("click",l),o.addEventListener("click",r=>{r.target===o&&l()});const i=r=>{r.key==="Escape"&&(l(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i)}function se(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}function ie(t,a,n){const{primary:s,secondary:e}=t,o=e&&t.mode==="normal"?`
次匹配：${e.cn}（${e.similarity}%）`:"",l=oe(n,s.code,s.similarity);return[`【${a}】`,`我是「${s.cn}」${s.slogan?"—— "+s.slogan:""}`,`匹配度：${s.similarity}%${o}`,"",`📎 看我的结果卡 + 测你的：${l}`].join(`
`)}function oe(t,a,n){const s=new URL(t);return s.searchParams.set("r",a),s.searchParams.set("s",String(n)),s.toString()}function re(){const t=new URLSearchParams(window.location.search),a=t.get("r");if(!a)return null;const n=parseInt(t.get("s")||"0",10);return{code:a,similarity:Number.isFinite(n)?n:0}}async function ce(t){if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(t),!0;const a=document.createElement("textarea");a.value=t,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select();const n=document.execCommand("copy");return document.body.removeChild(a),n}function de({result:t,dimensions:a,config:n,standardTypes:s,userLevels:e,onRestart:o}){const{primary:l,secondary:i,rankings:r,mode:d}=t,c=document.createElement("div");c.className="result-page";const M=(d==="normal"?l:r[0]).pattern.replace(/-/g,"").split(""),y=ue(e||{},M,a,s),A=d==="fallback"?"（拓荒者 · 尚未命名型）":"",u=d==="normal"&&i&&l.similarity===i.similarity,g=u?`<div class="result-hybrid-badge">你在两个型之间 · ${m(l.cn)} × ${m(i.cn)}</div>`:"",f=Object.fromEntries(s.map(p=>[p.code,p])),L=(l.match_high||[]).map(p=>{var v;return(v=f[p])==null?void 0:v.cn}).filter(Boolean),w=(l.match_low||[]).map(p=>{var v;return(v=f[p])==null?void 0:v.cn}).filter(Boolean),Z=r.slice(0,5);c.innerHTML=`
    <header class="result-header">
      <div class="result-mode">${A}</div>
      ${g}
      <h1 class="result-name">${m(l.cn)}</h1>
      <p class="result-intro">${m(l.intro)}</p>
      <div class="result-similarity">
        与原型相似度 <b>${l.similarity}%</b>${i&&d==="normal"?` · 次匹配 <b>${m(i.cn)}</b> ${i.similarity}%`:""}
      </div>
      ${u?`
        <p class="result-hybrid-note">你的答题分布让两个型跟你距离很近 —— 你不是完美的 ${m(l.cn)}，也不是完美的 ${m(i.cn)}，你是这两个型的<b>混合体</b>。下面的描述以主匹配为主，你可以顺手看看次匹配那个型你身上有几分。</p>
      `:""}
    </header>

    <section class="result-desc">
      <p>${I(l.desc)}</p>
      ${l.slogan?`<blockquote class="result-slogan">「${m(l.slogan)}」</blockquote>`:""}
    </section>

    ${l.warning?`
      <section class="result-warning">
        <div class="warning-label">📢 给 ta 的一句话警告</div>
        <p class="warning-body">${m(l.warning)}</p>
      </section>
    `:""}

    ${i&&d==="normal"&&i.similarity>=55?`
      <section class="result-secondary">
        <div class="secondary-label">你身上还有 ${i.similarity}% 的这个型</div>
        <h3 class="secondary-name">${m(i.cn)}</h3>
        <p class="secondary-intro">${m(i.intro)}</p>
        ${i.slogan?`<blockquote class="secondary-slogan">「${m(i.slogan)}」</blockquote>`:""}
        <details class="secondary-more">
          <summary>看看这个型完整长啥样</summary>
          <p class="secondary-desc">${I(i.desc)}</p>
          ${i.warning?`<p class="secondary-warning"><b>ta 的一句话警告：</b>${m(i.warning)}</p>`:""}
        </details>
      </section>
    `:""}

    ${y.length>0?`
      <section class="result-why">
        <h3>为什么是这个型？</h3>
        <p class="why-lead">决定你身份的 ${y.length} 个关键维度：</p>
        <ul class="why-list">
          ${y.map(p=>`
            <li>
              <span class="why-dim">${m(p.name)}</span>
              <span class="why-level why-level-${p.level.toLowerCase()}">${p.level}</span>
              <span class="why-hint">${m(p.hint)}</span>
            </li>
          `).join("")}
        </ul>
      </section>
    `:""}

    ${d==="normal"&&(L.length||w.length)?`
      <section class="result-match">
        <h3>与你最合拍的 & 最相克的</h3>
        <div class="match-grid">
          <div class="match-col">
            <div class="match-label match-label-high">同频（最能理解你）</div>
            <div class="match-tags">${L.map(p=>`<span class="tag tag-high">${m(p)}</span>`).join("")}</div>
          </div>
          <div class="match-col">
            <div class="match-label match-label-low">相克（走的路不同）</div>
            <div class="match-tags">${w.map(p=>`<span class="tag tag-low">${m(p)}</span>`).join("")}</div>
          </div>
        </div>
      </section>
    `:""}

    <section class="result-chart">
      <h3>你的六维历史坐标</h3>
      <div class="chart-wrap"><canvas id="radar"></canvas></div>
    </section>

    <section class="result-top5">
      <h3>Top 5 相似类型</h3>
      <ol class="top5-list">
        ${Z.map((p,v)=>`
          <li>
            <span class="top5-rank">${v+1}</span>
            <span class="top5-name">${m(p.cn)}</span>
            <span class="top5-similarity">${p.similarity}%</span>
          </li>
        `).join("")}
      </ol>
    </section>

    <section class="result-actions">
      <button class="btn btn-primary" id="save-img-btn">💾 保存为图片</button>
      <button class="btn btn-ghost" id="copy-btn">复制结果文字</button>
      <button class="btn btn-ghost" id="restart-btn">再测一次</button>
    </section>

    <footer class="result-footer">
      <p>${m(d==="normal"?n.display.funNote:n.display.funNoteSpecial)}</p>
    </footer>
  `;const Y=c.querySelector("#radar"),k=e&&Object.keys(e).length>0?e:he(r[0].pattern,a.order);ee(Y,k,a.order,a.dims);const B=window.location.origin+window.location.pathname;c.querySelector("#copy-btn").addEventListener("click",async()=>{const p=ie(t,n.display.title,B),v=await ce(p),C=c.querySelector("#copy-btn");C.textContent=v?"已复制！粘贴到朋友圈就行":"复制失败，长按选中",setTimeout(()=>C.textContent="复制结果给朋友炫耀",3e3)});const H=c.querySelector("#save-img-btn");return H.addEventListener("click",async()=>{const p=H.textContent;H.textContent="生成中...",H.disabled=!0;const v=c.querySelector(".result-actions"),C=c.querySelector(".result-footer");v.style.visibility="hidden",C&&(C.style.visibility="hidden");try{await ne(c,`SheBTI-${l.cn.replace(/[/\s]/g,"")}.png`),H.textContent="✓ 图片已生成"}catch(U){H.textContent="生成失败",console.error(U)}finally{v.style.visibility="",C&&(C.style.visibility="")}setTimeout(()=>{H.textContent=p,H.disabled=!1},3e3)}),c.querySelector("#restart-btn").addEventListener("click",o),c}function ue(t,a,n,s){const e=n.order,o=[];for(let l=0;l<e.length;l++){const i=e[l],r=t[i],d=a[l];if(!r||r!==d)continue;let c=0;for(const y of s)y.pattern.replace(/-/g,"")[l]===r&&c++;const b=n.dims[i];if(!b)continue;const M=r==="H"?b.hi:r==="L"?b.lo:"介于两端之间";o.push({dim:i,level:r,name:b.name,hint:M,shared:c})}return o.sort((l,i)=>{if(l.shared!==i.shared)return l.shared-i.shared;const r=l.level==="M"?1:0,d=i.level==="M"?1:0;return r-d}),o.slice(0,3)}function I(t){return m(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function he(t,a){const n=t.replace(/-/g,"").split(""),s={};for(let e=0;e<a.length;e++)s[a[e]]=n[e];return s}function m(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}function pe({shared:t,allTypes:a,onStartMine:n}){const s=a.find(o=>o.code===t.code),e=document.createElement("div");return e.className="shared-page",s?(e.innerHTML=`
    <div class="shared-inner">
      <div class="shared-badge">你朋友的历史坐标是</div>
      <h1 class="shared-name">${q(s.cn)}</h1>
      <p class="shared-intro">${q(s.intro)}</p>
      ${t.similarity?`<div class="shared-sim">匹配度 <b>${t.similarity}%</b></div>`:""}

      ${s.slogan?`
        <blockquote class="shared-slogan">「${q(s.slogan)}」</blockquote>
      `:""}

      ${s.warning?`
        <div class="shared-warning">
          <div class="shared-warning-label">📢 跟她相处前的一句提醒</div>
          <p class="shared-warning-body">${q(s.warning)}</p>
        </div>
      `:""}

      <p class="shared-cta-lead">想知道你自己在历史上像谁？</p>
      <button class="btn btn-primary btn-lg" id="start-mine">开始测我的</button>
      <p class="shared-hint">共 24 题，约 3 分钟。测完可以生成结果卡分享。</p>
    </div>
  `,e.querySelector("#start-mine").addEventListener("click",n),e):(e.innerHTML=`
      <div class="shared-inner">
        <p class="shared-error">这个人格代码「${q(t.code)}」我不认识 —— 也许链接是旧版的，也许被改过。</p>
        <button class="btn btn-primary btn-lg" id="start-mine">测我自己的</button>
      </div>
    `,e.querySelector("#start-mine").addEventListener("click",n),e)}function q(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}const me=[{id:"q1",dim:"W",text:"你决定学一门新技能（外语 / 乐器 / 一门手艺），第 3 个月遇到瓶颈进步很慢。你通常会：",options:[{label:"放弃，转去学别的",value:1},{label:"强撑一段，慢慢淡出",value:2},{label:"调整方法继续，能坚持大半年",value:3},{label:"就是不放弃——直到过了瓶颈，不管要花几年",value:4}]},{id:"q2",dim:"W",text:"你正在做一件事，你身边所有人都劝你放弃、说不值得。你的反应是：",options:[{label:"他们说的可能对，我开始怀疑自己",value:1},{label:"会犹豫，需要一个说服自己的理由",value:2},{label:"听他们的意见，但决定权在自己",value:3},{label:"别人的评价对我几乎不构成干扰",value:4}]},{id:"q3",dim:"W",text:"你在做的事一年才能看到一次真实进展。别的同龄人一年换三次工作。你的感受是：",options:[{label:"焦虑，觉得自己在落后",value:1},{label:"有点动摇，想加速",value:2},{label:"承认焦虑但继续做",value:3},{label:"完全不在意——你的时间线不跟别人对齐",value:4}]},{id:"q4",dim:"W",text:"你连续 3 天没跟任何人说话。你的状态是：",options:[{label:"焦躁不安，需要找人说话",value:1},{label:"有点空，但能撑",value:2},{label:"平静，甚至有效率提升",value:3},{label:"独处让你的能量密度反而更高",value:4}]},{id:"q5",dim:"C",text:"你已经做熟了一件事。你的下一步反应是：",options:[{label:"按既定流程走，不变了",value:1},{label:"偶尔尝试小改动",value:2},{label:"会主动打破一次自己的默认，试新方式",value:3},{label:"熟悉的东西你反而受不了——必须每次都试出新东西",value:4}]},{id:"q6",dim:"C",text:"你欣赏一个人（博主 / 艺术家 / 科学家）的做法。你会：",options:[{label:"完全照抄 ta 的做法",value:1},{label:"借鉴 ta 的做法，稍微改",value:2},{label:"抽出方法论，用自己的方式实现",value:3},{label:"看完就想反过来做——你无法接受跟别人一样",value:4}]},{id:"q7",dim:"C",text:"你做的一件事（文章 / 项目 / 手工）被一个陌生人看到。你希望 ta 的反应是：",options:[{label:"「还行」",value:1},{label:"「挺不错」",value:2},{label:"「有点意思，跟别人不一样」",value:3},{label:"「这只可能是她做的——一眼就能认出」",value:4}]},{id:"q8",dim:"C",text:"凌晨 2 点，你脑子里冒出一个想法。你通常会：",options:[{label:"让它过去，第二天就忘了",value:1},{label:"想想觉得有趣，但不记录",value:2},{label:"记下来，也许会用到",value:3},{label:"立刻起床做点什么——想法必须落地才能睡",value:4}]},{id:"q9",dim:"S",text:"你所在的组织突然变动（换领导 / 组织调整）。你的第一反应是：",options:[{label:"看看跟自己有没有关系",value:1},{label:"观察一段时间再说",value:2},{label:"立刻分析这背后的权力变化和机会",value:3},{label:"你早就预感到这一步会发生，甚至已经在提前布局",value:4}]},{id:"q10",dim:"S",text:"你想在一个组织里推动一件事（改流程 / 立项目 / 换位置）。你会：",options:[{label:"直接跟决策人说",value:1},{label:"找信任的人商量后再说",value:2},{label:"先摸清关键人的顾虑、找到杠杆点，再提",value:3},{label:"你已经把整个决策链每个人的立场和动机都想清楚了",value:4}]},{id:"q11",dim:"S",text:"一件大事跟你短期利益无关，但你看到它会长期影响格局。你会：",options:[{label:"不管，跟我没关系",value:1},{label:"关注一下，但不投入",value:2},{label:"参与讨论，表达自己的看法",value:3},{label:"主动介入——因为你知道格局改变意味着新机会",value:4}]},{id:"q12",dim:"S",text:"你跟别人（老板 / 合作方 / 家人）谈判一件事，你和 ta 的期望有落差。你倾向：",options:[{label:"说清楚我的立场，能不能成看 ta",value:1},{label:"试着说服 ta，如果不行就妥协",value:2},{label:"找到我们共同利益，包装成双赢",value:3},{label:"你不但知道自己要什么，还知道 ta 真正在乎的是什么",value:4}]},{id:"q13",dim:"R",text:"一个主流舆论说「所有女性都应该 XX」（结婚 / 生子 / 职业选择）。你的反应：",options:[{label:"主流应该有道理，随大流吧",value:1},{label:"保留自己的想法，但不公开反对",value:2},{label:"敢公开说「我不这么想」",value:3},{label:"你不但反对，还愿意为自己的选择付出代价",value:4}]},{id:"q14",dim:"R",text:"你所在的环境（公司 / 家庭）有一条规则明显不合理，但大家都默默接受。你会：",options:[{label:"也接受，反正没办法",value:1},{label:"私下抱怨，但不当面",value:2},{label:"找机会提出异议，看能不能改",value:3},{label:"直接挑战它——即使可能被针对",value:4}]},{id:"q15",dim:"R",text:"30 岁前后，身边人纷纷做出人生大选择（结婚 / 生娃 / 回老家）。你的选择跟大多数人不同。你的感受是：",options:[{label:"焦虑，觉得自己是不是错了",value:1},{label:"有点孤独，但坚持",value:2},{label:"平静，因为你早就想清楚了",value:3},{label:"你甚至享受这种少数派的感觉",value:4}]},{id:"q16",dim:"R",text:"一个权威（老板 / 教授 / 家长）明显犯了错但没意识到。你会：",options:[{label:"忽略掉，权威不能反驳",value:1},{label:"私下告诉 ta 或提示",value:2},{label:"在合适场合直接指出",value:3},{label:"立刻公开指出，即使得罪 ta",value:4}]},{id:"q17",dim:"M",text:"公共场合有人在被欺负（女性被骚扰 / 老人被推挤 / 孩子被打）。你的反应是：",options:[{label:"觉得同情，但不敢介入",value:1},{label:"想帮但会先看看还有没有其他人",value:2},{label:"直接介入，即使可能有风险",value:3},{label:"不假思索地上去，事后才想起该不该",value:4}]},{id:"q18",dim:"M",text:"你相信的一件事（正义 / 朋友 / 信念）需要你付出代价（钱 / 时间 / 名声 / 关系）。你会：",options:[{label:"想帮但代价太大，作罢",value:1},{label:"部分付出，尽量不影响自己",value:2},{label:"认真付出，把它当责任",value:3},{label:"全力付出，甚至给到超出想象的程度",value:4}]},{id:"q19",dim:"M",text:"你在乎的人陷入长期困境（生病 / 失业 / 精神危机）。3 个月后你的状态是：",options:[{label:"已经心累，尽量维持基本联系",value:1},{label:"仍在支持，但需要喘息",value:2},{label:"稳定陪伴，把这变成日常",value:3},{label:"你已经调整了自己的生活来长期支持 ta",value:4}]},{id:"q20",dim:"M",text:"社会上有一件不公 / 有一群人需要帮助，没人要求你行动。你会：",options:[{label:"心疼，但觉得自己无能为力",value:1},{label:"小规模行动（转发 / 捐款）",value:2},{label:"找可行的方式实际参与",value:3},{label:"你已经把它变成你人生的一部分——不是「我做慈善」，是「我就是做这件事的人」",value:4}]},{id:"q21",dim:"A",text:"一件东西 / 一种风格全网都在说好（一部剧 / 一件单品 / 一个博主）。你的反应：",options:[{label:"跟风试试",value:1},{label:"想看看是否真的好",value:2},{label:"有自己的判断，会告诉朋友「我觉得没那么好，因为...」",value:3},{label:"你甚至能预判它的下一步走向",value:4}]},{id:"q22",dim:"A",text:"你和一个朋友的品味完全不同，你觉得 ta 可以看到更多的可能性。你会：",options:[{label:"不管，尊重 ta 的选择",value:1},{label:"偶尔推荐点东西",value:2},{label:"系统地引导 ta 看更多",value:3},{label:"一年后 ta 的品味会有你的痕迹",value:4}]},{id:"q23",dim:"A",text:"你有强烈的审美偏好（音乐 / 穿搭 / 文字 / 空间）。这些偏好目前是：",options:[{label:"只有自己知道",value:1},{label:"朋友能看出你有偏好",value:2},{label:"你有把它做成一些具体的东西（穿搭 / 文字 / 收藏 / 家）",value:3},{label:"你的审美已经被很多人认可甚至传播——它是你的一张名片",value:4}]},{id:"q24",dim:"A",text:"50 年后，你希望自己被人记住的是什么？",options:[{label:"一个善良稳定的人",value:1},{label:"事业有成 · 家庭幸福",value:2},{label:"一个有自己风格的人",value:3},{label:"一个改变了某些人 / 某些审美的人",value:4}]}],J={main:me},be=["W","C","S","R","M","A"],ge={W:{name:"意志密度",hi:"40 年只做一件事，别人评价不构成噪音",lo:"外界劝一劝就动摇，坚持不了三个月"},C:{name:"创造张力",hi:"熟悉的东西反而受不了，必须次次翻新",lo:"按既定流程走就行，不用变了"},S:{name:"系统嗅觉",hi:"组织变动前你就已经在提前布局",lo:"别人吵架你还不知道大家在争什么"},R:{name:"反叛系数",hi:"为自己的少数派选择愿意付代价",lo:"主流应该有主流的道理，随大流吧"},M:{name:"使命强度",hi:"把「我就是做这件事的人」变成人生",lo:"心疼，但觉得跟自己没关系"},A:{name:"审美再造力",hi:"你的审美已经变成很多人的名片",lo:"干净就行，没什么特别的"}},P={order:be,dims:ge},ve=[{code:"TUYY",pattern:"HMLMHL",cn:"屠呦呦",en:"Tu Youyou",archetype:"科学女神型",intro:"40 年只做一件事，让蚊子少害一个人。",desc:"你在意志密度上高得几乎极端——40 年只做一件事，300 次失败继续第 301 次，别人的评价对你几乎不构成噪音。你的短板恰是社会性能力：系统嗅觉低（不擅办公室政治，多次错过院士评选）、审美再造力低（不关心外形与话语权）。使命强度高——你做的事有救人的动机。真实屠呦呦：家人长期分离、用自己身体做过药物测试、诺奖前几十年名字在学界之外几乎无人知。她的伟大不是「完美女性」，是允许自己走一条别人不理解、也不给即时反馈的路，40 年。",slogan:"我不追论文影响因子，我追蚊子。",warning:"跟我共事请系好安全带——我的时间线以年计。",match_high:["MC","YJ","ZGM"],match_low:["CC","WZT","SM"]},{code:"MC",pattern:"HHLMML",cn:"Marie Curie",en:"Marie Curie",archetype:"科学女神型",intro:"明知辐射会杀你，也要继续。你的名字比你的生命更长。",desc:"你在意志密度和创造张力上都是高地——发现钋、镭，独享诺贝尔化学奖，你的科学发现是从零到一的独创。你的短板：系统嗅觉低（1911 年因 Langevin 绯闻和外国身份被法兰西科学院拒之门外你也没反抗）、使命中等（你的使命是科学真理而不是具体救人）、审美再造力低（你不在乎外在符号）。真实 Marie Curie：辐射长期损伤最终导致再生障碍性贫血、女儿 Irène 也死于血液病、Langevin 绯闻被法国右翼媒体羞辱。她告诉你的不是「科学女神」神话，是当你做一件足够重要的事、你会为它付出你自己都不愿付的代价。",slogan:"我不需要你懂我，我只需要真理配合我。",warning:"别以为我不知道自己在牺牲什么——我知道，我选了。",match_high:["TUYY","YJ","RBG"],match_low:["CC","WZT","ZAL"]},{code:"ZGM",pattern:"HLHHHL",cn:"张桂梅",en:"Zhang Guimei",archetype:"母性守护型",intro:"20 种病，2000 个女孩子，一所学校。",desc:"你在意志、使命、系统、反叛四维都拉到顶——每天 18 小时工作、罹患 20+ 种病、办中国第一所全免费女子高中、公开反对全职太太引发争议。你的短板：创造张力低（你的方法是复用和坚持，不是独创）、审美再造力低（你穿最朴素的衣服）。真实张桂梅：军事化管理引发学界争议、拒收全职太太校友捐款、健康代价触目惊心。她告诉你的不是「她也可以」，是当你决心做一件事时你可以放弃多少——甚至包括你自己身体的完整。",slogan:"我不救孩子，我救她们那一代女性的可能。",warning:"别指望我温柔——我留给学生的都是骨头。",match_high:["JOA","QLY","RBG"],match_low:["CC","ZAL","WZT"]},{code:"YJ",pattern:"HHLLLM",cn:"杨绛",en:"Yang Jiang",archetype:"静水深流型",intro:"独居 18 年，把整整一代人的手稿整理成史。",desc:"你在意志密度和创造张力上都是高地——48 岁自学西班牙语、96 岁写《走到人生边上》、独居 18 年独立完成写作 + 整理钱锺书全部手稿。你的短板：使命低（你的关切是个人的，不是社会的）、反叛系数极低（你是内敛型的坚韧）、系统嗅觉低（文革被剃阴阳头你也没博弈）。真实杨绛：丧女丧夫独居 18 年、翻译学界曾有质疑、活到 105 岁的代价是一个人熬过 30 年。她告诉你的不是「知足常乐」，是安静的力量比喧哗的力量更耐磨。",slogan:"世界与我不相干。",warning:"别劝我「开心一点」——我的平静是我的战场。",match_high:["TUYY","MC","LHY"],match_low:["CC","SDB","QJ"]},{code:"ZAL",pattern:"HHLHLH",cn:"张爱玲",en:"Zhang Ailing",archetype:"孤高才女型",intro:"独居到死后 7 天才被发现。你的作品自己会替你在场。",desc:"你在创造张力、反叛系数、审美再造力上都是极高——23 岁写出《金锁记》、拒绝所有公共活动、每一行文字都是你的名片。你的短板：使命强度低（你从不为他人）、系统嗅觉低（你拒绝介入现实）、意志密度是「自我沉浸型」的高。真实张爱玲：胡兰成汪伪政府身份带来一生争议、洛杉矶死后 7 天才被发现、晚年频繁搬家躲虫。她告诉你的不是「清冷才女」神话，是自我可以是一种资产、也可以是一个囚笼——你要看清楚自己在哪一间。",slogan:"你懂不懂我不重要，我的作品会替我活下去。",warning:"别追我，追到我你会失望。",match_high:["SM","FK","SDB"],match_low:["ZGM","JOA","QLY"]},{code:"FK",pattern:"HHLHMH",cn:"Frida Kahlo",en:"Frida Kahlo",archetype:"传奇艺术型",intro:"用一具残破的身体，画出一整个国家的自画像。",desc:"你在创造张力、反叛系数、审美再造力上极高——用画笔把 18 岁的车祸伤残转化为艺术媒介，200+ 幅作品里三分之一是自画像，服装 / 眉毛 / 生年造假都是你的作品。使命中等：你是从个人痛苦出发但影响一代女性。你的短板：系统嗅觉低（你从政治立场摇摆到 Stalinism）、使命不是救人级别的（更是表达级别的）。真实 Frida：与 Rivera 婚姻双方互相出轨、1953 截肢后服药自杀未遂、生年造假、政治立场复杂。她告诉你的不是「苦难美学」，是当你的身体不允许你走出去时，你可以把整个世界画进来。",slogan:"我把痛苦画成礼物，你敢收下吗？",warning:"跟我在一起前请先做好心理准备——我的画笔和我的伤口连在一起。",match_high:["ZAL","SM","SDB"],match_low:["ZGM","TUYY","MC"]},{code:"SM",pattern:"MHLHLH",cn:"三毛",en:"San Mao",archetype:"探险独行型",intro:"把撒哈拉写成整整一代华人的想象。",desc:"你在创造张力、反叛系数、审美再造力上极高——把地理迁徙作为核心生存方式（重庆 - 台北 - 马德里 - 撒哈拉 - 加那利 - 南美），把独行经验转化为改变了一代华语女性的公共文本。你的短板：意志密度是中等（终身抑郁、1991 年自缢显示 wavering）、使命低（你是自我叙事型不是救人型）、系统嗅觉极低。真实三毛：抑郁症从 12 岁起终身未愈、荷西死后精神未真正恢复、散文有大量文学化处理不能当传记事实。她告诉你的不是「自由灵魂」神话，是有些人的自由是用她自己的生命作抵押的。",slogan:"我不属于任何地方，那是我的天赋和我的诅咒。",warning:"别以为我坚强——我的所有旅行都是逃跑。",match_high:["ZAL","FK","ZWJ"],match_low:["TUYY","RBG","ZGM"]},{code:"CC",pattern:"HHHHLH",cn:"Coco Chanel",en:"Coco Chanel",archetype:"实业奠基型",intro:"私生女、孤儿院、无学历、无资本 → 4000 人的时装帝国。",desc:"你六维里五个高分——意志、创造、系统、反叛、审美全在顶端，只有使命是低。你从零起盘，71 岁复出仍成功，把「现代女性该怎么穿」变成一整套语言。你的短板是使命：极致的私心让你在道德上有污点。真实 Coco Chanel：二战期间与纳粹军官 Dincklage 同居 Ritz、被 Abwehr 登记为 Agent F-7124、1941 年利用维希「雅利安化」法试图夺犹太合伙人 Wertheimer 的股份、死时独自一人 Ritz 套房。她告诉你的不是「独立女性」神话，是当你追极致的自我时你可能踩在别人的血上。",slogan:"我不做慈善，我做产品。",warning:"别指望我道德——我是商人。",match_high:["SDB","WZT","EI"],match_low:["ZGM","JOA","TUYY"]},{code:"WZT",pattern:"HMHHLM",cn:"武则天",en:"Wu Zetian",archetype:"权谋女王型",intro:"唯一女帝，改国号周，无字碑千年争议。",desc:"你在意志、系统、反叛都拉到顶——53 年权力构建，用制度杠杆（扩大科举、首创殿试、开创武举）绕过关陇集团，识别女主称帝的合法性叙事（利用《大云经》），对反对力量零容忍。你的短板：创造张力中等（你更多是政治创新非艺术表达）、使命极低（你的核心是权力不是救人）。真实武则天：酷吏政治（来俊臣、周兴）、688 年一次事件株连数百人、废后杀子杀孙、晚年为张氏兄弟事逼儿子杀孙子。她告诉你的不是「女权先锋」神话，是权力的顶端从来不干净——你要不要进那间屋子。",slogan:"我不做女性的榜样，我做皇帝。",warning:"别以为我狠——我只是不欠这个时代任何东西。",match_high:["EI","CC","RBG"],match_low:["TUYY","ZGM","ZAL"]},{code:"EI",pattern:"HMHMMM",cn:"Elizabeth I",en:"Elizabeth I",archetype:"权谋女王型",intro:"44 年在位，一个女人建立一个时代。",desc:"你在意志、系统上高——44 年不婚、不定继承人、把「处女女王」变成政治资产。你的反叛是中等（她走的是中间路线）、使命是中等（她保护英格兰而不是普世救助）、审美再造力中等（她精心设计画像和演讲）。真实 Elizabeth I：宗教政策下 Recusancy 法令罚款监禁天主教徒、爱尔兰九年战争 Ulster 饥荒死亡约 6 万、处决 Mary Queen of Scots 后甩锅秘书 Davison、晚年因处决 Essex 陷入深度抑郁。她告诉你的不是「独立女王」神话，是权力的代价是你 44 年不能真的相信任何人。",slogan:"我不结婚，因为我已经嫁给了这个王国。",warning:"别以为我柔弱——我可以撑到你妥协为止。",match_high:["WZT","CC","RBG"],match_low:["TUYY","ZAL","SM"]},{code:"QLY",pattern:"HLHMHL",cn:"秦良玉",en:"Qin Liangyu",archetype:"战神女帅型",intro:"唯一以将领身份、凭战功进入正史将相列传的女性。",desc:"你在意志、系统、使命上高——46 年在战场、独领石砫 35 年、白杆兵战法体系、明亡拒不投降。你的短板：创造张力低（你的贡献是继承和执行不是发明）、审美低（纯军事）、反叛中等（女将军是反叛但你效忠明朝是保守）。真实秦良玉：一生镇压的主要对象是农民起义军（站在朝廷方）、家族几乎全灭（夫死狱中、兄阵亡、子马祥麟 1642 战死襄阳）、1644 张献忠再入川时「众寡不敌溃」晚年是失败的、民族身份（可能苗 / 土家）被抹平。她告诉你的不是「女英雄」神话，是忠义的代价是你所有的亲人都可能死在你面前。",slogan:"我不是女将军，我是将军。",warning:"别指望我温柔——我这一辈子在战场。",match_high:["JOA","ZGM","RBG"],match_low:["ZAL","CC","SM"]},{code:"RBG",pattern:"HMHHHM",cn:"Ruth Bader Ginsburg",en:"RBG",archetype:"反叛先锋型",intro:"用宪法第 14 修正案，一条一条拆掉性别歧视法律。",desc:"你在意志、系统、反叛、使命上都高——用系统内工具（法学院、宪法、法庭辩论、反对意见）从内部拆除性别歧视，1973-1976 六起最高院辩论赢五起。审美是中等（dissent collar 是符号）、创造是中等。真实 RBG：拒绝在奥巴马时期退休导致特朗普任命 Barrett、2022 Roe v. Wade 被推翻是她一生反抗方向的直接反噬、27 年最高法院任期只雇过 1 位黑人助理、四次癌症（结肠 / 胰腺 / 肺 / 转移）。她告诉你的不是「注定伟大」神话，是一辈子只做一件事的人也会做错关键一步。",slogan:"我不砸门，我拆掉墙里的螺丝。",warning:"别以为我不知道政治——我只是在等更长的战线。",match_high:["ZGM","QLY","SDB"],match_low:["ZAL","CC","SM"]},{code:"SDB",pattern:"HHMHMH",cn:"Simone de Beauvoir",en:"Simone de Beauvoir",archetype:"哲学先知型",intro:"「女人不是生来是女人，而是变成女人的。」",desc:"你在创造、反叛、审美上都极高——用哲学重构自己一生，把存在主义「存在先于本质」翻译成女性主义的「女人是变成的」，一生拒婚拒育。系统嗅觉中等、使命中等（她是抽象政治型使命）。真实 Simone：1943 年因涉与未成年学生 Sorokin 关系被吊销公立教师资格、Bianca Lamblin 1993 年出书控诉被 grooming 后转介给 Sartre、1977 签署呼吁废除法国同意年龄法请愿书（今日难以辩护的道德污点）、开放关系里第三方（多位年轻学生）承担了绝大部分代价。她告诉你的不是「女权先驱」神话，是写得对不代表活得对。",slogan:"我不是生来是波伏娃，我变成了波伏娃。",warning:"别以为我知行合一——我看得清但我没做到。",match_high:["ZAL","FK","CC"],match_low:["ZGM","TUYY","JOA"]},{code:"QJ",pattern:"HHMHHM",cn:"秋瑾",en:"Qiu Jin",archetype:"反叛先锋型",intro:"抛下 7 岁儿子 3 岁女儿留日，31 岁被斩于绍兴古轩亭口。",desc:"你在意志、创造、反叛、使命上都高——不缠足、习武、女扮男装、抛家留日、加入光复会 + 同盟会、办大通学堂、拒绝撤离赴死。审美是中等（「鉴湖女侠」是自我命名）。真实秋瑾：抛家的道德争议至今仍存（当时和现在都有）、皖浙起义整体失败徐锡麟被杀、清廷未因她是女性宽待——五花大绑押赴刑场公开斩首示众、遗言「秋风秋雨愁煞人」真伪学界仍讨论。她告诉你的不是「革命先烈」神话，是有些代价是你付了别人才能到彼岸。",slogan:"我不能等你们，我先走一步。",warning:"别劝我「活着更重要」——我知道，但有些事比活着重要。",match_high:["JOA","RBG","ZGM"],match_low:["CC","ZAL","SM"]},{code:"JOA",pattern:"HMLHHM",cn:"Joan of Arc",en:"Joan of Arc",archetype:"战神女帅型",intro:"农家文盲少女，17 岁进入军政最高层。19 岁被烧死。",desc:"你在意志、反叛、使命上极高——13 岁自称听见「神启」、17 岁绕过所有贵族流程劝服查理七世、1429 年解奥尔良之围、被俘后独自扛下所有罪名不攀咬他人。系统嗅觉低（你突破系统但不理解系统）、创造中等（「神启」叙事是独创）、审美中等（男装 + 军旗是符号）。真实 Joan of Arc：被烧死时 19 岁、审判是政治谋杀（Cauchon 主持 + 勃艮第派以 10000 法郎卖给英军 + 查理七世未积极赎救）、男装的关键理由之一是防止狱中被强暴、处决方式是灭迹级羞辱（被烧三次骨灰投塞纳河）、1920 封圣是一战后民族主义合流。她告诉你的不是「圣女」神话，是当你相信一件事时你甚至可以不知道自己在被利用。",slogan:"我不知道我是不是被神选中的，但我知道我不能不去。",warning:"别以为我可以帮你——我可能连自己都保不住。",match_high:["QJ","ZGM","QLY"],match_low:["CC","ZAL","SM"]},{code:"ZWJ",pattern:"MHMHLH",cn:"卓文君",en:"Zhuo Wenjun",archetype:"深情烈女型",intro:"一夜私奔的司马相如新寡，成都困窘时提议卖酒逼父亲就范。",desc:"你在创造、反叛、审美上都高——听琴一夜之内决定私奔、家徒四壁时主动提议卖酒、亲自当垆施压父亲。使命低（她的选择是私人的不是社会的）、意志中等（史料有限）、系统中等。真实卓文君：私奔在汉代是重大违礼、「当垆卖酒」不是文艺场景是极窘迫、正史里她没有独立事功、《白头吟》《决绝书》《数字诗》基本都是后世附会。她告诉你的不是「愿得一心人白头不相离」（那句话很可能不是她说的），是真正的她比那句话锋利得多——她把感情选择变成了不可逆的行动。",slogan:"我不写诗，我私奔。",warning:"别拿我当「痴情女」——我是决策者。",match_high:["ZAL","FK","SDB"],match_low:["TUYY","ZGM","JOA"]},{code:"LHY",pattern:"HHLMHH",cn:"林徽因",en:"Lin Huiyin",archetype:"优雅女神型",intro:"国徽麦稻穗、纪念碑花环、山西五台山佛光寺东大殿。",desc:"你在意志、创造、使命、审美上都高——48 岁死于肺结核前仍在测绘古建筑，参与国徽、人民英雄纪念碑设计。系统嗅觉低、反叛中等（女性入建筑学是反叛但整体路径是主流）。真实林徽因：宾大 1927 年不收女生只能读美术系（2024 年才追授建筑学位）、抗战李庄五年肺结核卧床、庶弟林恒 1941 空战殉国、身后名长期被「民国名媛」式情感叙事覆盖直到 2024。她告诉你的不是「民国女神」神话，是当美和专业同时存在时，前者会遮蔽后者——你要主动亮出后者。",slogan:"我先是建筑师，然后才是别人写的诗。",warning:"别夸我的美——我在乎的是我画的图。",match_high:["TUYY","YJ","AH"],match_low:["CC","SM","ZAL"]},{code:"AH",pattern:"HMMMHH",cn:"Audrey Hepburn",en:"Audrey Hepburn",archetype:"优雅女神型",intro:"从阿纳姆饥荒少女到 UNICEF 亲善大使——优雅是创伤后的建构。",desc:"你在意志、使命、审美上都高——晚年 UNICEF 亲善大使遍访埃塞俄比亚 / 越南 / 索马里战地，把全部公众形象资本转投儿童救援。反叛低（她生活规矩）、系统中、创造中等（她在演员生涯里有个人风格）。真实 Audrey：父亲 Joseph Ruston 是英国法西斯联盟成员（战时被拘）、童年在纳粹占领的阿纳姆 1944-45「饥饿冬天」吃郁金香球茎留下终身贫血消化问题、两次婚姻均以离婚告终两任丈夫都传出轨、父亲政治污点她终身回避公开谈论。她告诉你的不是「天使」神话，是优雅可以是一种创伤后的自我保护结构。",slogan:"我不是天生优雅——我把童年的饥饿藏在了我的仪态里。",warning:"别以为我不苦——我只是不让你看见。",match_high:["LHY","TUYY","ZGM"],match_low:["CC","WZT","SM"]}],ye=[{code:"PATHFINDER",pattern:"MMMMMM",cn:"拓荒者",en:"Pathfinder",archetype:"尚未命名型",intro:"你和 18 位历史优秀女性都不特别接近。",desc:"这不是系统 bug，是你本身。你的六维分布过于均衡（或过于分散），没有一个维度极端到能被历史坐标系锁定。这可能意味着：你正在开辟一条这些前辈都没走过的路。历史上的坐标系是靠她们一个人一个人立起来的——你有可能是下一个坐标的原点。也可能只是因为你还没走出你自己的第一步。两个可能都请诚实面对。",slogan:"我还没有名字。",warning:"别急着让我像谁——我可能是下一代年轻女孩子的参照。",match_high:[],match_low:[]}],E={standard:ve,special:ye},fe={levelThresholds:{L:[4,7],H:[12,16]}},we={title:"SheBTI · 她的历史坐标",subtitle:"六维评估 × 女性榜样匹配",tagline:"18 位历史优秀女性 · 你像谁？",author:"本项目学术骨架来自 LSE 社会学家 Catherine Hakim · 内容原创",funNote:"本测试并非人物评价，而是把你放在她们的坐标上——她们不是完美，也不需要你完美。",funNoteSpecial:"如果你和 18 位都不特别匹配，说明你正在开辟一条还没有名字的路。"},S={scoring:fe,display:we},_=document.getElementById("app"),G=re(),h={view:G?"shared":"intro",answers:{},currentIdx:0,order:z(J),shared:G};function x(){_.innerHTML="",h.view==="shared"?Me():h.view==="intro"?Le():h.view==="quiz"?He():h.view==="result"&&Ce()}function Me(){const t=[...E.standard,...E.special],a=pe({shared:h.shared,allTypes:t,onStartMine:()=>{h.view="intro",h.shared=null,history.replaceState(null,"",window.location.pathname),x()}});_.appendChild(a)}function Le(){const t=document.createElement("div");t.className="intro-page",t.innerHTML=`
    <div class="intro-inner">
      <h1 class="intro-title">${T(S.display.title)}</h1>
      <p class="intro-subtitle">${T(S.display.subtitle)}</p>
      <p class="intro-tagline">${T(S.display.tagline)}</p>
      <div class="intro-meta">
        <span>共 ${h.order.length} 题</span>
        <span>·</span>
        <span>约 3 分钟</span>
        <span>·</span>
        <span>18 位历史坐标</span>
      </div>
      <button class="btn btn-primary btn-lg" id="start-btn">开始测试</button>
      <p class="intro-author">${T(S.display.author)}</p>
      <p class="intro-warning">${T(S.display.funNote)}</p>
    </div>
  `,t.querySelector("#start-btn").addEventListener("click",()=>{h.view="quiz",h.currentIdx=0,h.answers={},x()}),_.appendChild(t)}function He(){const t=h.order[h.currentIdx],a=K(t,h.currentIdx,h.order.length,{onAnswer:(n,s)=>{h.answers[n]=s,h.currentIdx<h.order.length-1?(h.currentIdx++,x()):(h.view="result",x())},onBack:()=>{h.currentIdx>0&&(h.currentIdx--,x())},currentAnswer:h.answers[t.id]});_.appendChild(a)}function Ce(){const t=W(h.answers,J.main),a=D(t,S.scoring.levelThresholds),n=j(t,P.order,E.standard,E.special),s=de({result:n,dimensions:P,config:S,standardTypes:E.standard,userLevels:a,onRestart:()=>{h.view="intro",x()}});_.appendChild(s),window.scrollTo(0,0)}function T(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}x();
