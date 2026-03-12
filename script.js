// ── DATA ────────────────────────────────────────────────────────────
const sheets = [
  {
    id:"mensal", cat:"financeiro",
    catLabel:"💸 Financeiro", badge:"🔥 Popular",
    badgeColor:"#EC4899",
    color:"#7C3AED", colorLight:"#F5F0FF",
    title:"Controle Mensal de Renda",
    desc:"Organize salário, freelas, contas, lazer, empréstimos e poupança mês a mês com fórmulas automáticas.",
    filename:"controle_mensal.xlsx",
    tags:["Renda","Gastos fixos","Lazer","Poupança","Empréstimo"],
    features:[
      {icon:"💜",title:"Renda completa",text:"Salário CLT, freelas, vendas online e outras entradas"},
      {icon:"🏠",title:"Gastos fixos",text:"Aluguel, contas, internet, empréstimo e transporte"},
      {icon:"🍔",title:"Gastos variáveis",text:"Mercado, delivery, lazer, balada e assinaturas"},
      {icon:"💎",title:"Poupança & investimentos",text:"Meta de reserva, CDB, ações e objetivos especiais"},
      {icon:"🟡",title:"Células amarelas",text:"Só preencha o que é amarelo — o resto calcula sozinho"},
      {icon:"📊",title:"Resumão do mês",text:"Saldo real vs previsto em uma só tela"},
    ],
    previewHead:["Categoria","Previsto","Recebido","Diferença"],
    previewRows:[
      {type:"section", label:"💚 RENDA", color:"#059669"},
      {cells:["💼 Salário CLT","R$ 3.200","R$ 3.200","R$ 0"], bg:"#F0FFF4"},
      {cells:["🎯 Freelas","R$ 500","R$ 800","R$ 300"], bg:""},
      {cells:["TOTAL RENDA","R$ 3.700","R$ 4.000","R$ 300"], total:true, color:"#059669"},
      {type:"section", label:"🏠 GASTOS FIXOS", color:"#7C3AED"},
      {cells:["🏠 Aluguel","R$ 800","R$ 800","R$ 0"], bg:"#F5F0FF"},
      {cells:["🏦 Empréstimo","R$ 350","R$ 350","R$ 0"], bg:""},
      {cells:["TOTAL FIXOS","R$ 1.470","R$ 1.470","R$ 0"], total:true, color:"#7C3AED"},
    ]
  },
  {
    id:"anual", cat:"financeiro",
    catLabel:"💸 Financeiro", badge:"📈 Anual",
    badgeColor:"#F59E0B",
    color:"#F59E0B", colorLight:"#FFFBEB",
    title:"Controle Anual de Renda",
    desc:"Visualize todos os 12 meses lado a lado. Veja a evolução da sua renda, gastos e poupança no ano inteiro.",
    filename:"controle_anual.xlsx",
    tags:["12 meses","Visão anual","Tendências","Saldo por mês"],
    features:[
      {icon:"📅",title:"12 meses completos",text:"Janeiro a Dezembro em uma única planilha"},
      {icon:"💛",title:"Totais automáticos",text:"Soma do ano calculada em tempo real para cada categoria"},
      {icon:"🔒",title:"Painéis congelados",text:"Navegue pelos meses sem perder o nome das categorias"},
      {icon:"📊",title:"Resumo anual",text:"Saldo de cada mês e total geral do ano na tabela final"},
      {icon:"🟡",title:"Inputs em amarelo",text:"Insira seus valores mensais — o resto é automático"},
      {icon:"📈",title:"Visão de tendência",text:"Identifique os meses em que você gasta mais"},
    ],
    previewHead:["Categoria","Jan","Fev","Mar","Total"],
    previewRows:[
      {type:"section", label:"💚 RENDA", color:"#059669"},
      {cells:["💼 Salário","3.200","3.200","3.200","38.400"], bg:"#F0FFF4"},
      {cells:["🎯 Freelas","400","600","300","3.900"], bg:""},
      {cells:["TOTAL RENDA","3.600","3.800","3.500","42.300"], total:true, color:"#059669"},
      {type:"section", label:"🏠 FIXOS", color:"#7C3AED"},
      {cells:["🏠 Aluguel","800","800","800","9.600"], bg:"#F5F0FF"},
      {cells:["💡 Contas","180","160","170","1.960"], bg:""},
      {cells:["SALDO DO MÊS","1.270","1.490","1.080","15.340"], total:true, color:"#1A1A2E"},
    ]
  },
  {
    id:"projeto", cat:"projetos",
    catLabel:"🚀 Projetos", badge:"✅ Completo",
    badgeColor:"#0D9488",
    color:"#0D9488", colorLight:"#CCFBF1",
    title:"Checklist de Projeto",
    desc:"Checklist completo com demandas pré-projeto, recursos necessários e todas as etapas do início à entrega.",
    filename:"checklist_projeto.xlsx",
    tags:["Checklist","Recursos","Etapas","5 fases","Status"],
    features:[
      {icon:"✅",title:"Demandas pré-projeto",text:"10 itens essenciais para validar antes de começar"},
      {icon:"🛠️",title:"Recursos necessários",text:"Equipe, equipamentos, orçamento, acessos e ferramentas"},
      {icon:"📍",title:"5 fases de execução",text:"Descoberta → Planejamento → Execução → Testes → Entrega"},
      {icon:"🎨",title:"Status colorido",text:"✅ Feito | ⏳ Em andamento | 🔲 Pendente — visual e rápido"},
      {icon:"📊",title:"Contador de progresso",text:"Fórmula que conta quantas demandas foram concluídas"},
      {icon:"🟡",title:"Tudo editável",text:"Altere responsáveis, prazos e % de conclusão livremente"},
    ],
    previewHead:["Etapa / Demanda","Responsável","Prazo","Status"],
    previewRows:[
      {type:"section", label:"✅ CHECKLIST PRÉ-PROJETO", color:"#0D9488"},
      {cells:["Definir escopo e objetivos","Gerente","D-7","✅ Feito"], bg:"#CCFBF1"},
      {cells:["Aprovar orçamento","Diretoria","D-5","⏳ Em andamento"], bg:""},
      {cells:["Validar viabilidade técnica","TI / Dev","D-4","🔲 Pendente"], bg:"#F0FDFA"},
      {type:"section", label:"📍 ETAPAS DO PROJETO", color:"#7C3AED"},
      {cells:["FASE 1 — Descoberta","Equipe","Semana 1","100%"], bg:"#E9D5FF"},
      {cells:["FASE 2 — Planejamento","Equipe","Semana 2","60%"], bg:""},
      {cells:["FASE 3 — Execução","Dev","Sem. 3–4","20%"], bg:"#F5F0FF"},
    ]
  },
];

// ── STATE ──────────────────────────────────────────────────────────
let activeFilter = "all";
let activeSheet  = null;

// ── CURSOR ─────────────────────────────────────────────────────────
const dot  = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });
(function animCursor(){
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  dot.style.left  = mx + "px";
  dot.style.top   = my + "px";
  ring.style.left = rx + "px";
  ring.style.top  = ry + "px";
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll("button,a,[onclick]").forEach(el => {
  el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
  el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
});

// ── NAV SCROLL ─────────────────────────────────────────────────────
window.addEventListener("scroll", () => {
  document.getElementById("main-nav").classList.toggle("scrolled", window.scrollY > 40);
});

// ── MOBILE MENU ────────────────────────────────────────────────────
function toggleMobileMenu(){
  document.getElementById("mobile-menu").classList.toggle("open");
}
function closeMobileMenu(){
  document.getElementById("mobile-menu").classList.remove("open");
}
// Close mobile menu when clicking outside
document.addEventListener("click", e => {
  const menu = document.getElementById("mobile-menu");
  const btn   = document.getElementById("hamburger");
  if(menu.classList.contains("open") && !menu.contains(e.target) && !btn.contains(e.target)){
    menu.classList.remove("open");
  }
});

// ── COUNTER ANIMATION ──────────────────────────────────────────────
function animCount(){
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count);
    if(isNaN(target)) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if(current >= target) clearInterval(iv);
    }, 30);
  });
}
setTimeout(animCount, 400);

// ── REVEAL ON SCROLL ───────────────────────────────────────────────
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => ro.observe(el));

// ── CARD GLOW ──────────────────────────────────────────────────────
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".card").forEach(card => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
    card.querySelector(".card-glow").style.setProperty("--mx", x + "%");
    card.querySelector(".card-glow").style.setProperty("--my", y + "%");
  });
});

// ── RENDER CARDS ───────────────────────────────────────────────────
function buildPreviewTable(s){
  const cols = s.previewHead;
  let html = `<thead><tr>${cols.map(h=>`<th style="background:${s.color}">${h}</th>`).join("")}</tr></thead><tbody>`;
  s.previewRows.forEach(r => {
    if(r.type === "section"){
      html += `<tr class="row-section"><td colspan="${cols.length}" style="background:${r.color}">${r.label}</td></tr>`;
    } else if(r.total){
      html += `<tr class="row-total" style="background:${r.color}22">${r.cells.map((c,i)=>`<td style="color:${r.color};font-weight:800">${c}</td>`).join("")}</tr>`;
    } else {
      html += `<tr style="background:${r.bg||''}">${r.cells.map((c,i)=>`<td>${c}</td>`).join("")}</tr>`;
    }
  });
  return html + "</tbody>";
}

function buildMiniPreview(s){
  const cols = s.previewHead;
  let html = `<table class="preview-tbl"><thead><tr>${cols.slice(0,4).map(h=>`<th style="background:${s.color}">${h}</th>`).join("")}</tr></thead><tbody>`;
  s.previewRows.slice(0,6).forEach(r => {
    if(r.type === "section"){
      html += `<tr><td colspan="4" style="background:${r.color};color:white;font-weight:700;font-size:8px;text-transform:uppercase;letter-spacing:0.05em;text-align:center;padding:4px">${r.label}</td></tr>`;
    } else {
      const cells = r.cells.slice(0,4);
      const fw = r.total ? "700" : "400";
      const bg = r.bg || (r.total ? r.color + "22" : "");
      html += `<tr style="background:${bg}">${cells.map(c=>`<td style="font-weight:${fw}">${c}</td>`).join("")}</tr>`;
    }
  });
  return html + "</tbody></table>";
}

function renderCards(){
  const search = document.getElementById("search-input").value.toLowerCase();
  const grid   = document.getElementById("cards-grid");
  const filtered = sheets.filter(s => {
    const matchF = activeFilter === "all" || s.cat === activeFilter;
    const matchS = s.title.toLowerCase().includes(search) || s.desc.toLowerCase().includes(search) || s.tags.some(t => t.toLowerCase().includes(search));
    return matchF && matchS;
  });

  if(!filtered.length){
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted)"><div style="font-size:48px;margin-bottom:12px">📭</div>Nenhuma planilha encontrada.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((s,i) => `
    <div class="card" style="animation-delay:${i*0.08}s" onclick="openModal('${s.id}')">
      <div class="card-glow"></div>
      <span class="card-badge" style="background:${s.badgeColor}">${s.badge}</span>
      <div class="card-preview-area" style="background:${s.colorLight}">
        ${buildMiniPreview(s)}
      </div>
      <div class="card-body">
        <div class="card-cat" style="color:${s.color}">${s.catLabel}</div>
        <div class="card-title">${s.title}</div>
        <div class="card-desc">${s.desc}</div>
        <div class="card-tags">${s.tags.map(t=>`<span class="tag" style="color:${s.color};background:${s.colorLight};border-color:${s.color}22">${t}</span>`).join("")}</div>
        <div class="card-footer">
          <button class="btn-peek" onclick="event.stopPropagation();openModal('${s.id}')">👁 Detalhes</button>
          <button class="btn-dl" style="background:linear-gradient(135deg,${s.color},${s.color}cc)" onclick="event.stopPropagation();triggerDownload('${s.filename}','${s.title}')">
            ⬇ Baixar
          </button>
        </div>
      </div>
    </div>
  `).join("");

  // trigger reveal animations
  setTimeout(() => {
    document.querySelectorAll(".card").forEach(c => {
      const io = new IntersectionObserver(ent => {
        if(ent[0].isIntersecting){ c.classList.add("visible"); io.disconnect(); }
      }, {threshold: 0.05});
      io.observe(c);
    });
    // add hover listeners for cursor
    document.querySelectorAll(".card,.btn-dl,.btn-peek,.f-btn").forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
    });
  }, 50);
}

function setFilter(f, btn){
  activeFilter = f;
  document.querySelectorAll(".f-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  applyFilters();
}
function applyFilters(){ renderCards(); }

// ── MODAL ──────────────────────────────────────────────────────────
function openModal(id){
  activeSheet = sheets.find(s => s.id === id);
  const s = activeSheet;

  document.getElementById("m-cat").textContent   = s.catLabel;
  document.getElementById("m-cat").style.color   = s.color;
  document.getElementById("m-title").textContent = s.title;

  document.getElementById("m-table").innerHTML = buildPreviewTable(s);

  document.getElementById("m-features").innerHTML = s.features.map(f => `
    <div class="feat">
      <div class="feat-icon">${f.icon}</div>
      <div class="feat-text"><strong>${f.title}</strong><br>${f.text}</div>
    </div>`).join("");

  const dlBtn = document.getElementById("m-dl-btn");
  dlBtn.style.background = `linear-gradient(135deg, ${s.color}, ${s.color}bb)`;
  dlBtn.style.boxShadow  = `0 12px 40px ${s.color}44`;

  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}
function handleOverlayClick(e){
  if(e.target === document.getElementById("modal-overlay")) closeModal();
}
function downloadActive(){
  if(activeSheet) triggerDownload(activeSheet.filename, activeSheet.title);
}
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const XLSX_DATA = {
  "controle_mensal.xlsx": "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",
  "controle_anual.xlsx": "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",
  "checklist_projeto.xlsx": "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",
};

// ── DOWNLOAD ───────────────────────────────────────────────────────
function triggerDownload(filename, title){
  const b64 = XLSX_DATA[filename];
  if(!b64){ showToast("❌ Arquivo não encontrado"); return; }
  const mime = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  const byteChars = atob(b64);
  const byteNums = new Array(byteChars.length);
  for(let i = 0; i < byteChars.length; i++) byteNums[i] = byteChars.charCodeAt(i);
  const blob = new Blob([new Uint8Array(byteNums)], {type: mime});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`✅ "${title}" baixado com sucesso!`);
}

// ── TOAST ──────────────────────────────────────────────────────────
function showToast(msg){
  const t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3500);
}

// ── INIT ───────────────────────────────────────────────────────────
renderCards();

// ── FEEDBACK POPUP ─────────────────────────────────────────────────
setTimeout(() => {
  document.getElementById("feedback-popup").classList.add("fp-show");
}, 8000);

function closeFeedback(){
  document.getElementById("feedback-popup").classList.remove("fp-show");
}

function submitFeedback(e){
  e.preventDefault();
  const name  = document.getElementById("fp-name").value.trim();
  const msg   = document.getElementById("fp-msg").value.trim();
  const stars = document.querySelector(".fp-star.active");
  const rating = stars ? stars.dataset.val : "Sem avaliação";
  if(!name || !msg){ 
    document.getElementById("fp-error").style.display = "block";
    return; 
  }
  document.getElementById("fp-error").style.display = "none";

  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://formsubmit.co/in.alexiaa@gmail.com";
  form.style.display = "none";
  const fields = {
    _subject: `⭐ Novo feedback — InsightFlow (${rating} estrelas)`,
    _captcha: "false",
    _template: "table",
    Nome: name,
    Avaliação: rating + " estrelas",
    Mensagem: msg
  };
  for(const [k,v] of Object.entries(fields)){
    const i = document.createElement("input");
    i.name = k; i.value = v;
    form.appendChild(i);
  }
  document.body.appendChild(form);
  form.submit();

  document.getElementById("fp-form").style.display = "none";
  document.getElementById("fp-success").style.display = "flex";
  setTimeout(closeFeedback, 3000);
}

// stars
document.querySelectorAll(".fp-star").forEach(star => {
  star.addEventListener("click", function(){
    const val = parseInt(this.dataset.val);
    document.querySelectorAll(".fp-star").forEach((s,i) => {
      s.classList.toggle("active", i < val);
    });
  });
  star.addEventListener("mouseenter", function(){
    const val = parseInt(this.dataset.val);
    document.querySelectorAll(".fp-star").forEach((s,i) => {
      s.classList.toggle("fp-hover", i < val);
    });
  });
  star.addEventListener("mouseleave", function(){
    document.querySelectorAll(".fp-star").forEach(s => s.classList.remove("fp-hover"));
  });
});