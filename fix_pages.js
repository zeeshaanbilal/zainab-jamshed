const fs = require('fs');
const files = [
  'src/app/[lang]/services/business-modeling/page.tsx',
  'src/app/[lang]/services/decision-optimization/page.tsx',
  'src/app/[lang]/services/financial-modeling/page.tsx',
  'src/app/[lang]/services/analytics/page.tsx',
  'src/app/[lang]/services/churn-analysis/page.tsx',
  'src/app/[lang]/services/monte-carlo-simulation/page.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('getDictionary')) {
    content = content.replace(/import Link from 'next\/link';/g, "import Link from 'next/link';\nimport { getDictionary } from '@/lib/getDictionary';");
    
    content = content.replace(/export default function ([A-Za-z0-9_]+)\(\) {/g, "export default async function $1({ params }: { params: { lang: string } | Promise<{ lang: string }> }) {\n  const resolvedParams = await Promise.resolve(params);\n  const dict = await getDictionary(resolvedParams.lang);");
    
    content = content.replace(/<BookingSection \/>/g, "<BookingSection booking={dict.booking} />");
    content = content.replace(/<Footer \/>/g, "<Footer footer={dict.footer} />");
    
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
