# Dashboard CPS Carreiras (PoC)

Painel analítico web para visualização de indicadores de mercado, talentos, competências, gênero, qualidade de dados e inferências avançadas, com foco em apoiar decisões de atração, retenção e desenvolvimento de talentos no contexto do CPS Carreiras.

> **Status:** PoC (Proof of Concept)  
> **Objetivo da PoC:** validar estrutura, regras de negócio, visualização e narrativa analítica antes de evolução para produção.

---

## ✨ Visão Geral

Este projeto consolida dados de talentos e mercado em uma interface interativa com:

- KPIs executivos
- gráficos comparativos e distribuições
- tabelas analíticas com métricas derivadas
- blocos de diagnóstico de qualidade dos dados
- inferências avançadas (lacunas, priorização e clusters)
- alertas e sugestões acionáveis
- legenda de fórmulas para transparência metodológica

---

## 🧱 Estrutura Funcional do Dashboard

### 1) Panorama Geral

- KPIs principais da região
- visão rápida de demanda, movimentação e composição da base

### 2) Talent Insights (Overview)

- competências mapeadas, vagas, talentos e gap de gênero
- insights textuais resumidos

### 3) Desigualdade de Gênero

- distribuição F/M por cargo/competência
- tabela de apoio com gap percentual

### 4) Educação e Competências Emergentes

- áreas de estudo
- competências emergentes (quando houver dados carregados)

### 5) Qualidade dos Dados

- cobertura por aba/status
- duplicidades, logs e roadmap de carga
- gráficos de cobertura e volume útil por aba

### 6) Inferências Avançadas

- lacunas de habilidades (%)
- roteiros de priorização (score)
- clusters de competências (k-means)
- tabela-resumo dos clusters

### 7) Alertas e Sugestões

- alertas de gênero por severidade
- alertas de dados ausentes por módulo

### 8) Legenda das Fórmulas Calculadas

- dicionário de campos derivados
- fórmulas e interpretação de cada indicador

---

## 🛠️ Stack Tecnológica

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Chart.js** (gráficos)
- **Font Awesome** (ícones)

---

## 📁 Organização Sugerida do Repositório

```bash
dashboard-cps-carreiras/
├─ index.html
├─ assets/
│  ├─ css/
│  │  ├─ base.css
│  │  ├─ components.css
│  │  ├─ sections/
│  │  │  ├─ panorama.css
│  │  │  ├─ talent-insights.css
│  │  │  ├─ genero.css
│  │  │  ├─ educacao.css
│  │  │  ├─ qualidade-dados.css
│  │  │  ├─ inferencias.css
│  │  │  ├─ alertas.css
│  │  │  └─ formulas.css
│  ├─ js/
│  │  ├─ data/
│  │  │  ├─ panorama.data.js
│  │  │  ├─ talent-insights.data.js
│  │  │  ├─ genero.data.js
│  │  │  ├─ qualidade-dados.data.js
│  │  │  ├─ inferencias.data.js
│  │  │  └─ ...
│  │  ├─ core/
│  │  │  ├─ theme.js
│  │  │  ├─ formatters.js
│  │  │  ├─ chart-registry.js
│  │  │  └─ dom.js
│  │  ├─ renderers/
│  │  │  ├─ panorama.render.js
│  │  │  ├─ overview.render.js
│  │  │  ├─ genero.render.js
│  │  │  ├─ qualidade-dados.render.js
│  │  │  ├─ inferencias.render.js
│  │  │  └─ ...
│  │  └─ main.js
├─ docs/
│  ├─ regras-negocio.md
│  ├─ dicionario-dados.md
│  └─ formulas.md
└─ README.md
```

---

## 🚀 Como Executar Localmente

1. Clone o repositório

   ```bash
   git clone <repo-url>
   cd dashboard-cps-carreiras
   ```

2. Abra o `index.html` no navegador  
   ou rode um servidor local (recomendado):

   ```bash
   npx serve .
   ```

3. Acesse no browser o endereço informado pelo servidor.

---

## 🎨 Tema (Claro/Escuro)

- O projeto usa `data-theme` no elemento raiz.
- **Padrão recomendado:** iniciar em tema **claro**.
- Persistência via `localStorage` (`theme = light | dark`).
- Ao trocar tema, re-renderizar gráficos para sincronizar cores.

---

## 📐 Convenções de Código

- Separar **dados**, **helpers**, **renderers** e **init**
- Evitar duplicação de lógica de gráficos (usar registry/upsert)
- Funções curtas e com responsabilidade única
- IDs de DOM previsíveis por seção (`ia*`, `qd*`, `as*`, etc.)
- Nomenclatura consistente para classes CSS (`.ia-`, `.qd-`, `.as-`, `.lf-`)

---

## 📊 Regras de Negócio (resumo)

Principais campos derivados utilizados no dashboard:

- `gap_vagas_talentos = anuncios_vaga - seus_talentos`
- `vagas_por_1000_profissionais = (anuncios_vaga / profissionais) * 1000`
- `talentos_internos_pct = (seus_talentos / profissionais) * 100`
- `desigualdade_genero_pct = ABS(feminino_pct - masculino_pct)`
- `demanda_futura = valor_atual + (valor_atual - valor_anterior)`
- `lacunas_habilidades_pct = ((anuncios_vaga - seus_talentos) / anuncios_vaga) * 100`

---

## 🧪 Qualidade e Validação

Checklist mínimo antes de commit:

- [ ] Sem overflow horizontal em cards/tabelas
- [ ] Tabelas com quebra de linha para textos longos
- [ ] Gráficos responsivos e com tema correto
- [ ] Valores formatados em `pt-BR`
- [ ] Estados vazios com mensagem amigável
- [ ] Sem dados inventados em seções sem carga

---

## 🔒 Escopo da PoC

Este projeto é uma prova de conceito para validação analítica e visual.  
Não representa ainda:

- pipeline de dados em produção
- governança completa de acesso/permissão
- SLA de atualização em tempo real

---

## 🗺️ Roadmap (próximos passos)

- Integração com fonte de dados automatizada
- Filtros avançados por localidade/setor/período
- Exportação de visões (PDF/CSV)
- Monitoramento de qualidade de dados contínuo
- Versão produtiva com observabilidade

---

## 👥 Público-alvo

- Gestão de talentos e RH
- Lideranças de negócio
- Planejamento estratégico
- Times de dados e analytics

---

## 📄 Licença

Definir conforme política institucional do CPS Carreiras.

---

## 🙌 Créditos

Desenvolvido para o projeto **Dashboard CPS Carreiras**, com foco em clareza analítica, consistência visual e suporte à tomada de decisão.
