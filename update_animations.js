const fs = require('fs');
const path = require('path');

const files = [
  'business-modeling',
  'decision-optimization',
  'financial-modeling',
  'analytics',
  'churn-analysis',
  'monte-carlo-simulation'
].map(f => path.join('c:/Users/billa/Desktop/zj/src/app/services', f, 'page.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(
    /\{\/\* Main Image \*\/\}\s*<div className="w-full flex justify-center mb-2\">\s*<div className="w-full max-w-\[700px\] rounded-\[16px\] overflow-hidden border border-gray-100 shadow-sm">/,
    `{/* Main Image */}
            <div className="w-full flex justify-center mb-2">
              <div className="w-full max-w-[700px] rounded-[16px] overflow-hidden border border-gray-100 shadow-sm opacity-0 animate-pop-in" style={{ animationDelay: '0.2s' }}>`
  );

  content = content.replace(
    /\{\/\* Title & Subtitle \*\/\}\s*<div>/,
    `{/* Title & Subtitle */}
              <div className="opacity-0 animate-slide-right" style={{ animationDelay: '0.4s' }}>`
  );

  content = content.replace(
    /\{\/\* Who it's for \*\/\}\s*<div>/,
    `{/* Who it's for */}
              <div className="opacity-0 animate-slide-left" style={{ animationDelay: '0.6s' }}>`
  );

  content = content.replace(
    /\{\/\* Challenges we solve \*\/\}\s*<div>/,
    `{/* Challenges we solve */}
              <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>`
  );

  content = content.replace(
    /\{\/\* What we deliver \*\/\}\s*<div>/,
    `{/* What we deliver */}
              <div className="opacity-0 animate-slide-up" style={{ animationDelay: '1.0s' }}>`
  );

  fs.writeFileSync(file, content);
});

console.log('Successfully updated animations in all 6 subpages.');
