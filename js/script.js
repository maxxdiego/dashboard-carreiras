/* =========================
   Dados
========================= */
const panorama = [
  {
    valor: "708 mil",
    label: "Profissionais na região",
    sublabel: "Perfis ativos no LinkedIn",
    icon: "fa-solid fa-users",
  },
  {
    valor: "65.542",
    label: "Mudanças de emprego",
    sublabel: "Trocas nos últimos 12 meses",
    icon: "fa-solid fa-arrows-rotate",
  },
  {
    valor: "5.110",
    label: "Anúncios de vaga",
    sublabel: "Média diária (últimos 30 dias)",
    icon: "fa-solid fa-briefcase",
  },
  {
    valor: "685",
    label: "Talentos engajados",
    sublabel: "Interagiram com a organização",
    icon: "fa-solid fa-paper-plane",
  },
  {
    valor: "48/52%",
    label: "Feminino / Masculino",
    sublabel: "Desigualdade de gênero: 4%",
    icon: "fa-solid fa-venus-mars",
  },
  {
    valor: "UNICAMP",
    label: "Principal empregador",
    sublabel: "6.703 profissionais",
    icon: "fa-solid fa-building-columns",
  },
];

const setoresDemanda = [
  {
    setor: "Comércio varejista",
    demanda: "Moderada",
    vagas: 325,
    crescimento: -2,
  },
  { setor: "TI e Serviços", demanda: "Muito alta", vagas: 325, crescimento: 0 },
  { setor: "Saúde", demanda: "Moderada", vagas: 93, crescimento: -1 },
  {
    setor: "Serviços prediais",
    demanda: "Nível baixo",
    vagas: 48,
    crescimento: -1,
  },
  { setor: "Adm. pública", demanda: "Nível baixo", vagas: "—", crescimento: 0 },
  { setor: "Alimentação", demanda: "Alto", vagas: 64, crescimento: -1 },
];

const setoresProfissionais = [
  { setor: "Comércio varejista", profissionais: 35943 },
  { setor: "TI e Serviços", profissionais: 28000 },
  { setor: "Saúde", profissionais: 25000 },
  { setor: "Educação", profissionais: 20000 },
  { setor: "Manufatura", profissionais: 18000 },
  { setor: "Serviços Financeiros", profissionais: 15000 },
];

const topEmpresasProfissionais = [
  { empresa: "UNICAMP", profissionais: 6703 },
  { empresa: "Bosch", profissionais: 4500 },
  { empresa: "IBM", profissionais: 3800 },
  { empresa: "CPFL Energia", profissionais: 3200 },
  { empresa: "Samsung", profissionais: 2900 },
  { empresa: "Hospital Vera Cruz", profissionais: 2500 },
];

const rotatividadeCrescimento = [
  { empresa: "UNICAMP", rotatividade: 12, crescimento: 5 },
  { empresa: "Bosch", rotatividade: 15, crescimento: 3 },
  { empresa: "IBM", rotatividade: 10, crescimento: 7 },
  { empresa: "CPFL Energia", rotatividade: 18, crescimento: 2 },
  { empresa: "Samsung", rotatividade: 14, crescimento: 4 },
  { empresa: "Hospital Vera Cruz", rotatividade: 20, crescimento: 1 },
];

const generoPrincipaisCargos = [
  { cargo: "Assist. administrativo", feminino: 73, masculino: 27 },
  { cargo: "Vendedor", feminino: 52, masculino: 48 },
  { cargo: "Professor", feminino: 64, masculino: 36 },
  { cargo: "Proprietário", feminino: 34, masculino: 66 },
  { cargo: "Gerente", feminino: 39, masculino: 61 },
  { cargo: "Advogado", feminino: 54, masculino: 46 },
  { cargo: "Caixa", feminino: 86, masculino: 14 },
  { cargo: "Técnico de enf.", feminino: 82, masculino: 18 },
  { cargo: "Diretor", feminino: 22, masculino: 78 },
  { cargo: "Recepcionista", feminino: 91, masculino: 9 },
];

const competenciasComuns = [
  { competencia: "Habilidades analíticas", count: 70 },
  { competencia: "Análise de dados", count: 65 },
  { competencia: "Ciclo PDCA", count: 58 },
  { competencia: "Linhas de produção", count: 50 },
  { competencia: "5S", count: 45 },
  { competencia: "Sistemas operacionais", count: 40 },
  { competencia: "Produtos SAP", count: 35 },
  { competencia: "Gestão de vendas", count: 30 },
  { competencia: "Análise financeira", count: 28 },
  { competencia: "Melhoria contínua", count: 25 },
];

const competenciasCrescimento = [
  { competencia: "Corte em cubos", crescimento: 22 },
  { competencia: "Ajuste de seguro", crescimento: 15 },
  { competencia: "Relatórios KPI", crescimento: 14 },
  { competencia: "Processos adm.", crescimento: 13 },
  { competencia: "Microsoft PowerApps", crescimento: 12 },
  { competencia: "Implementação de KPI", crescimento: 11 },
  { competencia: "CRM", crescimento: 10 },
  { competencia: "Comercial", crescimento: 10 },
  { competencia: "Satisfação do cliente", crescimento: 10 },
];

const nivelFormacao = [
  { nivel: "Bacharelado", valor: 50 },
  { nivel: "MBA", valor: 19 },
  { nivel: "Mestrado", valor: 21 },
  { nivel: "Doutorado", valor: 5 },
  { nivel: "Nível técnico", valor: 5 },
];

const areasEstudo = [
  { area: "Administração", valor: 28000 },
  { area: "Direito", valor: 23000 },
  { area: "Adm. e Negócios", valor: 19000 },
  { area: "RH", valor: 16000 },
  { area: "Logística", valor: 13000 },
  { area: "Marketing", valor: 12500 },
  { area: "TI", valor: 12000 },
  { area: "Educação", valor: 10000 },
  { area: "Ciência Comp.", valor: 9500 },
  { area: "Psicologia", valor: 9000 },
];

const instituicoes = [
  { nome: "PUC-Campinas", profissionais: 44269, recem: 6091 },
  { nome: "UNICAMP", profissionais: 40467, recem: 8825 },
  { nome: "UNIP", profissionais: 34683, recem: 5752 },
  { nome: "Anhanguera", profissionais: 32971, recem: 7480 },
  { nome: "FGV", profissionais: 13464, recem: 2044 },
  { nome: "USF", profissionais: 10992, recem: 2516 },
];

const fluxoLocalidade = [
  { local: "São Paulo", saldo: 1500 },
  { local: "Campinas", saldo: 0 },
  { local: "Ribeirão Preto", saldo: -300 },
  { local: "Jundiaí", saldo: 200 },
  { local: "Sorocaba", saldo: -150 },
];

const fluxoSetor = [
  { setor: "TI e Serviços", saldo: 400 },
  { setor: "Comércio varejista", saldo: 0 },
  { setor: "Saúde", saldo: -200 },
  { setor: "Manufatura", saldo: 100 },
  { setor: "Serviços Prediais", saldo: -50 },
];

const engajamento = [
  { label: "Total engajados", valor: 685 },
  { label: "Visitaram Company Page", valor: 274 },
  { label: "Novos seguidores", valor: 213 },
  { label: "Interagiram com posts", valor: 300 },
  { label: "Visualizaram vagas anunciadas", valor: 3 },
];

const propostasValor = [
  { fator: "Salário e Benefícios", consenso: 85 },
  { fator: "Equilíbrio Vida/Trabalho", consenso: 78 },
  { fator: "Oportunidades de Crescimento", consenso: 70 },
  { fator: "Cultura da Empresa", consenso: 65 },
  { fator: "Impacto do Trabalho", consenso: 60 },
];

const perfis = [
  {
    nome: "Douglas Pacifico",
    cargo: "Diretor – Facility Management e Real Estate – América Latina",
    local: "Brasil",
    empresa: "Bosch",
  },
  {
    nome: "Pedro Martini",
    cargo: "Diretor de Tecnologia | CIO | Inovação | Transformação Digital",
    local: "Campinas, SP",
    empresa: "Cotrijal Cooperativa",
  },
  {
    nome: "Ricardo Bonassi, MBA",
    cargo: "Sr. Director of Business Development – Brazil, LATAM",
    local: "Campinas, SP",
    empresa: "nativeMsg",
  },
  {
    nome: "Luciano Benato",
    cargo: "CTO | Governo & Saúde | Microsoft · AWS · IBM | PMP",
    local: "Brasil",
    empresa: "BSM Group",
  },
  {
    nome: "Rodrigo Zenji Hida",
    cargo: "Head of Software Engineering",
    local: "Campinas e Região",
    empresa: "Superlógica",
  },
  {
    nome: "Leonardo Zeferino",
    cargo: "Acelerando negócios com IA | Agentes de IA | Founder na FAST",
    local: "Campinas, SP",
    empresa: "FAST Builders",
  },
  {
    nome: "Juliana Barbosa",
    cargo: "Head of AI Platform | Product",
    local: "Campinas, SP",
    empresa: "Cayena",
  },
  {
    nome: "Carlos A. Baldessini",
    cargo: "Executivo RH | Gerente Recursos Humanos | Business Partner",
    local: "Campinas, SP",
    empresa: "Aeroportos Brasil Viracopos",
  },
];

/* =========================
   Helpers
========================= */
const fmtBR = (v) => Number(v).toLocaleString("pt-BR");
const isDarkTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark";

const chartInstances = {};
function upsertChart(key, canvas, config) {
  if (!canvas) return;
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
   Renderers
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

function normalizeTxt(v = "") {
  return v
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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
        <span class="marca-kpi-icon"><i class="${
          e.icon || getEngajamentoIcon(e.label)
        }" aria-hidden="true"></i></span>
        <div>
          <div class="marca-kpi-title">${e.label}</div>
          <div class="marca-kpi-subtitle">${
            e.subtitulo || getEngajamentoSubtitle(e.label)
          }</div>
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
        <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i>${
          p.local ?? "-"
        }</span>
        <span><i class="fa-solid fa-building" aria-hidden="true"></i>${
          p.empresa ?? "-"
        }</span>
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

    if (typeof rerenderCharts === "function") rerenderCharts();
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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

/* ===== Filtros + CSV ===== */
function normalizeText(v = "") {
  return v
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function setDefaultPeriod() {
  const periodInput = document.getElementById("filterPeriod");
  if (!periodInput || periodInput.value) return;
  const now = new Date();
  periodInput.value = `${now.getFullYear()}-${String(
    now.getMonth() + 1,
  ).padStart(2, "0")}`;
}

function applyDashboardFilters() {
  const keyword = normalizeText(
    document.getElementById("filterKeyword")?.value || "",
  );
  const category = document.getElementById("filterCategory")?.value || "";

  // Panorama (section)
  const panorama = document.querySelector(".panorama-geral");
  if (panorama) {
    const catOk = !category || category === "panorama";
    const txt = normalizeText(panorama.textContent || "");
    const kwOk = !keyword || txt.includes(keyword);
    panorama.style.display = catOk && kwOk ? "" : "none";
  }

  // Accordions
  document.querySelectorAll("details.accordion").forEach((acc) => {
    const accCategory = acc.dataset.category || "";
    const catOk = !category || category === accCategory;
    const contentText = normalizeText(acc.textContent || "");
    const kwOk = !keyword || contentText.includes(keyword);

    acc.style.display = catOk && kwOk ? "" : "none";
  });
}

function csvEscape(value) {
  const v = value == null ? "" : String(value);
  return `"${v.replace(/"/g, '""')}"`;
}

function collectVisibleDataRows() {
  const rows = [["Tipo", "Seção", "Campo", "Valor"]];

  const keyword = document.getElementById("filterKeyword")?.value || "";
  const period = document.getElementById("filterPeriod")?.value || "";
  const category = document.getElementById("filterCategory")?.value || "";

  rows.push(["Filtro", "Global", "Palavra-chave", keyword]);
  rows.push(["Filtro", "Global", "Período", period]);
  rows.push(["Filtro", "Global", "Categoria", category || "Todas"]);

  // KPIs Panorama
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

  // Tabelas visíveis
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

    // Cards de engajamento
    acc.querySelectorAll(".marca-kpi-item").forEach((item) => {
      const campo = (
        item.querySelector(".marca-kpi-title")?.textContent || ""
      ).trim();
      const valor = (
        item.querySelector(".marca-kpi-value")?.textContent || ""
      ).trim();
      if (campo || valor) rows.push(["KPI", sectionName, campo, valor]);
    });

    // Perfis
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
  const csv = "\uFEFF" + rows.map((r) => r.map(csvEscape).join(";")).join("\n");

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

  // Botão importar no mesmo layout do modelo
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

// /* Chame dentro do seu initApp() */
// const _oldInitApp = typeof initApp === "function" ? initApp : null;
// if (_oldInitApp) {
//   initApp = function () {
//     _oldInitApp();
//     initDashboardToolbar();
//   };
// }

function safeRun(fn, name) {
  try {
    if (typeof fn === "function") fn();
  } catch (e) {
    console.error(`[${name}]`, e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  safeRun(initApp, "initApp");
  safeRun(initDashboardToolbar, "initDashboardToolbar");
  safeRun(initCompetenciasRankingSection, "initCompetenciasRankingSection");
  safeRun(renderCompetenciasTechTable, "renderCompetenciasTechTable");
  safeRun(initGapsPressaoSection, "initGapsPressaoSection");
});

// TALENT INSIGHTS

/* ===== Talent Insights (consolidado) ===== */
const talentInsightsData = {
  kpis: [
    {
      label: "Competências mapeadas",
      valor: 100,
      sufixo: "",
      nota: "Total geral",
    },
    { label: "Vagas totais", valor: 4046, sufixo: "", nota: "Carga atual" },
    {
      label: "Talentos mapeados",
      valor: 170,
      sufixo: "",
      nota: "Base interna",
    },
    {
      label: "Gap de gênero",
      valor: 26.0,
      sufixo: "%",
      nota: "Diferença média F/M",
      isPercent: true,
    },
  ],
  insights: [
    {
      title: "Maior demanda bruta",
      text: "Satisfação do cliente lidera em anúncios de vaga, com 480 registros na carga atual.",
      color: "#1d4ed8",
    },
    {
      title: "Maior gap demanda x talentos internos",
      text: "Satisfação do cliente tem gap de 480, combinando alta demanda com baixa presença interna mapeada.",
      color: "#1f6feb",
    },
    {
      title: "Maior desequilíbrio de gênero",
      text: "JavaScript apresenta diferença de 76% entre os percentuais feminino e masculino.",
      color: "#7c3aed",
    },
    {
      title: "Pipeline formativo",
      text: "Data Science possui 50,7% de recém-formados entre os profissionais da área.",
      color: "#059669",
    },
  ],
  miniChart: {
    labels: [
      "Satisfação do cliente",
      "Planejamento",
      "Power BI",
      "Comunicação",
      "Excel",
      "Análise de dados",
    ],
    vagas: [480, 420, 310, 250, 220, 190],
  },
};

function formatPtBr(value, isPercent = false) {
  if (isPercent) {
    return `${Number(value).toLocaleString("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}%`;
  }
  return Number(value).toLocaleString("pt-BR");
}

function renderOverviewKpis() {
  const container = document.getElementById("overviewKpis");
  if (!container) return;

  container.innerHTML = talentInsightsData.kpis
    .map((kpi) => {
      const valor = kpi.isPercent
        ? formatPtBr(kpi.valor, true)
        : `${formatPtBr(kpi.valor)}${kpi.sufixo || ""}`;

      return `
        <article class="kpi-row-card">
          <div class="kpi-row-label">${kpi.label}</div>
          <div class="kpi-row-value">${valor}</div>
          <div class="kpi-row-note">${kpi.nota}</div>
        </article>
      `;
    })
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

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const tickColor = isDark ? "#cbd5e1" : "#6b7280";
  const gridColor = isDark ? "rgba(148,163,184,0.2)" : "rgba(15,23,42,0.08)";

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
        legend: {
          position: "top",
          labels: { color: tickColor },
        },
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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTalentInsightsConsolidado);
} else {
  initTalentInsightsConsolidado();
}

const talentKpis = [
  {
    value: "100",
    label: "Competências mapeadas",
    subtitle: "Total geral",
    icon: "fa-solid fa-list-check",
    color: "#0ea5e9",
  },
  {
    value: "4.046",
    label: "Vagas totais",
    subtitle: "Carga atual",
    icon: "fa-solid fa-briefcase",
    color: "#f59e0b",
  },
  {
    value: "170",
    label: "Talentos mapeados",
    subtitle: "Base interna",
    icon: "fa-solid fa-star",
    color: "#3b82f6",
  },
  {
    value: "26,0%",
    label: "Gap de gênero",
    subtitle: "Diferença média F/M",
    icon: "fa-solid fa-venus-mars",
    color: "#ec4899",
  },
];

function renderOverviewKpis() {
  const container = document.getElementById("overviewKpis");
  if (!container) return;

  container.innerHTML = talentKpis
    .map(
      (kpi) => `
    <article class="talent-kpi-card">
      <div class="talent-kpi-icon" style="--icon-color:${kpi.color}">
        <i class="${kpi.icon}" aria-hidden="true"></i>
      </div>
      <div class="talent-kpi-value">${kpi.value}</div>
      <div class="talent-kpi-label">${kpi.label}</div>
      <div class="talent-kpi-subtitle">${kpi.subtitle}</div>
    </article>
  `,
    )
    .join("");
}

/* ===== Competências - Ranking Geral (dados mockados da tabela do PDF) ===== */
const competenciasRanking = [
  {
    rank: 1,
    competencia: "Habilidades analíticas",
    profissionais: 15214,
    pctTotal: 5.25,
    vagas: 72,
    talentosInternos: 6,
    gap: 66,
    vagas1000: 4.7,
    feminino: 46,
    masculino: 54,
  },
  {
    rank: 2,
    competencia: "Análise de dados",
    profissionais: 13311,
    pctTotal: 4.6,
    vagas: 1,
    talentosInternos: 4,
    gap: -3,
    vagas1000: 0.1,
    feminino: 46,
    masculino: 54,
  },
  {
    rank: 3,
    competencia: "Gestão de vendas",
    profissionais: 9735,
    pctTotal: 3.36,
    vagas: 7,
    talentosInternos: 1,
    gap: 6,
    vagas1000: 0.7,
    feminino: 34,
    masculino: 66,
  },
  {
    rank: 4,
    competencia: "Análise financeira",
    profissionais: 9194,
    pctTotal: 3.17,
    vagas: 3,
    talentosInternos: 4,
    gap: -1,
    vagas1000: 0.3,
    feminino: 49,
    masculino: 51,
  },
  {
    rank: 5,
    competencia: "Planejamento empresarial",
    profissionais: 8459,
    pctTotal: 2.92,
    vagas: 7,
    talentosInternos: 6,
    gap: 1,
    vagas1000: 0.8,
    feminino: 33,
    masculino: 67,
  },
  {
    rank: 6,
    competencia: "Linhas de produção",
    profissionais: 7823,
    pctTotal: 2.7,
    vagas: 29,
    talentosInternos: 1,
    gap: 28,
    vagas1000: 3.7,
    feminino: 38,
    masculino: 62,
  },
  {
    rank: 7,
    competencia: "Sistemas operacionais",
    profissionais: 7615,
    pctTotal: 2.63,
    vagas: 70,
    talentosInternos: 7,
    gap: 63,
    vagas1000: 9.2,
    feminino: 34,
    masculino: 66,
  },
  {
    rank: 8,
    competencia: "Comercial",
    profissionais: 7523,
    pctTotal: 2.6,
    vagas: 159,
    talentosInternos: 1,
    gap: 158,
    vagas1000: 21.1,
    feminino: 35,
    masculino: 65,
  },
  {
    rank: 9,
    competencia: "Suporte administrativo",
    profissionais: 7509,
    pctTotal: 2.59,
    vagas: 17,
    talentosInternos: 2,
    gap: 15,
    vagas1000: 2.3,
    feminino: 67,
    masculino: 33,
  },
  {
    rank: 10,
    competencia: "Ciclo PDCA",
    profissionais: 7314,
    pctTotal: 2.53,
    vagas: 4,
    talentosInternos: 5,
    gap: -1,
    vagas1000: 0.5,
    feminino: 29,
    masculino: 71,
  },
  {
    rank: 11,
    competencia: "Sistemas operacionais (variação)",
    profissionais: 7182,
    pctTotal: 2.48,
    vagas: 0,
    talentosInternos: 7,
    gap: -7,
    vagas1000: 0.0,
    feminino: 34,
    masculino: 66,
  },
  {
    rank: 12,
    competencia: "Análise de negócios",
    profissionais: 7050,
    pctTotal: 2.43,
    vagas: 1,
    talentosInternos: 0,
    gap: 1,
    vagas1000: 0.1,
    feminino: 41,
    masculino: 59,
  },
  {
    rank: 13,
    competencia: "Capacidade analítica",
    profissionais: 6997,
    pctTotal: 2.42,
    vagas: 0,
    talentosInternos: 2,
    gap: -2,
    vagas1000: 0.0,
    feminino: 46,
    masculino: 54,
  },
  {
    rank: 14,
    competencia: "Contas a pagar",
    profissionais: 6889,
    pctTotal: 2.38,
    vagas: 61,
    talentosInternos: 1,
    gap: 60,
    vagas1000: 8.9,
    feminino: 67,
    masculino: 33,
  },
  {
    rank: 15,
    competencia: "Gestão de relacionamento com o cliente (CRM)",
    profissionais: 6315,
    pctTotal: 2.18,
    vagas: 157,
    talentosInternos: 0,
    gap: 157,
    vagas1000: 24.9,
    feminino: 46,
    masculino: 54,
  },
  {
    rank: 16,
    competencia: "AutoCAD",
    profissionais: 5959,
    pctTotal: 2.06,
    vagas: 1,
    talentosInternos: 5,
    gap: -4,
    vagas1000: 0.2,
    feminino: 33,
    masculino: 67,
  },
  {
    rank: 17,
    competencia: "Finanças",
    profissionais: 5949,
    pctTotal: 2.05,
    vagas: 216,
    talentosInternos: 3,
    gap: 213,
    vagas1000: 36.3,
    feminino: 48,
    masculino: 52,
  },
  {
    rank: 18,
    competencia: "Adobe Photoshop",
    profissionais: 5784,
    pctTotal: 2.0,
    vagas: 7,
    talentosInternos: 3,
    gap: 4,
    vagas1000: 1.2,
    feminino: 41,
    masculino: 59,
  },
  {
    rank: 19,
    competencia: "Vendas a varejo",
    profissionais: 5665,
    pctTotal: 1.96,
    vagas: 0,
    talentosInternos: 0,
    gap: 0,
    vagas1000: 0.0,
    feminino: 53,
    masculino: 47,
  },
  {
    rank: 20,
    competencia: "Relacionamentos interpessoais",
    profissionais: 5664,
    pctTotal: 1.96,
    vagas: 0,
    talentosInternos: 2,
    gap: -2,
    vagas1000: 0.0,
    feminino: 52,
    masculino: 48,
  },
  {
    rank: 21,
    competencia: "Relacionamento com clientes",
    profissionais: 5534,
    pctTotal: 1.91,
    vagas: 5,
    talentosInternos: 1,
    gap: 4,
    vagas1000: 0.9,
    feminino: 51,
    masculino: 49,
  },
  {
    rank: 22,
    competencia: "Recursos humanos (RH)",
    profissionais: 5452,
    pctTotal: 1.88,
    vagas: 116,
    talentosInternos: 6,
    gap: 110,
    vagas1000: 21.3,
    feminino: 69,
    masculino: 31,
  },
  {
    rank: 23,
    competencia: "Produtos SAP",
    profissionais: 5204,
    pctTotal: 1.8,
    vagas: 23,
    talentosInternos: 3,
    gap: 20,
    vagas1000: 4.4,
    feminino: 35,
    masculino: 65,
  },
  {
    rank: 24,
    competencia: "Gestão logística",
    profissionais: 5074,
    pctTotal: 1.75,
    vagas: 92,
    talentosInternos: 2,
    gap: 90,
    vagas1000: 18.1,
    feminino: 27,
    masculino: 73,
  },
  {
    rank: 25,
    competencia: "Gestão de pessoas",
    profissionais: 5023,
    pctTotal: 1.73,
    vagas: 3,
    talentosInternos: 3,
    gap: 0,
    vagas1000: 0.6,
    feminino: 43,
    masculino: 57,
  },
  {
    rank: 26,
    competencia: "Contas a receber",
    profissionais: 5020,
    pctTotal: 1.73,
    vagas: 81,
    talentosInternos: 0,
    gap: 81,
    vagas1000: 16.1,
    feminino: 66,
    masculino: 34,
  },
  {
    rank: 27,
    competencia: "Suporte ao cliente",
    profissionais: 4871,
    pctTotal: 1.68,
    vagas: 6,
    talentosInternos: 0,
    gap: 6,
    vagas1000: 1.2,
    feminino: 57,
    masculino: 43,
  },
  {
    rank: 28,
    competencia: "Processo de faturamento",
    profissionais: 4854,
    pctTotal: 1.68,
    vagas: 0,
    talentosInternos: 1,
    gap: -1,
    vagas1000: 0.0,
    feminino: 66,
    masculino: 34,
  },
  {
    rank: 29,
    competencia: "ERP (Planejamento de recursos empresariais)",
    profissionais: 4833,
    pctTotal: 1.67,
    vagas: 96,
    talentosInternos: 5,
    gap: 91,
    vagas1000: 19.9,
    feminino: 29,
    masculino: 71,
  },
  {
    rank: 30,
    competencia: "Gestão operacional",
    profissionais: 4680,
    pctTotal: 1.62,
    vagas: 0,
    talentosInternos: 4,
    gap: -4,
    vagas1000: 0.0,
    feminino: 38,
    masculino: 62,
  },
  {
    rank: 31,
    competencia: "Engenharia",
    profissionais: 4680,
    pctTotal: 1.62,
    vagas: 181,
    talentosInternos: 5,
    gap: 176,
    vagas1000: 38.7,
    feminino: 17,
    masculino: 83,
  },
  {
    rank: 32,
    competencia: "SQL",
    profissionais: 4635,
    pctTotal: 1.6,
    vagas: 26,
    talentosInternos: 4,
    gap: 22,
    vagas1000: 5.6,
    feminino: 15,
    masculino: 85,
  },
  {
    rank: 33,
    competencia: "5S",
    profissionais: 4547,
    pctTotal: 1.57,
    vagas: 16,
    talentosInternos: 2,
    gap: 14,
    vagas1000: 3.5,
    feminino: 26,
    masculino: 74,
  },
  {
    rank: 34,
    competencia: "Contabilidade",
    profissionais: 4388,
    pctTotal: 1.52,
    vagas: 407,
    talentosInternos: 3,
    gap: 404,
    vagas1000: 92.8,
    feminino: 48,
    masculino: 52,
  },
  {
    rank: 35,
    competencia: "Implementação de KPI",
    profissionais: 4258,
    pctTotal: 1.47,
    vagas: 0,
    talentosInternos: 3,
    gap: -3,
    vagas1000: 0.0,
    feminino: 33,
    masculino: 67,
  },
  {
    rank: 36,
    competencia: "Funções de recepcionista",
    profissionais: 4254,
    pctTotal: 1.47,
    vagas: 10,
    talentosInternos: 0,
    gap: 10,
    vagas1000: 2.4,
    feminino: 82,
    masculino: 18,
  },
  {
    rank: 37,
    competencia: "Indicadores-chave de desempenho",
    profissionais: 4253,
    pctTotal: 1.47,
    vagas: 37,
    talentosInternos: 3,
    gap: 34,
    vagas1000: 8.7,
    feminino: 34,
    masculino: 66,
  },
  {
    rank: 38,
    competencia: "Orçamento",
    profissionais: 4247,
    pctTotal: 1.47,
    vagas: 334,
    talentosInternos: 2,
    gap: 332,
    vagas1000: 78.6,
    feminino: 39,
    masculino: 61,
  },
  {
    rank: 39,
    competencia: "Arrecadação de contas a receber",
    profissionais: 4216,
    pctTotal: 1.46,
    vagas: 0,
    talentosInternos: 0,
    gap: 0,
    vagas1000: 0.0,
    feminino: 67,
    masculino: 33,
  },
  {
    rank: 40,
    competencia: "Direito civil",
    profissionais: 4143,
    pctTotal: 1.43,
    vagas: 4,
    talentosInternos: 1,
    gap: 3,
    vagas1000: 1.0,
    feminino: 54,
    masculino: 46,
  },
  {
    rank: 41,
    competencia: "Experiência do cliente",
    profissionais: 4001,
    pctTotal: 1.38,
    vagas: 67,
    talentosInternos: 1,
    gap: 66,
    vagas1000: 16.7,
    feminino: 56,
    masculino: 44,
  },
  {
    rank: 42,
    competencia: "Microsoft Project",
    profissionais: 3948,
    pctTotal: 1.36,
    vagas: 0,
    talentosInternos: 4,
    gap: -4,
    vagas1000: 0.0,
    feminino: 23,
    masculino: 77,
  },
  {
    rank: 43,
    competencia: "Marketing digital",
    profissionais: 3928,
    pctTotal: 1.36,
    vagas: 8,
    talentosInternos: 1,
    gap: 7,
    vagas1000: 2.0,
    feminino: 46,
    masculino: 54,
  },
  {
    rank: 44,
    competencia: "Satisfação do cliente",
    profissionais: 3846,
    pctTotal: 1.33,
    vagas: 480,
    talentosInternos: 0,
    gap: 480,
    vagas1000: 124.8,
    feminino: 47,
    masculino: 53,
  },
  {
    rank: 45,
    competencia: "Litígios",
    profissionais: 3761,
    pctTotal: 1.3,
    vagas: 94,
    talentosInternos: 1,
    gap: 93,
    vagas1000: 25.0,
    feminino: 53,
    masculino: 47,
  },
];

const rankingState = {
  page: 1,
  perPage: 10,
};

function fmtInt(v) {
  return Number(v).toLocaleString("pt-BR");
}

function fmtPct(v) {
  return `${Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}%`;
}

function fmtVagas1000(v) {
  return Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
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
    html += `<button type="button" class="page-number ${
      p === current ? "active" : ""
    }" data-page="${p}">${p}</button>`;
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

/* Chame no seu initApp() */
document.addEventListener("DOMContentLoaded", initCompetenciasRankingSection);

/* ===== Dados: somente tabela "Competências tech e dados" ===== */
const competenciasTechDados = [
  {
    rank: 71,
    competencia: "JavaScript",
    profissionais: 3076,
    pctTotal: 1.06,
    vagas: 36,
    talentosInternos: 3,
    gap: 33,
    vagas1000: 11.7,
    feminino: 12,
    masculino: 88,
  },
  {
    rank: 32,
    competencia: "SQL",
    profissionais: 4635,
    pctTotal: 1.6,
    vagas: 26,
    talentosInternos: 4,
    gap: 22,
    vagas1000: 5.6,
    feminino: 15,
    masculino: 85,
  },
  {
    rank: 67,
    competencia: "Python",
    profissionais: 3189,
    pctTotal: 1.1,
    vagas: 16,
    talentosInternos: 3,
    gap: 13,
    vagas1000: 5.0,
    feminino: 15,
    masculino: 85,
  },
  {
    rank: 31,
    competencia: "Engenharia",
    profissionais: 4680,
    pctTotal: 1.62,
    vagas: 181,
    talentosInternos: 5,
    gap: 176,
    vagas1000: 38.7,
    feminino: 17,
    masculino: 83,
  },
  {
    rank: 90,
    competencia: "HTML",
    profissionais: 2763,
    pctTotal: 0.95,
    vagas: 68,
    talentosInternos: 3,
    gap: 65,
    vagas1000: 24.6,
    feminino: 18,
    masculino: 82,
  },
  {
    rank: 94,
    competencia: "Banco de dados",
    profissionais: 2743,
    pctTotal: 0.95,
    vagas: 10,
    talentosInternos: 2,
    gap: 8,
    vagas1000: 3.6,
    feminino: 19,
    masculino: 81,
  },
  {
    rank: 60,
    competencia: "Microsoft Power BI",
    profissionais: 3369,
    pctTotal: 1.16,
    vagas: 0,
    talentosInternos: 2,
    gap: -2,
    vagas1000: 0.0,
    feminino: 32,
    masculino: 68,
  },
  {
    rank: 7,
    competencia: "Sistemas operacionais",
    profissionais: 7615,
    pctTotal: 2.63,
    vagas: 70,
    talentosInternos: 7,
    gap: 63,
    vagas1000: 9.2,
    feminino: 34,
    masculino: 66,
  },
  {
    rank: 11,
    competencia: "Sistemas operacionais",
    profissionais: 7182,
    pctTotal: 2.48,
    vagas: 0,
    talentosInternos: 7,
    gap: -7,
    vagas1000: 0.0,
    feminino: 34,
    masculino: 66,
  },
  {
    rank: 2,
    competencia: "Análise de dados",
    profissionais: 13311,
    pctTotal: 4.6,
    vagas: 1,
    talentosInternos: 4,
    gap: -3,
    vagas1000: 0.1,
    feminino: 46,
    masculino: 54,
  },
];

function fmtIntBR(v) {
  return Number(v).toLocaleString("pt-BR");
}

function fmtPctBR(v) {
  return `${Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}%`;
}

function fmtDecimalBR(v) {
  return Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

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
        <td>${fmtPctBR(row.pctTotal)}</td>
        <td>${fmtIntBR(row.vagas)}</td>
        <td>${fmtIntBR(row.talentosInternos)}</td>
        <td class="${gapClass}">${gapSignal}${fmtIntBR(row.gap)}</td>
        <td>${fmtDecimalBR(row.vagas1000)}</td>
        <td>F ${row.feminino}% / M ${row.masculino}%</td>
      </tr>
    `;
    })
    .join("");
}

/* Chamada no bootstrap da página */
document.addEventListener("DOMContentLoaded", renderCompetenciasTechTable);

/* ===== Dados: seção Gaps e Pressão (PDF) ===== */

const maioresGaps = [
  {
    competencia: "Satisfação do cliente",
    vagas: 480,
    talentosInternos: 0,
    gap: 480,
    profissionais: 3846,
    pressao: 124.8,
    prioridade: "Alta",
  },
  {
    competencia: "Contabilidade",
    vagas: 407,
    talentosInternos: 3,
    gap: 404,
    profissionais: 4388,
    pressao: 92.8,
    prioridade: "Alta",
  },
  {
    competencia: "Educação",
    vagas: 389,
    talentosInternos: 6,
    gap: 383,
    profissionais: 3440,
    pressao: 113.1,
    prioridade: "Alta",
  },
  {
    competencia: "Orçamento",
    vagas: 334,
    talentosInternos: 2,
    gap: 332,
    profissionais: 4247,
    pressao: 78.6,
    prioridade: "Alta",
  },
  {
    competencia: "Finanças",
    vagas: 216,
    talentosInternos: 3,
    gap: 213,
    profissionais: 5949,
    pressao: 36.3,
    prioridade: "Média",
  },
  {
    competencia: "Engenharia",
    vagas: 181,
    talentosInternos: 5,
    gap: 176,
    profissionais: 4680,
    pressao: 38.7,
    prioridade: "Média",
  },
  {
    competencia: "Comercial",
    vagas: 159,
    talentosInternos: 1,
    gap: 158,
    profissionais: 7523,
    pressao: 21.1,
    prioridade: "Média",
  },
  {
    competencia: "Gestão de relacionamento com o cliente (CRM)",
    vagas: 157,
    talentosInternos: 0,
    gap: 157,
    profissionais: 6315,
    pressao: 24.9,
    prioridade: "Média",
  },
  {
    competencia: "Assistência médica",
    vagas: 120,
    talentosInternos: 0,
    gap: 120,
    profissionais: 2747,
    pressao: 43.7,
    prioridade: "Média",
  },
  {
    competencia: "Recursos humanos (RH)",
    vagas: 116,
    talentosInternos: 6,
    gap: 110,
    profissionais: 5452,
    pressao: 21.3,
    prioridade: "Média",
  },
  {
    competencia: "Litígios",
    vagas: 94,
    talentosInternos: 1,
    gap: 93,
    profissionais: 3761,
    pressao: 25.0,
    prioridade: "Monitorar",
  },
  {
    competencia: "ERP (Planejamento de recursos empresariais)",
    vagas: 96,
    talentosInternos: 5,
    gap: 91,
    profissionais: 4833,
    pressao: 19.9,
    prioridade: "Monitorar",
  },
  {
    competencia: "Gestão logística",
    vagas: 92,
    talentosInternos: 2,
    gap: 90,
    profissionais: 5074,
    pressao: 18.1,
    prioridade: "Monitorar",
  },
  {
    competencia: "Contas a receber",
    vagas: 81,
    talentosInternos: 0,
    gap: 81,
    profissionais: 5020,
    pressao: 16.1,
    prioridade: "Monitorar",
  },
  {
    competencia: "Serviços bancários",
    vagas: 78,
    talentosInternos: 0,
    gap: 78,
    profissionais: 2746,
    pressao: 28.4,
    prioridade: "Monitorar",
  },
  {
    competencia: "Experiência do cliente",
    vagas: 67,
    talentosInternos: 1,
    gap: 66,
    profissionais: 4001,
    pressao: 16.7,
    prioridade: "Monitorar",
  },
  {
    competencia: "Habilidades analíticas",
    vagas: 72,
    talentosInternos: 6,
    gap: 66,
    profissionais: 15214,
    pressao: 4.7,
    prioridade: "Monitorar",
  },
  {
    competencia: "HTML",
    vagas: 68,
    talentosInternos: 3,
    gap: 65,
    profissionais: 2763,
    pressao: 24.6,
    prioridade: "Monitorar",
  },
  {
    competencia: "Sistemas operacionais",
    vagas: 70,
    talentosInternos: 7,
    gap: 63,
    profissionais: 7615,
    pressao: 9.2,
    prioridade: "Monitorar",
  },
  {
    competencia: "Contas a pagar",
    vagas: 61,
    talentosInternos: 1,
    gap: 60,
    profissionais: 6889,
    pressao: 8.9,
    prioridade: "Monitorar",
  },
];

const pressaoContratacao = [
  {
    competencia: "Satisfação do cliente",
    vagas1000: 124.8,
    vagas: 480,
    profissionais: 3846,
    talentosInternos: 0,
    leitura: "Muito alta",
  },
  {
    competencia: "Educação",
    vagas1000: 113.1,
    vagas: 389,
    profissionais: 3440,
    talentosInternos: 6,
    leitura: "Muito alta",
  },
  {
    competencia: "Contabilidade",
    vagas1000: 92.8,
    vagas: 407,
    profissionais: 4388,
    talentosInternos: 3,
    leitura: "Alta",
  },
  {
    competencia: "Orçamento",
    vagas1000: 78.6,
    vagas: 334,
    profissionais: 4247,
    talentosInternos: 2,
    leitura: "Alta",
  },
  {
    competencia: "Assistência médica",
    vagas1000: 43.7,
    vagas: 120,
    profissionais: 2747,
    talentosInternos: 0,
    leitura: "Moderada",
  },
  {
    competencia: "Engenharia",
    vagas1000: 38.7,
    vagas: 181,
    profissionais: 4680,
    talentosInternos: 5,
    leitura: "Moderada",
  },
  {
    competencia: "Finanças",
    vagas1000: 36.3,
    vagas: 216,
    profissionais: 5949,
    talentosInternos: 3,
    leitura: "Moderada",
  },
  {
    competencia: "Serviços bancários",
    vagas1000: 28.4,
    vagas: 78,
    profissionais: 2746,
    talentosInternos: 0,
    leitura: "Moderada",
  },
  {
    competencia: "Litígios",
    vagas1000: 25.0,
    vagas: 94,
    profissionais: 3761,
    talentosInternos: 1,
    leitura: "Moderada",
  },
  {
    competencia: "Gestão de relacionamento com o cliente (CRM)",
    vagas1000: 24.9,
    vagas: 157,
    profissionais: 6315,
    talentosInternos: 0,
    leitura: "Moderada",
  },
  {
    competencia: "HTML",
    vagas1000: 24.6,
    vagas: 68,
    profissionais: 2763,
    talentosInternos: 3,
    leitura: "Moderada",
  },
  {
    competencia: "Recursos humanos (RH)",
    vagas1000: 21.3,
    vagas: 116,
    profissionais: 5452,
    talentosInternos: 6,
    leitura: "Moderada",
  },
  {
    competencia: "Comercial",
    vagas1000: 21.1,
    vagas: 159,
    profissionais: 7523,
    talentosInternos: 1,
    leitura: "Moderada",
  },
  {
    competencia: "ERP (Planejamento de recursos empresariais)",
    vagas1000: 19.9,
    vagas: 96,
    profissionais: 4833,
    talentosInternos: 5,
    leitura: "Baixa",
  },
  {
    competencia: "Relatórios financeiros",
    vagas1000: 18.2,
    vagas: 52,
    profissionais: 2856,
    talentosInternos: 1,
    leitura: "Baixa",
  },
  {
    competencia: "Gestão logística",
    vagas1000: 18.1,
    vagas: 92,
    profissionais: 5074,
    talentosInternos: 2,
    leitura: "Baixa",
  },
  {
    competencia: "Experiência do cliente",
    vagas1000: 16.7,
    vagas: 67,
    profissionais: 4001,
    talentosInternos: 1,
    leitura: "Baixa",
  },
  {
    competencia: "Conciliação bancária",
    vagas1000: 16.2,
    vagas: 49,
    profissionais: 3030,
    talentosInternos: 0,
    leitura: "Baixa",
  },
  {
    competencia: "Contas a receber",
    vagas1000: 16.1,
    vagas: 81,
    profissionais: 5020,
    talentosInternos: 0,
    leitura: "Baixa",
  },
  {
    competencia: "Enfermagem",
    vagas1000: 14.3,
    vagas: 47,
    profissionais: 3296,
    talentosInternos: 0,
    leitura: "Baixa",
  },
];

/* ===== Helpers ===== */
const gaps_fmtInt = (v) => Number(v).toLocaleString("pt-BR");
const gaps_fmtDec = (v) =>
  Number(v).toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

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

/* ===== Render ===== */
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
      <td><span class="badge-prio ${prioClass(r.prioridade)}">${
        r.prioridade
      }</span></td>
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
      <td><span class="badge-read ${leituraClass(r.leitura)}">${
        r.leitura
      }</span></td>
    </tr>
  `,
    )
    .join("");
}

function initGapsPressaoSection() {
  renderMaioresGapsTable();
  renderPressaoContratacaoTable();
}

document.addEventListener("DOMContentLoaded", initGapsPressaoSection);

/* ===== Demanda Futura ===== */
/* Substitua pelos dados reais da sua carga (valorAtual e valorAnterior) */
const demandaFuturaBase = [
  { competencia: "Satisfação do cliente", valorAtual: 480, valorAnterior: 420 },
  { competencia: "Contabilidade", valorAtual: 407, valorAnterior: 360 },
  { competencia: "Educação", valorAtual: 389, valorAnterior: 340 },
  { competencia: "Orçamento", valorAtual: 334, valorAnterior: 300 },
  { competencia: "Finanças", valorAtual: 216, valorAnterior: 190 },
  { competencia: "Engenharia", valorAtual: 181, valorAnterior: 160 },
  { competencia: "Comercial", valorAtual: 159, valorAnterior: 145 },
  { competencia: "CRM", valorAtual: 157, valorAnterior: 140 },
  { competencia: "Assistência médica", valorAtual: 120, valorAnterior: 108 },
  { competencia: "Recursos humanos (RH)", valorAtual: 116, valorAnterior: 105 },
];

function calcDemandaFutura(valorAtual, valorAnterior) {
  return valorAtual + (valorAtual - valorAnterior);
}

let demandaFuturaChartInstance = null;

function renderDemandaFuturaChart() {
  const canvas = document.getElementById("demandaFuturaChart");
  if (!canvas) return;

  const colors =
    typeof getChartColors === "function"
      ? getChartColors()
      : { grid: "#e5e7eb", secondary: "#64748b" };

  const serie = demandaFuturaBase.map((d) => ({
    ...d,
    demandaFutura: calcDemandaFutura(d.valorAtual, d.valorAnterior),
  }));

  // Ordena por projeção futura desc (leitura igual ao consolidado analítico)
  serie.sort((a, b) => b.demandaFutura - a.demandaFutura);

  const labels = serie.map((d) => d.competencia);
  const atual = serie.map((d) => d.valorAtual);
  const futura = serie.map((d) => d.demandaFutura);

  if (demandaFuturaChartInstance) demandaFuturaChartInstance.destroy();

  demandaFuturaChartInstance = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Demanda atual",
          data: atual,
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
          data: futura,
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
        legend: {
          labels: { color: colors.secondary },
        },
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

/* inicialização */
document.addEventListener("DOMContentLoaded", renderDemandaFuturaChart);

(() => {
  const distribuicaoGeneroData = [
    {
      competencia: "JavaScript",
      profissionais: 3076,
      feminino: 12,
      masculino: 88,
      diferenca: 76,
      vagas: 36,
    },
    {
      competencia: "SQL",
      profissionais: 4635,
      feminino: 15,
      masculino: 85,
      diferenca: 70,
      vagas: 26,
    },
    {
      competencia: "Python",
      profissionais: 3189,
      feminino: 15,
      masculino: 85,
      diferenca: 70,
      vagas: 16,
    },
    {
      competencia: "Recepção telefônica",
      profissionais: 2837,
      feminino: 84,
      masculino: 16,
      diferenca: 68,
      vagas: 0,
    },
    {
      competencia: "Engenharia",
      profissionais: 4680,
      feminino: 17,
      masculino: 83,
      diferenca: 66,
      vagas: 181,
    },
    {
      competencia: "Funções de recepcionista",
      profissionais: 4254,
      feminino: 82,
      masculino: 18,
      diferenca: 64,
      vagas: 10,
    },
    {
      competencia: "HTML",
      profissionais: 2763,
      feminino: 18,
      masculino: 82,
      diferenca: 64,
      vagas: 68,
    },
    {
      competencia: "Banco de dados",
      profissionais: 2743,
      feminino: 19,
      masculino: 81,
      diferenca: 62,
      vagas: 10,
    },
    {
      competencia: "Enfermagem",
      profissionais: 3296,
      feminino: 79,
      masculino: 21,
      diferenca: 58,
      vagas: 47,
    },
    {
      competencia: "Suporte técnico",
      profissionais: 3015,
      feminino: 21,
      masculino: 79,
      diferenca: 58,
      vagas: 4,
    },
    {
      competencia: "Microsoft Project",
      profissionais: 3948,
      feminino: 23,
      masculino: 77,
      diferenca: 54,
      vagas: 0,
    },
    {
      competencia: "5S",
      profissionais: 4547,
      feminino: 26,
      masculino: 74,
      diferenca: 48,
      vagas: 16,
    },
    {
      competencia: "Gestão logística",
      profissionais: 5074,
      feminino: 27,
      masculino: 73,
      diferenca: 46,
      vagas: 92,
    },
    {
      competencia: "Desenvolvimento de novos negócios",
      profissionais: 2779,
      feminino: 27,
      masculino: 73,
      diferenca: 46,
      vagas: 0,
    },
    {
      competencia: "Ciclo PDCA",
      profissionais: 7314,
      feminino: 29,
      masculino: 71,
      diferenca: 42,
      vagas: 4,
    },
    {
      competencia: "ERP (Planejamento de recursos empresariais)",
      profissionais: 4833,
      feminino: 29,
      masculino: 71,
      diferenca: 42,
      vagas: 96,
    },
    {
      competencia: "Normas ISO",
      profissionais: 2828,
      feminino: 29,
      masculino: 71,
      diferenca: 42,
      vagas: 4,
    },
    {
      competencia: "Recursos humanos (RH)",
      profissionais: 5452,
      feminino: 69,
      masculino: 31,
      diferenca: 38,
      vagas: 116,
    },
    {
      competencia: "Representação de vendedores",
      profissionais: 3037,
      feminino: 31,
      masculino: 69,
      diferenca: 38,
      vagas: 0,
    },
    {
      competencia: "Melhoria contínua",
      profissionais: 3730,
      feminino: 32,
      masculino: 68,
      diferenca: 36,
      vagas: 3,
    },
  ];

  const fmtInt = (v) => Number(v).toLocaleString("pt-BR");

  function getGeneroDiffClass(diff) {
    if (diff >= 60) return "high";
    if (diff >= 45) return "mid";
    return "low";
  }

  function getThemeChartColors() {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    return {
      tick: isDark ? "#cbd5e1" : "#475569",
      grid: isDark ? "rgba(148,163,184,.25)" : "rgba(148,163,184,.20)",
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
        <td>${fmtInt(r.profissionais)}</td>
        <td>${r.feminino}%</td>
        <td>${r.masculino}%</td>
        <td><span class="genero-diff ${getGeneroDiffClass(r.diferenca)}">${
          r.diferenca
        }%</span></td>
        <td class="gender-split">
          <div class="gender-split-track" aria-label="Feminino ${
            r.feminino
          }% e Masculino ${r.masculino}%">
            <span class="gender-split-f" style="width:${r.feminino}%"></span>
            <span class="gender-split-m" style="width:${r.masculino}%"></span>
          </div>
          <div class="gender-split-label">F ${r.feminino}% / M ${
            r.masculino
          }%</div>
        </td>
        <td>${fmtInt(r.vagas)}</td>
      </tr>
    `,
      )
      .join("");
  }

  let distribuicaoGeneroChartInstance = null;

  function renderDistribuicaoGeneroChart() {
    const canvas = document.getElementById("distribuicaoGeneroChart");
    if (!canvas) return;

    const colors = getThemeChartColors();

    // Mantém o gráfico legível (top 10 por diferença)
    const top = [...distribuicaoGeneroData]
      .sort((a, b) => b.diferenca - a.diferenca)
      .slice(0, 10);

    const labels = top.map((i) => i.competencia);
    const feminino = top.map((i) => i.feminino);
    const masculino = top.map((i) => i.masculino);

    if (distribuicaoGeneroChartInstance)
      distribuicaoGeneroChartInstance.destroy();

    distribuicaoGeneroChartInstance = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Feminino (%)",
            data: feminino,
            backgroundColor: "#ec4899",
            borderWidth: 0,
            stack: "gender",
          },
          {
            label: "Masculino (%)",
            data: masculino,
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
                  `Profissionais: ${fmtInt(row.profissionais)}`,
                  `Vagas: ${fmtInt(row.vagas)}`,
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

  document.addEventListener("DOMContentLoaded", initDesigualdadeGeneroSection);
  window.addEventListener("resize", () => {
    // leve proteção para manter responsividade em mudanças de layout
    renderDistribuicaoGeneroChart();
  });

  // Re-render seguro quando houver troca de tema no seu dashboard
  window.rerenderDistribuicaoGenero = renderDistribuicaoGeneroChart;
})();

/* ===== Educação e Competências Emergentes (dados do PDF) ===== */
(() => {
  const eeAreasEstudo = [
    {
      area: "Data Science",
      profissionais: 483,
      recemFormados: 245,
      pctRecemFormados: 50.7,
      suasContratacoes: 0,
    },
    {
      area: "Tecnologia em Controle de Qualidade",
      profissionais: 479,
      recemFormados: 124,
      pctRecemFormados: 25.9,
      suasContratacoes: 0,
    },
  ];

  // No PDF: "Competências em crescimento ainda indisponíveis" (somente cabeçalho)
  const eeCompetenciasEmergentes = [];

  const eeFmtInt = (v) => Number(v).toLocaleString("pt-BR");
  const eeFmtPct = (v) =>
    `${Number(v).toLocaleString("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}%`;

  function renderAreasEstudoTable() {
    const tbody = document.getElementById("areasEstudoBody");
    if (!tbody) return;

    tbody.innerHTML = eeAreasEstudo
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

  function renderCompetenciasEmergentesTable() {
    const tbody = document.getElementById("competenciasEmergentesBody");
    if (!tbody) return;

    if (!eeCompetenciasEmergentes.length) {
      tbody.innerHTML = `
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

    tbody.innerHTML = eeCompetenciasEmergentes
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

  function initEducacaoCompetenciasEmergentesSection() {
    renderAreasEstudoTable();
    renderCompetenciasEmergentesTable();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initEducacaoCompetenciasEmergentesSection,
    );
  } else {
    initEducacaoCompetenciasEmergentesSection();
  }
})();

(() => {
  /* =========================
   * Qualidade dos Dados (PDF)
   * ========================= */

  const qdCoberturaAbas = [
    { status: "Com dados", aba: "Áreas de estudo", linhas: 2 },
    { status: "Com dados", aba: "Competências comuns", linhas: 100 },
    { status: "Metadados", aba: "Visão geral", linhas: 9 },

    { status: "Somente cabeçalho", aba: "Cargos comuns", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Cargos em crescimento", linhas: 0 },
    {
      status: "Somente cabeçalho",
      aba: "Competências em crescimento",
      linhas: 0,
    },
    { status: "Somente cabeçalho", aba: "Empresas", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Empresas não exploradas", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Formações", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Instituições de ensino", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Localidades", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Mudanças de localidades", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Mudanças de setor", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Propostas de valor", linhas: 0 },
    { status: "Somente cabeçalho", aba: "Setores", linhas: 0 },
  ];

  const qdDuplicidades = [
    {
      entidade: "Sistemas operacionais",
      tipo: "competencia",
      registros: 2,
      rankings: "7, 11",
      profissionaisSomados: 14797,
      vagasSomadas: 70,
      talentosSomados: 14,
    },
  ];

  const qdLogs = [
    {
      nivel: "alerta",
      origem: "Competências comuns",
      mensagem:
        'Campo: nome — Competência "Sistemas operacionais" aparece em mais de uma linha; a PoC preserva os registros originais.',
    },
    {
      nivel: "alerta",
      origem: "Instituições de ensino",
      mensagem: "Aba disponível apenas com cabeçalho na carga atual.",
    },
    {
      nivel: "alerta",
      origem: "Setores",
      mensagem: "Aba disponível apenas com cabeçalho na carga atual.",
    },
    {
      nivel: "alerta",
      origem: "Cargos comuns",
      mensagem: "Aba disponível apenas com cabeçalho na carga atual.",
    },
  ];

  const qdRoadmap = [
    {
      modulo: "Localidades",
      descricao: "Distribuição territorial dos profissionais.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Mudanças de localidades",
      descricao: "Fluxos de entrada e saída entre localidades.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Empresas",
      descricao: "Empregadores que concentram talentos.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Empresas não exploradas",
      descricao:
        "Oportunidades de prospecção em empresas ainda não trabalhadas.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Cargos comuns",
      descricao: "Ocupações mais frequentes.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Cargos em crescimento",
      descricao: "Tendências ocupacionais.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Competências em crescimento",
      descricao: "Competências emergentes por crescimento anual.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Setores",
      descricao: "Distribuição setorial dos talentos.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Mudanças de setor",
      descricao: "Fluxos entre setores.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Instituições de ensino",
      descricao: "Instituições formadoras.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Formações",
      descricao: "Distribuição por grau de formação.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
    {
      modulo: "Propostas de valor",
      descricao: "Atributos de EVP e consenso dos talentos.",
      status: "Somente cabeçalho",
      linhas: 0,
    },
  ];

  const qdFmtInt = (v) => Number(v).toLocaleString("pt-BR");

  function qdStatusClass(status) {
    if (status === "Com dados") return "qd-status-com-dados";
    if (status === "Metadados") return "qd-status-metadados";
    return "qd-status-somente-cabecalho";
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
        <td>${qdFmtInt(r.linhas)}</td>
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
        <td>${qdFmtInt(r.registros)}</td>
        <td>${r.rankings}</td>
        <td>${qdFmtInt(r.profissionaisSomados)}</td>
        <td>${qdFmtInt(r.vagasSomadas)}</td>
        <td>${qdFmtInt(r.talentosSomados)}</td>
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
        <td>${qdFmtInt(r.linhas)}</td>
      </tr>
    `,
      )
      .join("");
  }

  function qdThemeColors() {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    return {
      tick: isDark ? "#cbd5e1" : "#334155",
      grid: isDark ? "rgba(148,163,184,0.20)" : "rgba(15,23,42,0.10)",
    };
  }

  let qdCoberturaStatusChartInstance = null;
  let qdLinhasAbaChartInstance = null;

  function qdRenderCoberturaStatusChart() {
    if (!window.Chart) return;
    const canvas = document.getElementById("qdCoberturaStatusChart");
    if (!canvas) return;

    const counts = qdCoberturaAbas.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {});

    const labels = ["Com dados", "Metadados", "Somente cabeçalho"];
    const values = labels.map((l) => counts[l] || 0);
    const colors = qdThemeColors();

    if (qdCoberturaStatusChartInstance)
      qdCoberturaStatusChartInstance.destroy();

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
          legend: {
            position: "bottom",
            labels: { color: colors.tick },
          },
        },
      },
    });
  }

  function qdRenderLinhasPorAbaChart() {
    if (!window.Chart) return;
    const canvas = document.getElementById("qdLinhasAbaChart");
    if (!canvas) return;

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
        plugins: {
          legend: { display: false },
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

  function initQualidadeDadosSection() {
    qdRenderCoberturaTable();
    qdRenderDuplicidadesTable();
    qdRenderLogsTable();
    qdRenderRoadmapTable();
    qdRenderCoberturaStatusChart();
    qdRenderLinhasPorAbaChart();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQualidadeDadosSection);
  } else {
    initQualidadeDadosSection();
  }

  // Para seu fluxo de re-render geral (tema/layout), se necessário:
  window.rerenderQualidadeDadosCharts = function () {
    qdRenderCoberturaStatusChart();
    qdRenderLinhasPorAbaChart();
  };
})();

(() => {
  /* =========================
   * Inferências Avançadas
   * ========================= */

  // Dados base (competências visíveis no bloco de inferências + base consolidada já mostrada no PDF)
  const iaLacunasBase = [
    {
      competencia: "Habilidades analíticas",
      profissionais: 15214,
      vagas: 72,
      talentos: 6,
      vagas1000: 4.7,
      feminino: 46,
      masculino: 54,
    },
    {
      competencia: "Análise de dados",
      profissionais: 13311,
      vagas: 1,
      talentos: 4,
      vagas1000: 0.1,
      feminino: 46,
      masculino: 54,
    },
    {
      competencia: "Gestão de vendas",
      profissionais: 9735,
      vagas: 7,
      talentos: 1,
      vagas1000: 0.7,
      feminino: 34,
      masculino: 66,
    },
    {
      competencia: "Análise financeira",
      profissionais: 9194,
      vagas: 3,
      talentos: 4,
      vagas1000: 0.3,
      feminino: 49,
      masculino: 51,
    },
    {
      competencia: "Planejamento empresarial",
      profissionais: 8459,
      vagas: 7,
      talentos: 6,
      vagas1000: 0.8,
      feminino: 33,
      masculino: 67,
    },
  ];

  // Base para clusterização (profissionais/vagas/gênero)
  const iaClusterBase = [
    {
      competencia: "Habilidades analíticas",
      profissionais: 15214,
      vagas: 72,
      feminino: 46,
      masculino: 54,
    },
    {
      competencia: "Análise de dados",
      profissionais: 13311,
      vagas: 1,
      feminino: 46,
      masculino: 54,
    },
    {
      competencia: "Gestão de vendas",
      profissionais: 9735,
      vagas: 7,
      feminino: 34,
      masculino: 66,
    },
    {
      competencia: "Análise financeira",
      profissionais: 9194,
      vagas: 3,
      feminino: 49,
      masculino: 51,
    },
    {
      competencia: "Planejamento empresarial",
      profissionais: 8459,
      vagas: 7,
      feminino: 33,
      masculino: 67,
    },
    {
      competencia: "Linhas de produção",
      profissionais: 7823,
      vagas: 29,
      feminino: 38,
      masculino: 62,
    },
    {
      competencia: "Sistemas operacionais",
      profissionais: 7615,
      vagas: 70,
      feminino: 34,
      masculino: 66,
    },
    {
      competencia: "Comercial",
      profissionais: 7523,
      vagas: 159,
      feminino: 35,
      masculino: 65,
    },
    {
      competencia: "Suporte administrativo",
      profissionais: 7509,
      vagas: 17,
      feminino: 67,
      masculino: 33,
    },
    {
      competencia: "Ciclo PDCA",
      profissionais: 7314,
      vagas: 4,
      feminino: 29,
      masculino: 71,
    },
  ];

  // Helpers
  const iaFmtInt = (v) => Number(v).toLocaleString("pt-BR");
  const iaFmtPct = (v) =>
    `${Number(v).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;

  function iaTheme() {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    return {
      tick: isDark ? "#cbd5e1" : "#334155",
      grid: isDark ? "rgba(148,163,184,0.20)" : "rgba(15,23,42,0.10)",
    };
  }

  // Cálculos da seção
  function iaBuildLacunas() {
    const maxVagas = Math.max(...iaLacunasBase.map((i) => i.vagas), 1);

    return iaLacunasBase.map((i) => {
      const gapBruto = i.vagas - i.talentos;
      const lacunaPct = i.vagas > 0 ? (gapBruto / i.vagas) * 100 : 0;
      const vagasNorm = i.vagas / maxVagas; // 0..1 (conforme leitura do gráfico de inferências)
      const desigualdade = Math.abs(i.feminino - i.masculino);
      const rotatividadeProxy = i.vagas1000; // proxy consistente com o consolidado
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

  // 1) Tabela de lacunas
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

  // 2) Gráfico lacunas
  let iaLacunasChartInstance = null;
  function iaRenderLacunasChart(rows) {
    if (!window.Chart) return;
    const canvas = document.getElementById("iaLacunasChart");
    if (!canvas) return;

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

  // 3) Gráfico roteiros
  let iaRoteirosChartInstance = null;
  function iaRenderRoteirosChart(rows) {
    if (!window.Chart) return;
    const canvas = document.getElementById("iaRoteirosChart");
    if (!canvas) return;

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
                  `Pressão (proxy): ${row.rotatividadeProxy.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`,
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

  // 4) K-means
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
    // init determinístico (primeiros k pontos)
    let centroids = points.slice(0, k).map((p) => [...p]);
    let labels = Array(points.length).fill(0);

    for (let iter = 0; iter < maxIter; iter++) {
      let changed = false;

      // atribuição
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

      // atualização de centróides
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
    // features: profissionais, vagas, desigualdade de gênero
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
        profissionaisMed:
          subset.reduce((a, b) => a + b.profissionais, 0) / count,
        vagasMed: subset.reduce((a, b) => a + b.vagas, 0) / count,
        desigualdadeMed: subset.reduce((a, b) => a + b.desigualdade, 0) / count,
      };
    });

    return { points, summary };
  }

  // 5) Gráfico clusters
  let iaClustersChartInstance = null;
  function iaRenderClustersChart(points) {
    if (!window.Chart) return;
    const canvas = document.getElementById("iaClustersChart");
    if (!canvas) return;

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

  // 6) Tabela clusters
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

  // Init
  function initInferenciasAvancadasSection() {
    const lacunas = iaBuildLacunas();
    iaRenderLacunasTable(lacunas);
    iaRenderLacunasChart(lacunas);
    iaRenderRoteirosChart(lacunas);

    const clusters = iaBuildClusters();
    iaRenderClustersChart(clusters.points);
    iaRenderClustersTable(clusters.summary);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initInferenciasAvancadasSection,
    );
  } else {
    initInferenciasAvancadasSection();
  }

  // para seu pipeline de re-render (tema/layout)
  window.rerenderInferenciasAvancadasCharts = function () {
    initInferenciasAvancadasSection();
  };
})();

(() => {
  /* =========================
   * Alertas e Sugestões (PDF)
   * ========================= */

  const asGeneroAlerts = [
    { competencia: "Orçamento", gap: 22.0 },
    { competencia: "Melhoria de processos", gap: 22.0 },
    { competencia: "Prospecção", gap: 22.0 },
    { competencia: "Linhas de produção", gap: 24.0 },
    { competencia: "Gestão operacional", gap: 24.0 },
    { competencia: "Educação", gap: 24.0 },
    { competencia: "Controle de inventário", gap: 26.0 },
    { competencia: "Farmácia", gap: 28.0 },
    { competencia: "Reconciliações contábeis", gap: 28.0 },
    { competencia: "Comercial", gap: 30.0 },
    { competencia: "Produtos SAP", gap: 30.0 },
    {
      competencia: "Relatórios de indicadores-chave de desempenho (KPI)",
      gap: 30.0,
    },
    { competencia: "Gestão de vendas", gap: 32.0 },
    { competencia: "Sistemas operacionais", gap: 32.0 },
    { competencia: "Sistemas operacionais", gap: 32.0 },
    { competencia: "Contas a receber", gap: 32.0 },
    { competencia: "Processo de faturamento", gap: 32.0 },
    { competencia: "Indicadores-chave de desempenho", gap: 32.0 },
    { competencia: "Conciliação bancária", gap: 32.0 },
    { competencia: "Gestão comercial", gap: 32.0 },
    { competencia: "Planejamento empresarial", gap: 34.0 },
    { competencia: "Suporte administrativo", gap: 34.0 },
    { competencia: "Contas a pagar", gap: 34.0 },
    { competencia: "AutoCAD", gap: 34.0 },
    { competencia: "Implementação de KPI", gap: 34.0 },
    { competencia: "Arrecadação de contas a receber", gap: 34.0 },
    { competencia: "Melhoria contínua", gap: 36.0 },
    { competencia: "Administração de alto escalão", gap: 36.0 },
    { competencia: "Telemarketing", gap: 36.0 },
    { competencia: "Processos administrativos", gap: 36.0 },
    { competencia: "Microsoft Power BI", gap: 36.0 },
    { competencia: "Microsoft PowerApps", gap: 36.0 },
    { competencia: "Pacote Microsoft BI", gap: 36.0 },
    { competencia: "Recrutamento", gap: 36.0 },
    { competencia: "Assistência médica", gap: 36.0 },
    { competencia: "Recursos humanos (RH)", gap: 38.0 },
    { competencia: "Representação de vendedores", gap: 38.0 },
    { competencia: "Ciclo PDCA", gap: 42.0 },
    { competencia: "ERP (Planejamento de recursos empresariais)", gap: 42.0 },
    { competencia: "Normas ISO", gap: 42.0 },
    { competencia: "Gestão logística", gap: 46.0 },
    { competencia: "Desenvolvimento de novos negócios", gap: 46.0 },
    { competencia: "5S", gap: 48.0 },
    { competencia: "Microsoft Project", gap: 54.0 },
    { competencia: "Enfermagem", gap: 58.0 },
    { competencia: "Suporte técnico", gap: 58.0 },
    { competencia: "Banco de dados", gap: 62.0 },
    { competencia: "Funções de recepcionista", gap: 64.0 },
    { competencia: "HTML", gap: 64.0 },
    { competencia: "Engenharia", gap: 66.0 },
    { competencia: "Recepção telefônica", gap: 68.0 },
    { competencia: "SQL", gap: 70.0 },
    { competencia: "Python", gap: 70.0 },
    { competencia: "JavaScript", gap: 76.0 },
  ];

  const asDadosAlerts = [
    "Localidades",
    "Mudanças de localidades",
    "Empresas",
    "Empresas não exploradas",
    "Cargos comuns",
    "Cargos em crescimento",
    "Competências em crescimento",
    "Setores",
    "Mudanças de setor",
    "Instituições de ensino",
    "Formações",
    "Propostas de valor",
  ];

  const asFmtPct = (v) =>
    Number(v).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + "%";

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAlertasSugestoesSection);
  } else {
    initAlertasSugestoesSection();
  }
})();

(() => {
  /* ===== Legenda das Fórmulas Calculadas (PDF) ===== */
  const lfFormulas = [
    {
      campo: "gap_vagas_talentos",
      formula: "(anuncios_vaga - seus_talentos)",
      interpretacao: "Gap bruto entre demanda e talentos internos mapeados.",
      tipo: "gap",
    },
    {
      campo: "vagas_por_1000_profissionais",
      formula: "((anuncios_vaga / profissionais) × 1000)",
      interpretacao: "Pressão relativa da demanda por competência.",
      tipo: "pressao",
    },
    {
      campo: "talentos_internos_pct",
      formula: "((seus_talentos / profissionais) × 100)",
      interpretacao:
        "Participação dos talentos internos no total de profissionais.",
      tipo: "kpi",
    },
    {
      campo: "desigualdade_genero_pct",
      formula: "ABS(feminino_pct - masculino_pct)",
      interpretacao: "Diferença percentual entre feminino e masculino.",
      tipo: "genero",
    },
    {
      campo: "demanda_futura",
      formula: "valor_atual + (valor_atual - valor_anterior)",
      interpretacao: "Previsão linear simples da tendência de demanda.",
      tipo: "previsao",
    },
    {
      campo: "lacunas_habilidades_pct",
      formula: "((anuncios_vaga - seus_talentos) / anuncios_vaga) × 100",
      interpretacao:
        "Gap percentual usado no gráfico de lacunas de habilidades.",
      tipo: "gap",
    },
  ];

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
    const formulasPressao = lfFormulas.filter(
      (f) => f.tipo === "pressao",
    ).length;
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLegendaFormulasSection);
  } else {
    initLegendaFormulasSection();
  }
})();