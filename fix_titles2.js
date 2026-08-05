const fs = require('fs');
let content = fs.readFileSync('src/lib/getDictionary.ts', 'utf8');

const services = {
  'Analytics': 'Break silos and turn raw data into strategic foresight',
  'Churn Analysis': 'Identify at-risk customers early and improve retention',
  'Monte Carlo Simulation': 'Quantify uncertainty and make decisions with confidence'
};

const servicesPT = {
  'Modelagem de Negócios': 'Desenvolva modelos de negócios escaláveis e focados no lucro',
  'Otimização de Decisões': 'Transforme escolhas complexas em decisões repetíveis e de alto ROI',
  'Modelagem Financeira': 'Avalie mercados, defina preços dinamicamente e planeje fluxo de caixa com precisão',
  'Análises': 'Quebre silos e transforme dados brutos em visão estratégica',
  'Análise de Churn': 'Identifique clientes em risco precocemente e melhore a retenção',
  'Simulação de Monte Carlo': 'Quantifique a incerteza e tome decisões com confiança'
};

for (const [title, sub] of Object.entries(services)) {
  const full = title + ' ' + sub;
  content = content.replace(new RegExp('\"title\": \"' + full + '\"', 'g'), '\"title\": \"' + title + '\"');
}

for (const [title, sub] of Object.entries(servicesPT)) {
  const full = title + ' ' + sub;
  content = content.replace(new RegExp('\"title\": \"' + full + '\"', 'g'), '\"title\": \"' + title + '\"');
}

fs.writeFileSync('src/lib/getDictionary.ts', content);
