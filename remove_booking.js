const fs = require('fs');
const pages = [
  'src/app/[lang]/services/page.tsx',
  'src/app/[lang]/services/monte-carlo-simulation/page.tsx',
  'src/app/[lang]/services/financial-modeling/page.tsx',
  'src/app/[lang]/services/decision-optimization/page.tsx',
  'src/app/[lang]/services/churn-analysis/page.tsx',
  'src/app/[lang]/services/business-modeling/page.tsx',
  'src/app/[lang]/services/analytics/page.tsx',
  'src/app/[lang]/portfolio/page.tsx',
  'src/app/[lang]/page.tsx',
  'src/app/[lang]/blogs/[slug]/page.tsx',
  'src/app/[lang]/blogs/page.tsx',
  'src/app/[lang]/about/page.tsx'
];
pages.forEach(p => {
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/import BookingSection from ['"]@\/components\/BookingSection['"];?\n?/g, '');
  c = c.replace(/<BookingSection booking=\{dict\.booking\} \/>/g, '');
  c = c.replace(/<BookingSection booking=\{dict\.booking\} \/>\n?/g, '');
  fs.writeFileSync(p, c);
});
console.log('Done!');
