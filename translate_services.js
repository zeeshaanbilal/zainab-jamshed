const fs = require('fs');

const en = {
  businessModeling: {
    heroBreadcrumb: "Business Modeling",
    title: "Business Modeling Architect scalable, profit-focused business models",
    subtitle: "Architect scalable, profit-focused business models",
    whoItsForTitle: "Who it's for",
    whoItsForText: "Leaders redesigning operations, pricing, or product portfolios; teams pursuing growth with margin discipline.",
    challengesTitle: "Challenges we solve",
    challenges: [
      "Inefficient processes and rising costs",
      "Unclear revenue/margin levers",
      "Investment and expansion uncertainty (risk)"
    ],
    whatWeDeliverTitle: "What we deliver",
    whatWeDeliver: [
      "Operations Strategy & Process Optimization",
      "Revenue Growth & Profitability Strategy",
      "Monte Carlo Simulation & Risk Management",
      "Automated reporting packs and executive views",
      "Project management plan for execution"
    ]
  },
  decisionOptimization: {
    heroBreadcrumb: "Decision Optimization",
    title: "Decision Optimization Turn complex trade-offs into repeatable, high-ROI choices",
    subtitle: "Turn complex trade-offs into repeatable, high-ROI choices",
    whoItsForTitle: "Who it's for",
    whoItsForText: "Supply chain managers, operations directors, and planners needing to maximize capacity or reduce logistics costs.",
    challengesTitle: "Challenges we solve",
    challenges: [
      "Wasted resources and idle capacity",
      "Costly or slow distribution networks",
      "Difficulty balancing competing objectives (e.g., speed vs. cost)"
    ],
    whatWeDeliverTitle: "What we deliver",
    whatWeDeliver: [
      "Supply Chain Network Design",
      "Production & Workforce Scheduling",
      "Transportation & Routing Optimization",
      "Capacity Planning & Allocation",
      "Custom optimization models (Linear/Integer Programming)"
    ]
  },
  financialModeling: {
    heroBreadcrumb: "Financial Modeling",
    title: "Financial Modeling Evaluate markets, price dynamically, and plan cash flow with precision",
    subtitle: "Evaluate markets, price dynamically, and plan cash flow with precision",
    whoItsForTitle: "Who it's for",
    whoItsForText: "CFOs, investors, and founders needing robust models for M&A, fundraising, or strategic pivots.",
    challengesTitle: "Challenges we solve",
    challenges: [
      "Uncertain ROI on new investments",
      "Inflexible, error-prone spreadsheets",
      "Lack of visibility into cash flow runways"
    ],
    whatWeDeliverTitle: "What we deliver",
    whatWeDeliver: [
      "3-Statement Financial Models",
      "Scenario & Sensitivity Analysis",
      "Valuation & M&A Modeling",
      "Dynamic Pricing & Revenue Forecasting",
      "Capital Allocation & Amortization Schedules"
    ]
  },
  analytics: {
    heroBreadcrumb: "Analytics",
    title: "Analytics Break silos and turn raw data into strategic foresight",
    subtitle: "Break silos and turn raw data into strategic foresight",
    whoItsForTitle: "Who it's for",
    whoItsForText: "Executives and managers overwhelmed by data but starved for clear, actionable insights.",
    challengesTitle: "Challenges we solve",
    challenges: [
      "Fragmented data across different systems",
      "Backward-looking reports instead of forward-looking predictions",
      "Misaligned KPIs across departments"
    ],
    whatWeDeliverTitle: "What we deliver",
    whatWeDeliver: [
      "Unified BI Dashboards (Power BI, Tableau)",
      "KPI Alignment & Metric Design",
      "Predictive Analytics & Demand Forecasting",
      "Customer Segmentation & Lifetime Value (CLV)",
      "Data Infrastructure Assessment"
    ]
  },
  churnAnalysis: {
    heroBreadcrumb: "Churn Analysis",
    title: "Churn Analysis Identify at-risk customers early and improve retention",
    subtitle: "Identify at-risk customers early and improve retention",
    whoItsForTitle: "Who it's for",
    whoItsForText: "Customer success teams, product managers, and marketers focused on reducing customer loss and increasing lifetime value.",
    challengesTitle: "Challenges we solve",
    challenges: [
      "High customer turnover with unknown causes",
      "Inability to spot warning signs before cancellation",
      "Ineffective, one-size-fits-all retention campaigns"
    ],
    whatWeDeliverTitle: "What we deliver",
    whatWeDeliver: [
      "Churn Driver Identification",
      "Predictive Risk Scoring Models",
      "Customer Segmentation by Risk Profile",
      "Targeted Retention Strategies & Playbooks",
      "Ongoing Monitoring Dashboards"
    ]
  },
  monteCarlo: {
    heroBreadcrumb: "Monte Carlo Simulation",
    title: "Monte Carlo Simulation Quantify uncertainty and make decisions with confidence",
    subtitle: "Quantify uncertainty and make decisions with confidence",
    whoItsForTitle: "Who it's for",
    whoItsForText: "Risk managers, project planners, and strategic leaders navigating highly variable markets or complex project timelines.",
    challengesTitle: "Challenges we solve",
    challenges: [
      "Relying on flawed \"single-point\" estimates (e.g., \"it will take exactly 6 months\")",
      "Hidden risks in supply chains or financial forecasts",
      "Inability to test how multiple variables interact simultaneously"
    ],
    whatWeDeliverTitle: "What we deliver",
    whatWeDeliver: [
      "Probability-Weighted Financial Forecasts",
      "Project Risk & Schedule Simulations",
      "Supply Chain Stress Testing",
      "Sensitivity Analysis (identifying the most critical variables)",
      "Scenario Planning & Mitigation Strategies"
    ]
  }
};

const pt = {
  businessModeling: {
    heroBreadcrumb: "Modelagem de Negócios",
    title: "Modelagem de Negócios Desenvolva modelos escaláveis e focados no lucro",
    subtitle: "Desenvolva modelos de negócios escaláveis e focados no lucro",
    whoItsForTitle: "Para quem é",
    whoItsForText: "Líderes que estão redesenhando operações, preços ou portfólios de produtos; equipes que buscam crescimento com disciplina de margem.",
    challengesTitle: "Desafios que resolvemos",
    challenges: [
      "Processos ineficientes e custos crescentes",
      "Alavancas de receita/margem pouco claras",
      "Incerteza sobre investimentos e expansão (risco)"
    ],
    whatWeDeliverTitle: "O que entregamos",
    whatWeDeliver: [
      "Estratégia de Operações e Otimização de Processos",
      "Crescimento de Receita e Estratégia de Rentabilidade",
      "Simulação de Monte Carlo e Gestão de Riscos",
      "Pacotes de relatórios automatizados e visões executivas",
      "Plano de gerenciamento de projetos para execução"
    ]
  },
  decisionOptimization: {
    heroBreadcrumb: "Otimização de Decisões",
    title: "Otimização de Decisões Transforme escolhas complexas em decisões de alto ROI",
    subtitle: "Transforme escolhas complexas em decisões repetíveis e de alto ROI",
    whoItsForTitle: "Para quem é",
    whoItsForText: "Gestores de cadeia de suprimentos, diretores de operações e planejadores que precisam maximizar a capacidade ou reduzir custos logísticos.",
    challengesTitle: "Desafios que resolvemos",
    challenges: [
      "Recursos desperdiçados e capacidade ociosa",
      "Redes de distribuição lentas ou caras",
      "Dificuldade em equilibrar objetivos concorrentes (ex: velocidade vs. custo)"
    ],
    whatWeDeliverTitle: "O que entregamos",
    whatWeDeliver: [
      "Design de Rede da Cadeia de Suprimentos",
      "Programação de Produção e Força de Trabalho",
      "Otimização de Transporte e Roteamento",
      "Planejamento e Alocação de Capacidade",
      "Modelos de otimização personalizados (Programação Linear/Inteira)"
    ]
  },
  financialModeling: {
    heroBreadcrumb: "Modelagem Financeira",
    title: "Modelagem Financeira Avalie mercados e planeje fluxo de caixa com precisão",
    subtitle: "Avalie mercados, defina preços dinamicamente e planeje fluxo de caixa com precisão",
    whoItsForTitle: "Para quem é",
    whoItsForText: "CFOs, investidores e fundadores que precisam de modelos robustos para M&A, captação de recursos ou mudanças estratégicas.",
    challengesTitle: "Desafios que resolvemos",
    challenges: [
      "ROI incerto em novos investimentos",
      "Planilhas inflexíveis e propensas a erros",
      "Falta de visibilidade sobre o prazo do fluxo de caixa"
    ],
    whatWeDeliverTitle: "O que entregamos",
    whatWeDeliver: [
      "Modelos Financeiros de 3 Demonstrações",
      "Análise de Cenários e Sensibilidade",
      "Modelagem de Valuation e M&A",
      "Precificação Dinâmica e Previsão de Receitas",
      "Alocação de Capital e Cronogramas de Amortização"
    ]
  },
  analytics: {
    heroBreadcrumb: "Análises",
    title: "Análises Transforme dados brutos em visão estratégica",
    subtitle: "Quebre silos e transforme dados brutos em visão estratégica",
    whoItsForTitle: "Para quem é",
    whoItsForText: "Executivos e gerentes sobrecarregados por dados, mas sem insights claros e acionáveis.",
    challengesTitle: "Desafios que resolvemos",
    challenges: [
      "Dados fragmentados em sistemas diferentes",
      "Relatórios baseados no passado em vez de previsões futuras",
      "KPIs desalinhados entre departamentos"
    ],
    whatWeDeliverTitle: "O que entregamos",
    whatWeDeliver: [
      "Painéis de BI Unificados (Power BI, Tableau)",
      "Alinhamento de KPIs e Design de Métricas",
      "Análise Preditiva e Previsão de Demanda",
      "Segmentação de Clientes e Valor Vitalício (CLV)",
      "Avaliação de Infraestrutura de Dados"
    ]
  },
  churnAnalysis: {
    heroBreadcrumb: "Análise de Churn",
    title: "Análise de Churn Identifique clientes em risco cedo e melhore a retenção",
    subtitle: "Identifique clientes em risco precocemente e melhore a retenção",
    whoItsForTitle: "Para quem é",
    whoItsForText: "Equipes de sucesso do cliente, gerentes de produto e profissionais de marketing focados em reduzir a perda de clientes.",
    challengesTitle: "Desafios que resolvemos",
    challenges: [
      "Alta rotatividade de clientes com causas desconhecidas",
      "Incapacidade de identificar sinais de alerta antes do cancelamento",
      "Campanhas de retenção ineficazes e genéricas"
    ],
    whatWeDeliverTitle: "O que entregamos",
    whatWeDeliver: [
      "Identificação de Impulsionadores de Churn",
      "Modelos Preditivos de Pontuação de Risco",
      "Segmentação de Clientes por Perfil de Risco",
      "Estratégias e Manuais de Retenção Direcionados",
      "Painéis de Monitoramento Contínuo"
    ]
  },
  monteCarlo: {
    heroBreadcrumb: "Simulação de Monte Carlo",
    title: "Simulação de Monte Carlo Quantifique a incerteza e tome decisões",
    subtitle: "Quantifique a incerteza e tome decisões com confiança",
    whoItsForTitle: "Para quem é",
    whoItsForText: "Gestores de risco, planejadores de projetos e líderes navegando em mercados altamente variáveis.",
    challengesTitle: "Desafios que resolvemos",
    challenges: [
      "Confiar em estimativas falhas de um único ponto (ex: 'levará exatamente 6 meses')",
      "Riscos ocultos em cadeias de suprimentos ou previsões financeiras",
      "Incapacidade de testar como múltiplas variáveis interagem simultaneamente"
    ],
    whatWeDeliverTitle: "O que entregamos",
    whatWeDeliver: [
      "Previsões Financeiras Ponderadas por Probabilidade",
      "Simulações de Risco e Cronograma de Projetos",
      "Testes de Estresse da Cadeia de Suprimentos",
      "Análise de Sensibilidade (identificando as variáveis mais críticas)",
      "Planejamento de Cenários e Estratégias de Mitigação"
    ]
  }
};

const dictFile = 'src/lib/getDictionary.ts';
let dictContent = fs.readFileSync(dictFile, 'utf8');

dictContent = dictContent.replace(/    servicesPage: {([\s\S]*?)    }\n  }\),\n  pt:/, `    servicesPage: {$1    },\n    servicesDetails: ${JSON.stringify(en, null, 6)}\n  }),\n  pt:`);
dictContent = dictContent.replace(/    servicesPage: {([\s\S]*?)    }\n  }\)\n};/, `    servicesPage: {$1    },\n    servicesDetails: ${JSON.stringify(pt, null, 6)}\n  })\n};`);

fs.writeFileSync(dictFile, dictContent);
console.log("Dictionary updated.");

const files = {
  'business-modeling': 'businessModeling',
  'decision-optimization': 'decisionOptimization',
  'financial-modeling': 'financialModeling',
  'analytics': 'analytics',
  'churn-analysis': 'churnAnalysis',
  'monte-carlo-simulation': 'monteCarlo'
};

for (const [folder, key] of Object.entries(files)) {
  const filePath = `src/app/[lang]/services/${folder}/page.tsx`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/<span className="text-white">[^<]+<\/span>/g, (match) => {
    if (match.includes('/') || match.includes('Services') || match.includes('Home')) return match;
    return `<span className="text-white">{dict.servicesDetails.${key}.heroBreadcrumb}</span>`;
  });
  
  content = content.replace(/>\s*Home\s*<\/Link>/, ">{dict.navbar.home}</Link>");
  content = content.replace(/>\s*Services\s*<\/Link>/, ">{dict.navbar.services}</Link>");
  content = content.replace(/>\s*OUR SERVICES\s*<\/h1>/, ">{dict.servicesPage.hero.title}</h1>");
  content = content.replace(/>\s*Practical insights from consultants and analysts on what actually moves the needle\.\s*<\/p>/, ">{dict.servicesPage.hero.subtitle}</p>");

  const textContentRegex = /<div className="flex flex-col gap-8 text-gray-800">.*?<\/div>\s*<\/div>/s;
  const newTextContent = `
          <div className="flex flex-col gap-8 text-gray-800">
            {/* Title & Subtitle */}
            <div className="opacity-0 animate-slide-right" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] tracking-tight whitespace-nowrap truncate font-bold text-black mb-4">{dict.servicesDetails.${key}.title}</h2>
              <p className="text-black text-[17px] leading-relaxed">
                {dict.servicesDetails.${key}.subtitle}
              </p>
            </div>

            {/* Who it's for */}
            <div className="opacity-0 animate-slide-left" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-[20px] font-bold text-black mb-3">{dict.servicesDetails.${key}.whoItsForTitle}</h3>
              <p className="text-[#64748b] text-[16px] leading-relaxed">
                {dict.servicesDetails.${key}.whoItsForText}
              </p>
            </div>

            {/* Challenges we solve */}
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-[20px] font-bold text-black mb-5">{dict.servicesDetails.${key}.challengesTitle}</h3>
              <ul className="space-y-4">
                {dict.servicesDetails.${key}.challenges.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[17px] text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we deliver */}
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '1.0s' }}>
              <h3 className="text-[20px] font-bold text-black mb-5">{dict.servicesDetails.${key}.whatWeDeliverTitle}</h3>
              <ul className="space-y-4">
                {dict.servicesDetails.${key}.whatWeDeliver.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[17px] text-[#475569] italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>`;
  
  content = content.replace(textContentRegex, newTextContent);
  fs.writeFileSync(filePath, content);
  console.log("Updated", filePath);
}
