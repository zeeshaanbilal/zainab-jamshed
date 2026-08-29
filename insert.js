const fs = require('fs');

const data = fs.readFileSync('src/lib/getDictionary.ts', 'utf8');

const nfl = `
          nfl: {
            title: "National Football League (NFL)",
            subtitle: "Monte Carlo Simulation & Player Performance Analytics Engine",
            overview: "Standard projection models evaluate athletes in isolation, failing to capture the interconnected variance inherent in professional football. To solve this, a high-throughput Monte Carlo simulation framework was architected to simulate tens of thousands of game-state trajectories. By integrating multi-variable historical datasets and cross-player correlation matrices, the platform transforms uncertain game conditions into quantifiable probability distributions and actionable risk profiles.",
            methodologyTitle: "Core Engineering & Methodology",
            methodologyList: [
              "**Correlated Multivariate Modeling**: Formulated covariance and correlation engines to account for intra-team dependencies (e.g., QB-WR yardage coupling) and opponent defensive suppression, preventing skewed baseline estimates.",
              "**Stochastic Simulation Architecture**: Deployed Monte Carlo algorithms executing 10,000+ iterations per matchup to map full-range upside, floor risk, and outcome tail-probabilities across key performance indicators.",
              "**Proprietary Scaling & Normalization Engine**: Developed a unified scoring algorithm that normalizes heterogeneous position metrics onto a standardized scale, enabling cross-position performance parity analysis.",
              "**Dynamic Scenario & Risk Profiling**: Quantified outcome dispersion to provide decision-makers with confidence intervals, median expected value, and volatility indexes rather than static, single-point estimates."
            ],
            techStackTitle: "Frameworks & Architecture",
            techStack: "The high-throughput Monte Carlo simulation framework was developed using Python (NumPy, SciPy) for stochastic modeling and mathematical optimization.",
            impactTitle: "Business & Decision Impact",
            impact: "Replaced flat, error-prone projection spreadsheets with a mathematically rigorous decision-intelligence system. The platform delivers institutional-grade probabilistic forecasts, enabling analysts and executives to evaluate downside risk, target high-upside variance, and execute data-driven game planning."
          },`;

const cocaCola = `
          cocaCola: {
            title: "The Coca-Cola Company",
            subtitle: "Predictive Demand Forecasting & Supply Chain Optimization Engine",
            overview: "Global beverage supply chains face extreme operational variance driven by regional seasonality, promotional spikes, macroeconomic shifts, and raw material lead-time fluctuations. To eliminate costly stockouts and reduce finished-goods holding costs, a scalable Predictive Demand & Supply Chain Optimization Framework was developed. By consolidating disparate ERP datasets, point-of-sale (POS) data, and external market signals, the platform automates demand sensing and translates multi-tier constraints into deterministic replenishment schedules.",
            methodologyTitle: "Core Engineering & Methodology",
            methodologyList: [
              "**Hierarchical Time-Series Forecasting**: Built multi-level time-series algorithms reconciling top-down national demand targets with bottom-up SKU and bottling-plant forecasts, maintaining mathematical consistency across every operational tier.",
              "**Causal Feature Engineering & Demand Sensing**: Integrated exogenous factors—including localized weather patterns, retail promotional calendars, regional demographic trends, and distributor lead times—to capture non-linear demand shifts.",
              "**Safety Stock & Inventory Optimization**: Modeled service-level curves against supply lead-time volatility to calculate dynamic buffer stock levels, avoiding working-capital lockup while maintaining a 98%+ on-shelf availability target.",
              "**Scenario Planning & What-If Simulation**: Architected a simulation module allowing supply chain executives to model stress scenarios, such as sudden supplier disruptions, transportation bottleneck shifts, and raw ingredient price shocks."
            ],
            techStackTitle: "Frameworks, Tech Stack & Architecture",
            techStack: "The end-to-end data pipeline was constructed using Python (Pandas, Polars, and NumPy) for high-throughput data manipulation and automated data-cleaning workflows across millions of daily transactional records. Advanced time-series forecasting and regression modeling were implemented using Prophet, LightGBM, and Statsmodels, paired with Scikit-Learn for feature transformation and cross-validation pipelines. To solve constrained supply allocation and route-to-market distribution challenges, mathematical optimization was driven by linear and mixed-integer linear programming (MILP) using SciPy Optimize and PuLP. Data ingestion, warehouse orchestration, and transformation were managed through SQL and scalable ETL pipelines, with final analytical outputs and dynamic scenario simulators deployed via interactive enterprise executive dashboards.",
            impactTitle: "Business & Decision Impact",
            impact: "Replaced fragmented legacy spreadsheets with a unified, data-driven planning system. The solution drove measurable reductions in forecast error variance, curtailed localized stockouts during peak summer and holiday promotion periods, and unlocked significant working capital savings by optimizing warehouse holding thresholds."
          },`;

const bayerImpact = 'impact: "Replaced static, single-point trial planning spreadsheets with a probabilistic decision-intelligence platform. Empowered clinical development teams to de-risk trial protocols before execution, optimize site allocation, reduce drug waste, and safeguard timelines against critical bottlenecks."\n          }';

const bayerImpactPt = 'impact: "Substituiu as planilhas estáticas de planejamento de ensaios de ponto único por uma plataforma probabilística de inteligência de decisão. Capacitou as equipes de desenvolvimento clínico a reduzir os riscos dos protocolos de ensaios antes da execução, otimizar a alocação do local, reduzir o desperdício de medicamentos e proteger os cronogramas contra gargalos críticos."\n          }';

// Also normalize line endings for replace to work
let newData = data.replace(/\r\n/g, '\n');

newData = newData.replace(bayerImpact, bayerImpact + ",\n" + nfl + "\n" + cocaCola);
newData = newData.replace(bayerImpactPt, bayerImpactPt + ",\n" + nfl + "\n" + cocaCola); // just use english for now since no translation given

fs.writeFileSync('src/lib/getDictionary.ts', newData, 'utf8');
console.log('Done!');
