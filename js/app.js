/* =========================
   app.js (Refatorado)
   Dashboard principal
========================= */

import {
  panorama,
  setoresDemanda,
  setoresProfissionais,
  topEmpresasProfissionais,
  rotatividadeCrescimento,
  generoPrincipaisCargos,
  competenciasComuns,
  competenciasCrescimento,
  nivelFormacao,
  areasEstudo,
  instituicoes,
  fluxoLocalidade,
  fluxoSetor,
  engajamento,
  propostasValor,
  perfis,
  talentInsightsData,
  talentKpis,
  competenciasRanking,
  competenciasTechDados,
  maioresGaps,
  pressaoContratacao,
  demandaFuturaBase,
  distribuicaoGeneroData,
  eeAreasEstudo,
  eeCompetenciasEmergentes,
  qdCoberturaAbas,
  qdDuplicidades,
  qdLogs,
  qdRoadmap,
  iaLacunasBase,
  iaClusterBase,
  asGeneroAlerts,
  asDadosAlerts,
  lfFormulas,
} from "./dados.js";

/* =========================
   Utilitários
========================= */
const fmtBR = (v) => Number(v).toLocaleString("pt-BR");
const fmtIntBR = (v) => Number(v).toLocaleString("pt-BR");
const fmtPctBR = (v, min = 2, max = 2) =>
  `${Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  })}%`;
const fmtDecimalBR = (v, min = 1, max = 1) =>
  Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });

const isDarkTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark";

function normalizeText(v = "") {
  return v.toString().normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

// Compatibilidade com nome antigo já usado no arquivo
const normalizeTxt = normalizeText;

function safeRun(fn, name) {
  try {
    if (typeof fn === "function") fn();
  } catch (e) {
    console.error(`[${name}]`, e);
  }
}

function onDomReady(fn, name = "init") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => safeRun(fn, name), {
      once: true,
    });
  } else {
    safeRun(fn, name);
  }
}

function csvEscape(value) {
  const v = value == null ? "" : String(value);
  return `"${v.replace(/"/g, '""')}"`;
}

/* =========================
   Charts manager
========================= */
const chartInstances = {};
function upsertChart(key, canvas, config) {
  if (!canvas || typeof Chart === "undefined") return;
  if (chartInstances[key]) chartInstances[key].destroy();
  chartInstances[key] = new Chart(canvas, config);
}

function getChartColors() {
  const dark = isDarkTheme();
  return {
    primary: dark ? "#DFD1FF" : "#7E3FD8",
    secondary: dark ? "#FFFFFFC9" : "#00000099",
    background: dark ? "#2C2C2C" : "#FFFFFF",
    grid: dark ? "#FFFFFF14" : "#00000014",
    text: dark ? "#FFFFFF" : "#000000E6",
    accentLight1: dark ? "#C6A8FF" : "#9E6AF9",
    accentDark1: dark ? "#B186FF" : "#581FA5",
    positive: dark ? "#6CCB5F" : "#107C10",
    negative: "#D13438",
    neutral: dark ? "#FFFFFFC9" : "#00000099",
  };
}

/* =========================
   Renderers principais
========================= */
function renderPanorama() {
  const grid = document.getElementById("kpiGrid");
  if (!grid) return;

  grid.innerHTML = panorama
    .map(
      (p) => `
    <article class="kpi-card">
      <div class="kpi-label"><i class="${p.icon}" aria-hidden="true"></i></div>
      <div class="kpi-value">${p.valor}</div>
      <div class="kpi-title">${p.label}</div>
      <div class="kpi-subtitle">${p.sublabel}</div>
    </article>
  `,
    )
    .join("");
}

function renderSetoresDemandaTable() {
  const tb = document.getElementById("setoresTableBody");
  if (!tb) return;

  const demandaClass = {
    "Muito alta": "tag-muito-alta",
    Alto: "tag-alto",
    Moderada: "tag-moderada",
  };

  tb.innerHTML = setoresDemanda
    .map((s) => {
      const dClass = demandaClass[s.demanda] || "tag-baixo";
      const growthClass =
        s.crescimento > 0
          ? "growth-pos"
          : s.crescimento < 0
            ? "growth-neg"
            : "growth-neu";
      const growthTxt = `${s.crescimento > 0 ? "+" : ""}${s.crescimento}%`;

      return `
      <tr>
        <td>${s.setor}</td>
        <td><span class="tag-demand ${dClass}">${s.demanda}</span></td>
        <td>${s.vagas}</td>
        <td class="${growthClass}">${growthTxt}</td>
      </tr>
    `;
    })
    .join("");
}

function renderSetoresProfissionaisChart() {
  const canvas = document.getElementById("setoresProfissionaisChart");
  if (!canvas) return;

  const colors = getChartColors();
  const labels = setoresProfissionais.map((s) => s.setor);
  const data = setoresProfissionais.map((s) => s.profissionais);

  const paletteLight = [
    "#1DA1F2",
    "#1F3A93",
    "#14B8A6",
    "#43A047",
    "#7E57C2",
    "#F57C00",
    "#0284C7",
    "#558B2F",
    "#0F766E",
    "#1E3A8A",
  ];
  const paletteDark = [
    "#38BDF8",
    "#93C5FD",
    "#5EEAD4",
    "#86EFAC",
    "#C4B5FD",
    "#FDBA74",
    "#67E8F9",
    "#BEF264",
    "#2DD4BF",
    "#A5B4FC",
  ];

  upsertChart("setoresProfissionais", canvas, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: (isDarkTheme() ? paletteDark : paletteLight).slice(
            0,
            data.length,
          ),
          borderColor: colors.background,
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: colors.secondary,
            usePointStyle: true,
            pointStyle: "rect",
            boxWidth: 10,
            boxHeight: 10,
            padding: 10,
            font: { size: 11 },
          },
        },
        tooltip: {
          callbacks: { label: (ctx) => `${ctx.label}: ${fmtBR(ctx.raw)}` },
        },
      },
    },
  });
}

function renderTopEmpresasProfissionaisChart() {
  const ctx = document.getElementById("topEmpresasProfissionaisChart");
  if (!ctx) return;
  const colors = getChartColors();

  upsertChart("topEmpresasProfissionais", ctx, {
    type: "bar",
    data: {
      labels: topEmpresasProfissionais.map((e) => e.empresa),
      datasets: [
        {
          label: "Profissionais",
          data: topEmpresasProfissionais.map((e) => e.profissionais),
          backgroundColor: colors.accentLight1,
          borderColor: colors.accentLight1,
          borderWidth: 1,
          borderRadius: 8,
          barThickness: 16,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: (c) => `${fmtBR(c.raw)} profissionais` },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => fmtBR(v) },
        },
        y: {
          grid: { display: false, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderRotatividadeCrescimentoChart() {
  const ctx = document.getElementById("rotatividadeCrescimentoChart");
  if (!ctx) return;
  const colors = getChartColors();

  upsertChart("rotatividadeCrescimento", ctx, {
    type: "bar",
    data: {
      labels: rotatividadeCrescimento.map((e) => e.empresa),
      datasets: [
        {
          label: "Rotatividade (%)",
          data: rotatividadeCrescimento.map((e) => e.rotatividade),
          backgroundColor: colors.negative,
          borderColor: colors.negative,
          borderWidth: 1,
          borderRadius: 8,
          barThickness: 14,
        },
        {
          label: "Crescimento (%)",
          data: rotatividadeCrescimento.map((e) => e.crescimento),
          backgroundColor: colors.positive,
          borderColor: colors.positive,
          borderWidth: 1,
          borderRadius: 8,
          barThickness: 14,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "start",
          labels: { color: colors.secondary, boxWidth: 12, boxHeight: 12 },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => `${v}%` },
        },
        y: {
          grid: { display: false, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderCargosComunsChart() {
  const ctx = document.getElementById("cargosComunsChart");
  if (!ctx) return;
  const colors = getChartColors();

  const labels = [
    "Assist. administrativo",
    "Vendedor",
    "Professor",
    "Proprietário",
    "Gerente",
    "Advogado",
    "Caixa",
    "Técnico de enf.",
    "Diretor",
    "Recepcionista",
  ];
  const profissionais = [
    14200, 12500, 11500, 10500, 6100, 5700, 5600, 5550, 5350, 5050,
  ];
  const vagas = [220, 180, 120, 95, 70, 58, 52, 48, 40, 35];

  upsertChart("cargosComuns", ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Profissionais",
          data: profissionais,
          backgroundColor: isDarkTheme() ? "#67d2ff" : "#3bb4e7",
          borderWidth: 0,
          barThickness: 10,
        },
        {
          label: "Vagas",
          data: vagas,
          backgroundColor: isDarkTheme() ? "#67c3b0" : "#2ca58d",
          borderWidth: 0,
          barThickness: 10,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: { color: colors.secondary, boxWidth: 30 },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 16000,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => fmtBR(v) },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderCargosCrescimentoChart() {
  const ctx = document.getElementById("cargosCrescimentoChart");
  if (!ctx) return;
  const colors = getChartColors();

  const labels = [
    "Fundador",
    "Sócio",
    "Psicólogo clínico",
    "Psicólogo",
    "Dir. comercial",
    "CEO",
    "Analista",
    "Corretor imóveis",
    "Enfermeiro",
    "Engenheiro",
  ];
  const crescimento = [6, 3, 2, 1, 1, 1, 1, 1, 1, 1];

  upsertChart("cargosCrescimento", ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Crescimento",
          data: crescimento,
          backgroundColor: isDarkTheme() ? "#7ecf8a" : "#5cae67",
          borderWidth: 0,
          barThickness: 10,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          max: 6,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, stepSize: 1 },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderGeneroPrincipaisCargosChart() {
  const ctx = document.getElementById("generoPrincipaisCargosChart");
  if (!ctx) return;
  const colors = getChartColors();

  upsertChart("generoPrincipaisCargos", ctx, {
    type: "bar",
    data: {
      labels: generoPrincipaisCargos.map((c) => c.cargo),
      datasets: [
        {
          label: "Feminino (%)",
          data: generoPrincipaisCargos.map((c) => c.feminino),
          backgroundColor: "#E85A8E",
          borderWidth: 0,
          barThickness: 38,
        },
        {
          label: "Masculino (%)",
          data: generoPrincipaisCargos.map((c) => c.masculino),
          backgroundColor: "#4FB1DE",
          borderWidth: 0,
          barThickness: 38,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "center",
          labels: { color: colors.secondary, boxWidth: 36, boxHeight: 10 },
        },
        tooltip: {
          callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}%` },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, maxRotation: 0, autoSkip: false },
        },
        y: {
          stacked: true,
          min: 0,
          max: 100,
          grid: { color: colors.grid, drawBorder: false },
          ticks: {
            color: colors.secondary,
            stepSize: 10,
            callback: (v) => `${v}%`,
          },
        },
      },
    },
  });
}

function renderCompetenciasComunsChart() {
  const ctx = document.getElementById("competenciasComunsChart");
  if (!ctx) return;
  const colors = getChartColors();

  const palette = [
    "#43B3E0",
    "#4F67AD",
    "#49BAC8",
    "#6FB37A",
    "#8D74B8",
    "#EA9448",
    "#4A9ACF",
    "#7EAF65",
    "#5A9A88",
    "#4D8FB0",
  ];

  upsertChart("competenciasComuns", ctx, {
    type: "bar",
    data: {
      labels: competenciasComuns.map((c) => c.competencia),
      datasets: [
        {
          label: "Nº de Profissionais",
          data: competenciasComuns.map((c) => c.count),
          backgroundColor: palette,
          borderWidth: 0,
          barThickness: 16,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderCompetenciasCrescimentoChart() {
  const ctx = document.getElementById("competenciasCrescimentoChart");
  if (!ctx) return;
  const colors = getChartColors();

  const palette = [
    "#43B3E0",
    "#4F67AD",
    "#49BAC8",
    "#6FB37A",
    "#8D74B8",
    "#EA9448",
    "#4A9ACF",
    "#7EAF65",
    "#5A9A88",
  ];

  upsertChart("competenciasCrescimento", ctx, {
    type: "bar",
    data: {
      labels: competenciasCrescimento.map((c) => c.competencia),
      datasets: [
        {
          label: "Crescimento (%)",
          data: competenciasCrescimento.map((c) => c.crescimento),
          backgroundColor: palette,
          borderWidth: 0,
          barThickness: 16,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => `${v}%` },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderNivelFormacaoChart() {
  const ctx = document.getElementById("nivelFormacaoChart");
  if (!ctx) return;
  const colors = getChartColors();

  upsertChart("nivelFormacao", ctx, {
    type: "pie",
    data: {
      labels: nivelFormacao.map((i) => `${i.nivel} (${i.valor}%)`),
      datasets: [
        {
          data: nivelFormacao.map((i) => i.valor),
          backgroundColor: [
            "#1DA1F2",
            "#27439B",
            "#1DB2C4",
            "#43A047",
            "#7E57C2",
          ],
          borderColor: colors.background,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: colors.secondary,
            boxWidth: 10,
            boxHeight: 10,
            padding: 10,
          },
        },
        tooltip: { callbacks: { label: (c) => `${c.label}` } },
      },
    },
  });
}

function renderAreasEstudoChart() {
  const ctx = document.getElementById("areasEstudoChart");
  if (!ctx) return;
  const colors = getChartColors();

  upsertChart("areasEstudo", ctx, {
    type: "bar",
    data: {
      labels: areasEstudo.map((a) => a.area),
      datasets: [
        {
          label: "Profissionais",
          data: areasEstudo.map((a) => a.valor),
          backgroundColor: "#43B3E0",
          borderColor: "#43B3E0",
          borderWidth: 1,
          barThickness: 18,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => fmtBR(v) },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderInstituicoes() {
  const tb = document.getElementById("instituicoesBody");
  if (!tb) return;

  tb.innerHTML = instituicoes
    .map(
      (i) => `
    <tr>
      <td><strong>${i.nome}</strong></td>
      <td>${fmtBR(i.profissionais)}</td>
      <td>${fmtBR(i.recem)}</td>
    </tr>
  `,
    )
    .join("");
}

function renderFluxoLocalidadeChart() {
  const ctx = document.getElementById("fluxoLocalidadeChart");
  if (!ctx) return;
  const colors = getChartColors();

  const labels = fluxoLocalidade.map((f) => f.local);
  const data = fluxoLocalidade.map((f) => f.saldo);
  const barColors = data.map((v) =>
    v > 0 ? "#38bdf8" : v < 0 ? "#ef4444" : "#94a3b8",
  );
  const min = Math.min(...data);
  const max = Math.max(...data);

  upsertChart("fluxoLocalidade", ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { data, backgroundColor: barColors, borderWidth: 0, barThickness: 18 },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          min: Math.floor(min * 1.2),
          max: Math.ceil(max * 1.15),
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => fmtBR(v) },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderFluxoSetorChart() {
  const ctx = document.getElementById("fluxoSetorChart");
  if (!ctx) return;
  const colors = getChartColors();

  const labels = fluxoSetor.map((f) => f.setor);
  const data = fluxoSetor.map((f) => f.saldo);
  const barColors = data.map((v) =>
    v > 0 ? "#38bdf8" : v < 0 ? "#ef4444" : "#94a3b8",
  );
  const min = Math.min(...data);
  const max = Math.max(...data);

  upsertChart("fluxoSetor", ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { data, backgroundColor: barColors, borderWidth: 0, barThickness: 18 },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          min: Math.floor(min * 1.2),
          max: Math.ceil(max * 1.2),
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function getEngajamentoIcon(label = "") {
  const l = normalizeTxt(label);
  if (l.includes("engajad")) return "fa-solid fa-handshake";
  if (l.includes("seguidor")) return "fa-solid fa-user-plus";
  if (l.includes("visualiz")) return "fa-regular fa-eye";
  if (l.includes("candidat")) return "fa-solid fa-file-signature";
  if (l.includes("clique")) return "fa-solid fa-mouse-pointer";
  if (l.includes("inmail")) return "fa-regular fa-envelope";
  return "fa-solid fa-chart-column";
}

function getEngajamentoSubtitle(label = "") {
  const l = normalizeTxt(label);
  if (l.includes("engajad")) return "Talentos com interação ativa";
  if (l.includes("seguidor")) return "Base de audiência da página";
  if (l.includes("visualiz")) return "Exposição das vagas/publicações";
  if (l.includes("candidat")) return "Interesse em oportunidades";
  if (l.includes("clique")) return "Ações em links e CTAs";
  if (l.includes("inmail")) return "Comunicação direta com talentos";
  return "Indicador no período";
}

function renderEngajamento() {
  const grid = document.getElementById("engajamentoGrid");
  if (!grid) return;

  grid.innerHTML = engajamento
    .map(
      (e, idx) => `
    <div class="marca-kpi-item ${idx === engajamento.length - 1 ? "full" : ""}">
      <div class="marca-kpi-top">
        <span class="marca-kpi-icon"><i class="${e.icon || getEngajamentoIcon(e.label)}" aria-hidden="true"></i></span>
        <div>
          <div class="marca-kpi-title">${e.label}</div>
          <div class="marca-kpi-subtitle">${e.subtitulo || getEngajamentoSubtitle(e.label)}</div>
        </div>
      </div>
      <div class="marca-kpi-value">${fmtBR(e.valor)}</div>
    </div>
  `,
    )
    .join("");
}

function renderPropostasValorChart() {
  const ctx = document.getElementById("propostasValorChart");
  if (!ctx) return;
  const colors = getChartColors();

  const palette = [
    "#3DB4E7",
    "#4D67B0",
    "#57C2D0",
    "#67B36F",
    "#8B78BB",
    "#EA9648",
    "#3A97C7",
    "#5E9D84",
    "#2F556B",
    "#6EAEE3",
  ];

  upsertChart("propostasValor", ctx, {
    type: "bar",
    data: {
      labels: propostasValor.map((p) => p.fator),
      datasets: [
        {
          label: "% de consenso",
          data: propostasValor.map((p) => p.consenso),
          backgroundColor: palette,
          borderWidth: 0,
          barThickness: 14,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => `${c.raw}%` } },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary, callback: (v) => `${v}%` },
        },
        y: {
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

function renderPerfis() {
  const grid = document.getElementById("perfisGrid");
  if (!grid) return;

  if (!Array.isArray(perfis) || perfis.length === 0) {
    grid.innerHTML = `<div class="perfil-card"><div class="perfil-cargo">Nenhum perfil disponível no momento.</div></div>`;
    return;
  }

  grid.innerHTML = perfis
    .map(
      (p) => `
    <article class="perfil-card">
      <div class="perfil-nome">
        <i class="fa-solid fa-circle-user" aria-hidden="true"></i>
        <span>${p.nome ?? "-"}</span>
      </div>
      <div class="perfil-cargo">${p.cargo ?? "-"}</div>
      <div class="perfil-meta">
        <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i>${p.local ?? "-"}</span>
        <span><i class="fa-solid fa-building" aria-hidden="true"></i>${p.empresa ?? "-"}</span>
      </div>
    </article>
  `,
    )
    .join("");
}

/* =========================
   Tema / Init
========================= */
const chartRenderers = [
  renderSetoresProfissionaisChart,
  renderTopEmpresasProfissionaisChart,
  renderRotatividadeCrescimentoChart,
  renderCargosComunsChart,
  renderCargosCrescimentoChart,
  renderGeneroPrincipaisCargosChart,
  renderCompetenciasComunsChart,
  renderCompetenciasCrescimentoChart,
  renderNivelFormacaoChart,
  renderAreasEstudoChart,
  renderFluxoLocalidadeChart,
  renderFluxoSetorChart,
  renderPropostasValorChart,
];

function rerenderCharts() {
  chartRenderers.forEach((fn) => fn());
}

function bindThemeSafe() {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const iconSun = document.getElementById("iconSun");
  const iconMoon = document.getElementById("iconMoon");

  if (!btn) {
    console.error("[theme] Botão #themeToggle não encontrado");
    return;
  }

  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (theme) => {
    html.setAttribute("data-theme", theme);
    iconSun?.classList.toggle("hidden", theme === "dark");
    iconMoon?.classList.toggle("hidden", theme !== "dark");
    localStorage.setItem("theme", theme);

    rerenderCharts();
    window.rerenderDistribuicaoGenero?.();
    window.rerenderQualidadeDadosCharts?.();
    window.rerenderInferenciasAvancadasCharts?.();
  };

  applyTheme(getInitialTheme());

  btn.addEventListener("click", () => {
    const atual = html.getAttribute("data-theme") || "light";
    applyTheme(atual === "light" ? "dark" : "light");
  });
}

function initApp() {
  bindThemeSafe();
  renderPanorama();
  renderSetoresDemandaTable();
  renderInstituicoes();
  renderEngajamento();
  renderPerfis();
  rerenderCharts();
  renderCompetenciasTechTable();
}

/* =========================
   Filtros + CSV
========================= */
function setDefaultPeriod() {
  const periodInput = document.getElementById("filterPeriod");
  if (!periodInput || periodInput.value) return;
  const now = new Date();
  periodInput.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function applyDashboardFilters() {
  const keyword = normalizeText(
    document.getElementById("filterKeyword")?.value || "",
  );
  const category = document.getElementById("filterCategory")?.value || "";

  // considera filtro "ativo" quando há palavra-chave ou categoria
  const hasActiveFilter = !!keyword || !!category;

  const panoramaSection = document.querySelector(".panorama-geral");
  if (panoramaSection) {
    const catOk = !category || category === "panorama";
    const txt = normalizeText(panoramaSection.textContent || "");
    const kwOk = !keyword || txt.includes(keyword);
    panoramaSection.style.display = catOk && kwOk ? "" : "none";
  }

  document.querySelectorAll("details.accordion").forEach((acc) => {
    const accCategory = acc.dataset.category || "";
    const catOk = !category || category === accCategory;
    const contentText = normalizeText(acc.textContent || "");
    const kwOk = !keyword || contentText.includes(keyword);

    const visible = catOk && kwOk;
    acc.style.display = visible ? "" : "none";

    // abre automaticamente os accordions visíveis quando filtro estiver ativo
    if (visible && hasActiveFilter) {
      acc.open = true;
    }

    // opcional: fecha os que ficaram ocultos
    if (!visible) {
      acc.open = false;
    }
  });
}

function collectVisibleDataRows() {
  const rows = [["Tipo", "Seção", "Campo", "Valor"]];

  const keyword = document.getElementById("filterKeyword")?.value || "";
  const period = document.getElementById("filterPeriod")?.value || "";
  const category = document.getElementById("filterCategory")?.value || "";

  rows.push(["Filtro", "Global", "Palavra-chave", keyword]);
  rows.push(["Filtro", "Global", "Período", period]);
  rows.push(["Filtro", "Global", "Categoria", category || "Todas"]);

  if (
    getComputedStyle(document.querySelector(".panorama-geral") || document.body)
      .display !== "none"
  ) {
    document.querySelectorAll("#kpiGrid .kpi-card").forEach((card) => {
      const titulo = (
        card.querySelector(".kpi-title")?.textContent || ""
      ).trim();
      const valor = (
        card.querySelector(".kpi-value")?.textContent || ""
      ).trim();
      const subt = (
        card.querySelector(".kpi-subtitle")?.textContent || ""
      ).trim();

      rows.push(["KPI", "Panorama Geral", titulo, valor]);
      if (subt)
        rows.push(["KPI", "Panorama Geral", `${titulo} (detalhe)`, subt]);
    });
  }

  document.querySelectorAll("details.accordion").forEach((acc) => {
    if (getComputedStyle(acc).display === "none") return;

    const sectionName = (
      acc.querySelector("summary")?.textContent || "Seção"
    ).trim();

    acc.querySelectorAll("table.data-table").forEach((table) => {
      const headers = [...table.querySelectorAll("thead th")].map((th) =>
        th.textContent.trim(),
      );
      [...table.querySelectorAll("tbody tr")].forEach((tr) => {
        const cells = [...tr.querySelectorAll("td")].map((td) =>
          td.textContent.trim(),
        );
        cells.forEach((cell, idx) => {
          rows.push([
            "Tabela",
            sectionName,
            headers[idx] || `Coluna ${idx + 1}`,
            cell,
          ]);
        });
      });
    });

    acc.querySelectorAll(".marca-kpi-item").forEach((item) => {
      const campo = (
        item.querySelector(".marca-kpi-title")?.textContent || ""
      ).trim();
      const valor = (
        item.querySelector(".marca-kpi-value")?.textContent || ""
      ).trim();
      if (campo || valor) rows.push(["KPI", sectionName, campo, valor]);
    });

    acc.querySelectorAll(".perfil-card").forEach((card) => {
      const nome = (
        card.querySelector(".perfil-nome span")?.textContent || ""
      ).trim();
      const cargo = (
        card.querySelector(".perfil-cargo")?.textContent || ""
      ).trim();
      const meta = [...card.querySelectorAll(".perfil-meta span")]
        .map((s) => s.textContent.trim())
        .join(" | ");
      rows.push([
        "Perfil",
        sectionName,
        nome || "Perfil",
        `${cargo}${meta ? ` — ${meta}` : ""}`,
      ]);
    });
  });

  return rows;
}

function exportVisibleDataToCsv() {
  const rows = collectVisibleDataRows();
  const csv = "﻿" + rows.map((r) => r.map(csvEscape).join(";")).join("\n");
  const period = document.getElementById("filterPeriod")?.value || "periodo";
  const filename = `dashboard_cps_carreiras_${period}.csv`;

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function initDashboardToolbar() {
  setDefaultPeriod();

  document
    .getElementById("filterKeyword")
    ?.addEventListener("input", applyDashboardFilters);
  document
    .getElementById("filterPeriod")
    ?.addEventListener("change", applyDashboardFilters);
  document
    .getElementById("filterCategory")
    ?.addEventListener("change", applyDashboardFilters);
  document
    .getElementById("exportCsvBtn")
    ?.addEventListener("click", exportVisibleDataToCsv);

  const importInput = document.getElementById("importCsvInput");
  document
    .getElementById("importCsvBtn")
    ?.addEventListener("click", () => importInput?.click());
  importInput?.addEventListener("change", () => {
    console.log(
      "CSV selecionado para importação:",
      importInput.files?.[0]?.name || "",
    );
  });

  applyDashboardFilters();
}

/* =========================
   Talent Insights
========================= */
function formatOverviewKpiValue(kpi) {
  if (kpi.isPercent) {
    return (
      Number(kpi.valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }) + (kpi.sufixo || "")
    );
  }

  const isNumeric = typeof kpi.valor === "number";
  const base = isNumeric
    ? kpi.valor.toLocaleString("pt-BR")
    : String(kpi.valor);
  return `${base}${kpi.sufixo || ""}`;
}

export function renderOverviewKpis() {
  const grid = document.getElementById("overviewKpis");
  if (!grid) return;

  grid.innerHTML = talentInsightsData.kpis
    .map(
      (k) => `
      <article class="kpi-card">
        <div class="kpi-label">
          <i class="${k.icon || "fa-solid fa-chart-column"}" aria-hidden="true"></i>
        </div>
        <div class="kpi-value">${formatOverviewKpiValue(k)}</div>
        <div class="kpi-title">${k.label}</div>
        <div class="kpi-subtitle">${k.nota || ""}</div>
      </article>
    `,
    )
    .join("");
}

function renderInsightsCards() {
  const container = document.getElementById("insightsGrid");
  if (!container) return;

  container.innerHTML = talentInsightsData.insights
    .map(
      (insight) => `
      <article class="insight-card" style="--insight-color:${insight.color}">
        <div class="insight-tag">INSIGHT</div>
        <h4 class="insight-title">${insight.title}</h4>
        <p class="insight-text">${insight.text}</p>
      </article>
    `,
    )
    .join("");
}

let visaoGeralMiniChartInstance = null;
function renderVisaoGeralMiniChart() {
  const canvas = document.getElementById("visaoGeralMiniChart");
  if (!canvas || typeof Chart === "undefined") return;

  const tickColor = isDarkTheme() ? "#cbd5e1" : "#6b7280";
  const gridColor = isDarkTheme()
    ? "rgba(148,163,184,0.2)"
    : "rgba(15,23,42,0.08)";

  if (visaoGeralMiniChartInstance) visaoGeralMiniChartInstance.destroy();

  visaoGeralMiniChartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels: talentInsightsData.miniChart.labels,
      datasets: [
        {
          label: "Vagas",
          data: talentInsightsData.miniChart.vagas,
          backgroundColor: "#f59e0b",
          borderWidth: 0,
          barThickness: 14,
        },
      ],
    },
    options: {
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", labels: { color: tickColor } },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: tickColor, maxRotation: 20, minRotation: 20 },
        },
        y: {
          beginAtZero: true,
          grid: { color: gridColor, drawBorder: false },
          ticks: { color: tickColor },
        },
      },
    },
  });
}

function initTalentInsightsConsolidado() {
  renderOverviewKpis();
  renderInsightsCards();
  renderVisaoGeralMiniChart();
}

/* =========================
   Ranking Competências
========================= */
const rankingState = { page: 1, perPage: 10 };

function fmtInt(v) {
  return fmtIntBR(v);
}
function fmtPct(v) {
  return fmtPctBR(v, 2, 2);
}
function fmtVagas1000(v) {
  return fmtDecimalBR(v, 1, 1);
}

function getTotalPages() {
  return Math.max(
    1,
    Math.ceil(competenciasRanking.length / rankingState.perPage),
  );
}

function renderCompetenciasRankingTable() {
  const body = document.getElementById("competenciasRankingBody");
  const info = document.getElementById("rankingPageInfo");
  if (!body || !info) return;

  const totalPages = getTotalPages();
  if (rankingState.page > totalPages) rankingState.page = totalPages;

  const start = (rankingState.page - 1) * rankingState.perPage;
  const end = start + rankingState.perPage;
  const pageRows = competenciasRanking.slice(start, end);

  body.innerHTML = pageRows
    .map((row) => {
      const gapClass =
        row.gap > 0
          ? "ranking-positive"
          : row.gap < 0
            ? "ranking-negative"
            : "";
      return `
      <tr>
        <td>${row.rank}</td>
        <td>${row.competencia}</td>
        <td>${fmtInt(row.profissionais)}</td>
        <td>${fmtPct(row.pctTotal)}</td>
        <td>${fmtInt(row.vagas)}</td>
        <td>${fmtInt(row.talentosInternos)}</td>
        <td class="${gapClass}">${row.gap > 0 ? "+" : ""}${fmtInt(row.gap)}</td>
        <td>${fmtVagas1000(row.vagas1000)}</td>
        <td>F ${row.feminino}% / M ${row.masculino}%</td>
      </tr>
    `;
    })
    .join("");

  const from = competenciasRanking.length ? start + 1 : 0;
  const to = Math.min(end, competenciasRanking.length);
  info.textContent = `Mostrando ${from}-${to} de ${competenciasRanking.length} competências`;
}

function renderRankingPageNumbers() {
  const el = document.getElementById("rankingPageNumbers");
  if (!el) return;

  const totalPages = getTotalPages();
  const current = rankingState.page;
  const maxVisible = 7;

  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages, start + maxVisible - 1);
  start = Math.max(1, end - maxVisible + 1);

  let html = "";
  for (let p = start; p <= end; p++) {
    html += `<button type="button" class="page-number ${p === current ? "active" : ""}" data-page="${p}">${p}</button>`;
  }
  el.innerHTML = html;

  el.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      rankingState.page = Number(btn.dataset.page);
      updateRankingPagination();
    });
  });
}

function updateRankingControlStates() {
  const totalPages = getTotalPages();
  const wrap = document.getElementById("rankingPagination");
  if (!wrap) return;

  const firstBtn = wrap.querySelector('[data-action="first"]');
  const prevBtn = wrap.querySelector('[data-action="prev"]');
  const nextBtn = wrap.querySelector('[data-action="next"]');
  const lastBtn = wrap.querySelector('[data-action="last"]');

  const isFirst = rankingState.page <= 1;
  const isLast = rankingState.page >= totalPages;

  if (firstBtn) firstBtn.disabled = isFirst;
  if (prevBtn) prevBtn.disabled = isFirst;
  if (nextBtn) nextBtn.disabled = isLast;
  if (lastBtn) lastBtn.disabled = isLast;
}

function updateRankingPagination() {
  renderCompetenciasRankingTable();
  renderRankingPageNumbers();
  updateRankingControlStates();
}

function bindRankingPaginationActions() {
  const wrap = document.getElementById("rankingPagination");
  if (!wrap) return;

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const totalPages = getTotalPages();
    const action = btn.dataset.action;

    if (action === "first") rankingState.page = 1;
    if (action === "prev")
      rankingState.page = Math.max(1, rankingState.page - 1);
    if (action === "next")
      rankingState.page = Math.min(totalPages, rankingState.page + 1);
    if (action === "last") rankingState.page = totalPages;

    updateRankingPagination();
  });
}

function initCompetenciasRankingSection() {
  bindRankingPaginationActions();
  updateRankingPagination();
}

/* =========================
   Competências Tech
========================= */
function renderCompetenciasTechTable() {
  const tbody = document.getElementById("competenciasTechBody");
  if (!tbody) return;

  tbody.innerHTML = competenciasTechDados
    .map((row) => {
      const gapClass =
        row.gap > 0 ? "tech-gap-pos" : row.gap < 0 ? "tech-gap-neg" : "";
      const gapSignal = row.gap > 0 ? "+" : "";

      return `
      <tr>
        <td>${row.rank}</td>
        <td>${row.competencia}</td>
        <td>${fmtIntBR(row.profissionais)}</td>
        <td>${fmtPctBR(row.pctTotal, 2, 2)}</td>
        <td>${fmtIntBR(row.vagas)}</td>
        <td>${fmtIntBR(row.talentosInternos)}</td>
        <td class="${gapClass}">${gapSignal}${fmtIntBR(row.gap)}</td>
        <td>${fmtDecimalBR(row.vagas1000, 1, 1)}</td>
        <td>F ${row.feminino}% / M ${row.masculino}%</td>
      </tr>
    `;
    })
    .join("");
}

/* =========================
   Gaps e Pressão
========================= */
const gaps_fmtInt = (v) => fmtIntBR(v);
const gaps_fmtDec = (v) => fmtDecimalBR(v, 1, 1);

function prioClass(v = "") {
  const t = v.toLowerCase();
  if (t.includes("alta")) return "prio-alta";
  if (t.includes("média") || t.includes("media")) return "prio-media";
  return "prio-monitorar";
}

function leituraClass(v = "") {
  const t = v.toLowerCase();
  if (t.includes("muito")) return "read-muito-alta";
  if (t === "alta") return "read-alta";
  if (t.includes("moder")) return "read-moderada";
  return "read-baixa";
}

function renderMaioresGapsTable() {
  const tbody = document.getElementById("maioresGapsBody");
  if (!tbody) return;

  tbody.innerHTML = maioresGaps
    .map(
      (r) => `
    <tr>
      <td>${r.competencia}</td>
      <td>${gaps_fmtInt(r.vagas)}</td>
      <td>${gaps_fmtInt(r.talentosInternos)}</td>
      <td>${r.gap > 0 ? "+" : ""}${fmtInt(r.gap)}</td>
      <td>${gaps_fmtInt(r.profissionais)}</td>
      <td>${gaps_fmtDec(r.pressao)}</td>
      <td><span class="badge-prio ${prioClass(r.prioridade)}">${r.prioridade}</span></td>
    </tr>
  `,
    )
    .join("");
}

function renderPressaoContratacaoTable() {
  const tbody = document.getElementById("pressaoContratacaoBody");
  if (!tbody) return;

  tbody.innerHTML = pressaoContratacao
    .map(
      (r) => `
    <tr>
      <td>${r.competencia}</td>
      <td>${gaps_fmtDec(r.vagas1000)}</td>
      <td>${gaps_fmtInt(r.vagas)}</td>
      <td>${gaps_fmtInt(r.profissionais)}</td>
      <td>${gaps_fmtInt(r.talentosInternos)}</td>
      <td><span class="badge-read ${leituraClass(r.leitura)}">${r.leitura}</span></td>
    </tr>
  `,
    )
    .join("");
}

function initGapsPressaoSection() {
  renderMaioresGapsTable();
  renderPressaoContratacaoTable();
}

/* =========================
   Demanda Futura
========================= */
function calcDemandaFutura(valorAtual, valorAnterior) {
  return valorAtual + (valorAtual - valorAnterior);
}

let demandaFuturaChartInstance = null;

function renderDemandaFuturaChart() {
  const canvas = document.getElementById("demandaFuturaChart");
  if (!canvas || typeof Chart === "undefined") return;

  const colors = getChartColors();

  const serie = demandaFuturaBase
    .map((d) => ({
      ...d,
      demandaFutura: calcDemandaFutura(d.valorAtual, d.valorAnterior),
    }))
    .sort((a, b) => b.demandaFutura - a.demandaFutura);

  if (demandaFuturaChartInstance) demandaFuturaChartInstance.destroy();

  demandaFuturaChartInstance = new Chart(canvas, {
    type: "line",
    data: {
      labels: serie.map((d) => d.competencia),
      datasets: [
        {
          label: "Demanda atual",
          data: serie.map((d) => d.valorAtual),
          borderColor: "#94a3b8",
          backgroundColor: "rgba(148,163,184,0.15)",
          pointRadius: 3,
          pointHoverRadius: 4,
          borderWidth: 2,
          tension: 0.35,
          fill: false,
        },
        {
          label: "Demanda futura",
          data: serie.map((d) => d.demandaFutura),
          borderColor: "#6d28d9",
          backgroundColor: "rgba(109,40,217,0.15)",
          pointRadius: 3,
          pointHoverRadius: 4,
          borderWidth: 3,
          tension: 0.35,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: colors.secondary } },
        tooltip: {
          callbacks: {
            afterBody: (items) => {
              const i = items[0].dataIndex;
              const d = serie[i];
              return `Fórmula: ${d.valorAtual} + (${d.valorAtual} - ${d.valorAnterior}) = ${d.demandaFutura}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: colors.secondary, maxRotation: 35, minRotation: 35 },
        },
        y: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.secondary },
        },
      },
    },
  });
}

/* =========================
   Distribuição de Gênero
========================= */
function getGeneroDiffClass(diff) {
  if (diff >= 60) return "high";
  if (diff >= 45) return "mid";
  return "low";
}

function getThemeChartColors() {
  return {
    tick: isDarkTheme() ? "#cbd5e1" : "#475569",
    grid: isDarkTheme() ? "rgba(148,163,184,.25)" : "rgba(148,163,184,.20)",
  };
}

function renderDistribuicaoGeneroTable() {
  const tbody = document.getElementById("generoDistribuicaoBody");
  if (!tbody) return;

  tbody.innerHTML = distribuicaoGeneroData
    .map(
      (r) => `
      <tr>
        <td>${r.competencia}</td>
        <td>${fmtIntBR(r.profissionais)}</td>
        <td>${r.feminino}%</td>
        <td>${r.masculino}%</td>
        <td><span class="genero-diff ${getGeneroDiffClass(r.diferenca)}">${r.diferenca}%</span></td>
        <td class="gender-split">
          <div class="gender-split-track" aria-label="Feminino ${r.feminino}% e Masculino ${r.masculino}%">
            <span class="gender-split-f" style="width:${r.feminino}%"></span>
            <span class="gender-split-m" style="width:${r.masculino}%"></span>
          </div>
          <div class="gender-split-label">F ${r.feminino}% / M ${r.masculino}%</div>
        </td>
        <td>${fmtIntBR(r.vagas)}</td>
      </tr>
    `,
    )
    .join("");
}

let distribuicaoGeneroChartInstance = null;
function renderDistribuicaoGeneroChart() {
  const canvas = document.getElementById("distribuicaoGeneroChart");
  if (!canvas || typeof Chart === "undefined") return;

  const colors = getThemeChartColors();
  const top = [...distribuicaoGeneroData]
    .sort((a, b) => b.diferenca - a.diferenca)
    .slice(0, 10);

  if (distribuicaoGeneroChartInstance)
    distribuicaoGeneroChartInstance.destroy();

  distribuicaoGeneroChartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels: top.map((i) => i.competencia),
      datasets: [
        {
          label: "Feminino (%)",
          data: top.map((i) => i.feminino),
          backgroundColor: "#ec4899",
          borderWidth: 0,
          stack: "gender",
        },
        {
          label: "Masculino (%)",
          data: top.map((i) => i.masculino),
          backgroundColor: "#38bdf8",
          borderWidth: 0,
          stack: "gender",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { color: colors.tick, boxWidth: 12, boxHeight: 12 },
        },
        tooltip: {
          callbacks: {
            afterBody: (items) => {
              const row = top[items[0].dataIndex];
              return [
                `Diferença: ${row.diferenca}%`,
                `Profissionais: ${fmtIntBR(row.profissionais)}`,
                `Vagas: ${fmtIntBR(row.vagas)}`,
              ];
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: { color: colors.tick, maxRotation: 25, minRotation: 25 },
        },
        y: {
          stacked: true,
          min: 0,
          max: 100,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick, callback: (v) => `${v}%` },
        },
      },
    },
  });
}

function initDesigualdadeGeneroSection() {
  renderDistribuicaoGeneroTable();
  renderDistribuicaoGeneroChart();
}
window.rerenderDistribuicaoGenero = renderDistribuicaoGeneroChart;

/* =========================
   Educação e Competências Emergentes
========================= */
function initEducacaoCompetenciasEmergentesSection() {
  const eeFmtInt = (v) => fmtIntBR(v);
  const eeFmtPct = (v) => fmtPctBR(v, 1, 1);

  const areasBody = document.getElementById("areasEstudoBody");
  if (areasBody) {
    areasBody.innerHTML = eeAreasEstudo
      .map(
        (r) => `
      <tr>
        <td><strong>${r.area}</strong></td>
        <td>${eeFmtInt(r.profissionais)}</td>
        <td>${eeFmtInt(r.recemFormados)}</td>
        <td>${eeFmtPct(r.pctRecemFormados)}</td>
        <td>${eeFmtInt(r.suasContratacoes)}</td>
      </tr>
    `,
      )
      .join("");
  }

  const compBody = document.getElementById("competenciasEmergentesBody");
  if (!compBody) return;

  if (!eeCompetenciasEmergentes.length) {
    compBody.innerHTML = `
      <tr>
        <td colspan="5" class="ee-empty">
          <div style="margin-top:8px;">
            Competências em crescimento ainda indisponíveis na carga atual.
          </div>
        </td>
      </tr>
    `;
    return;
  }

  compBody.innerHTML = eeCompetenciasEmergentes
    .map(
      (r) => `
    <tr>
      <td>${r.competencia}</td>
      <td>${eeFmtPct(r.crescimentoAnual)}</td>
      <td>${eeFmtInt(r.profissionais)}</td>
      <td>${eeFmtInt(r.vagas)}</td>
      <td>${r.status || "-"}</td>
    </tr>
  `,
    )
    .join("");
}

/* =========================
   Qualidade dos Dados
========================= */
let qdCoberturaStatusChartInstance = null;
let qdLinhasAbaChartInstance = null;

function qdStatusClass(status) {
  if (status === "Com dados") return "qd-status-com-dados";
  if (status === "Metadados") return "qd-status-metadados";
  return "qd-status-somente-cabecalho";
}

function qdThemeColors() {
  return {
    tick: isDarkTheme() ? "#cbd5e1" : "#334155",
    grid: isDarkTheme() ? "rgba(148,163,184,0.20)" : "rgba(15,23,42,0.10)",
  };
}

function qdRenderCoberturaTable() {
  const tbody = document.getElementById("qdCoberturaBody");
  if (!tbody) return;

  tbody.innerHTML = qdCoberturaAbas
    .map(
      (r) => `
      <tr>
        <td><span class="qd-badge ${qdStatusClass(r.status)}">${r.status}</span></td>
        <td>${r.aba}</td>
        <td>${fmtIntBR(r.linhas)}</td>
      </tr>
    `,
    )
    .join("");
}

function qdRenderDuplicidadesTable() {
  const tbody = document.getElementById("qdDuplicidadesBody");
  if (!tbody) return;

  tbody.innerHTML = qdDuplicidades
    .map(
      (r) => `
      <tr>
        <td>${r.entidade}</td>
        <td>${r.tipo}</td>
        <td>${fmtIntBR(r.registros)}</td>
        <td>${r.rankings}</td>
        <td>${fmtIntBR(r.profissionaisSomados)}</td>
        <td>${fmtIntBR(r.vagasSomadas)}</td>
        <td>${fmtIntBR(r.talentosSomados)}</td>
      </tr>
    `,
    )
    .join("");
}

function qdRenderLogsTable() {
  const tbody = document.getElementById("qdLogsBody");
  if (!tbody) return;

  tbody.innerHTML = qdLogs
    .map(
      (r) => `
      <tr>
        <td><span class="qd-badge qd-log-alerta">${r.nivel}</span></td>
        <td>${r.origem}</td>
        <td>${r.mensagem}</td>
      </tr>
    `,
    )
    .join("");
}

function qdRenderRoadmapTable() {
  const tbody = document.getElementById("qdRoadmapBody");
  if (!tbody) return;

  tbody.innerHTML = qdRoadmap
    .map(
      (r) => `
      <tr>
        <td>${r.modulo}</td>
        <td>${r.descricao}</td>
        <td><span class="qd-badge qd-status-somente-cabecalho">${r.status}</span></td>
        <td>${fmtIntBR(r.linhas)}</td>
      </tr>
    `,
    )
    .join("");
}

function qdRenderCoberturaStatusChart() {
  const canvas = document.getElementById("qdCoberturaStatusChart");
  if (!canvas || !window.Chart) return;

  const counts = qdCoberturaAbas.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const labels = ["Com dados", "Metadados", "Somente cabeçalho"];
  const values = labels.map((l) => counts[l] || 0);
  const colors = qdThemeColors();

  if (qdCoberturaStatusChartInstance) qdCoberturaStatusChartInstance.destroy();

  qdCoberturaStatusChartInstance = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: ["#10b981", "#3b82f6", "#94a3b8"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { color: colors.tick } },
      },
    },
  });
}

function qdRenderLinhasPorAbaChart() {
  const canvas = document.getElementById("qdLinhasAbaChart");
  if (!canvas || !window.Chart) return;

  const sorted = [...qdCoberturaAbas].sort((a, b) => b.linhas - a.linhas);
  const labels = sorted.map((i) => i.aba);
  const values = sorted.map((i) => i.linhas);
  const barColors = sorted.map((i) => {
    if (i.status === "Com dados") return "#10b981";
    if (i.status === "Metadados") return "#3b82f6";
    return "#cbd5e1";
  });

  const colors = qdThemeColors();
  if (qdLinhasAbaChartInstance) qdLinhasAbaChartInstance.destroy();

  qdLinhasAbaChartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Linhas úteis",
          data: values,
          backgroundColor: barColors,
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick },
        },
        y: {
          grid: { display: false },
          ticks: { color: colors.tick },
        },
      },
    },
  });
}

function initQualidadeDadosSection() {
  qdRenderCoberturaTable();
  qdRenderDuplicidadesTable();
  qdRenderLogsTable();
  qdRenderRoadmapTable();
  qdRenderCoberturaStatusChart();
  qdRenderLinhasPorAbaChart();
}
window.rerenderQualidadeDadosCharts = function () {
  qdRenderCoberturaStatusChart();
  qdRenderLinhasPorAbaChart();
};

/* =========================
   Inferências Avançadas
========================= */
function iaFmtInt(v) {
  return fmtIntBR(v);
}
function iaFmtPct(v) {
  return fmtPctBR(v, 1, 1);
}
function iaTheme() {
  return {
    tick: isDarkTheme() ? "#cbd5e1" : "#334155",
    grid: isDarkTheme() ? "rgba(148,163,184,0.20)" : "rgba(15,23,42,0.10)",
  };
}

function iaBuildLacunas() {
  const maxVagas = Math.max(...iaLacunasBase.map((i) => i.vagas), 1);

  return iaLacunasBase.map((i) => {
    const gapBruto = i.vagas - i.talentos;
    const lacunaPct = i.vagas > 0 ? (gapBruto / i.vagas) * 100 : 0;
    const vagasNorm = i.vagas / maxVagas;
    const desigualdade = Math.abs(i.feminino - i.masculino);
    const rotatividadeProxy = i.vagas1000;
    const scorePrioridade =
      Math.max(0, lacunaPct) * 0.7 + rotatividadeProxy * 0.3;

    return {
      ...i,
      gapBruto,
      lacunaPct,
      vagasNorm,
      desigualdade,
      rotatividadeProxy,
      scorePrioridade,
    };
  });
}

function iaRenderLacunasTable(rows) {
  const tbody = document.getElementById("iaLacunasBody");
  if (!tbody) return;

  tbody.innerHTML = rows
    .map(
      (r) => `
      <tr>
        <td>${r.competencia}</td>
        <td>${iaFmtInt(r.vagas)}</td>
        <td>${iaFmtInt(r.talentos)}</td>
        <td class="${r.gapBruto >= 0 ? "ia-positive" : "ia-negative"}">${r.gapBruto >= 0 ? "+" : ""}${iaFmtInt(r.gapBruto)}</td>
        <td class="${r.lacunaPct >= 0 ? "ia-positive" : "ia-negative"}">${iaFmtPct(r.lacunaPct)}</td>
        <td>${r.vagasNorm.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      </tr>
    `,
    )
    .join("");
}

let iaLacunasChartInstance = null;
function iaRenderLacunasChart(rows) {
  const canvas = document.getElementById("iaLacunasChart");
  if (!canvas || !window.Chart) return;

  const colors = iaTheme();
  if (iaLacunasChartInstance) iaLacunasChartInstance.destroy();

  iaLacunasChartInstance = new Chart(canvas, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Competências",
          data: rows.map((r) => ({
            x: Number(r.vagasNorm.toFixed(3)),
            y: Number(r.lacunaPct.toFixed(1)),
            competencia: r.competencia,
            vagas: r.vagas,
            talentos: r.talentos,
          })),
          pointRadius: 7,
          pointHoverRadius: 9,
          backgroundColor: "rgba(109,40,217,0.70)",
          borderColor: "#6d28d9",
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: colors.tick } },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const d = ctx.raw;
              return `${d.competencia}: gap ${d.y}% | vagas norm ${d.x}`;
            },
            afterLabel: (ctx) => {
              const d = ctx.raw;
              return [`Vagas: ${d.vagas}`, `Talentos: ${d.talentos}`];
            },
          },
        },
      },
      scales: {
        x: {
          min: 0,
          max: 1,
          title: {
            display: true,
            text: "Vagas (normalizadas)",
            color: colors.tick,
          },
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick },
        },
        y: {
          min: -320,
          max: 110,
          title: { display: true, text: "Lacuna (%)", color: colors.tick },
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick },
        },
      },
    },
  });
}

let iaRoteirosChartInstance = null;
function iaRenderRoteirosChart(rows) {
  const canvas = document.getElementById("iaRoteirosChart");
  if (!canvas || !window.Chart) return;

  const colors = iaTheme();
  const sorted = [...rows].sort(
    (a, b) => b.scorePrioridade - a.scorePrioridade,
  );

  if (iaRoteirosChartInstance) iaRoteirosChartInstance.destroy();

  iaRoteirosChartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels: sorted.map((i) => i.competencia),
      datasets: [
        {
          label: "Score de prioridade",
          data: sorted.map((i) => Number(i.scorePrioridade.toFixed(1))),
          backgroundColor: "#f59e0b",
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: colors.tick } },
        tooltip: {
          callbacks: {
            afterBody: (items) => {
              const row = sorted[items[0].dataIndex];
              return [
                `Lacuna: ${iaFmtPct(row.lacunaPct)}`,
                `Pressão (proxy): ${row.rotatividadeProxy.toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  },
                )}`,
              ];
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick },
        },
        y: {
          grid: { display: false },
          ticks: { color: colors.tick },
        },
      },
    },
  });
}

function iaDistance(a, b) {
  return Math.sqrt(a.reduce((acc, v, i) => acc + (v - b[i]) ** 2, 0));
}

function iaNormalizeMatrix(matrix) {
  const cols = matrix[0].length;
  const mins = Array(cols).fill(Infinity);
  const maxs = Array(cols).fill(-Infinity);

  matrix.forEach((row) =>
    row.forEach((v, c) => {
      mins[c] = Math.min(mins[c], v);
      maxs[c] = Math.max(maxs[c], v);
    }),
  );

  const norm = matrix.map((row) =>
    row.map((v, c) => {
      const den = maxs[c] - mins[c] || 1;
      return (v - mins[c]) / den;
    }),
  );

  return { norm, mins, maxs };
}

function iaKMeans(points, k = 3, maxIter = 30) {
  let centroids = points.slice(0, k).map((p) => [...p]);
  let labels = Array(points.length).fill(0);

  for (let iter = 0; iter < maxIter; iter++) {
    let changed = false;

    points.forEach((p, idx) => {
      let best = 0;
      let bestDist = Infinity;
      centroids.forEach((c, ci) => {
        const d = iaDistance(p, c);
        if (d < bestDist) {
          bestDist = d;
          best = ci;
        }
      });
      if (labels[idx] !== best) {
        labels[idx] = best;
        changed = true;
      }
    });

    const sums = Array.from({ length: k }, () =>
      Array(points[0].length).fill(0),
    );
    const counts = Array(k).fill(0);

    points.forEach((p, idx) => {
      const g = labels[idx];
      counts[g]++;
      p.forEach((v, c) => (sums[g][c] += v));
    });

    centroids = centroids.map((old, ci) => {
      if (!counts[ci]) return old;
      return old.map((_, c) => sums[ci][c] / counts[ci]);
    });

    if (!changed) break;
  }

  return { labels, centroids };
}

function iaBuildClusters() {
  const matrix = iaClusterBase.map((i) => [
    i.profissionais,
    i.vagas,
    Math.abs(i.feminino - i.masculino),
  ]);

  const { norm } = iaNormalizeMatrix(matrix);
  const { labels } = iaKMeans(norm, 3, 40);

  const points = iaClusterBase.map((item, idx) => ({
    ...item,
    cluster: labels[idx],
    desigualdade: Math.abs(item.feminino - item.masculino),
  }));

  const summary = [0, 1, 2].map((clusterId) => {
    const subset = points.filter((p) => p.cluster === clusterId);
    const count = subset.length || 1;
    return {
      cluster: clusterId,
      membros: subset.map((s) => s.competencia),
      profissionaisMed: subset.reduce((a, b) => a + b.profissionais, 0) / count,
      vagasMed: subset.reduce((a, b) => a + b.vagas, 0) / count,
      desigualdadeMed: subset.reduce((a, b) => a + b.desigualdade, 0) / count,
    };
  });

  return { points, summary };
}

let iaClustersChartInstance = null;
function iaRenderClustersChart(points) {
  const canvas = document.getElementById("iaClustersChart");
  if (!canvas || !window.Chart) return;

  const colors = iaTheme();
  const palette = ["#ec4899", "#3b82f6", "#10b981"];

  const datasets = [0, 1, 2].map((clusterId) => {
    const subset = points.filter((p) => p.cluster === clusterId);
    return {
      label: `Cluster ${clusterId + 1}`,
      data: subset.map((p) => ({
        x: p.profissionais,
        y: p.vagas,
        r: Math.max(5, Math.round(p.desigualdade / 4)),
        competencia: p.competencia,
        desigualdade: p.desigualdade,
      })),
      backgroundColor: `${palette[clusterId]}B0`,
      borderColor: palette[clusterId],
      borderWidth: 1.5,
    };
  });

  if (iaClustersChartInstance) iaClustersChartInstance.destroy();

  iaClustersChartInstance = new Chart(canvas, {
    type: "bubble",
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: colors.tick } },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const d = ctx.raw;
              return `${d.competencia}: prof ${iaFmtInt(d.x)} | vagas ${iaFmtInt(d.y)} | desigualdade ${d.desigualdade}%`;
            },
          },
        },
      },
      scales: {
        x: {
          title: { display: true, text: "Profissionais", color: colors.tick },
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick },
        },
        y: {
          title: { display: true, text: "Vagas", color: colors.tick },
          grid: { color: colors.grid, drawBorder: false },
          ticks: { color: colors.tick },
        },
      },
    },
  });
}

function iaRenderClustersTable(summary) {
  const tbody = document.getElementById("iaClustersBody");
  if (!tbody) return;

  tbody.innerHTML = summary
    .map(
      (s) => `
      <tr>
        <td><span class="ia-badge ia-cluster-${s.cluster}">Cluster ${s.cluster + 1}</span></td>
        <td>${s.membros.join(", ")}</td>
        <td>${iaFmtInt(Math.round(s.profissionaisMed))}</td>
        <td>${iaFmtInt(Math.round(s.vagasMed))}</td>
        <td>${iaFmtPct(s.desigualdadeMed)}</td>
      </tr>
    `,
    )
    .join("");
}

function initInferenciasAvancadasSection() {
  const lacunas = iaBuildLacunas();
  iaRenderLacunasTable(lacunas);
  iaRenderLacunasChart(lacunas);
  iaRenderRoteirosChart(lacunas);

  const clusters = iaBuildClusters();
  iaRenderClustersChart(clusters.points);
  iaRenderClustersTable(clusters.summary);
}
window.rerenderInferenciasAvancadasCharts = function () {
  initInferenciasAvancadasSection();
};

/* =========================
   Alertas e Sugestões
========================= */
function asFmtPct(v) {
  return fmtPctBR(v, 2, 2);
}

function asSeverity(gap) {
  if (gap >= 60) return { label: "Crítica", cls: "as-sev-critica" };
  if (gap >= 40) return { label: "Alta", cls: "as-sev-alta" };
  if (gap >= 30) return { label: "Média", cls: "as-sev-media" };
  return { label: "Atenção", cls: "as-sev-atencao" };
}

function asRenderKpis() {
  const el = document.getElementById("asKpiGrid");
  if (!el) return;

  const totalGenero = asGeneroAlerts.length;
  const totalDados = asDadosAlerts.length;
  const total = totalGenero + totalDados;
  const maxGap = Math.max(...asGeneroAlerts.map((a) => a.gap));
  const criticos = asGeneroAlerts.filter((a) => a.gap >= 60).length;

  const cards = [
    { label: "Total de alertas", value: total },
    { label: "Alertas de gênero", value: totalGenero },
    { label: "Alertas de dados", value: totalDados },
    { label: "Alertas críticos (≥60%)", value: criticos },
    { label: "Maior gap de gênero", value: asFmtPct(maxGap) },
  ];

  el.innerHTML = cards
    .map(
      (c) => `
      <div class="as-kpi-card">
        <div class="as-kpi-label">${c.label}</div>
        <div class="as-kpi-value">${c.value}</div>
      </div>
    `,
    )
    .join("");
}

function asRenderGeneroTable() {
  const tbody = document.getElementById("asGeneroBody");
  if (!tbody) return;

  const rows = [...asGeneroAlerts].sort((a, b) => b.gap - a.gap);

  tbody.innerHTML = rows
    .map((r) => {
      const sev = asSeverity(r.gap);
      return `
        <tr>
          <td>${r.competencia}</td>
          <td>${asFmtPct(r.gap)}</td>
          <td><span class="as-badge ${sev.cls}">${sev.label}</span></td>
          <td>Gap de gênero elevado (${asFmtPct(r.gap)})</td>
        </tr>
      `;
    })
    .join("");
}

function asRenderDadosTable() {
  const tbody = document.getElementById("asDadosBody");
  if (!tbody) return;

  tbody.innerHTML = asDadosAlerts
    .map(
      (modulo) => `
      <tr>
        <td>${modulo}</td>
        <td><span class="as-badge as-status-sem-dados">Sem dados</span></td>
        <td>${modulo} sem dados carregados</td>
      </tr>
    `,
    )
    .join("");
}

function initAlertasSugestoesSection() {
  asRenderKpis();
  asRenderGeneroTable();
  asRenderDadosTable();
}

/* =========================
   Legenda das Fórmulas
========================= */
function lfTipoBadge(tipo) {
  if (tipo === "pressao")
    return '<span class="lf-badge lf-badge-pressao">Pressão</span>';
  if (tipo === "genero")
    return '<span class="lf-badge lf-badge-genero">Gênero</span>';
  if (tipo === "previsao")
    return '<span class="lf-badge lf-badge-previsao">Previsão</span>';
  if (tipo === "kpi") return '<span class="lf-badge lf-badge-kpi">KPI</span>';
  return '<span class="lf-badge lf-badge-gap">Gap</span>';
}

function lfRenderKpis() {
  const el = document.getElementById("lfKpiGrid");
  if (!el) return;

  const total = lfFormulas.length;
  const formulasGap = lfFormulas.filter((f) => f.tipo === "gap").length;
  const formulasPressao = lfFormulas.filter((f) => f.tipo === "pressao").length;
  const formulasGenero = lfFormulas.filter((f) => f.tipo === "genero").length;

  const cards = [
    { label: "Total de fórmulas", value: total },
    { label: "Fórmulas de gap", value: formulasGap },
    { label: "Fórmulas de pressão", value: formulasPressao },
    { label: "Fórmulas de gênero", value: formulasGenero },
  ];

  el.innerHTML = cards
    .map(
      (c) => `
      <div class="lf-kpi-card">
        <div class="lf-kpi-label">${c.label}</div>
        <div class="lf-kpi-value">${c.value}</div>
      </div>
    `,
    )
    .join("");
}

function lfRenderTable() {
  const tbody = document.getElementById("legendaFormulasBody");
  if (!tbody) return;

  tbody.innerHTML = lfFormulas
    .map(
      (row) => `
      <tr>
        <td>${row.campo} ${lfTipoBadge(row.tipo)}</td>
        <td>${row.formula}</td>
        <td>${row.interpretacao}</td>
      </tr>
    `,
    )
    .join("");
}

function initLegendaFormulasSection() {
  lfRenderKpis();
  lfRenderTable();
}

/* =========================
   Bootstrap centralizado
========================= */
function initGlobal() {
  initApp();
  initDashboardToolbar();
  initTalentInsightsConsolidado();
  initCompetenciasRankingSection();
  renderCompetenciasTechTable();
  initGapsPressaoSection();
  renderDemandaFuturaChart();
  initDesigualdadeGeneroSection();
  initEducacaoCompetenciasEmergentesSection();
  initQualidadeDadosSection();
  initInferenciasAvancadasSection();
  initAlertasSugestoesSection();
  initLegendaFormulasSection();

  window.addEventListener("resize", () => {
    renderDistribuicaoGeneroChart();
  });
}

onDomReady(initGlobal, "initGlobal");
