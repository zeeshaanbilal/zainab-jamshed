const fs = require('fs');
const files = [
  'src/app/[lang]/about/page.tsx',
  'src/app/[lang]/portfolio/page.tsx',
  'src/app/[lang]/services/page.tsx',
  'src/app/[lang]/services/monte-carlo-simulation/page.tsx',
  'src/app/[lang]/services/financial-modeling/page.tsx',
  'src/app/[lang]/services/churn-analysis/page.tsx',
  'src/app/[lang]/services/decision-optimization/page.tsx',
  'src/app/[lang]/services/analytics/page.tsx',
  'src/app/[lang]/services/business-modeling/page.tsx',
  'src/app/[lang]/page.tsx',
  'src/app/[lang]/blogs/page.tsx'
];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/alt="Glass Skyscraper"/g, 'alt="ZJ Logix Office"');
  fs.writeFileSync(f, content, 'utf8');
  console.log('Fixed: ' + f);
});
