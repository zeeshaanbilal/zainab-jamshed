const dictionaries = {
  en: () => Promise.resolve({
    hero: {
      title: "Optimize Beyond Limits",
      description: "Empowering organizations through data-driven strategy, advanced simulations, and measurable results.",
      getStarted: "Get Started",
      ourServices: "Our Services"
    },
    about: {
      sectionTitle: "ABOUT US",
      subtitle: "Helping businesses turn complex challenges into growth opportunities.",
      heading: "We turn Operational Complexity into Clarity and Growth",
      description: "At ZJ Logix, we help businesses turn complex challenges into growth opportunities. By combining innovative strategies with advanced analytics and modeling, we enable organizations to make smarter, risk-aware decisions. Here's why leading organizations choose to work with us:",
      bullet1: "Proven track record of delivering measurable ROI",
      bullet2: "Expertise across multiple industries and markets",
      bullet3: "Tailored strategies for your unique business challenges",
      readMore: "Read More >"
    },
    services: {
      sectionTitle: "SERVICES",
      subtitle: "Optimization, simulation, analytics, and strategy – built to deliver ROI.",
      service1Title: "Business Modeling",
      service1Desc: "Developing robust business models for growth",
      service2Title: "Decision Optimization",
      service2Desc: "Solving complex problems for better strategic choice",
      service3Title: "Financial Modeling",
      service3Desc: "Decisions with confidence—grounded in robust financial simulations",
      viewAll: "View all Services >"
    },
    blogs: {
      sectionTitle: "BLOGS",
      subtitle: "Optimization, simulation, analytics, and strategy – built to deliver ROI.",
      blog1Title: "Financial Modeling Best Practices",
      blog1Desc: "Essential techniques for building robust financial models that drive better business outcomes.",
      blog2Title: "Leveraging Data for Strategic Decision Making",
      blog2Desc: "Driving business transformation for creating into diverse field of opportunities and growth.",
      readMore: "Read more \u2192",
      viewAll: "View all Blogs >"
    },
    testimonials: {
      sectionTitle: "TESTIMONIALS",
      subtitle: "Results and relationships that keep clients coming back.",
      list: [
        {
          text: "ZJ Logix transformed our data strategy completely. Their analytics insights helped us increase revenue by 40% in just six months. The team is professional, knowledgeable, and consistently delivers measurable results.",
          name: "Sarah Johnson",
          title: "CEO at TechCorp Solutions",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7d26ea64f4fc948894.webp"
        },
        {
          text: "The financial modeling expertise at ZJ Logix is exceptional. They helped us optimize capital allocation and reduce operational costs by 25%, making a direct impact on profitability.",
          name: "Michael Chen",
          title: "CFO at FinanceFlow Inc",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7d0a7fd19b8238e725.webp"
        },
        {
          text: "Working with ZJ Logix was a game-changer for our supply chain operations. Their data-driven approach reduced delivery times by 30% and significantly improved customer satisfaction.",
          name: "Emily Rodriguez",
          title: "Operations Director at LogiChain Global",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7d212dfc2917bc1e58.webp"
        },
        {
          text: "ZJ Logix provided strategic insights that were instrumental in our market expansion. Their business modeling capabilities are top-notch, and their team is a pleasure to work with.",
          name: "David Thompson",
          title: "VP of Strategy at GrowthMax Enterprises",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7e18c3356cae20c7ba.webp"
        }
      ]
    },
    whyChooseUs: {
      sectionTitle: "WHY CHOOSE US",
      subtitle: "Proven outcomes, rigorous methods, and end-to-end execution.",
      stat1: "Client Satisfaction",
      stat2: "Revenue Growth",
      stat3: "Operational Cost",
      stat4: "Projects Done",
      stat5: "Years of Trust"
    },
    faqs: {
      sectionTitle: "FAQ's",
      subtitle: "Quick answers about scope, process, pricing, data, and timelines.",
      list: [
        {
          question: "What services does ZJ Logix offer?",
          answer: "ZJ Logix specializes in data analytics, business intelligence, financial modeling, and strategic consulting. We help businesses make data-driven decisions through advanced analytics and custom solutions."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. Most analytics projects take 2-4 weeks, while comprehensive business intelligence implementations can take 6-12 weeks. We provide detailed timelines during our initial consultation."
        },
        {
          question: "What data sources do you work with?",
          answer: "We work with diverse data sources including ERP, CRM, financial, operational, supply chain, and marketing systems. We also integrate IoT data, cloud databases, survey results, web analytics, and third-party APIs to deliver comprehensive, data-driven insights."
        },
        {
          question: "How do you ensure data security?",
          answer: "Data security is our top priority. We follow industry best practices including encryption, secure data transmission, access controls, and compliance with relevant regulations. All team members sign NDAs and undergo security training."
        },
        {
          question: "Can you help with ongoing support?",
          answer: "Absolutely! We offer ongoing support and maintenance services to ensure your analytics solutions continue to deliver value. This includes system monitoring, updates, user training, and strategic guidance."
        },
        {
          question: "What makes ZJ Logix different?",
          answer: "Our team combines deep technical expertise with business acumen. We don't just build solutions - we ensure they drive real business value. Our approach is collaborative, transparent, and focused on your long-term success."
        }
      ]
    },
    contact: {
      sectionTitle: "CONTACT US",
      subtitle: "Tell us your challenges, we'll map the fastest path to impact.",
      contactItems: [
        { icon: 'address' as const, title: 'Address', lines: ['WAPDA Town, Phase-2, Multan Pakistan'] },
        { icon: 'phone' as const, title: 'Call Us', lines: ['+92 306 0707490'] },
        { icon: 'email' as const, title: 'Email Us', lines: ['contact@zjlogix.com'] }
      ],
      namePlaceholder: "Your Name*",
      emailPlaceholder: "Your Email*",
      subjectPlaceholder: "Subject*",
      messagePlaceholder: "Message*",
      sendButton: "Send Message"
    },
    booking: {
      title: "Ready to Optimize Your Business?",
      subtitle: "Turn insights into impact. Our experts are here to help you cut costs, unlock growth, and make smarter decisions backed by data. Let's design a strategy tailored to your business goals."
    },
    footer: {
      description: "Innovating the digital landscape with elegant solutions and timeless services.",
      company: "Company",
      aboutUs: "About us",
      whyChooseUs: "Why Choose Us",
      testimonials: "Testimonials",
      services: "Services",
      businessModeling: "Business Modeling",
      decisionOptimization: "Decision Optimization",
      financialModeling: "Financial Modeling",
      analytics: "Analytics",
      churnAnalysis: "Churn Analysis",
      monteCarlo: "Monte Carlo Simulation",
      support: "Support",
      memberFaq: "Member FAQ",
      contactUs: "Contact Us",
      portfolio: "Portfolio",
      allRightsReserved: "All rights reserved.",
      developedBy: "Developed by"
    },
    navbar: {
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      businessModeling: "Business Modeling",
      decisionOptimization: "Decision Optimization",
      financialModeling: "Financial Modeling",
      analytics: "Analytics",
      churnAnalysis: "Churn Analysis",
      monteCarlo: "Monte Carlo Simulation",
      blogs: "Blogs",
      portfolio: "Portfolio",
      contactUs: "Contact Us",
      bookConsultation: "Book Free Consultation"
    },
    aboutPage: {
      hero: {
        title: "About Us",
        subtitle: "Driving measurable growth through data, strategy, and innovation.",
        breadcrumbsHome: "Home",
        breadcrumbsAbout: "About Us"
      },
      story: {
        sectionTitle: "OUR STORY",
        heading: "We began with a vision\nto make consulting measurable and\nimpactful.",
        p1: "Founded with a vision to make business decisions smarter and faster, ZJ Logix was built on the idea that data is the new competitive edge. Unlike traditional consulting, which often stops at recommendations, we go further building models, simulations, and dashboards that empower leaders to act with confidence.",
        p2: "Over the years, we've worked with organizations of all sizes from agile startups to global enterprises helping them unlock efficiency, accelerate growth, and future-proof their strategies."
      },
      mission: {
        sectionTitle: "OUR MISSION",
        heading: "We help business grow smarter with data-driven strategies.",
        p1: "To empower organizations with the tools, insights, and strategies needed to optimize operations, minimize risks, and maximize opportunities turning complexity into clarity and strategy into measurable success."
      },
      whatWeDo: {
        sectionTitle: "WHAT WE DO",
        heading: "We turn complex challenges\ninto growth opportunities",
        p1: "We help organizations transform operations into engines of growth by combining advanced technology, proven methodologies, and deep business expertise.",
        btn: "View Services",
        items: [
          { title: "Business Modeling:", text: "Lean processes, revenue growth strategies, and risk management." },
          { title: "Decision Optimization:", text: "Supply chain design, logistics, and resource allocation." },
          { title: "Financial Modeling:", text: "Strategic scenario planning and amortization analysis." },
          { title: "Analytics:", text: "KPIs, dashboards, predictive insights, and digital transformation." },
          { title: "Churn Analysis:", text: "Identifying and retaining high-value customers." },
          { title: "Data Annotation:", text: "Reliable labeling for machine learning outcomes." }
        ]
      },
      vision: {
        sectionTitle: "OUR VISION",
        heading: "We imagine a future where every decision is clear and precise.",
        p1: "A world where every business decision is backed by precision analytics, enabling organizations to grow sustainably and create lasting impact."
      },
      values: {
        sectionTitle: "OUR VALUES",
        heading: "What we stand for",
        items: [
          { title: "Integrity:", text: "Transparent and ethical in every engagement." },
          { title: "Innovation:", text: "Leveraging advanced tools and methods for breakthrough results." },
          { title: "Impact:", text: "Focused on measurable, sustainable outcomes." },
          { title: "Collaboration:", text: "Working side by side with clients as trusted partners." }
        ]
      }
    },
    blogsPage: {
      hero: {
        subtitle: "Practical insights from consultants and analysts on what actually moves the needle."
      },
      latestInsights: {
        title: "Latest Insights",
        subtitle: "Read our latest thoughts on optimization, strategy, and data analytics."
      },
      list: {
        readMore: "Read More",
        noBlogs: "No blogs available yet. Please add some from the admin dashboard."
      },
      detail: {
        article: "Article",
        backToBlogs: "Back to all blogs"
      }
    },
    servicesPage: {
      hero: {
        title: "OUR SERVICES",
        subtitle: "Practical insights from consultants and analysts on what actually moves the needle.",
        breadcrumbsHome: "Home",
        breadcrumbsServices: "Services"
      },
      cards: {
        readMore: "Read More",
        items: [
          {
            title: "Business Modeling & Strategy",
            features: [
              "Scalable, profit-focused business models.",
              "Streamlined operations and cost control.",
              "Clear revenue and margin insights that guide smarter decisions.",
              "Risk forecasting with Monte Carlo simulations.",
              "Automated reporting and execution planning."
            ]
          },
          {
            title: "Decision Optimization",
            features: [
              "Turn decisions into a repeatable, high-ROI engine.",
              "Optimize resources, schedules, and capacity.",
              "Design efficient supply chain networks.",
              "Solve logistics trade-offs across locations.",
              "Advanced tools for allocation and transportation."
            ]
          },
          {
            title: "Financial Modeling",
            features: [
              "Make decisions with confidence using robust simulations.",
              "Evaluate markets, pricing, and cost structures.",
              "Plan cash flow and amortization effectively.",
              "Explore scenarios for expansions and investments.",
              "Strategic modeling for smarter financial decisions."
            ]
          },
          {
            title: "Analytics",
            features: [
              "Turn data into actionable decisions that drive real results.",
              "Align KPIs and modernize BI systems for smarter performance.",
              "Break silos with unified data dashboards.",
              "Forecast demand and financial trends.",
              "Deliver predictive analytics for smarter strategy."
            ]
          },
          {
            title: "Churn Analysis",
            features: [
              "Identify at-risk customers early and improve retention.",
              "Understand key churn drivers to reduce customer loss.",
              "Design targeted retention strategies to keep customers engaged.",
              "Use risk scoring and customer segmentation.",
              "Execute retention playbooks and dashboards."
            ]
          },
          {
            title: "Monte Carlo Simulation",
            features: [
              "Quantify uncertainty with realistic scenario modeling.",
              "Understand risk exposure and probability-weighted outcomes.",
              "Simulate thousands of scenarios to guide confident decisions.",
              "Stress-test business models under variable conditions.",
              "Ongoing monitoring, sensitivity analysis, and scenario updates."
            ]
          }
        ]
      }
    },
    servicesDetails: {
      "businessModeling": {
            "heroBreadcrumb": "Business Modeling",
            "title": "Business Modeling",
            "subtitle": "Architect scalable, profit-focused business models",
            "whoItsForTitle": "Who it's for",
            "whoItsForText": "Leaders redesigning operations, pricing, or product portfolios; teams pursuing growth with margin discipline.",
            "challengesTitle": "Challenges we solve",
            "challenges": [
                  "Inefficient processes and rising costs",
                  "Unclear revenue/margin levers",
                  "Investment and expansion uncertainty (risk)"
            ],
            "whatWeDeliverTitle": "What we deliver",
            "whatWeDeliver": [
                  "Operations Strategy & Process Optimization",
                  "Revenue Growth & Profitability Strategy",
                  "Monte Carlo Simulation & Risk Management",
                  "Automated reporting packs and executive views",
                  "Project management plan for execution"
            ]
      },
      "decisionOptimization": {
            "heroBreadcrumb": "Decision Optimization",
            "title": "Decision Optimization",
            "subtitle": "Turn complex trade-offs into repeatable, high-ROI choices",
            "whoItsForTitle": "Who it's for",
            "whoItsForText": "Supply chain managers, operations directors, and planners needing to maximize capacity or reduce logistics costs.",
            "challengesTitle": "Challenges we solve",
            "challenges": [
                  "Wasted resources and idle capacity",
                  "Costly or slow distribution networks",
                  "Difficulty balancing competing objectives (e.g., speed vs. cost)"
            ],
            "whatWeDeliverTitle": "What we deliver",
            "whatWeDeliver": [
                  "Supply Chain Network Design",
                  "Production & Workforce Scheduling",
                  "Transportation & Routing Optimization",
                  "Capacity Planning & Allocation",
                  "Custom optimization models (Linear/Integer Programming)"
            ]
      },
      "financialModeling": {
            "heroBreadcrumb": "Financial Modeling",
            "title": "Financial Modeling",
            "subtitle": "Evaluate markets, price dynamically, and plan cash flow with precision",
            "whoItsForTitle": "Who it's for",
            "whoItsForText": "CFOs, investors, and founders needing robust models for M&A, fundraising, or strategic pivots.",
            "challengesTitle": "Challenges we solve",
            "challenges": [
                  "Uncertain ROI on new investments",
                  "Inflexible, error-prone spreadsheets",
                  "Lack of visibility into cash flow runways"
            ],
            "whatWeDeliverTitle": "What we deliver",
            "whatWeDeliver": [
                  "3-Statement Financial Models",
                  "Scenario & Sensitivity Analysis",
                  "Valuation & M&A Modeling",
                  "Dynamic Pricing & Revenue Forecasting",
                  "Capital Allocation & Amortization Schedules"
            ]
      },
      "analytics": {
            "heroBreadcrumb": "Analytics",
            "title": "Analytics",
            "subtitle": "Break silos and turn raw data into strategic foresight",
            "whoItsForTitle": "Who it's for",
            "whoItsForText": "Executives and managers overwhelmed by data but starved for clear, actionable insights.",
            "challengesTitle": "Challenges we solve",
            "challenges": [
                  "Fragmented data across different systems",
                  "Backward-looking reports instead of forward-looking predictions",
                  "Misaligned KPIs across departments"
            ],
            "whatWeDeliverTitle": "What we deliver",
            "whatWeDeliver": [
                  "Unified BI Dashboards (Power BI, Tableau)",
                  "KPI Alignment & Metric Design",
                  "Predictive Analytics & Demand Forecasting",
                  "Customer Segmentation & Lifetime Value (CLV)",
                  "Data Infrastructure Assessment"
            ]
      },
      "churnAnalysis": {
            "heroBreadcrumb": "Churn Analysis",
            "title": "Churn Analysis",
            "subtitle": "Identify at-risk customers early and improve retention",
            "whoItsForTitle": "Who it's for",
            "whoItsForText": "Customer success teams, product managers, and marketers focused on reducing customer loss and increasing lifetime value.",
            "challengesTitle": "Challenges we solve",
            "challenges": [
                  "High customer turnover with unknown causes",
                  "Inability to spot warning signs before cancellation",
                  "Ineffective, one-size-fits-all retention campaigns"
            ],
            "whatWeDeliverTitle": "What we deliver",
            "whatWeDeliver": [
                  "Churn Driver Identification",
                  "Predictive Risk Scoring Models",
                  "Customer Segmentation by Risk Profile",
                  "Targeted Retention Strategies & Playbooks",
                  "Ongoing Monitoring Dashboards"
            ]
      },
      "monteCarlo": {
            "heroBreadcrumb": "Monte Carlo Simulation",
            "title": "Monte Carlo Simulation",
            "subtitle": "Quantify uncertainty and make decisions with confidence",
            "whoItsForTitle": "Who it's for",
            "whoItsForText": "Risk managers, project planners, and strategic leaders navigating highly variable markets or complex project timelines.",
            "challengesTitle": "Challenges we solve",
            "challenges": [
                  "Relying on flawed \"single-point\" estimates (e.g., \"it will take exactly 6 months\")",
                  "Hidden risks in supply chains or financial forecasts",
                  "Inability to test how multiple variables interact simultaneously"
            ],
            "whatWeDeliverTitle": "What we deliver",
            "whatWeDeliver": [
                  "Probability-Weighted Financial Forecasts",
                  "Project Risk & Schedule Simulations",
                  "Supply Chain Stress Testing",
                  "Sensitivity Analysis (identifying the most critical variables)",
                  "Scenario Planning & Mitigation Strategies"
            ]
      }
    },
    portfolioPage: {
      hero: {
        title: "Our Portfolio",
        subtitle: "Real-world impact. See how we transform operational complexity into measurable growth.",
        breadcrumbsHome: "Home",
        breadcrumbsPortfolio: "Portfolio"
      },
      projects: {
        mezan: {
          title: "Mezan Beverages (Cola Next)",
          subtitle: "Route-to-Market & FMCG Supply Chain Optimization Engine",
          overview: "As one of Pakistan's prominent domestic beverage producers, scaling national operations requires managing extreme demand volatility, regional logistics friction, and high-frequency retail replenishment. To transition from reactive dispatching to high-efficiency distribution planning, an integrated Demand Forecasting & Route-to-Market Optimization Framework was architected. By harmonizing distributor sales logs, secondary order data, and regional bottling constraints, the solution delivers accurate production scheduling and minimizes trade stockouts across tier-1 cities and rural distribution corridors.",
          methodologyTitle: "Core Engineering & Methodology",
          methodologyList: [
            "**High-Resolution Secondary Demand Forecasting**: Built multi-tier regression and time-series pipelines incorporating distributor order history, regional temperature shifts, festival demand spikes, and promotional uplift.",
            "**Distributor Route & Fleet Allocation**: Formulated vehicle routing and load-optimization models to maximize truck utilization across plant-to-depot and depot-to-distributor transit.",
            "**Returnable Glass Bottle (RGB) & PET Cycle Tracking**: Modeled reverse logistics loops and dynamic buffer thresholds for returnable glass packaging and raw preforms.",
            "**Trade Inventory Balancing**: Designed automated buffer stock calculation models across regional transit hubs to maintain high distributor service levels."
          ],
          techStackTitle: "Frameworks & Architecture",
          techStack: "Data ingestion pipelines and transaction harmonization were engineered using Python (Polars, Pandas). Advanced time-series forecasting utilized LightGBM, XGBoost, and Statsmodels. Fleet routing optimization was solved via linear and mixed-integer programming using SciPy Optimize and PuLP.",
          impactTitle: "Business & Decision Impact",
          impact: "Transformed distribution logistics into an agile, data-driven supply chain network. The platform curtailed localized out-of-stock events during peak seasonal periods, boosted vehicle fleet capacity utilization, and provided commercial leadership with a mathematically sound foundation for regional market expansion."
        },
        bayer: {
          title: "Bayer Pharmaceuticals",
          subtitle: "Stochastic Scenario Simulation & Clinical Decision Modeling Engine",
          overview: "Late-stage pharmaceutical research operates under severe operational and biological volatility. Unforeseen patient dropout rates, non-linear safety signals, and supply chain disruptions can result in multimillion-dollar budget overruns. To provide clinical leadership with proactive risk intelligence, an advanced Stochastic Scenario Simulation & Decision Engine was architected, executing thousands of parallel trial iterations to evaluate protocol feasibility and risk boundaries prior to site activation.",
          methodologyTitle: "Core Engineering & Methodology",
          methodologyList: [
            "**Monte Carlo Trial Trajectory Simulation**: Designed a stochastic simulation framework executing 10,000+ iterations per trial protocol to project patient enrollment curves and dropout distributions.",
            "**Adverse Event & Safety Signal Testing**: Simulated synthetic patient cohorts to stress-test statistical detection thresholds for rare adverse events.",
            "**Dynamic Protocol Amendment & Stress Testing**: Built scenario-modeling modules enabling clinical directors to test operational variables and observe downstream statistical power and cost impacts in real time.",
            "**Supply Chain & IMP Demand Simulation**: Modeled global investigational drug inventory flows against variable patient recruitment rates."
          ],
          techStackTitle: "Frameworks & Architecture",
          techStack: "Core simulation algorithms were developed in Python (NumPy, SciPy, SimPy) alongside R for high-speed statistical sampling. Data ingestion from historical trial repositories was handled via SQL-driven ETL pipelines adhering to CDISC standards. Outputs were deployed into an interactive scenario dashboard for executive review boards.",
          impactTitle: "Business & Decision Impact",
          impact: "Replaced static, single-point trial planning spreadsheets with a probabilistic decision-intelligence platform. Empowered clinical development teams to de-risk trial protocols before execution, optimize site allocation, reduce drug waste, and safeguard timelines against critical bottlenecks."
        }
      }
    }
  }),
  pt: () => Promise.resolve({
    hero: {
      title: "Otimize Além dos Limites",
      description: "Capacitando organizações através de estratégias baseadas em dados, simulações avançadas e resultados mensuráveis.",
      getStarted: "Começar",
      ourServices: "Nossos Serviços"
    },
    about: {
      sectionTitle: "SOBRE NÓS",
      subtitle: "Ajudamos empresas a transformar desafios complexos em oportunidades de crescimento.",
      heading: "Transformamos complexidade operacional em clareza e crescimento",
      description: "Na ZJ Logix, ajudamos empresas a transformar desafios complexos em oportunidades de crescimento. Ao combinar estratégias inovadoras com análises e modelagens avançadas, capacitamos as organizações a tomar decisões mais inteligentes e conscientes dos riscos. Veja por que organizações líderes escolhem trabalhar conosco:",
      bullet1: "Histórico comprovado de entrega de ROI mensurável",
      bullet2: "Expertise em diversos setores e mercados",
      bullet3: "Estratégias personalizadas para os desafios específicos do seu negócio",
      readMore: "Leia mais >"
    },
    services: {
      sectionTitle: "SERVIÇOS",
      subtitle: "Otimização, simulação, análises e estratégia – construídos para entregar ROI.",
      service1Title: "Modelagem de Negócios",
      service1Desc: "Desenvolvendo modelos de negócios robustos para crescimento",
      service2Title: "Otimização de Decisões",
      service2Desc: "Resolvendo problemas complexos para melhores escolhas estratégicas",
      service3Title: "Modelagem Financeira",
      service3Desc: "Decisões com confiança — baseadas em simulações financeiras robustas",
      viewAll: "Ver todos os Serviços >"
    },
    blogs: {
      sectionTitle: "BLOGS",
      subtitle: "Otimização, simulação, análises e estratégia – construídos para entregar ROI.",
      blog1Title: "Melhores Práticas de Modelagem Financeira",
      blog1Desc: "Técnicas essenciais para construir modelos financeiros robustos que geram melhores resultados de negócios.",
      blog2Title: "Aproveitando Dados para Tomada de Decisão Estratégica",
      blog2Desc: "Impulsionando a transformação dos negócios para criar em diversos campos de oportunidades e crescimento.",
      readMore: "Leia mais \u2192",
      viewAll: "Ver todos os Blogs >"
    },
    testimonials: {
      sectionTitle: "DEPOIMENTOS",
      subtitle: "Resultados e relacionamentos que fazem os clientes voltarem.",
      list: [
        {
          text: "A ZJ Logix transformou nossa estratégia de dados completamente. Suas análises nos ajudaram a aumentar a receita em 40% em apenas seis meses. A equipe é profissional, experiente e entrega resultados mensuráveis de forma consistente.",
          name: "Sarah Johnson",
          title: "CEO na TechCorp Solutions",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7d26ea64f4fc948894.webp"
        },
        {
          text: "A expertise em modelagem financeira da ZJ Logix é excepcional. Eles nos ajudaram a otimizar a alocação de capital e reduzir os custos operacionais em 25%, com um impacto direto na rentabilidade.",
          name: "Michael Chen",
          title: "CFO na FinanceFlow Inc",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7d0a7fd19b8238e725.webp"
        },
        {
          text: "Trabalhar com a ZJ Logix mudou o jogo das nossas operações da cadeia de suprimentos. Sua abordagem baseada em dados reduziu os tempos de entrega em 30% e melhorou significativamente a satisfação do cliente.",
          name: "Emily Rodriguez",
          title: "Diretora de Operações na LogiChain Global",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7d212dfc2917bc1e58.webp"
        },
        {
          text: "A ZJ Logix forneceu insights estratégicos que foram fundamentais para nossa expansão de mercado. Suas capacidades de modelagem de negócios são de primeira linha e é um prazer trabalhar com a equipe deles.",
          name: "David Thompson",
          title: "VP de Estratégia na GrowthMax Enterprises",
          image: "https://storage.googleapis.com/msgsndr/FvYZfLVlit3Fj7f39f8X/media/69834c7e18c3356cae20c7ba.webp"
        }
      ]
    },
    whyChooseUs: {
      sectionTitle: "POR QUE NOS ESCOLHER",
      subtitle: "Resultados comprovados, métodos rigorosos e execução de ponta a ponta.",
      stat1: "Satisfação do Cliente",
      stat2: "Crescimento de Receita",
      stat3: "Custo Operacional",
      stat4: "Projetos Concluídos",
      stat5: "Anos de Confiança"
    },
    faqs: {
      sectionTitle: "Perguntas Frequentes",
      subtitle: "Respostas rápidas sobre escopo, processo, preços, dados e cronogramas.",
      list: [
        {
          question: "Quais serviços a ZJ Logix oferece?",
          answer: "A ZJ Logix é especializada em análise de dados, inteligência de negócios, modelagem financeira e consultoria estratégica. Ajudamos empresas a tomar decisões baseadas em dados por meio de análises avançadas e soluções personalizadas."
        },
        {
          question: "Quanto tempo leva um projeto típico?",
          answer: "Os cronogramas do projeto variam de acordo com a complexidade e o escopo. A maioria dos projetos de análise leva de 2 a 4 semanas, enquanto implementações abrangentes de inteligência de negócios podem levar de 6 a 12 semanas. Fornecemos cronogramas detalhados durante nossa consulta inicial."
        },
        {
          question: "Com quais fontes de dados você trabalha?",
          answer: "Trabalhamos com diversas fontes de dados, incluindo ERP, CRM, sistemas financeiros, operacionais, de cadeia de suprimentos e de marketing. Também integramos dados de IoT, bancos de dados em nuvem, resultados de pesquisas, análises da web e APIs de terceiros para fornecer insights abrangentes e baseados em dados."
        },
        {
          question: "Como você garante a segurança dos dados?",
          answer: "A segurança dos dados é nossa principal prioridade. Seguimos as melhores práticas do setor, incluindo criptografia, transmissão segura de dados, controles de acesso e conformidade com regulamentos relevantes. Todos os membros da equipe assinam NDAs e passam por treinamento de segurança."
        },
        {
          question: "Você pode ajudar com suporte contínuo?",
          answer: "Com certeza! Oferecemos suporte contínuo e serviços de manutenção para garantir que suas soluções de análise continuem a agregar valor. Isso inclui monitoramento do sistema, atualizações, treinamento de usuários e orientação estratégica."
        },
        {
          question: "O que torna a ZJ Logix diferente?",
          answer: "Nossa equipe combina profunda experiência técnica com perspicácia nos negócios. Não construímos apenas soluções - garantimos que elas gerem valor comercial real. Nossa abordagem é colaborativa, transparente e focada em seu sucesso a longo prazo."
        }
      ]
    },
    contact: {
      sectionTitle: "FALE CONOSCO",
      subtitle: "",
      contactItems: [
        { icon: 'address' as const, title: 'ZJ Logix Brasil', lines: ['Rio de Janeiro'] },
        { icon: 'email' as const, title: 'Gilberto Serodio', lines: ['gilbertos@zjlogix.com'] }
      ],
      namePlaceholder: "Seu Nome*",
      emailPlaceholder: "Seu Email*",
      subjectPlaceholder: "Assunto*",
      messagePlaceholder: "Mensagem*",
      sendButton: "Enviar Mensagem"
    },
    booking: {
      title: "Pronto para Otimizar o Seu Negócio?",
      subtitle: "Transforme insights em impacto. Nossos especialistas estão aqui para ajudá-lo a reduzir custos, impulsionar o crescimento e tomar decisões mais inteligentes com base em dados. Vamos projetar uma estratégia adaptada aos seus objetivos de negócios."
    },
    footer: {
      description: "Inovando o cenário digital com soluções elegantes e serviços atemporais.",
      company: "Empresa",
      aboutUs: "Sobre nós",
      whyChooseUs: "Por Que Nos Escolher",
      testimonials: "Depoimentos",
      services: "Serviços",
      businessModeling: "Modelagem de Negócios",
      decisionOptimization: "Otimização de Decisões",
      financialModeling: "Modelagem Financeira",
      analytics: "Análises",
      churnAnalysis: "Análise de Churn",
      monteCarlo: "Simulação de Monte Carlo",
      support: "Suporte",
      memberFaq: "FAQ de Membros",
      contactUs: "Contate-nos",
      portfolio: "Portfólio",
      allRightsReserved: "Todos os direitos reservados.",
      developedBy: "Desenvolvido por"
    },
    navbar: {
      home: "Início",
      aboutUs: "Sobre Nós",
      services: "Serviços",
      businessModeling: "Modelagem de Negócios",
      decisionOptimization: "Otimização de Decisões",
      financialModeling: "Modelagem Financeira",
      analytics: "Análises",
      churnAnalysis: "Análise de Churn",
      monteCarlo: "Simulação Monte Carlo",
      blogs: "Blogs",
      portfolio: "Portfólio",
      contactUs: "Contate-nos",
      bookConsultation: "Agende uma consulta gratuita"
    },
    aboutPage: {
      hero: {
        title: "Sobre Nós",
        subtitle: "Impulsionando o crescimento mensurável por meio de dados, estratégia e inovação.",
        breadcrumbsHome: "Início",
        breadcrumbsAbout: "Sobre Nós"
      },
      story: {
        sectionTitle: "NOSSA HISTÓRIA",
        heading: "Começamos com a visão\nde tornar a consultoria mensurável e\nimpactante.",
        p1: "Fundada com a visão de tornar as decisões de negócios mais inteligentes e rápidas, a ZJ Logix foi construída com a ideia de que os dados são a nova vantagem competitiva. Ao contrário da consultoria tradicional, que muitas vezes para nas recomendações, vamos além, construindo modelos, simulações e painéis que capacitam os líderes a agir com confiança.",
        p2: "Ao longo dos anos, trabalhamos com organizações de todos os tamanhos, desde startups ágeis até empresas globais, ajudando-as a desbloquear a eficiência, acelerar o crescimento e preparar suas estratégias para o futuro."
      },
      mission: {
        sectionTitle: "NOSSA MISSÃO",
        heading: "Ajudamos as empresas a crescerem de forma mais inteligente com estratégias baseadas em dados.",
        p1: "Capacitar as organizações com as ferramentas, insights e estratégias necessárias para otimizar operações, minimizar riscos e maximizar oportunidades, transformando a complexidade em clareza e a estratégia em sucesso mensurável."
      },
      whatWeDo: {
        sectionTitle: "O QUE FAZEMOS",
        heading: "Transformamos desafios complexos\nem oportunidades de crescimento",
        p1: "Ajudamos as organizações a transformar as operações em motores de crescimento, combinando tecnologia avançada, metodologias comprovadas e profunda experiência em negócios.",
        btn: "Ver Serviços",
        items: [
          { title: "Modelagem de Negócios:", text: "Processos lean, estratégias de crescimento de receita e gerenciamento de riscos." },
          { title: "Otimização de Decisões:", text: "Design da cadeia de suprimentos, logística e alocação de recursos." },
          { title: "Modelagem Financeira:", text: "Planejamento de cenários estratégicos e análise de amortização." },
          { title: "Análises:", text: "KPIs, painéis, insights preditivos e transformação digital." },
          { title: "Análise de Churn:", text: "Identificação e retenção de clientes de alto valor." },
          { title: "Anotação de Dados:", text: "Rotulagem confiável para resultados de aprendizado de máquina." }
        ]
      },
      vision: {
        sectionTitle: "NOSSA VISÃO",
        heading: "Imaginamos um futuro onde cada decisão é clara e precisa.",
        p1: "Um mundo onde cada decisão de negócios é apoiada por análises de precisão, permitindo que as organizações cresçam de forma sustentável e criem um impacto duradouro."
      },
      values: {
        sectionTitle: "NOSSOS VALORES",
        heading: "O que defendemos",
        items: [
          { title: "Integridade:", text: "Transparente e ético em cada engajamento." },
          { title: "Inovação:", text: "Aproveitando ferramentas e métodos avançados para resultados inovadores." },
          { title: "Impacto:", text: "Focado em resultados mensuráveis e sustentáveis." },
          { title: "Colaboração:", text: "Trabalhando lado a lado com os clientes como parceiros de confiança." }
        ]
      }
    },
    blogsPage: {
      hero: {
        subtitle: "Insights práticos de consultores e analistas sobre o que realmente faz a diferença."
      },
      latestInsights: {
        title: "Últimos Insights",
        subtitle: "Leia nossos pensamentos mais recentes sobre otimização, estratégia e análise de dados."
      },
      list: {
        readMore: "Leia Mais",
        noBlogs: "Nenhum blog disponível ainda. Por favor, adicione alguns pelo painel de administração."
      },
      detail: {
        article: "Artigo",
        backToBlogs: "Voltar para todos os blogs"
      }
    },
    servicesPage: {
      hero: {
        title: "NOSSOS SERVIÇOS",
        subtitle: "Insights práticos de consultores e analistas sobre o que realmente faz a diferença.",
        breadcrumbsHome: "Início",
        breadcrumbsServices: "Serviços"
      },
      cards: {
        readMore: "Leia Mais",
        items: [
          {
            title: "Modelagem de Negócios e Estratégia",
            features: [
              "Modelos de negócios escaláveis e focados no lucro.",
              "Operações simplificadas e controle de custos.",
              "Insights claros sobre receita e margem que orientam decisões mais inteligentes.",
              "Previsão de riscos com simulações de Monte Carlo.",
              "Relatórios automatizados e planejamento de execução."
            ]
          },
          {
            title: "Otimização de Decisões",
            features: [
              "Transforme decisões em um mecanismo repetível e de alto ROI.",
              "Otimize recursos, cronogramas e capacidade.",
              "Projete redes eficientes de cadeia de suprimentos.",
              "Resolva trade-offs de logística em diferentes locais.",
              "Ferramentas avançadas para alocação e transporte."
            ]
          },
          {
            title: "Modelagem Financeira",
            features: [
              "Tome decisões com confiança usando simulações robustas.",
              "Avalie mercados, preços e estruturas de custos.",
              "Planeje o fluxo de caixa e a amortização de forma eficaz.",
              "Explore cenários para expansões e investimentos.",
              "Modelagem estratégica para decisões financeiras mais inteligentes."
            ]
          },
          {
            title: "Análises",
            features: [
              "Transforme dados em decisões acionáveis que geram resultados reais.",
              "Alinhe KPIs e modernize sistemas de BI para um desempenho mais inteligente.",
              "Quebre silos com painéis de dados unificados.",
              "Preveja demanda e tendências financeiras.",
              "Ofereça análises preditivas para uma estratégia mais inteligente."
            ]
          },
          {
            title: "Análise de Churn",
            features: [
              "Identifique os clientes em risco precocemente e melhore a retenção.",
              "Entenda os principais impulsionadores da rotatividade para reduzir a perda de clientes.",
              "Desenvolva estratégias de retenção direcionadas para manter os clientes engajados.",
              "Use pontuação de risco e segmentação de clientes.",
              "Execute cartilhas e painéis de retenção."
            ]
          },
          {
            title: "Simulação de Monte Carlo",
            features: [
              "Quantifique a incerteza com modelagem de cenários realistas.",
              "Entenda a exposição ao risco e os resultados ponderados por probabilidade.",
              "Simule milhares de cenários para orientar decisões confiantes.",
              "Teste os modelos de negócios sob condições variáveis.",
              "Monitoramento contínuo, análise de sensibilidade e atualizações de cenários."
            ]
          }
        ]
      }
    },
    servicesDetails: {
      "businessModeling": {
            "heroBreadcrumb": "Modelagem de Negócios",
            "title": "Modelagem de Negócios Desenvolva modelos escaláveis e focados no lucro",
            "subtitle": "Desenvolva modelos de negócios escaláveis e focados no lucro",
            "whoItsForTitle": "Para quem é",
            "whoItsForText": "Líderes que estão redesenhando operações, preços ou portfólios de produtos; equipes que buscam crescimento com disciplina de margem.",
            "challengesTitle": "Desafios que resolvemos",
            "challenges": [
                  "Processos ineficientes e custos crescentes",
                  "Alavancas de receita/margem pouco claras",
                  "Incerteza sobre investimentos e expansão (risco)"
            ],
            "whatWeDeliverTitle": "O que entregamos",
            "whatWeDeliver": [
                  "Estratégia de Operações e Otimização de Processos",
                  "Crescimento de Receita e Estratégia de Rentabilidade",
                  "Simulação de Monte Carlo e Gestão de Riscos",
                  "Pacotes de relatórios automatizados e visões executivas",
                  "Plano de gerenciamento de projetos para execução"
            ]
      },
      "decisionOptimization": {
            "heroBreadcrumb": "Otimização de Decisões",
            "title": "Otimização de Decisões Transforme escolhas complexas em decisões de alto ROI",
            "subtitle": "Transforme escolhas complexas em decisões repetíveis e de alto ROI",
            "whoItsForTitle": "Para quem é",
            "whoItsForText": "Gestores de cadeia de suprimentos, diretores de operações e planejadores que precisam maximizar a capacidade ou reduzir custos logísticos.",
            "challengesTitle": "Desafios que resolvemos",
            "challenges": [
                  "Recursos desperdiçados e capacidade ociosa",
                  "Redes de distribuição lentas ou caras",
                  "Dificuldade em equilibrar objetivos concorrentes (ex: velocidade vs. custo)"
            ],
            "whatWeDeliverTitle": "O que entregamos",
            "whatWeDeliver": [
                  "Design de Rede da Cadeia de Suprimentos",
                  "Programação de Produção e Força de Trabalho",
                  "Otimização de Transporte e Roteamento",
                  "Planejamento e Alocação de Capacidade",
                  "Modelos de otimização personalizados (Programação Linear/Inteira)"
            ]
      },
      "financialModeling": {
            "heroBreadcrumb": "Modelagem Financeira",
            "title": "Modelagem Financeira Avalie mercados e planeje fluxo de caixa com precisão",
            "subtitle": "Avalie mercados, defina preços dinamicamente e planeje fluxo de caixa com precisão",
            "whoItsForTitle": "Para quem é",
            "whoItsForText": "CFOs, investidores e fundadores que precisam de modelos robustos para M&A, captação de recursos ou mudanças estratégicas.",
            "challengesTitle": "Desafios que resolvemos",
            "challenges": [
                  "ROI incerto em novos investimentos",
                  "Planilhas inflexíveis e propensas a erros",
                  "Falta de visibilidade sobre o prazo do fluxo de caixa"
            ],
            "whatWeDeliverTitle": "O que entregamos",
            "whatWeDeliver": [
                  "Modelos Financeiros de 3 Demonstrações",
                  "Análise de Cenários e Sensibilidade",
                  "Modelagem de Valuation e M&A",
                  "Precificação Dinâmica e Previsão de Receitas",
                  "Alocação de Capital e Cronogramas de Amortização"
            ]
      },
      "analytics": {
            "heroBreadcrumb": "Análises",
            "title": "Análises Transforme dados brutos em visão estratégica",
            "subtitle": "Quebre silos e transforme dados brutos em visão estratégica",
            "whoItsForTitle": "Para quem é",
            "whoItsForText": "Executivos e gerentes sobrecarregados por dados, mas sem insights claros e acionáveis.",
            "challengesTitle": "Desafios que resolvemos",
            "challenges": [
                  "Dados fragmentados em sistemas diferentes",
                  "Relatórios baseados no passado em vez de previsões futuras",
                  "KPIs desalinhados entre departamentos"
            ],
            "whatWeDeliverTitle": "O que entregamos",
            "whatWeDeliver": [
                  "Painéis de BI Unificados (Power BI, Tableau)",
                  "Alinhamento de KPIs e Design de Métricas",
                  "Análise Preditiva e Previsão de Demanda",
                  "Segmentação de Clientes e Valor Vitalício (CLV)",
                  "Avaliação de Infraestrutura de Dados"
            ]
      },
      "churnAnalysis": {
            "heroBreadcrumb": "Análise de Churn",
            "title": "Análise de Churn Identifique clientes em risco cedo e melhore a retenção",
            "subtitle": "Identifique clientes em risco precocemente e melhore a retenção",
            "whoItsForTitle": "Para quem é",
            "whoItsForText": "Equipes de sucesso do cliente, gerentes de produto e profissionais de marketing focados em reduzir a perda de clientes.",
            "challengesTitle": "Desafios que resolvemos",
            "challenges": [
                  "Alta rotatividade de clientes com causas desconhecidas",
                  "Incapacidade de identificar sinais de alerta antes do cancelamento",
                  "Campanhas de retenção ineficazes e genéricas"
            ],
            "whatWeDeliverTitle": "O que entregamos",
            "whatWeDeliver": [
                  "Identificação de Impulsionadores de Churn",
                  "Modelos Preditivos de Pontuação de Risco",
                  "Segmentação de Clientes por Perfil de Risco",
                  "Estratégias e Manuais de Retenção Direcionados",
                  "Painéis de Monitoramento Contínuo"
            ]
      },
      "monteCarlo": {
            "heroBreadcrumb": "Simulação de Monte Carlo",
            "title": "Simulação de Monte Carlo Quantifique a incerteza e tome decisões",
            "subtitle": "Quantifique a incerteza e tome decisões com confiança",
            "whoItsForTitle": "Para quem é",
            "whoItsForText": "Gestores de risco, planejadores de projetos e líderes navegando em mercados altamente variáveis.",
            "challengesTitle": "Desafios que resolvemos",
            "challenges": [
                  "Confiar em estimativas falhas de um único ponto (ex: 'levará exatamente 6 meses')",
                  "Riscos ocultos em cadeias de suprimentos ou previsões financeiras",
                  "Incapacidade de testar como múltiplas variáveis interagem simultaneamente"
            ],
            "whatWeDeliverTitle": "O que entregamos",
            "whatWeDeliver": [
                  "Previsões Financeiras Ponderadas por Probabilidade",
                  "Simulações de Risco e Cronograma de Projetos",
                  "Testes de Estresse da Cadeia de Suprimentos",
                  "Análise de Sensibilidade (identificando as variáveis mais críticas)",
                  "Planejamento de Cenários e Estratégias de Mitigação"
            ]
      }
    },
    portfolioPage: {
      hero: {
        title: "Nosso Portfólio",
        subtitle: "Impacto no mundo real. Veja como transformamos a complexidade operacional em crescimento mensurável.",
        breadcrumbsHome: "Início",
        breadcrumbsPortfolio: "Portfólio"
      },
      projects: {
        mezan: {
          title: "Mezan Beverages (Cola Next)",
          subtitle: "Mecanismo de Otimização de Cadeia de Suprimentos FMCG e Route-to-Market",
          overview: "Como um dos principais produtores de bebidas do Paquistão, o dimensionamento das operações nacionais requer o gerenciamento da extrema volatilidade da demanda, do atrito logístico regional e do reabastecimento de varejo de alta frequência. Para fazer a transição do despacho reativo para o planejamento de distribuição de alta eficiência, foi desenvolvida uma Estrutura Integrada de Previsão de Demanda e Otimização de Route-to-Market. Ao harmonizar os registros de vendas dos distribuidores, os dados de pedidos secundários e as restrições regionais de engarrafamento, a solução oferece um cronograma de produção preciso e minimiza a falta de estoque comercial nas cidades de primeiro nível e nos corredores de distribuição rural.",
          methodologyTitle: "Engenharia Central e Metodologia",
          methodologyList: [
            "**Previsão de Demanda Secundária de Alta Resolução**: Criação de pipelines de regressão e série temporal em várias camadas, incorporando histórico de pedidos do distribuidor, mudanças regionais de temperatura, picos de demanda em festivais e aumento promocional.",
            "**Rota de Distribuidor e Alocação de Frota**: Formulação de modelos de roteamento de veículos e otimização de carga para maximizar a utilização de caminhões no trânsito planta a depósito e depósito a distribuidor.",
            "**Rastreamento de Ciclo de Garrafas de Vidro Retornáveis (RGB) e PET**: Modelagem de loops de logística reversa e limites dinâmicos de buffer para embalagens de vidro retornáveis e pré-formas brutas.",
            "**Balanceamento de Estoque Comercial**: Projeto de modelos automatizados de cálculo de estoque de buffer em hubs de trânsito regionais para manter altos níveis de serviço ao distribuidor."
          ],
          techStackTitle: "Frameworks e Arquitetura",
          techStack: "Os pipelines de ingestão de dados e a harmonização de transações foram projetados usando Python (Polars, Pandas). A previsão avançada de séries temporais utilizou LightGBM, XGBoost e Statsmodels. A otimização de roteamento de frota foi resolvida por meio de programação linear e inteira mista usando SciPy Optimize e PuLP.",
          impactTitle: "Impacto nos Negócios e Decisões",
          impact: "Transformou a logística de distribuição em uma rede de cadeia de suprimentos ágil e orientada por dados. A plataforma reduziu os eventos de falta de estoque localizados durante os períodos de pico sazonais, aumentou a utilização da capacidade da frota de veículos e forneceu à liderança comercial uma base matematicamente sólida para expansão do mercado regional."
        },
        bayer: {
          title: "Bayer Pharmaceuticals",
          subtitle: "Mecanismo de Simulação Estocástica de Cenários e Modelagem de Decisões Clínicas",
          overview: "A pesquisa farmacêutica em estágio final opera sob severa volatilidade operacional e biológica. Taxas imprevistas de abandono de pacientes, sinais de segurança não lineares e interrupções na cadeia de suprimentos podem resultar em estouros orçamentários multimilionários. Para fornecer inteligência de risco proativa à liderança clínica, um avançado Mecanismo de Simulação Estocástica de Cenários e Decisão foi arquitetado, executando milhares de iterações de ensaios paralelos para avaliar a viabilidade do protocolo e limites de risco antes da ativação do local.",
          methodologyTitle: "Engenharia Central e Metodologia",
          methodologyList: [
            "**Simulação de Trajetória de Ensaio de Monte Carlo**: Projeto de uma estrutura de simulação estocástica executando mais de 10.000 iterações por protocolo de ensaio para projetar curvas de inscrição de pacientes e distribuições de desistência.",
            "**Testes de Eventos Adversos e Sinais de Segurança**: Simulação de coortes sintéticas de pacientes para testar limites de detecção estatística para eventos adversos raros.",
            "**Alteração Dinâmica de Protocolo e Testes de Estresse**: Criação de módulos de modelagem de cenários que permitem aos diretores clínicos testar variáveis operacionais e observar os impactos estatísticos e de custo em tempo real.",
            "**Simulação de Cadeia de Suprimentos e Demanda de IMP**: Modelagem de fluxos globais de estoque de medicamentos experimentais em relação às taxas variáveis de recrutamento de pacientes."
          ],
          techStackTitle: "Frameworks e Arquitetura",
          techStack: "Os algoritmos de simulação principais foram desenvolvidos em Python (NumPy, SciPy, SimPy) juntamente com R para amostragem estatística de alta velocidade. A ingestão de dados de repositórios de ensaios históricos foi gerenciada por pipelines de ETL baseados em SQL, aderindo aos padrões CDISC. Os resultados foram implementados em um painel interativo de cenários para painéis de revisão executiva.",
          impactTitle: "Impacto nos Negócios e Decisões",
          impact: "Substituiu as planilhas estáticas de planejamento de ensaios de ponto único por uma plataforma probabilística de inteligência de decisão. Capacitou as equipes de desenvolvimento clínico a reduzir os riscos dos protocolos de ensaios antes da execução, otimizar a alocação do local, reduzir o desperdício de medicamentos e proteger os cronogramas contra gargalos críticos."
        }
      }
    }
  })
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

export const getDictionary = async (locale: string) => {
  return locale === 'pt' ? dictionaries.pt() : dictionaries.en();
};
