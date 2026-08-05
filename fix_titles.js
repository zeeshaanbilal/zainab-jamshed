const fs = require('fs');
let content = fs.readFileSync('src/lib/getDictionary.ts', 'utf8');

const services = {
  'Business Modeling': 'Architect scalable, profit-focused business models',
  'Decision Optimization': 'Turn complex trade-offs into repeatable, high-ROI choices',
  'Financial Modeling': 'Evaluate markets, price dynamically, and plan cash flow with precision',
  'Analytics': 'Align KPIs, modernize BI, and forecast demand',
  'Churn Analysis': 'Identify risks early and execute targeted retention',
  'Monte Carlo Simulation': 'Stress-test models and quantify uncertainty'
};

for (const [title, sub] of Object.entries(services)) {
  const full = title + ' ' + sub;
  content = content.replace(new RegExp('\"title\": \"' + full + '\"', 'g'), '\"title\": \"' + title + '\"');
}

fs.writeFileSync('src/lib/getDictionary.ts', content);
